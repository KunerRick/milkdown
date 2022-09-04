import { createCmdKey as I, getPalette as A, ThemeIcon as T, commandsCtx as L, ThemeSize as f, ThemeColor as x, ThemeBorder as y, ThemeShadow as _, rootCtx as M, ThemeScrollbar as $, ThemeFont as H, createCmd as P, rootDOMCtx as v } from "@milkdown/core";
import { setBlockType as B, wrapIn as k, selectParentNode as D } from "@milkdown/prose/commands";
import { TextSelection as W, PluginKey as O, Plugin as z } from "@milkdown/prose/state";
import { createPlugin as R, AtomList as N } from "@milkdown/utils";
import { undo as F, redo as K } from "@milkdown/prose/history";
import { liftListItem as q, sinkListItem as j } from "@milkdown/prose/schema-list";
import { missingRootElement as w, missingMenuWrapper as U } from "@milkdown/exception";
const g = (e, t) => {
  if (!t)
    return !1;
  const { from: n, $from: s, to: o, empty: r } = e.selection;
  return r ? !!t.isInSet(e.storedMarks || s.marks()) : e.doc.rangeHasMark(n, o, t);
}, C = I("SelectParent"), G = [
  [
    {
      type: "button",
      icon: "undo",
      key: "Undo",
      disabled: (e) => !F(e.state)
    },
    {
      type: "button",
      icon: "redo",
      key: "Redo",
      disabled: (e) => !K(e.state)
    }
  ],
  [
    {
      type: "select",
      text: "Heading",
      options: [
        { id: "1", text: "Large Heading" },
        { id: "2", text: "Medium Heading" },
        { id: "3", text: "Small Heading" },
        { id: "0", text: "Plain Text" }
      ],
      disabled: (e) => {
        const { state: t } = e, n = t.schema.nodes.heading;
        if (!n)
          return !0;
        const s = (o) => B(n, { level: o })(t);
        return !(e.state.selection instanceof W) || !(s(1) || s(2) || s(3));
      },
      onSelect: (e) => Number(e) ? ["TurnIntoHeading", Number(e)] : ["TurnIntoText", null]
    }
  ],
  [
    {
      type: "button",
      icon: "bold",
      key: "ToggleBold",
      active: (e) => g(e.state, e.state.schema.marks.strong),
      disabled: (e) => !e.state.schema.marks.strong
    },
    {
      type: "button",
      icon: "italic",
      key: "ToggleItalic",
      active: (e) => g(e.state, e.state.schema.marks.em),
      disabled: (e) => !e.state.schema.marks.em
    },
    {
      type: "button",
      icon: "strikeThrough",
      key: "ToggleStrikeThrough",
      active: (e) => g(e.state, e.state.schema.marks.strike_through),
      disabled: (e) => !e.state.schema.marks.strike_through
    }
  ],
  [
    {
      type: "button",
      icon: "bulletList",
      key: "WrapInBulletList",
      disabled: (e) => {
        const { state: t } = e, n = t.schema.nodes.bullet_list;
        return n ? !k(n)(t) : !0;
      }
    },
    {
      type: "button",
      icon: "orderedList",
      key: "WrapInOrderedList",
      disabled: (e) => {
        const { state: t } = e, n = t.schema.nodes.ordered_list;
        return n ? !k(n)(t) : !0;
      }
    },
    {
      type: "button",
      icon: "taskList",
      key: "TurnIntoTaskList",
      disabled: (e) => {
        const { state: t } = e, n = t.schema.nodes.task_list_item;
        return n ? !k(n)(t) : !0;
      }
    },
    {
      type: "button",
      icon: "liftList",
      key: "LiftListItem",
      disabled: (e) => {
        const { state: t } = e, n = t.schema.nodes.list_item;
        return n ? !q(n)(t) : !0;
      }
    },
    {
      type: "button",
      icon: "sinkList",
      key: "SinkListItem",
      disabled: (e) => {
        const { state: t } = e, n = t.schema.nodes.list_item;
        return n ? !j(n)(t) : !0;
      }
    }
  ],
  [
    {
      type: "button",
      icon: "link",
      key: "ToggleLink",
      active: (e) => g(e.state, e.state.schema.marks.link)
    },
    {
      type: "button",
      icon: "image",
      key: "InsertImage"
    },
    {
      type: "button",
      icon: "table",
      key: "InsertTable"
    },
    {
      type: "button",
      icon: "code",
      key: "TurnIntoCodeFence"
    }
  ],
  [
    {
      type: "button",
      icon: "quote",
      key: "WrapInBlockquote"
    },
    {
      type: "button",
      icon: "divider",
      key: "InsertHr"
    },
    {
      type: "button",
      icon: "select",
      key: C
    }
  ]
], J = (e, t, n) => {
  const s = document.createElement("button");
  s.setAttribute("type", "button"), e.themeManager.onFlush(() => {
    s.className = "button";
    const r = e.getStyle(({ css: i }) => {
      const a = A(e.themeManager);
      return i`
                border: 0;
                box-sizing: unset;
                width: 28px;
                height: 28px;
                padding: 4px;
                margin: 8px;
                flex-shrink: 0;
                font-size: 14px;

                display: flex;
                justify-content: center;
                align-items: center;

                background-color: ${a("surface")};
                color: ${a("solid")};
                transition: color 0.4s ease-in-out, background-color 0.4s ease-in-out;

                cursor: pointer;

                &.active,
                &:hover {
                    background-color: ${a("secondary", 0.12)};
                    color: ${a("primary")};
                }

                &:disabled {
                    display: none;
                }

                .material-icons-outlined {
                    font-size: 24px;
                }
            `;
    });
    r && s.classList.add(r);
  });
  const o = e.themeManager.get(T, t.icon);
  if (o) {
    const { label: r, dom: i } = o;
    r && (s.setAttribute("aria-label", r), s.setAttribute("title", r)), s.appendChild(i);
  } else
    s.setAttribute("aria-label", t.icon), s.setAttribute("title", t.icon), s.textContent = t.icon;
  return s.addEventListener("mousedown", (r) => {
    r.preventDefault(), r.stopPropagation(), n.get(L).call(t.key, t.options);
  }), s;
}, Q = (e) => {
  const t = document.createElement("div");
  t.classList.add("divider");
  const { themeManager: n } = e;
  return n.onFlush(() => {
    const s = e.getStyle(({ css: o }) => o`
                flex-shrink: 0;
                width: ${n.get(f, "lineWidth")};
                background-color: ${n.get(x, ["line"])};
                margin: 12px 16px;
                min-height: 24px;
            `);
    s && t.classList.add(s);
  }), t;
}, X = (e, t, n, s) => {
  var b;
  const o = document.createElement("div");
  o.classList.add("menu-selector-wrapper", "fold");
  const r = document.createElement("button");
  r.setAttribute("type", "button"), r.classList.add("menu-selector", "fold"), r.addEventListener("mousedown", (u) => {
    var p;
    u.preventDefault(), u.stopPropagation(), o.classList.toggle("fold");
    const l = o.getBoundingClientRect();
    c.style.left = `${l.left - (((p = s.dom.parentElement) == null ? void 0 : p.getBoundingClientRect().left) || 0)}px`;
    const m = e.themeManager.get(f, "lineWidth");
    c.style.top = `calc(${l.height + "px"} + ${m} * 2)`;
  }), s.dom.addEventListener("click", () => {
    o.classList.add("fold");
  });
  const i = document.createElement("span");
  i.classList.add("menu-selector-value"), i.textContent = t.text;
  const a = (b = e.themeManager.get(T, "downArrow")) == null ? void 0 : b.dom;
  o.appendChild(r), r.appendChild(i), a && (a.setAttribute("aria-hidden", "true"), r.appendChild(a));
  const c = document.createElement("div");
  c.classList.add("menu-selector-list"), t.options.forEach((u) => {
    const l = document.createElement("button");
    l.setAttribute("type", "button"), l.dataset.id = u.id, l.textContent = u.text, l.classList.add("menu-selector-list-item"), c.appendChild(l);
  }), c.addEventListener("mousedown", (u) => {
    const { target: l } = u;
    if (l instanceof HTMLButtonElement && l.dataset.id) {
      const m = t.onSelect(l.dataset.id, s), [p, h] = m;
      typeof p == "string" ? n.get(L).call(p, h) : n.get(L).call(p, h), o.classList.add("fold");
    }
  }), o.appendChild(c);
  const { themeManager: d } = e;
  return d.onFlush(() => {
    const u = e.getStyle(({ css: l }) => {
      const m = (p, h = 1) => d.get(x, [p, h]);
      return l`
                flex-shrink: 0;
                font-weight: 500;
                font-size: 14px;

                ${d.get(y, "right")}
                ${d.get(y, "left")}

                .menu-selector {
                    border: 0;
                    box-sizing: unset;
                    cursor: pointer;
                    font: inherit;
                    text-align: left;
                    justify-content: space-between;
                    align-items: center;
                    color: ${m("neutral", 0.87)};
                    display: flex;
                    padding: 4px;
                    margin: 8px;
                    height: 28px;
                    background: ${m("secondary", 0.12)};
                    width: 160px;

                    &:disabled {
                        display: none;
                    }
                }

                .menu-selector-value {
                    flex: 1;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                .menu-selector-list {
                    width: 184px;
                    position: absolute;
                    background: ${m("surface")};
                    ${d.get(y, void 0)}
                    ${d.get(_, void 0)}
                    border-bottom-left-radius: ${d.get(f, "radius")};
                    border-bottom-right-radius: ${d.get(f, "radius")};
                    z-index: 3;
                }

                .menu-selector-list-item {
                    background-color: transparent;
                    border: 0;
                    cursor: pointer;
                    display: block;
                    font: inherit;
                    text-align: left;
                    padding: 12px 16px;
                    line-height: 28px;
                    width: 100%;
                    color: ${m("neutral", 0.87)};

                    &:hover {
                        background: ${m("secondary", 0.12)};
                        color: ${m("primary")};
                    }
                }

                &.fold {
                    border-color: transparent;

                    .menu-selector {
                        background: unset;
                    }

                    .menu-selector-list {
                        display: none;
                    }
                }
            `;
    });
    u && o.classList.add(u);
  }), o;
};
class Y {
  constructor(t, n, s, o, r) {
    this.utils = n, this.ctx = s, this.config = t.map((i) => i.map((a) => ({
      ...a,
      $: this.$create(a, r)
    }))).map((i, a) => {
      if (a === t.length - 1)
        return i;
      const c = {
        type: "divider",
        group: i.map((d) => d.$)
      };
      return [...i, { ...c, $: this.$create(c, r) }];
    }).flat(), this.config.forEach((i) => o.appendChild(i.$));
  }
  update(t) {
    this.config.forEach((n) => {
      if (n.type === "button") {
        n.active && (n.active(t) ? n.$.classList.add("active") : n.$.classList.remove("active")), n.disabled && (n.disabled(t) ? n.$.setAttribute("disabled", "true") : n.$.removeAttribute("disabled"));
        return;
      }
      if (n.type === "select" && n.disabled) {
        const s = n.disabled(t), o = n.$.children[0];
        o && (s ? (n.$.classList.add("disabled"), o.setAttribute("disabled", "true")) : (n.$.classList.remove("disabled"), o.removeAttribute("disabled")));
      }
      n.type === "divider" && (n.group.every((o) => o.getAttribute("disabled") || o.classList.contains("disabled")) ? n.$.classList.add("disabled") : n.$.classList.remove("disabled"));
    });
  }
  $create(t, n) {
    const { utils: s, ctx: o } = this;
    switch (t.type) {
      case "button":
        return J(s, t, o);
      case "select":
        return X(s, t, o, n);
      case "divider":
      default:
        return Q(s);
    }
  }
}
const Z = ({ menu: e, menuWrapper: t, milkdownDOM: n, editorRoot: s }) => {
  s.appendChild(n), t.remove(), e.remove();
}, V = ({ menu: e, menuWrapper: t, milkdownDOM: n }) => {
  t.insertBefore(e, n);
}, E = (e) => {
  if (!e)
    return document.body;
  if (typeof e == "string") {
    const t = document.querySelector(e);
    return t || document.body;
  }
  return e;
}, ee = (e, t) => {
  let n = null;
  n = document.createElement("div"), n.classList.add("milkdown-menu-wrapper");
  const s = e.get(M), o = t.dom, r = E(s), i = o.parentElement;
  if (!i)
    throw w();
  return r.replaceChild(n, i), n.appendChild(i), n;
}, te = (e, t, n, s, o = V) => {
  if (!s)
    throw U();
  const r = document.createElement("div");
  r.classList.add("milkdown-menu");
  const i = t.dom, { themeManager: a } = e;
  a.onFlush(() => {
    const l = e.getStyle(() => a.get($, ["y"]));
    l && i.classList.add(l);
    const m = e.getStyle(({ css: p }) => {
      const h = a.get(y, void 0), S = a.get($, ["x", "thin"]);
      return p`
                font-family: ${a.get(H, "typography")};
                box-sizing: border-box;
                width: 100%;
                display: flex;
                flex-wrap: nowrap;
                overflow-x: scroll;
                ${h};
                ${S};
                overflow-y: hidden;
                background: ${a.get(x, ["surface"])};
                transition: background-color 0.4s ease-in-out;

                -webkit-overflow-scrolling: auto;

                .disabled {
                    display: none;
                }
            `;
    });
    m && m.split(" ").forEach((p) => r.classList.add(p));
  });
  const c = n.get(M), d = E(c), b = i.parentElement;
  if (!b)
    throw w();
  return o({
    menu: r,
    menuWrapper: s,
    editorDOM: i,
    editorRoot: d,
    milkdownDOM: b
  }), [r, () => (Z({
    menu: r,
    menuWrapper: s,
    editorDOM: i,
    editorRoot: d,
    milkdownDOM: b
  }), b)];
}, ne = new O("MILKDOWN_MENU"), se = R((e, t) => {
  const n = t == null ? void 0 : t.domHandler;
  let s = null, o = null, r = null, i = null;
  const a = (c, d) => {
    const b = t != null && t.config ? typeof t.config == "function" ? t.config(c) : t.config : G;
    if (!!d.editable) {
      if (r || (r = ee(c, d), c.set(v, r)), !o) {
        const [u, l] = te(e, d, c, r, n);
        o = u, s = () => {
          const m = l();
          r = null, o = null, i = null, s = null, c.set(v, m);
        };
      }
      i || (i = new Y(b, e, c, o, d));
    }
  };
  return {
    commands: () => [P(C, () => D)],
    prosePlugins: (c, d) => [new z({
      key: ne,
      view: (u) => (a(d, u), u.editable && (i == null || i.update(u)), {
        update: (l) => {
          a(d, u), u.editable ? i == null || i.update(l) : s == null || s();
        },
        destroy: () => {
          s == null || s();
        }
      })
    })]
  };
}), me = N.create([se()]);
export {
  C as SelectParent,
  G as defaultConfig,
  me as menu,
  ne as menuKey,
  se as menuPlugin
};
//# sourceMappingURL=index.es.js.map
