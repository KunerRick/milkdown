import { TextSelection as m, PluginKey as p, Plugin as T } from "@milkdown/prose/state";
import { createPlugin as v, AtomList as $ } from "@milkdown/utils";
import { schemaCtx as y, themeManagerCtx as b, ThemeIcon as L, commandsCtx as k, ThemeSize as f, ThemeBorder as P, ThemeShadow as E, ThemeColor as x } from "@milkdown/core";
import { findParentNode as B, calculateTextPosition as C } from "@milkdown/prose";
import { missingRootElement as M } from "@milkdown/exception";
const h = (e, t) => {
  if (!t)
    return !1;
  const { from: o, to: s } = e.selection;
  return e.doc.rangeHasMark(o, o === s ? s + 1 : s, t);
}, A = (e) => {
  const { selection: t } = e;
  return t instanceof m ? !!e.doc.textBetween(t.from, t.to) : !1;
}, H = (e) => Boolean(B((t) => !!t.type.spec.code)(e.selection)), I = (e, t) => !A(e) || H(e) || h(e, t), u = (e, t, o, s) => ({
  icon: e,
  onClick: t,
  isHidden: () => (n) => I(n.state, s),
  isActive: () => (n) => h(n.state, o),
  canAddToDOM: () => (n) => !!o && !!n.state.schema.marks[o.name]
}), O = (e) => {
  const t = e.get(y).marks;
  return [
    u("bold", "ToggleBold", t.strong),
    u("italic", "ToggleItalic", t.em),
    u("strikeThrough", "ToggleStrikeThrough", t.strike_through),
    u("code", "ToggleInlineCode", t.code_inline),
    u("link", "ToggleLink", t.link)
  ];
}, D = (e, t = O) => {
  const o = ({ icon: s, onClick: n, isHidden: l, isActive: i, canAddToDOM: c }) => {
    var r;
    return {
      $: typeof s == "function" ? s(e) : (r = e.get(b).get(L, s)) == null ? void 0 : r.dom,
      command: typeof n == "string" ? () => e.get(k).call(n) : n(e),
      disable: l(e),
      active: i(e),
      enable: c(e)
    };
  };
  return t(e).map(o);
}, q = (e, t, o) => {
  e.classList.remove("hide"), C(t, e, (s, n, l, i) => {
    const c = e.parentElement;
    if (!c)
      throw M();
    const r = n.left - s.left;
    let a = s.left - i.left - (l.width - r) / 2, d = s.top - i.top - l.height - 14 + c.scrollTop;
    return a < 0 && (a = 0), (s.top - i.top < l.height || o && i.bottom - s.bottom > l.height) && (d = s.bottom - i.top + 14 + c.scrollTop), [d, a];
  });
}, w = (e, { css: t }) => {
  const o = (n, l = 1) => e.get(x, [n, l]), s = e.get(f, "lineWidth");
  return t`
        display: inline-flex;
        cursor: pointer;
        justify-content: space-evenly;
        position: absolute;
        border-radius: ${e.get(f, "radius")};
        z-index: 2;

        ${e.get(P, void 0)}
        ${e.get(E, void 0)}

        overflow: hidden;
        background: ${o("surface")};

        .icon {
            position: relative;
            color: ${o("solid", 0.87)};

            width: 48px;
            line-height: 48px;
            text-align: center;
            transition: all 0.4s ease-in-out;
            &:hover {
                background-color: ${o("secondary", 0.12)};
            }
            &.active {
                color: ${o("primary")};
            }
            &:not(:last-child)::after {
                content: '';
                position: absolute;
                top: 0;
                right: calc(-0.5 * ${s});
                width: ${s};
                bottom: 0;
                background: ${o("line")};
            }
        }
        &.hide,
        .hide {
            display: none;
        }
    `;
}, N = (e, t, o) => {
  const s = document.createElement("div");
  return t.themeManager.onFlush(() => {
    const n = t.getStyle((l) => w(t.themeManager, l)) || "";
    n && s.classList.add(n);
  }), s.classList.add(t.getClassName({}, o)), {
    dom: s,
    render: (n) => {
      var l;
      e.filter((i) => i.enable(n) && i.$ != null).forEach(({ $: i }) => s.appendChild(i)), (l = n.dom.parentNode) == null || l.appendChild(s);
    }
  };
}, W = (e, t) => Object.values(e).filter((o) => o.enable(t) && o.$ != null).every(({ $: o }) => o.classList.contains("hide")), _ = (e, t) => (e.filter((o) => o.enable(t) && o.$ != null).forEach((o) => {
  var l;
  if ((l = o.disable) == null ? void 0 : l.call(o, t)) {
    o.$.classList.add("hide");
    return;
  }
  if (o.$.classList.remove("hide"), o.active(t)) {
    o.$.classList.add("active");
    return;
  }
  o.$.classList.remove("active");
}), W(e, t)), g = (e, t, o, s) => {
  const { dom: n, render: l } = N(e, t, s), i = (r) => {
    const a = e.find(({ $: d }) => r.target instanceof Element && d.contains(r.target));
    !a || (r.stopPropagation(), r.preventDefault(), a.command());
  }, c = () => {
    n.classList.add("hide");
  };
  return n.addEventListener("mousedown", i), {
    destroy: () => {
      n.removeEventListener("mousedown", i), n.remove();
    },
    hide: c,
    update: (r) => {
      if (_(e, r)) {
        c();
        return;
      }
      q(n, r, o);
    },
    render: l
  };
}, j = (e, t, o, s) => {
  let n = g(e, t, o, s), l = !1;
  const i = () => {
    n.hide();
  }, c = (r, a) => {
    const { state: d } = r;
    if (!r.editable || l) {
      i();
      return;
    }
    (a == null ? void 0 : a.doc.eq(d.doc)) && a.selection.eq(d.selection) || n.update(r);
  };
  return {
    recreate: (r) => {
      n = g(e, t, o, s), n.render(r), c(r);
    },
    update: c,
    destroy: () => {
      n.destroy();
    },
    render: (r) => {
      n.render(r), c(r);
    },
    setHide: (r) => {
      l = r;
    }
  };
}, z = new p("MILKDOWN_TOOLTIP"), F = v((e, t) => ({
  id: "tooltip",
  prosePlugins: (o, s) => {
    var i;
    const n = j(D(s, t == null ? void 0 : t.items), e, (i = t == null ? void 0 : t.bottom) != null ? i : !1, "tooltip");
    return [new T({
      key: z,
      props: {
        handleClick: (c) => (n.setHide(!1), n.update(c), !1),
        handleDOMEvents: {
          mousedown: () => (n.setHide(!1), !1)
        }
      },
      view: (c) => (n.recreate(c), {
        update: n.update,
        destroy: n.destroy
      })
    })];
  }
})), U = $.create([F()]);
export {
  D as buttonMap,
  u as createToggleIcon,
  O as defaultButtons,
  z as key,
  U as tooltip,
  F as tooltipPlugin
};
//# sourceMappingURL=index.es.js.map
