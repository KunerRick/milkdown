import { createMark as q, createShortcut as k, createNode as L, pipe as Ae, createPlugin as ve, AtomList as Le } from "@milkdown/utils";
import { createCmdKey as I, createCmd as y, commandsCtx as xe, editorViewCtx as S, schemaCtx as R, getPalette as Ee, parserCtx as Se, serializerCtx as _e } from "@milkdown/core";
import { toggleMark as pe, wrapIn as ge, setBlockType as v } from "@milkdown/prose/commands";
import { expectDomTypeError as C, missingRootElement as $e } from "@milkdown/exception";
import { calculateTextPosition as Pe, cloneTr as Be, findSelectedNodeOfType as F, getNodeFromSchema as Re } from "@milkdown/prose";
import { PluginKey as H, TextSelection as Q, Plugin as T, NodeSelection as We, Selection as Ce } from "@milkdown/prose/state";
import { wrappingInputRule as K, textblockTypeInputRule as X, InputRule as Te } from "@milkdown/prose/inputrules";
import { Fragment as W } from "@milkdown/prose/model";
import { ReplaceStep as qe, AddMarkStep as Ke } from "@milkdown/prose/transform";
import { DecorationSet as A, Decoration as Z } from "@milkdown/prose/view";
import { splitListItem as Fe, sinkListItem as ze, liftListItem as je } from "@milkdown/prose/schema-list";
import Ue from "remark-inline-links";
import { visit as Ve } from "unist-util-visit";
const M = {
  HardBreak: "HardBreak",
  Blockquote: "Blockquote",
  BulletList: "BulletList",
  OrderedList: "OrderedList",
  CodeFence: "CodeFence",
  H1: "H1",
  H2: "H2",
  H3: "H3",
  H4: "H4",
  H5: "H5",
  H6: "H6",
  DowngradeHeading: "DowngradeHeading",
  Text: "Text",
  CodeInline: "CodeInline",
  Em: "Em",
  Bold: "Bold",
  NextListItem: "NextListItem",
  SinkListItem: "SinkListItem",
  LiftListItem: "LiftListItem"
}, he = "code_inline", ee = I("ToggleInlineCode"), Ge = q((l) => ({
  id: he,
  schema: () => ({
    priority: 100,
    code: !0,
    inclusive: !1,
    parseDOM: [{ tag: "code" }],
    toDOM: (e) => ["code", { class: l.getClassName(e.attrs, "code-inline") }],
    parseMarkdown: {
      match: (e) => e.type === "inlineCode",
      runner: (e, t, r) => {
        e.openMark(r), e.addText(t.value), e.closeMark(r);
      }
    },
    toMarkdown: {
      match: (e) => e.type.name === he,
      runner: (e, t, r) => {
        e.withMark(t, "inlineCode", r.text || "");
      }
    }
  }),
  commands: (e) => [
    y(ee, () => (t, r) => {
      const { selection: n, tr: a } = t;
      if (n.empty)
        return !1;
      const { from: o, to: s } = n;
      return t.doc.rangeHasMark(o, s, e) ? (r == null || r(a.removeMark(o, s, e)), !0) : (Object.keys(t.schema.marks).filter((u) => u !== e.name).map((u) => t.schema.marks[u]).forEach((u) => {
        a.removeMark(o, s, u);
      }), r == null || r(a.addMark(o, s, e.create())), !0);
    })
  ],
  shortcuts: {
    [M.CodeInline]: k(ee, "Mod-e")
  }
})), z = "em", te = I("ToggleItalic"), Ye = q((l) => ({
  id: z,
  schema: () => ({
    inclusive: !1,
    parseDOM: [
      { tag: "i" },
      { tag: "em" },
      { style: "font-style", getAttrs: (e) => e === "italic" }
    ],
    toDOM: (e) => ["em", { class: l.getClassName(e.attrs, z) }],
    parseMarkdown: {
      match: (e) => e.type === "emphasis",
      runner: (e, t, r) => {
        e.openMark(r), e.next(t.children), e.closeMark(r);
      }
    },
    toMarkdown: {
      match: (e) => e.type.name === z,
      runner: (e, t) => {
        e.withMark(t, "emphasis");
      }
    }
  }),
  commands: (e) => [y(te, () => pe(e))],
  shortcuts: {
    [M.Em]: k(te, "Mod-i")
  }
})), Je = new H("MILKDOWN_LINK_INPUT"), He = I("ToggleLink"), re = I("ModifyLink"), $ = "link", Qe = q((l, e) => ({
  id: $,
  schema: () => ({
    attrs: {
      href: {},
      title: { default: null }
    },
    parseDOM: [
      {
        tag: "a[href]",
        getAttrs: (t) => {
          if (!(t instanceof HTMLElement))
            throw C(t);
          return { href: t.getAttribute("href"), title: t.getAttribute("title") };
        }
      }
    ],
    toDOM: (t) => ["a", { ...t.attrs, class: l.getClassName(t.attrs, $) }],
    parseMarkdown: {
      match: (t) => t.type === "link",
      runner: (t, r, n) => {
        const a = r.url, o = r.title;
        t.openMark(n, { href: a, title: o }), t.next(r.children), t.closeMark(n);
      }
    },
    toMarkdown: {
      match: (t) => t.type.name === $,
      runner: (t, r) => {
        t.withMark(r, "link", void 0, {
          title: r.attrs.title,
          url: r.attrs.href
        });
      }
    }
  }),
  commands: (t) => [
    y(He, (r = "") => pe(t, { href: r })),
    y(re, (r = "") => (n, a) => {
      var N;
      if (!a)
        return !1;
      const { marks: o } = n.schema;
      let s, c = -1;
      const { selection: i } = n, { from: u, to: m } = i;
      if (n.doc.nodesBetween(u, u === m ? m + 1 : m, (b, x) => {
        var w;
        if ((w = o.link) != null && w.isInSet(b.marks))
          return s = b, c = x, !1;
      }), !s)
        return !1;
      const d = s.marks.find(({ type: b }) => b === t);
      if (!d)
        return !1;
      const f = c, p = c + s.nodeSize, { tr: g } = n, h = (N = o.link) == null ? void 0 : N.create({ ...d.attrs, href: r });
      return h ? (a(g.removeMark(f, p, d).addMark(f, p, h).setSelection(new Q(g.selection.$anchor)).scrollIntoView()), !0) : !1;
    })
  ],
  prosePlugins: (t, r) => {
    let n = !1;
    return [
      new T({
        key: Je,
        view: (a) => {
          var u, m, d;
          const o = l.themeManager.get("input-chip", {
            placeholder: (m = (u = e == null ? void 0 : e.input) == null ? void 0 : u.placeholder) != null ? m : "Input Web Link",
            buttonText: (d = e == null ? void 0 : e.input) == null ? void 0 : d.buttonText,
            onUpdate: (f) => {
              r.get(xe).call(re, f);
            },
            calculatePosition: (f, p) => {
              Pe(f, p, (g, h, N, b) => {
                const x = f.dom.parentElement;
                if (!x)
                  throw $e();
                const w = h.left - g.left;
                let O = g.left - b.left - (N.width - w) / 2, _ = g.bottom - b.top + 14 + x.scrollTop;
                return n && (_ = g.top - b.top - N.height - 14 + x.scrollTop), O < 0 && (O = 0), [_, O];
              });
            }
          });
          if (!o)
            return {};
          const s = (f) => {
            const { selection: p, doc: g } = f.state, { from: h, to: N } = p;
            if (!f.hasFocus())
              return !1;
            if (p.empty && p instanceof Q && N < g.content.size && h < g.content.size && g.rangeHasMark(h, h === N ? N + 1 : N, t))
              return n = !1, !0;
            if (p instanceof We) {
              const { node: b } = p;
              if (b.type.name === "image" && b.marks.findIndex((x) => x.type.name === $) > -1)
                return n = !0, !0;
            }
            return !1;
          }, c = (f) => {
            const { selection: p } = f.state;
            let g;
            const { from: h, to: N } = p;
            if (f.state.doc.nodesBetween(h, h === N ? N + 1 : N, (w) => {
              if (t.isInSet(w.marks))
                return g = w, !1;
            }), !g)
              return;
            const b = g.marks.find((w) => w.type === t);
            return b ? b.attrs.href : void 0;
          }, i = (f) => {
            if (!f.editable)
              return;
            s(f) ? (o.show(f), o.update(c(f))) : o.hide();
          };
          return o.init(a), i(a), {
            update: (f, p) => {
              (p == null ? void 0 : p.doc.eq(f.state.doc)) && p.selection.eq(f.state.selection) || requestAnimationFrame(() => {
                i(f);
              });
            },
            destroy: () => {
              o.destroy();
            }
          };
        }
      })
    ];
  }
})), j = "strong", ne = I("ToggleBold"), Xe = q((l) => ({
  id: j,
  schema: () => ({
    inclusive: !1,
    parseDOM: [
      { tag: "b" },
      { tag: "strong" },
      { style: "font-style", getAttrs: (e) => e === "bold" }
    ],
    toDOM: (e) => ["strong", { class: l.getClassName(e.attrs, j) }],
    parseMarkdown: {
      match: (e) => e.type === "strong",
      runner: (e, t, r) => {
        e.openMark(r), e.next(t.children), e.closeMark(r);
      }
    },
    toMarkdown: {
      match: (e) => e.type.name === j,
      runner: (e, t) => {
        e.withMark(t, "strong");
      }
    }
  }),
  commands: (e) => [y(ne, () => pe(e))],
  shortcuts: {
    [M.Bold]: k(ne, "Mod-b")
  }
})), Ze = [Ge(), Ye(), Xe(), Qe()], P = "blockquote", se = I("WrapInBlockquote"), et = L((l) => ({
  id: P,
  schema: () => ({
    content: "block+",
    group: "block",
    defining: !0,
    parseDOM: [{ tag: "blockquote" }],
    toDOM: (e) => ["blockquote", { class: l.getClassName(e.attrs, P) }, 0],
    parseMarkdown: {
      match: ({ type: e }) => e === P,
      runner: (e, t, r) => {
        e.openNode(r).next(t.children).closeNode();
      }
    },
    toMarkdown: {
      match: (e) => e.type.name === P,
      runner: (e, t) => {
        e.openNode("blockquote").next(t.content).closeNode();
      }
    }
  }),
  inputRules: (e) => [K(/^\s*>\s$/, e)],
  commands: (e) => [y(se, () => ge(e))],
  shortcuts: {
    [M.Blockquote]: k(se, "Mod-Shift-b")
  }
})), ae = I("WrapInBulletList"), tt = L((l) => {
  const e = "bullet_list";
  return {
    id: e,
    schema: () => ({
      content: "listItem+",
      group: "block",
      attrs: {
        spread: {
          default: !1
        }
      },
      parseDOM: [
        {
          tag: "ul",
          getAttrs: (t) => {
            if (!(t instanceof HTMLElement))
              throw C(t);
            return {
              spread: t.dataset.spread
            };
          }
        }
      ],
      toDOM: (t) => [
        "ul",
        {
          "data-spread": t.attrs.spread,
          class: l.getClassName(t.attrs, "bullet-list")
        },
        0
      ],
      parseMarkdown: {
        match: ({ type: t, ordered: r }) => t === "list" && !r,
        runner: (t, r, n) => {
          const a = r.spread != null ? `${r.spread}` : "false";
          t.openNode(n, { spread: a }).next(r.children).closeNode();
        }
      },
      toMarkdown: {
        match: (t) => t.type.name === e,
        runner: (t, r) => {
          t.openNode("list", void 0, { ordered: !1, spread: r.attrs.spread === "true" }).next(r.content).closeNode();
        }
      }
    }),
    inputRules: (t) => [K(/^\s*([-+*])\s$/, t)],
    commands: (t) => [y(ae, () => ge(t))],
    shortcuts: {
      [M.BulletList]: k(ae, "Mod-Alt-8")
    }
  };
}), rt = [
  "",
  "javascript",
  "typescript",
  "bash",
  "sql",
  "json",
  "html",
  "css",
  "c",
  "cpp",
  "java",
  "ruby",
  "python",
  "go",
  "rust",
  "markdown"
], nt = /^```(?<language>[a-z]*)?[\s\n]$/, st = /^~~~(?<language>[a-z]*)?[\s\n]$/, oe = I("TurnIntoCodeFence"), U = "fence", at = L((l, e) => {
  const t = (e == null ? void 0 : e.languageList) || rt;
  return {
    id: U,
    schema: (r) => ({
      content: "text*",
      group: "block",
      marks: "",
      defining: !0,
      code: !0,
      attrs: {
        language: {
          default: ""
        },
        fold: {
          default: !0
        }
      },
      parseDOM: [
        {
          tag: "div.code-fence-container",
          preserveWhitespace: "full",
          getAttrs: (n) => {
            var a;
            if (!(n instanceof HTMLElement))
              throw C(n);
            return { language: (a = n.querySelector("pre")) == null ? void 0 : a.dataset.language };
          },
          getContent: (n, a) => {
            var c, i;
            if (!(n instanceof HTMLElement))
              throw C(n);
            const o = (i = (c = n.querySelector("pre")) == null ? void 0 : c.textContent) != null ? i : "";
            if (!o)
              return W.empty;
            const s = a.text(o);
            return W.from(s);
          }
        },
        {
          tag: "pre",
          preserveWhitespace: "full",
          getAttrs: (n) => {
            if (!(n instanceof HTMLElement))
              throw C(n);
            return { language: n.dataset.language };
          }
        }
      ],
      toDOM: (n) => {
        const a = document.createElement("select");
        return t.forEach((o) => {
          const s = document.createElement("option");
          s.value = o, s.innerText = o || "--", o === n.attrs.language && (s.selected = !0), a.appendChild(s);
        }), a.onchange = (o) => {
          const s = o.target;
          if (!(s instanceof HTMLSelectElement))
            return;
          const c = r.get(S);
          if (!c.editable) {
            s.value = n.attrs.language;
            return;
          }
          const { top: i, left: u } = s.getBoundingClientRect(), m = c.posAtCoords({ top: i, left: u });
          if (!m)
            return;
          const { tr: d } = c.state;
          c.dispatch(d.setNodeMarkup(m.inside, void 0, {
            ...n.attrs,
            language: s.value
          }));
        }, [
          "div",
          {
            class: "code-fence-container"
          },
          a,
          [
            "pre",
            {
              "data-language": n.attrs.language,
              class: l.getClassName(n.attrs, "code-fence")
            },
            ["code", { spellCheck: "false" }, 0]
          ]
        ];
      },
      parseMarkdown: {
        match: ({ type: n }) => n === "code",
        runner: (n, a, o) => {
          const s = a.lang, c = a.value;
          n.openNode(o, { language: s }), c && n.addText(c), n.closeNode();
        }
      },
      toMarkdown: {
        match: (n) => n.type.name === U,
        runner: (n, a) => {
          var o;
          n.addNode("code", void 0, ((o = a.content.firstChild) == null ? void 0 : o.text) || "", {
            lang: a.attrs.language
          });
        }
      }
    }),
    inputRules: (r) => [
      X(nt, r, (n) => {
        const [a, o] = n;
        if (!!a)
          return { language: o };
      }),
      X(st, r, (n) => {
        const [a, o] = n;
        if (!!a)
          return { language: o };
      })
    ],
    commands: (r) => [y(oe, () => v(r))],
    shortcuts: {
      [M.CodeFence]: k(oe, "Mod-Alt-c")
    },
    view: () => (r, n, a) => {
      let o = r;
      const s = (g) => {
        const { tr: h } = n.state;
        n.dispatch(h.setNodeMarkup(a(), void 0, {
          fold: !0,
          language: g
        }));
      }, c = () => {
        const { tr: g } = n.state;
        n.dispatch(g.setNodeMarkup(a(), void 0, {
          ...o.attrs,
          fold: !0
        }));
      }, i = () => {
        const { tr: g } = n.state;
        n.dispatch(g.setNodeMarkup(a(), void 0, {
          ...o.attrs,
          fold: !1
        }));
      }, u = l.themeManager.get("code-fence", {
        onBlur: c,
        onFocus: i,
        onSelectLanguage: s,
        editable: () => n.editable,
        languageList: t
      });
      if (!u)
        return {};
      const { dom: m, contentDOM: d, onUpdate: f, onDestroy: p } = u;
      return f(o), {
        dom: m,
        contentDOM: d,
        update: (g) => g.type.name !== U ? !1 : (o = g, f(o), !0),
        destroy: p
      };
    }
  };
}), ot = L(() => ({
  id: "doc",
  schema: () => ({
    content: "block+",
    parseMarkdown: {
      match: ({ type: l }) => l === "root",
      runner: (l, e, t) => {
        l.injectRoot(e, t);
      }
    },
    toMarkdown: {
      match: (l) => l.type.name === "doc",
      runner: (l, e) => {
        l.openNode("root"), l.next(e.content);
      }
    }
  })
})), le = I("InsertHardbreak"), lt = new H("MILKDOWN_HARDBREAK_FILTER"), ct = L((l, e) => {
  var r;
  const t = (r = e == null ? void 0 : e.notIn) != null ? r : ["table", "fence"];
  return {
    id: "hardbreak",
    schema: () => ({
      inline: !0,
      group: "inline",
      selectable: !1,
      parseDOM: [{ tag: "br" }],
      toDOM: (n) => ["br", { class: l.getClassName(n.attrs, "hardbreak") }],
      parseMarkdown: {
        match: ({ type: n }) => n === "break",
        runner: (n, a, o) => {
          n.addNode(o);
        }
      },
      toMarkdown: {
        match: (n) => n.type.name === "hardbreak",
        runner: (n) => {
          n.addNode("break");
        }
      }
    }),
    commands: (n) => [
      y(le, () => (a, o) => {
        var i;
        const { selection: s, tr: c } = a;
        if (s.empty) {
          const u = s.$from.node();
          if (u.childCount > 0 && ((i = u.lastChild) == null ? void 0 : i.type.name) === "hardbreak")
            return o == null || o(c.replaceRangeWith(s.to - 1, s.to, a.schema.node("paragraph")).setSelection(Ce.near(c.doc.resolve(s.to))).scrollIntoView()), !0;
        }
        return o == null || o(c.setMeta("hardbreak", !0).replaceSelectionWith(n.create()).scrollIntoView()), !0;
      })
    ],
    shortcuts: {
      [M.HardBreak]: k(le, "Shift-Enter")
    },
    prosePlugins: (n) => [
      new T({
        key: lt,
        filterTransaction: (a, o) => {
          const s = a.getMeta("hardbreak"), [c] = a.steps;
          if (s && c) {
            const { from: i } = c, u = o.doc.resolve(i);
            let m = u.depth, d = !0;
            for (; m > 0; )
              t.includes(u.node(m).type.name) && (d = !1), m--;
            return d;
          }
          return !0;
        }
      }),
      new T({
        key: new H("MILKDOWN_HARDBREAK_MARKS"),
        appendTransaction: (a, o, s) => {
          if (!a.length)
            return;
          const [c] = a;
          if (!c)
            return;
          const [i] = c.steps;
          if (c.getMeta("hardbreak")) {
            if (!(i instanceof qe))
              return;
            const { from: d } = i;
            return s.tr.setNodeMarkup(d, n, void 0, []);
          }
          if (i instanceof Ke) {
            let d = s.tr;
            const { from: f, to: p } = i;
            return s.doc.nodesBetween(f, p, (g, h) => {
              g.type === n && (d = d.setNodeMarkup(h, n, void 0, []));
            }), d;
          }
        }
      })
    ]
  };
}), ke = Array(6).fill(0).map((l, e) => e + 1), D = I("TurnIntoHeading"), Me = I("DowngradeHeading"), V = new H("MILKDOWN_HEADING_ID"), it = new H("MILKDOWN_HEADING_HASH"), ut = (l) => l.textContent.replace(/[\p{P}\p{S}]/gu, "").replace(/\s/g, "-").toLowerCase().trim(), dt = (l, e, t) => {
  let r = !1;
  const n = (a, o) => {
    const s = a.tr.setMeta("addToHistory", !1);
    let c = !1;
    a.doc.descendants((i, u) => {
      if (i.type === e && !r) {
        if (i.textContent.trim().length === 0)
          return;
        const m = i.attrs, d = t(i);
        m.id !== d && (c = !0, s.setMeta(V, !0).setNodeMarkup(u, void 0, {
          ...m,
          id: d
        }));
      }
    }), c && o(s);
  };
  return new T({
    key: V,
    props: {
      handleDOMEvents: {
        compositionstart: () => (r = !0, !1),
        compositionend: () => {
          r = !1;
          const a = l.get(S);
          return setTimeout(() => {
            n(a.state, (o) => a.dispatch(o));
          }, 0), !1;
        }
      }
    },
    appendTransaction: (a, o, s) => {
      let c = null;
      return a.every((i) => !i.getMeta(V)) && a.some((i) => i.docChanged) && n(s, (i) => {
        c = i;
      }), c;
    },
    view: (a) => {
      const o = a.state.doc;
      let s = a.state.tr.setMeta("addToHistory", !1);
      return o.descendants((c, i) => {
        c.type.name === "heading" && c.attrs.level && (c.attrs.id || (s = s.setNodeMarkup(i, void 0, {
          ...c.attrs,
          id: t(c)
        })));
      }), a.dispatch(s), {};
    }
  });
}, ft = (l, e, t) => new T({
  key: it,
  state: {
    init: () => A.empty,
    apply: (r) => {
      var m;
      const n = l.get(S);
      if (!((m = n.hasFocus) != null && m.call(n)) || !n.editable)
        return A.empty;
      const { $from: a } = r.selection, o = a.node();
      if (o.type !== e)
        return A.empty;
      const s = o.attrs.level, c = (d) => Array(d).fill(0).map((f) => "#").join(""), i = document.createElement("span");
      i.textContent = c(s), i.contentEditable = "false", t.themeManager.onFlush(() => {
        const d = t.getStyle(({ css: f }) => {
          const p = Ee(t.themeManager);
          return f`
                            margin-right: 4px;
                            color: ${p("primary")};
                        `;
        });
        d && (i.className = d);
      });
      const u = Z.widget(a.before() + 1, i, { side: -1 });
      return A.create(r.doc, [u]);
    }
  },
  props: {
    handleDOMEvents: {
      focus: (r) => {
        const n = Be(r.state.tr);
        return r.dispatch(n), !1;
      }
    },
    decorations(r) {
      return this.getState(r);
    }
  }
}), mt = L((l, e) => {
  var a, o;
  const t = "heading", r = (a = e == null ? void 0 : e.getId) != null ? a : ut, n = (o = e == null ? void 0 : e.displayHashtag) != null ? o : !0;
  return {
    id: t,
    schema: () => ({
      content: "inline*",
      group: "block",
      defining: !0,
      attrs: {
        id: {
          default: ""
        },
        level: {
          default: 1
        }
      },
      parseDOM: ke.map((s) => ({
        tag: `h${s}`,
        getAttrs: (c) => {
          if (!(c instanceof HTMLElement))
            throw C(c);
          return { level: s, id: c.id };
        }
      })),
      toDOM: (s) => [
        `h${s.attrs.level}`,
        {
          id: s.attrs.id || r(s),
          class: l.getClassName(s.attrs, `heading h${s.attrs.level}`)
        },
        0
      ],
      parseMarkdown: {
        match: ({ type: s }) => s === t,
        runner: (s, c, i) => {
          const u = c.depth;
          s.openNode(i, { level: u }), s.next(c.children), s.closeNode();
        }
      },
      toMarkdown: {
        match: (s) => s.type.name === t,
        runner: (s, c) => {
          var u;
          if (s.openNode("heading", void 0, { depth: c.attrs.level }), c.childCount >= 1 && ((u = c.lastChild) == null ? void 0 : u.type.name) === "hardbreak") {
            const m = [];
            c.content.forEach((d, f, p) => {
              p !== c.childCount - 1 && m.push(d);
            }), s.next(W.fromArray(m));
          } else
            s.next(c.content);
          s.closeNode();
        }
      }
    }),
    inputRules: (s, c) => ke.map((i) => X(new RegExp(`^(#{1,${i}})\\s$`), s, () => {
      const u = c.get(S), { $from: m } = u.state.selection, d = m.node();
      if (d.type.name === "heading") {
        let f = Number(d.attrs.level) + Number(i);
        return f > 6 && (f = 6), {
          level: f
        };
      }
      return {
        level: i
      };
    })),
    commands: (s, c) => [
      y(D, (i = 1) => i < 1 ? v(i === 0 && c.get(R).nodes.paragraph || s) : v(i === 0 && c.get(R).nodes.paragraph || s, { level: i })),
      y(Me, () => (i, u, m) => {
        const { $from: d } = i.selection, f = d.node();
        if (f.type !== s || !i.selection.empty || d.parentOffset !== 0)
          return !1;
        const p = f.attrs.level - 1;
        return p ? (u == null || u(i.tr.setNodeMarkup(i.selection.$from.before(), void 0, {
          ...f.attrs,
          level: p
        })), !0) : v(c.get(R).nodes.paragraph || s)(i, u, m);
      })
    ],
    shortcuts: {
      [M.H1]: k(D, "Mod-Alt-1", 1),
      [M.H2]: k(D, "Mod-Alt-2", 2),
      [M.H3]: k(D, "Mod-Alt-3", 3),
      [M.H4]: k(D, "Mod-Alt-4", 4),
      [M.H5]: k(D, "Mod-Alt-5", 5),
      [M.H6]: k(D, "Mod-Alt-6", 6),
      [M.DowngradeHeading]: k(Me, ["Backspace", "Delete"])
    },
    prosePlugins: (s, c) => {
      const i = [dt(c, s, r)];
      return n && i.push(ft(c, s, l)), i;
    }
  };
}), G = "hr", De = I("InsertHr"), pt = L((l) => ({
  id: G,
  schema: () => ({
    group: "block",
    parseDOM: [{ tag: "hr" }],
    toDOM: (e) => ["hr", { class: l.getClassName(e.attrs, G) }],
    parseMarkdown: {
      match: ({ type: e }) => e === "thematicBreak",
      runner: (e, t, r) => {
        e.addNode(r);
      }
    },
    toMarkdown: {
      match: (e) => e.type.name === G,
      runner: (e) => {
        e.addNode("thematicBreak");
      }
    }
  }),
  inputRules: (e) => [
    new Te(/^(?:---|___\s|\*\*\*\s)$/, (t, r, n, a) => {
      const { tr: o } = t;
      return r[0] && o.replaceWith(n - 1, a, e.create()), o;
    })
  ],
  commands: (e, t) => [
    y(De, () => (r, n) => {
      if (!n)
        return !0;
      const a = t.get(R).node("paragraph"), { tr: o, selection: s } = r, { from: c } = s, i = e.create();
      if (!i)
        return !0;
      const u = o.replaceSelectionWith(i).insert(c, a), m = Ce.findFrom(u.doc.resolve(c), 1, !0);
      return m && n(u.setSelection(m).scrollIntoView()), !0;
    })
  ]
})), ce = I("ModifyImage"), Oe = I("InsertImage"), B = "image", gt = new H("MILKDOWN_IMAGE_INPUT"), ht = L((l, e) => ({
  id: "image",
  schema: () => ({
    inline: !0,
    group: "inline",
    selectable: !0,
    draggable: !0,
    marks: "",
    atom: !0,
    defining: !0,
    isolating: !0,
    attrs: {
      src: { default: "" },
      alt: { default: "" },
      title: { default: "" }
    },
    parseDOM: [
      {
        tag: "img[src]",
        getAttrs: (t) => {
          if (!(t instanceof HTMLElement))
            throw C(t);
          return {
            src: t.getAttribute("src") || "",
            alt: t.getAttribute("alt") || "",
            title: t.getAttribute("title") || t.getAttribute("alt") || ""
          };
        }
      }
    ],
    toDOM: (t) => [
      "img",
      {
        ...t.attrs,
        class: l.getClassName(t.attrs, B)
      }
    ],
    parseMarkdown: {
      match: ({ type: t }) => t === B,
      runner: (t, r, n) => {
        const a = r.url, o = r.alt, s = r.title;
        t.addNode(n, {
          src: a,
          alt: o,
          title: s
        });
      }
    },
    toMarkdown: {
      match: (t) => t.type.name === B,
      runner: (t, r) => {
        t.addNode("image", void 0, void 0, {
          title: r.attrs.title,
          url: r.attrs.src,
          alt: r.attrs.alt
        });
      }
    }
  }),
  commands: (t) => [
    y(Oe, (r = "") => (n, a) => {
      if (!a)
        return !0;
      const { tr: o } = n, s = t.create({ src: r });
      if (!s)
        return !0;
      const c = o.replaceSelectionWith(s);
      return a(c.scrollIntoView()), !0;
    }),
    y(ce, (r = "") => (n, a) => {
      const o = F(n.selection, t);
      if (!o)
        return !1;
      const { tr: s } = n;
      return a == null || a(s.setNodeMarkup(o.pos, void 0, { ...o.node.attrs, loading: !0, src: r }).scrollIntoView()), !0;
    })
  ],
  inputRules: (t) => [
    new Te(/!\[(?<alt>.*?)]\((?<filename>.*?)\s*(?="|\))"?(?<title>[^"]+)?"?\)/, (r, n, a, o) => {
      const [s, c, i = "", u] = n, { tr: m } = r;
      return s && m.replaceWith(a, o, t.create({ src: i, alt: c, title: u })), m;
    })
  ],
  view: () => (t) => {
    var i, u;
    let r = t;
    const n = (i = e == null ? void 0 : e.placeholder) != null ? i : "Add an Image", a = (u = e == null ? void 0 : e.isBlock) != null ? u : !1, o = l.themeManager.get("image", {
      placeholder: n,
      isBlock: a
    });
    if (!o)
      return {};
    const { dom: s, onUpdate: c } = o;
    return c(r), {
      dom: s,
      update: (m) => m.type.name !== B ? !1 : (r = m, c(r), !0),
      selectNode: () => {
        s.classList.add("ProseMirror-selectednode");
      },
      deselectNode: () => {
        s.classList.remove("ProseMirror-selectednode");
      }
    };
  },
  prosePlugins: (t, r) => [
    new T({
      key: gt,
      view: (n) => {
        var i, u, m;
        const a = l.themeManager.get("input-chip", {
          placeholder: (u = (i = e == null ? void 0 : e.input) == null ? void 0 : i.placeholder) != null ? u : "Input Image Link",
          buttonText: (m = e == null ? void 0 : e.input) == null ? void 0 : m.buttonText,
          onUpdate: (d) => {
            r.get(xe).call(ce, d);
          }
        });
        if (!a)
          return {};
        const o = (d) => Boolean(d.hasFocus() && t && F(d.state.selection, t)), s = (d) => {
          const f = F(d.state.selection, t);
          return f ? f.node.attrs.src : void 0;
        }, c = (d) => {
          if (!d.editable)
            return;
          o(d) ? (a.show(d), a.update(s(d))) : a.hide();
        };
        return a.init(n), c(n), {
          update: (d, f) => {
            (f == null ? void 0 : f.doc.eq(d.state.doc)) && f.selection.eq(d.state.selection) || c(d);
          },
          destroy: () => {
            a.destroy();
          }
        };
      }
    })
  ]
})), ye = "list_item", ie = I("SplitListItem"), ue = I("SinkListItem"), de = I("LiftListItem"), kt = new H("MILKDOWN_KEEP_LIST_ORDER"), Mt = (l) => {
  const e = (t, r) => {
    const n = Re("ordered_list", t.schema);
    let a = t.tr;
    t.doc.descendants((o, s, c, i) => {
      if (o.type === l && (c == null ? void 0 : c.type) === n) {
        let u = !1;
        const m = { ...o.attrs };
        o.attrs.listType !== "ordered" && (m.listType = "ordered", u = !0);
        const d = c == null ? void 0 : c.maybeChild(0);
        if (d && d.type === l && d.attrs.listType === "ordered") {
          const f = d.attrs.label;
          m.label = `${Number(f.slice(0, -1)) + i}.`, u = !0;
        }
        o.attrs.label === "\u2022" && (m.label = `${i + 1}.`, u = !0), u && (a = a.setNodeMarkup(s, void 0, m));
      }
    }), r(a);
  };
  return new T({
    key: kt,
    appendTransaction: (t, r, n) => {
      let a = null;
      return t.some((o) => o.docChanged) && e(n, (o) => {
        a = o;
      }), a;
    }
  });
}, yt = L((l) => ({
  id: ye,
  schema: () => ({
    group: "listItem",
    content: "paragraph block*",
    attrs: {
      label: {
        default: "\u2022"
      },
      listType: {
        default: "bullet"
      },
      spread: {
        default: "true"
      }
    },
    defining: !0,
    parseDOM: [
      {
        tag: "li.list-item",
        getAttrs: (e) => {
          if (!(e instanceof HTMLElement))
            throw C(e);
          return {
            label: e.dataset.label,
            listType: e.dataset["list-type"],
            spread: e.dataset.spread
          };
        },
        contentElement: "div.list-item_body"
      },
      { tag: "li" }
    ],
    toDOM: (e) => [
      "li",
      {
        class: l.getClassName(e.attrs, "list-item"),
        "data-label": e.attrs.label,
        "data-list-type": e.attrs.listType,
        "data-spread": e.attrs.spread
      },
      ["div", { class: l.getClassName(e.attrs, "list-item_label") }, e.attrs.label],
      ["div", { class: l.getClassName(e.attrs, "list-item_body") }, 0]
    ],
    parseMarkdown: {
      match: ({ type: e, checked: t }) => e === "listItem" && t === null,
      runner: (e, t, r) => {
        const n = t.label != null ? `${t.label}.` : "\u2022", a = t.label != null ? "ordered" : "bullet", o = t.spread != null ? `${t.spread}` : "true";
        e.openNode(r, { label: n, listType: a, spread: o }), e.next(t.children), e.closeNode();
      }
    },
    toMarkdown: {
      match: (e) => e.type.name === ye,
      runner: (e, t) => {
        e.openNode("listItem", void 0, { spread: t.attrs.spread === "true" }), e.next(t.content), e.closeNode();
      }
    }
  }),
  inputRules: (e) => [K(/^\s*([-+*])\s$/, e)],
  commands: (e) => [
    y(ie, () => Fe(e)),
    y(ue, () => ze(e)),
    y(de, () => je(e))
  ],
  shortcuts: {
    [M.NextListItem]: k(ie, "Enter"),
    [M.SinkListItem]: k(ue, "Mod-]"),
    [M.LiftListItem]: k(de, "Mod-[")
  },
  prosePlugins: (e) => [Mt(e)]
})), fe = I("WrapInOrderedList"), Ie = "ordered_list", It = L((l) => ({
  id: Ie,
  schema: () => ({
    content: "listItem+",
    group: "block",
    attrs: {
      order: {
        default: 1
      },
      spread: {
        default: !1
      }
    },
    parseDOM: [
      {
        tag: "ol",
        getAttrs: (e) => {
          if (!(e instanceof HTMLElement))
            throw C(e);
          return {
            spread: e.dataset.spread,
            order: e.hasAttribute("start") ? Number(e.getAttribute("start")) : 1
          };
        }
      }
    ],
    toDOM: (e) => [
      "ol",
      {
        ...e.attrs.order === 1 ? {} : e.attrs.order,
        "data-spread": e.attrs.spread,
        class: l.getClassName(e.attrs, "ordered-list")
      },
      0
    ],
    parseMarkdown: {
      match: ({ type: e, ordered: t }) => e === "list" && !!t,
      runner: (e, t, r) => {
        const n = t.spread != null ? `${t.spread}` : "true";
        e.openNode(r, { spread: n }).next(t.children).closeNode();
      }
    },
    toMarkdown: {
      match: (e) => e.type.name === Ie,
      runner: (e, t) => {
        e.openNode("list", void 0, { ordered: !0, start: 1, spread: t.attrs.spread === "true" }), e.next(t.content), e.closeNode();
      }
    }
  }),
  inputRules: (e) => [
    K(/^(\d+)\.\s$/, e, (t) => ({ order: Number(t[1]) }), (t, r) => r.childCount + r.attrs.order === Number(t[1]))
  ],
  commands: (e) => [y(fe, () => ge(e))],
  shortcuts: {
    [M.OrderedList]: k(fe, "Mod-Alt-7")
  }
})), me = I("TurnIntoText"), Ne = "paragraph", Nt = L((l) => ({
  id: Ne,
  schema: () => ({
    content: "inline*",
    group: "block",
    parseDOM: [{ tag: "p" }],
    toDOM: (e) => ["p", { class: l.getClassName(e.attrs, Ne) }, 0],
    parseMarkdown: {
      match: (e) => e.type === "paragraph",
      runner: (e, t, r) => {
        e.openNode(r), t.children ? e.next(t.children) : e.addText(t.value), e.closeNode();
      }
    },
    toMarkdown: {
      match: (e) => e.type.name === "paragraph",
      runner: (e, t) => {
        var n;
        if (e.openNode("paragraph"), t.childCount >= 1 && ((n = t.lastChild) == null ? void 0 : n.type.name) === "hardbreak") {
          const a = [];
          t.content.forEach((o, s, c) => {
            c !== t.childCount - 1 && a.push(o);
          }), e.next(W.fromArray(a));
        } else
          e.next(t.content);
        e.closeNode();
      }
    }
  }),
  commands: (e) => [y(me, () => v(e))],
  shortcuts: {
    [M.Text]: k(me, "Mod-Alt-0")
  }
})), bt = L(() => ({
  id: "text",
  schema: () => ({
    group: "inline",
    parseMarkdown: {
      match: ({ type: l }) => l === "text",
      runner: (l, e) => {
        l.addText(e.value);
      }
    },
    toMarkdown: {
      match: (l) => l.type.name === "text",
      runner: (l, e) => {
        l.addNode("text", void 0, e.text);
      }
    }
  })
})), wt = [
  ot(),
  Nt(),
  ct(),
  et(),
  at(),
  tt(),
  It(),
  yt(),
  mt(),
  pt(),
  ht(),
  bt()
], Lt = () => {
  function l(e) {
    Ve(e, "list", (t) => {
      var r;
      if (t.ordered) {
        const n = (r = t.start) != null ? r : 1;
        t.children.forEach((a, o) => {
          a.label = o + n;
        });
        return;
      }
    });
  }
  return l;
}, xt = (l) => !!l.children, Ct = (l) => l.type === "html";
function Tt(l, e) {
  return t(l, 0, null)[0];
  function t(r, n, a) {
    if (xt(r)) {
      const o = [];
      for (let s = 0, c = r.children.length; s < c; s++) {
        const i = r.children[s];
        if (i) {
          const u = t(i, s, r);
          if (u)
            for (let m = 0, d = u.length; m < d; m++) {
              const f = u[m];
              f && o.push(f);
            }
        }
      }
      r.children = o;
    }
    return e(r, n, a);
  }
}
const Ht = () => {
  function l(e) {
    Tt(e, (t) => Ct(t) ? [] : [t]);
  }
  return l;
}, Dt = new H("MILKDOWN_INLINE_NODES_CURSOR"), Ot = () => {
  let l = !1;
  const e = new T({
    key: Dt,
    state: {
      init() {
        return !1;
      },
      apply(t) {
        if (!t.selection.empty)
          return !1;
        const r = t.selection.$from, n = r.nodeBefore, a = r.nodeAfter;
        return !!(n && a && n.isInline && !n.isText && a.isInline && !a.isText);
      }
    },
    props: {
      handleDOMEvents: {
        compositionend: (t, r) => l ? (l = !1, requestAnimationFrame(() => {
          if (e.getState(t.state)) {
            const a = t.state.selection.from;
            r.preventDefault(), t.dispatch(t.state.tr.insertText(r.data || "", a));
          }
        }), !0) : !1,
        compositionstart: (t) => (e.getState(t.state) && (l = !0), !1),
        beforeinput: (t, r) => {
          if (e.getState(t.state) && r instanceof InputEvent && r.data && !l) {
            const a = t.state.selection.from;
            return r.preventDefault(), t.dispatch(t.state.tr.insertText(r.data || "", a)), !0;
          }
          return !1;
        }
      },
      decorations(t) {
        if (e.getState(t)) {
          const a = t.selection.$from.pos, o = document.createElement("span"), s = Z.widget(a, o, {
            side: -1
          }), c = document.createElement("span"), i = Z.widget(a, c);
          return setTimeout(() => {
            o.contentEditable = "true", c.contentEditable = "true";
          }), A.create(t.doc, [s, i]);
        }
        return A.empty;
      }
    }
  });
  return e;
}, Y = /\[(?<span>((www|https:\/\/|http:\/\/)\S+))]\((?<url>\S+)\)/, E = "\u2205", be = "\u2042", we = "\u2234", At = new RegExp(`\\\\(?=[^\\w\\s${E}\\\\]|_)`, "g"), vt = (l) => {
  let e = l, t = e.match(Y);
  for (; t && t.groups; ) {
    const { span: r } = t.groups;
    e = e.replace(Y, r), t = e.match(Y);
  }
  return e;
}, Et = (l, e, t) => {
  const r = l.split(""), n = r[e];
  return r[e] && r[t] && (r[e] = r[t], r[t] = n), r.join("").toString();
}, St = (l) => {
  const e = ["*", "_"];
  let t = l.indexOf(E);
  for (; e.includes(l[t - 1] || "") && e.includes(l[t + 1] || ""); )
    l = Et(l, t, t + 1), t = t + 1;
  return l;
}, _t = (l) => l.slice(0, -1), $t = (l) => l.replace(At, ""), Pt = Ae(_t, $t, St, vt), Bt = (l) => {
  const e = l.indexOf(E), t = l.charAt(e - 1), r = l.charAt(e + 1), n = /[^\w]|_/;
  return r ? t && n.test(t) && n.test(r) ? be : we : be;
}, Rt = (l, e, t) => {
  let r = e, n = !1;
  return l.descendants((a) => {
    var o;
    if (n)
      return !1;
    if (a.isText) {
      const s = (o = a.text) == null ? void 0 : o.indexOf(t);
      if (s != null && s >= 0)
        return n = !0, r += s, !1;
    }
    r += a.nodeSize;
  }), r;
}, J = new H("MILKDOWN_INLINE_SYNC"), Wt = (l) => {
  const e = (n) => {
    var N;
    const { selection: a } = n, { $from: o } = a, s = o.node(), c = n.schema.topNodeType.create(void 0, s), i = Boolean((N = s.type.spec.content) == null ? void 0 : N.includes("inline")), u = l.get(Se), d = l.get(_e)(c), f = Pt(d), p = Bt(f), g = u(f.replace(E, p));
    if (!g)
      return null;
    const h = g.firstChild;
    return !h || s.type !== h.type ? null : (h.attrs = { ...s.attrs }, h.descendants((b) => {
      var O;
      const w = b.marks.find((_) => _.type.name === "link");
      w && ((O = b.text) == null ? void 0 : O.includes(p)) && w.attrs.href.includes(p) && (w.attrs.href = w.attrs.href.replace(p, ""));
    }), {
      text: f,
      isInlineBlock: i,
      prevNode: s,
      nextNode: h,
      placeholder: p
    });
  }, t = (n, a, o) => {
    let s = n.tr.setMeta(J, !0).insertText(E, n.selection.from);
    const c = n.apply(s), i = e(c);
    if (!i)
      return;
    const { $from: u } = c.selection, m = u.before(), d = u.after(), f = Rt(i.nextNode, m, i.placeholder);
    s = s.replaceWith(m, d, i.nextNode).setNodeMarkup(m, void 0, o).delete(f + 1, f + 2), s = s.setSelection(Q.near(s.doc.resolve(f + 1))), a(s);
  };
  return new T({
    key: J,
    state: {
      init: () => null,
      apply: (n, a, o, s) => {
        if (!n.docChanged || n.getMeta(J))
          return null;
        const i = e(s);
        if (!i)
          return null;
        const { isInlineBlock: u, prevNode: m, nextNode: d } = i;
        return !u || !d || m.type !== d.type || m.eq(d) || requestAnimationFrame(() => {
          const { dispatch: f, state: p } = l.get(S);
          t(p, f, m.attrs);
        }), null;
      }
    }
  });
}, qt = [
  ve(() => ({
    prosePlugins: (l, e) => [Ot(), Wt(e)],
    remarkPlugins: () => [Ue, Ht, Lt]
  }))()
], Kt = Le.create([...wt, ...Ze]), rr = Le.create([...qt, ...Kt]), nr = {
  ToggleInlineCode: ee,
  ToggleItalic: te,
  ToggleLink: He,
  ToggleBold: ne,
  ModifyLink: re,
  ModifyImage: ce,
  WrapInBlockquote: se,
  WrapInBulletList: ae,
  WrapInOrderedList: fe,
  TurnIntoCodeFence: oe,
  TurnIntoHeading: D,
  TurnIntoText: me,
  InsertHardbreak: le,
  InsertHr: De,
  InsertImage: Oe,
  SplitListItem: ie,
  SinkListItem: ue,
  LiftListItem: de
};
export {
  Me as DowngradeHeading,
  lt as HardbreakFilterPluginKey,
  le as InsertHardbreak,
  De as InsertHr,
  Oe as InsertImage,
  de as LiftListItem,
  ce as ModifyImage,
  re as ModifyLink,
  ue as SinkListItem,
  ie as SplitListItem,
  M as SupportedKeys,
  ne as ToggleBold,
  ee as ToggleInlineCode,
  te as ToggleItalic,
  He as ToggleLink,
  oe as TurnIntoCodeFence,
  D as TurnIntoHeading,
  me as TurnIntoText,
  se as WrapInBlockquote,
  ae as WrapInBulletList,
  fe as WrapInOrderedList,
  nt as backtickInputRegex,
  et as blockquote,
  tt as bulletList,
  at as codeFence,
  Ge as codeInline,
  nr as commands,
  rr as commonmark,
  Kt as commonmarkNodes,
  qt as commonmarkPlugins,
  ot as doc,
  Ye as em,
  ct as hardbreak,
  mt as heading,
  it as headingHashPluginKey,
  V as headingIdPluginKey,
  pt as hr,
  ht as image,
  Qe as link,
  yt as listItem,
  Ze as marks,
  wt as nodes,
  It as orderedList,
  Nt as paragraph,
  Xe as strong,
  bt as text,
  st as tildeInputRegex
};
//# sourceMappingURL=index.es.js.map
