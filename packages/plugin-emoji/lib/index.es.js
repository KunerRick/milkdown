import { createNode as M, AtomList as N } from "@milkdown/utils";
import { missingRootElement as k, expectDomTypeError as S } from "@milkdown/exception";
import { InputRule as b } from "@milkdown/prose/inputrules";
import T from "node-emoji";
import D from "remark-emoji";
import { calculateNodePosition as P } from "@milkdown/prose";
import { PluginKey as A, Plugin as H } from "@milkdown/prose/state";
import _ from "twemoji";
import { ThemeBorder as F, ThemeShadow as I, ThemeSize as O, ThemeFont as R, ThemeColor as K } from "@milkdown/core";
import B from "emoji-regex";
const $ = /:\+1|:-1|:[\w-]+/, z = /:\+1:|:-1:|:[\w-]+:/, W = /(:([^:\s]+):)$/, U = (i) => ({ title: i }), v = (i) => _.parse(i, { attributes: U }), q = (i, d, a, e, o, t) => {
  if (i.composing)
    return !1;
  const { state: l } = i, s = l.doc.resolve(d);
  if (s.parent.type.spec.code)
    return !1;
  const n = (s.parent.textBetween(Math.max(0, s.parentOffset - 10), s.parentOffset, void 0, "\uFFFC") + e).toLowerCase();
  if (z.test(n))
    return !1;
  const r = $.exec(n);
  if (r && r[0] && n.endsWith(r[0])) {
    const m = r[0];
    return o(d - (m.length - e.length), a), t(m), !0;
  }
  return !1;
}, J = (i, d, a, e, o) => {
  for (; d.firstChild; )
    d.firstChild.remove();
  i.forEach(({ emoji: t, key: l }, s) => {
    const n = document.createElement("div");
    n.className = "milkdown-emoji-filter_item";
    const r = document.createElement("span");
    r.innerHTML = v(t), r.className = "milkdown-emoji-filter_item-emoji";
    const m = document.createElement("span");
    m.textContent = ":" + l + ":", m.className = "milkdown-emoji-filter_item-key", n.appendChild(r), n.appendChild(m), d.appendChild(n), s === 0 && (n.classList.add("active"), o(n));
    const p = (f) => {
      a && a.classList.remove("active");
      const { target: c } = f;
      c instanceof HTMLElement && (c.classList.add("active"), o(c));
    }, h = (f) => {
      const { target: c } = f;
      c instanceof HTMLElement && c.classList.remove("active");
    }, u = (f) => {
      f.preventDefault(), e();
    };
    n.addEventListener("mouseenter", p), n.addEventListener("mouseleave", h), n.addEventListener("mousedown", u);
  });
}, G = (i, { css: d, cx: a }) => {
  const e = i.get(F, void 0), o = i.get(I, void 0), t = i.get(O, "radius"), l = i.get(R, "typography"), s = (r, m = 1) => i.get(K, [r, m]), n = d`
        position: absolute;
        &.hide {
            display: none;
        }

        border-radius: ${t};
        background: ${s("surface")};

        .milkdown-emoji-filter_item {
            display: flex;
            gap: 8px;
            height: 36px;
            padding: 0 14px;
            align-items: center;
            justify-content: flex-start;
            cursor: pointer;
            line-height: 2;
            font-family: ${l};
            font-size: 14px;
            &.active {
                background: ${s("secondary", 0.12)};
                color: ${s("primary")};
            }
        }

        .emoji {
            height: 14px;
            width: 14px;
            margin: 0 1px 0 1.5px;
            vertical-align: -1.5px;
        }
    `;
  return a(e, o, n);
}, Q = new A("MILKDOWN_EMOJI_FILTER"), X = (i, d) => {
  let a = !1, e = 0, o = "", t = null;
  const l = () => {
    a = !1, e = 0, o = "", t = null;
  };
  return new H({
    key: Q,
    props: {
      handleKeyDown(s, n) {
        return ["Delete", "Backspace"].includes(n.key) ? (o = o.slice(0, -1), o.length <= 1 && l(), !1) : !(!a || !["ArrowUp", "ArrowDown", "Enter"].includes(n.key));
      },
      handleTextInput(s, n, r, m) {
        return a = q(s, n, r, m, (p) => {
          e = p;
        }, (p) => {
          o = p;
        }), a || l(), !1;
      }
    },
    view: (s) => {
      const { parentNode: n } = s.dom;
      if (!n)
        throw k();
      const r = document.createElement("div");
      r.classList.add("milkdown-emoji-filter", "hide"), i.themeManager.onFlush(() => {
        const u = r.className.split(" ").filter((c) => ["hide", "milkdown-emoji-filter"].includes(c));
        r.className = u.join(" ");
        const f = i.getStyle((c) => G(i.themeManager, c));
        f && f.split(" ").forEach((c) => r.classList.add(c));
      });
      const m = () => {
        var c;
        if (!t)
          return;
        const { tr: u } = s.state, f = s.state.schema.node("emoji", { html: (c = t.firstElementChild) == null ? void 0 : c.innerHTML });
        s.dispatch(u.delete(e, e + o.length).insert(e, f)), l(), r.classList.add("hide");
      };
      n.appendChild(r);
      const p = (u) => {
        if (!a || !(u instanceof KeyboardEvent))
          return;
        const { key: f } = u;
        if (f === "Enter") {
          m();
          return;
        }
        if (["ArrowDown", "ArrowUp"].includes(f)) {
          const c = f === "ArrowDown" ? (t == null ? void 0 : t.nextElementSibling) || r.firstElementChild : (t == null ? void 0 : t.previousElementSibling) || r.lastElementChild;
          if (t && t.classList.remove("active"), !c)
            return;
          c.classList.add("active"), t = c;
          return;
        }
      }, h = (u) => {
        !a || (u.stopPropagation(), l(), r.classList.add("hide"));
      };
      return n.addEventListener("keydown", p), n.addEventListener("mousedown", h), {
        update: (u) => {
          const { selection: f } = u.state;
          if (f.from - f.to !== 0 || !a)
            return l(), r.classList.add("hide"), null;
          const c = T.search(o).slice(0, d), { node: C } = u.domAtPos(e);
          return c.length === 0 || !C ? (r.classList.add("hide"), null) : (r.classList.remove("hide"), J(c, r, t, m, (g) => {
            t = g;
          }), P(u, r, (g, E, w) => {
            const y = r.parentElement;
            if (!y)
              throw k();
            const j = u.coordsAtPos(e);
            let L = j.left - w.left, x = g.bottom - w.top + 14 + y.scrollTop;
            return L < 0 && (L = 0), window.innerHeight - j.bottom < E.height && (x = g.top - w.top - E.height - 14 + y.scrollTop), [x, L];
          }), null);
        },
        destroy: () => {
          n.removeEventListener("keydown", p), n.removeEventListener("mousedown", h), r.remove();
        }
      };
    }
  });
}, Y = B(), Z = (i) => !!i.children, V = (i) => !!i.value;
function ee(i, d) {
  return a(i, 0, null)[0];
  function a(e, o, t) {
    if (Z(e)) {
      const l = [];
      for (let s = 0, n = e.children.length; s < n; s++) {
        const r = e.children[s];
        if (r) {
          const m = a(r, s, e);
          if (m)
            for (let p = 0, h = m.length; p < h; p++) {
              const u = m[p];
              u && l.push(u);
            }
        }
      }
      e.children = l;
    }
    return d(e, o, t);
  }
}
const te = () => {
  function i(d) {
    ee(d, (a) => {
      if (!V(a))
        return [a];
      const e = a.value, o = [];
      let t, l = e;
      for (; t = Y.exec(l); ) {
        const { index: s } = t, n = t[0];
        n && (s > 0 && o.push({ ...a, value: l.slice(0, s) }), o.push({ ...a, value: v(n), type: "emoji" }), l = l.slice(s + n.length));
      }
      return l.length && o.push({ ...a, value: l }), o;
    });
  }
  return i;
}, ne = M((i, d) => {
  const a = () => i.getStyle(({ css: e }) => e`
                .emoji {
                    height: 1em;
                    width: 1em;
                    margin: 0 1px 0 1.5px;
                    vertical-align: -1.5px;
                }
            `);
  return {
    id: "emoji",
    schema: () => ({
      group: "inline",
      inline: !0,
      atom: !0,
      attrs: {
        html: {
          default: ""
        }
      },
      parseDOM: [
        {
          tag: 'span[data-type="emoji"]',
          getAttrs: (e) => {
            if (!(e instanceof HTMLElement))
              throw S(e);
            return { html: e.innerHTML };
          }
        }
      ],
      toDOM: (e) => {
        const o = document.createElement("span");
        return o.classList.add("emoji-wrapper"), o.dataset.type = "emoji", i.themeManager.onFlush(() => {
          const t = a();
          t && o.classList.add(t);
        }), o.innerHTML = e.attrs.html, { dom: o };
      },
      parseMarkdown: {
        match: ({ type: e }) => e === "emoji",
        runner: (e, o, t) => {
          e.addNode(t, { html: o.value });
        }
      },
      toMarkdown: {
        match: (e) => e.type.name === "emoji",
        runner: (e, o) => {
          const t = document.createElement("span");
          t.innerHTML = o.attrs.html;
          const l = t.querySelector("img"), s = l == null ? void 0 : l.title;
          t.remove(), e.addNode("text", void 0, s);
        }
      }
    }),
    inputRules: (e) => [
      new b(W, (o, t, l, s) => {
        const n = t[0];
        if (!n)
          return null;
        const r = T.get(n);
        if (!r || n.includes(r))
          return null;
        const m = v(r);
        return o.tr.setMeta("emoji", !0).replaceRangeWith(l, s, e.create({ html: m })).scrollIntoView();
      })
    ],
    remarkPlugins: () => [D, te],
    prosePlugins: () => {
      var e;
      return [X(i, (e = d == null ? void 0 : d.maxListSize) != null ? e : 6)];
    }
  };
}), fe = N.create([ne()]);
export {
  fe as emoji,
  ne as emojiNode
};
//# sourceMappingURL=index.es.js.map
