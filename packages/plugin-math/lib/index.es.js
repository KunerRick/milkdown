import { createNode as E, AtomList as T, createPlugin as D } from "@milkdown/utils";
import $ from "remark-math";
import { expectDomTypeError as O } from "@milkdown/exception";
import { InputRule as b } from "@milkdown/prose/inputrules";
import { NodeSelection as C, PluginKey as H, Plugin as I } from "@milkdown/prose/state";
import P from "katex";
import { createCmdKey as S, ThemeSize as B, ThemeColor as _, createCmd as A, commandsCtx as R } from "@milkdown/core";
import { findSelectedNodeOfType as L } from "@milkdown/prose";
const W = /^\$\$\s$/, q = E((u, c) => {
  var M, v;
  const f = "math_block", k = {
    empty: "Empty",
    error: "Syntax Error",
    ...(M = c == null ? void 0 : c.placeholder) != null ? M : {}
  }, x = {
    displayMode: !0,
    ...(v = c == null ? void 0 : c.katexOptions) != null ? v : {}
  };
  return {
    id: f,
    schema: () => ({
      content: "text*",
      group: "block",
      marks: "",
      defining: !0,
      atom: !0,
      code: !0,
      isolating: !0,
      attrs: {
        value: {
          default: ""
        }
      },
      parseDOM: [
        {
          tag: `div[data-type="${f}"]`,
          preserveWhitespace: "full",
          getAttrs: (t) => {
            if (!(t instanceof HTMLElement))
              throw O(t);
            return {
              value: t.dataset.value
            };
          }
        }
      ],
      toDOM: (t) => [
        "div",
        {
          class: u.getClassName(t.attrs, "math-block"),
          "data-type": f,
          "data-value": t.attrs.value || t.textContent || ""
        },
        0
      ],
      parseMarkdown: {
        match: ({ type: t }) => t === "math",
        runner: (t, m, p) => {
          const a = m.value;
          t.openNode(p, { value: a }), a && t.addText(a), t.closeNode();
        }
      },
      toMarkdown: {
        match: (t) => t.type.name === f,
        runner: (t, m) => {
          let p = "";
          m.forEach((a) => {
            p += a.text;
          }), t.addNode("math", void 0, p);
        }
      }
    }),
    view: () => (t, m, p) => {
      let a = t;
      const d = u.themeManager.get("inner-editor", {
        view: m,
        getPos: p,
        render: (l) => {
          try {
            l ? (P.render(l, d.preview, x), d.preview.classList.remove("system")) : (d.preview.innerHTML = k.empty, d.preview.classList.add("system"));
          } catch (g) {
            g instanceof Error && console.warn(g.message), d.preview.classList.add("system"), d.preview.innerHTML = k.error;
          } finally {
            r.appendChild(d.preview);
          }
        }
      });
      if (!d)
        return {};
      const { onUpdate: e, editor: n, dom: r, onFocus: o, onBlur: s, onDestroy: h, stopEvent: y, preview: i } = d;
      return r.classList.add("math-block"), u.themeManager.onFlush(() => {
        const l = u.getStyle(({ css: w }) => w`
                        .system {
                            display: flex;
                        }
                    `), g = u.getStyle(({ css: w }) => w`
                        display: block;
                        padding-left: 16px;
                        padding-right: 16px;
                    `);
        g && i.classList.add(g), l && r.classList.add(l);
      }), n.dataset.type = f, e(a, !0), {
        dom: r,
        update: (l) => l.sameMarkup(a) ? (a = l, e(a, !1), !0) : !1,
        selectNode: () => {
          o(a);
        },
        deselectNode: () => {
          s(a);
        },
        stopEvent: y,
        ignoreMutation: () => !0,
        destroy() {
          h();
        }
      };
    },
    inputRules: (t) => [
      new b(W, (m, p, a, d) => {
        const e = m.doc.resolve(a);
        if (!e.node(-1).canReplaceWith(e.index(-1), e.indexAfter(-1), t))
          return null;
        const n = m.tr.delete(a, d).setBlockType(a, a, t);
        return n.setSelection(C.create(n.doc, a - 1));
      })
    ]
  };
}), F = new H("MILKDOWN_MATH_INPUT"), N = S("ModifyInlineMath"), K = E((u, c) => {
  var m, p, a, d;
  const f = {
    empty: "(empty)",
    error: "(error)",
    ...(m = c == null ? void 0 : c.placeholder) != null ? m : {}
  }, k = (a = (p = c == null ? void 0 : c.input) == null ? void 0 : p.placeholder) != null ? a : "Input Math", x = {
    ...(d = c == null ? void 0 : c.katexOptions) != null ? d : {}
  }, M = u.themeManager, v = () => u.getStyle(({ css: e }) => {
    const n = (o, s = 1) => M.get(_, [o, s]), r = M.get(B, "lineWidth");
    return e`
                font-size: unset;

                &.ProseMirror-selectednode {
                    outline: none;
                    border: ${r} solid ${n("line")};
                }
            `;
  }), t = "math_inline";
  return {
    id: t,
    schema: () => ({
      group: "inline",
      inline: !0,
      atom: !0,
      attrs: {
        value: {
          default: ""
        }
      },
      parseDOM: [
        {
          tag: `span[data-type="${t}"]`,
          getAttrs: (e) => {
            if (!(e instanceof HTMLElement))
              throw O(e);
            return {
              value: e.dataset.value
            };
          }
        }
      ],
      toDOM: (e) => {
        const n = document.createElement("span");
        return n.dataset.type = t, n.dataset.value = e.attrs.value, u.themeManager.onFlush(() => {
          const r = v();
          r && (n.className = r);
        }), n;
      },
      parseMarkdown: {
        match: (e) => e.type === "inlineMath",
        runner: (e, n, r) => {
          const o = n.value;
          e.addNode(r, { value: o });
        }
      },
      toMarkdown: {
        match: (e) => e.type.name === t,
        runner: (e, n) => {
          e.addNode("inlineMath", void 0, n.attrs.value);
        }
      }
    }),
    commands: (e) => [
      A(N, (n = "") => (r, o) => {
        const s = L(r.selection, e);
        if (!s)
          return !1;
        const { tr: h } = r, y = h.setNodeMarkup(s.pos, void 0, { ...s.node.attrs, value: n });
        return o == null || o(y.setSelection(C.create(y.doc, s.pos))), !0;
      })
    ],
    view: () => (e) => {
      let n = e;
      const r = document.createElement("span");
      u.themeManager.onFlush(() => {
        const s = v();
        s && (r.className = s);
      });
      const o = (s) => {
        try {
          s ? P.render(s, r, x) : r.innerHTML = f.empty;
        } catch (h) {
          h instanceof Error && console.warn(h.message), r.innerHTML = f.error;
        }
      };
      return o(e.attrs.value), {
        dom: r,
        update: (s) => {
          if (!s.sameMarkup(n))
            return !1;
          n = s;
          const h = s.attrs.value;
          return o(h), !0;
        }
      };
    },
    prosePlugins: (e, n) => [
      new I({
        key: F,
        view: (r) => {
          const o = u.themeManager.get("input-chip", {
            placeholder: k,
            onUpdate: (i) => {
              n.get(R).call(N, i);
            },
            isBindMode: !0
          });
          if (!o)
            return {};
          const s = (i) => Boolean(e && L(i.state.selection, e)), h = (i) => {
            const l = L(i.state.selection, e);
            return l ? l.node.attrs.value : void 0;
          }, y = (i) => {
            if (!i.editable)
              return;
            s(i) ? (o.show(i), o.update(h(i))) : o.hide();
          };
          return o.init(r), y(r), {
            update: (i, l) => {
              (l == null ? void 0 : l.doc.eq(i.state.doc)) && l.selection.eq(i.state.selection) || y(i);
            },
            destroy: () => {
              o.destroy();
            }
          };
        }
      })
    ]
  };
}), U = T.create([K(), q()]), z = D(() => ({
  remarkPlugins: () => [$]
})), ee = T.create([z(), ...U]);
export {
  N as ModifyInlineMath,
  ee as math,
  q as mathBlock,
  K as mathInline,
  U as nodes
};
//# sourceMappingURL=index.es.js.map
