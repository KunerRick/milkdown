import { createPlugin as b, AtomList as E } from "@milkdown/utils";
import { ThemeSize as $, ThemeBorder as C, ThemeShadow as N, ThemeScrollbar as S, ThemeFont as L, ThemeColor as y, ThemeIcon as T, schemaCtx as I, themeManagerCtx as m, commandsCtx as u } from "@milkdown/core";
import { missingIcon as A, missingRootElement as D } from "@milkdown/exception";
import { Plugin as x, PluginKey as _ } from "@milkdown/prose/state";
import { findParentNode as M, calculateNodePosition as H } from "@milkdown/prose";
import { DecorationSet as P, Decoration as O } from "@milkdown/prose/view";
import k from "smooth-scroll-into-view-if-needed";
const q = (e, { css: t }) => {
  const n = (o, r = 1) => e.get(y, [o, r]);
  return t`
        .slash-dropdown-item {
            display: flex;
            gap: 32px;
            height: 48px;
            padding: 0 16px;
            align-items: center;
            justify-content: flex-start;
            cursor: pointer;
            line-height: 48px;
            font-family: ${e.get(L, "typography")};
            font-size: 14px;

            transition: all 0.2s ease-in-out;

            &,
            .icon {
                color: ${n("neutral", 0.87)};
                transition: all 0.2s ease-in-out;
            }

            &.hide {
                display: none;
            }

            &.active {
                background: ${n("secondary", 0.12)};
                &,
                .icon {
                    color: ${n("primary")};
                }
            }
        }
    `;
}, K = (e, t) => {
  const n = (o, r = 1) => e.get(y, [o, r]);
  return t.css`
        width: 320px;
        max-height: 320px;
        overflow-y: auto;
        border-radius: ${e.get($, "radius")};
        position: absolute;
        background: ${n("surface")};

        ${e.get(C, void 0)}
        ${e.get(N, void 0)}
        ${e.get(S, void 0)}

        &.hide {
            display: none;
        }

        ${q(e, t)}
    `;
}, U = (e, t) => {
  const n = document.createElement("div");
  return n.setAttribute("role", "listbox"), n.setAttribute("tabindex", "-1"), e.themeManager.onFlush(() => {
    const o = e.getStyle((r) => K(e.themeManager, r));
    o && n.classList.add(o);
  }), n.classList.add(e.getClassName({}, t), "hide"), n;
}, p = (e, t, n, o) => {
  var l;
  const r = (l = o == null ? void 0 : o.textClassName) != null ? l : "text", s = document.createElement("div");
  s.setAttribute("role", "option"), s.classList.add("slash-dropdown-item");
  const a = e.get(T, n);
  if (!a)
    throw A(n);
  const i = document.createElement("span");
  return i.textContent = t, i.className = r, s.appendChild(a.dom), s.appendChild(i), s;
}, W = (e, t) => {
  const { selection: n } = e, { $from: o } = n, r = e.tr.deleteRange(o.start(), o.pos);
  return t == null || t(r), !1;
}, F = (e) => (t, n, o) => (o && (W(t, n), e()), !0), v = (e, t = "/") => {
  const { nodes: n } = e.get(I), o = [
    {
      id: "h1",
      dom: p(e.get(m), "Large Heading", "h1"),
      command: () => e.get(u).call("TurnIntoHeading", 1),
      keyword: ["h1", "large heading"],
      typeName: "heading"
    },
    {
      id: "h2",
      dom: p(e.get(m), "Medium Heading", "h2"),
      command: () => e.get(u).call("TurnIntoHeading", 2),
      keyword: ["h2", "medium heading"],
      typeName: "heading"
    },
    {
      id: "h3",
      dom: p(e.get(m), "Small Heading", "h3"),
      command: () => e.get(u).call("TurnIntoHeading", 3),
      keyword: ["h3", "small heading"],
      typeName: "heading"
    },
    {
      id: "bulletList",
      dom: p(e.get(m), "Bullet List", "bulletList"),
      command: () => e.get(u).call("WrapInBulletList"),
      keyword: ["bullet list", "ul"],
      typeName: "bullet_list"
    },
    {
      id: "orderedList",
      dom: p(e.get(m), "Ordered List", "orderedList"),
      command: () => e.get(u).call("WrapInOrderedList"),
      keyword: ["ordered list", "ol"],
      typeName: "ordered_list"
    },
    {
      id: "taskList",
      dom: p(e.get(m), "Task List", "taskList"),
      command: () => e.get(u).call("TurnIntoTaskList"),
      keyword: ["task list", "task"],
      typeName: "task_list_item"
    },
    {
      id: "image",
      dom: p(e.get(m), "Image", "image"),
      command: () => e.get(u).call("InsertImage"),
      keyword: ["image"],
      typeName: "image"
    },
    {
      id: "blockquote",
      dom: p(e.get(m), "Quote", "quote"),
      command: () => e.get(u).call("WrapInBlockquote"),
      keyword: ["quote", "blockquote"],
      typeName: "blockquote"
    },
    {
      id: "table",
      dom: p(e.get(m), "Table", "table"),
      command: () => e.get(u).call("InsertTable"),
      keyword: ["table"],
      typeName: "table"
    },
    {
      id: "code",
      dom: p(e.get(m), "Code Fence", "code"),
      command: () => e.get(u).call("TurnIntoCodeFence"),
      keyword: ["code"],
      typeName: "fence"
    },
    {
      id: "divider",
      dom: p(e.get(m), "Divide Line", "divider"),
      command: () => e.get(u).call("InsertHr"),
      keyword: ["divider", "hr"],
      typeName: "hr"
    }
  ], r = t.slice(1).toLocaleLowerCase();
  return o.filter((s) => !!n[s.typeName] && s.keyword.some((a) => a.includes(r))).map(({ keyword: s, typeName: a, ...i }) => i);
}, j = (e) => ({ content: t, isTopLevel: n }) => n ? t ? t.startsWith("/") ? t === "/" ? {
  placeholder: "Type to filter...",
  actions: v(e)
} : {
  actions: v(e, t)
} : null : { placeholder: "Type / to use the slash commands..." } : null, z = (e, { css: t }) => {
  const n = (r, s = 1) => e.get(y, [r, s]), o = e.get(L, "typography");
  return t`
        position: relative;
        &::before {
            position: absolute;
            cursor: text;
            font-family: ${o};
            font-size: 14px;
            color: ${n("neutral", 0.6)};
            content: attr(data-text);
            height: 100%;
            display: flex;
            align-items: center;
        }
    `;
}, B = (e, { css: t }) => t`
    &::before {
        left: 8px;
    }
`, R = (e, t) => ({
  handleKeyDown: (n, o) => !(e.isEmpty() || !(o instanceof KeyboardEvent) || !["ArrowUp", "ArrowDown", "Enter"].includes(o.key)),
  decorations: (n) => {
    const o = M(({ type: c }) => c.name === "paragraph")(n.selection), r = n.plugins.find((c) => c.key === "MILKDOWN_UPLOAD$"), s = r == null ? void 0 : r.getState(n);
    if (s != null && s.find(n.selection.from, n.selection.to).length > 0 || !o || o.node.childCount > 1 || n.selection.$from.parentOffset !== o.node.textContent.length || o.node.firstChild && o.node.firstChild.type.name !== "text")
      return e.clear(), null;
    const { placeholder: a, actions: i } = e.update({
      parentNode: n.selection.$from.node(n.selection.$from.depth - 1),
      isTopLevel: n.selection.$from.depth === 1,
      content: o.node.textContent,
      state: n
    });
    if (!a)
      return null;
    const l = (c, g) => {
      const h = o.pos;
      return P.create(n.doc, [
        O.node(h, h + o.node.nodeSize, {
          class: g.filter((w) => w).join(" "),
          "data-text": c
        })
      ]);
    }, f = t.getStyle((c) => z(t.themeManager, c)), d = t.getStyle((c) => B(t.themeManager, c));
    return i.length ? l(a, [f, d, "empty-node", "is-slash"]) : l(a, [f, "empty-node"]);
  }
}), V = (e) => ({
  id: e.id,
  $: e.dom,
  command: F(e.command)
}), Q = () => ({
  placeholder: null,
  actions: []
}), G = (e) => {
  const t = Q();
  return {
    get: () => t,
    clear: () => {
      t.placeholder = null, t.actions = [];
    },
    update: (n) => {
      var r, s;
      const o = e(n);
      return t.placeholder = (r = o == null ? void 0 : o.placeholder) != null ? r : null, t.actions = ((s = o == null ? void 0 : o.actions) != null ? s : []).map(V), t;
    },
    isEmpty: () => t.actions.length === 0
  };
}, J = (e, t, n) => {
  const { actions: o } = e.get();
  if (!o.length)
    return t.classList.add("hide"), !1;
  for (t.childNodes.forEach((s) => {
    s.removeEventListener("mouseenter", n.mouseEnter), s.removeEventListener("mouseleave", n.mouseLeave);
  }); t.firstChild; )
    t.firstChild.remove();
  o.forEach(({ $: s }) => {
    s.classList.remove("active"), s.addEventListener("mouseenter", n.mouseEnter), s.addEventListener("mouseleave", n.mouseLeave), t.appendChild(s);
  }), t.classList.remove("hide");
  const r = o[0];
  return r && (r.$.classList.add("active"), requestAnimationFrame(() => {
    k(r.$, {
      scrollMode: "if-needed",
      block: "nearest",
      inline: "nearest"
    });
  })), !0;
}, X = () => {
  let e = !1;
  return {
    isLock: () => e,
    lock: () => {
      e = !0;
    },
    unlock: () => {
      e = !1;
    }
  };
}, Y = (e) => () => {
  e.unlock();
}, Z = (e, t) => (n) => {
  if (t.isLock())
    return;
  const { actions: o } = e.get(), r = o.findIndex((i) => i.$.classList.contains("active")), s = o[r];
  s && r >= 0 && s.$.classList.remove("active");
  const { target: a } = n;
  a instanceof HTMLElement && a.classList.add("active");
}, ee = () => (e) => {
  const { target: t } = e;
  t instanceof HTMLElement && t.classList.remove("active");
}, te = (e, t, n) => (o) => {
  const { target: r } = o;
  if (!(r instanceof HTMLElement) || !t)
    return;
  const s = () => {
    o.stopPropagation(), o.preventDefault();
  }, { actions: a } = e.get(), i = Object.values(a).find(({ $: l }) => l.contains(r));
  if (!i) {
    if (e.isEmpty())
      return;
    e.clear(), n.classList.add("hide"), s();
    return;
  }
  s(), i.command(t.state, t.dispatch, t);
}, oe = (e, t, n, o) => (r) => {
  if (!(r instanceof KeyboardEvent))
    return;
  o.isLock() || o.lock();
  const { key: s } = r;
  if (e.isEmpty() || !["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(s))
    return;
  const { actions: a } = e.get();
  let i = a.findIndex(({ $: d }) => d.classList.contains("active"));
  i < 0 && (i = 0);
  const l = (d) => {
    const c = a[i], g = a[d];
    !c || !g || (c.$.classList.remove("active"), g.$.classList.add("active"), k(g.$, {
      scrollMode: "if-needed",
      block: "nearest",
      inline: "nearest"
    }));
  };
  if (s === "ArrowDown") {
    const d = i === a.length - 1 ? 0 : i + 1;
    l(d);
    return;
  }
  if (s === "ArrowUp") {
    const d = i === 0 ? a.length - 1 : i - 1;
    l(d);
    return;
  }
  if (s === "Escape") {
    if (e.isEmpty())
      return;
    e.clear(), n.classList.add("hide");
    return;
  }
  const f = a[i];
  !f || (f.command(t.state, t.dispatch, t), f.$.classList.remove("active"));
}, ne = (e, t) => {
  H(e, t, (n, o, r) => {
    const s = t.parentElement;
    if (!s)
      throw D();
    let a = n.left - r.left, i = n.bottom - r.top + 14 + s.scrollTop;
    if (a < 0 && (a = 0), r.height + r.top - n.bottom < o.height) {
      const l = n.top - r.top - o.height - 14 + s.scrollTop;
      l > 0 && (i = l);
    }
    return [i, a];
  });
}, re = (e, t, n, o) => {
  const r = t.dom.parentNode;
  if (!r)
    return {};
  const s = U(n, o), a = X();
  r.appendChild(s);
  const i = Y(a), l = te(e, t, s), f = oe(e, t, s, a), d = Z(e, a), c = ee();
  return r.addEventListener("mousemove", i), r.addEventListener("mousedown", l), r.addEventListener("keydown", f), {
    update: (g) => {
      !J(e, s, {
        mouseEnter: d,
        mouseLeave: c
      }) || ne(g, s);
    },
    destroy: () => {
      r.removeEventListener("mousemove", i), r.removeEventListener("mousedown", l), r.removeEventListener("keydown", f), s.remove();
    }
  };
}, se = "MILKDOWN_SLASH", ae = (e, t, n) => {
  const o = G(t);
  return new x({
    key: new _(se),
    props: R(o, e),
    view: (r) => re(o, r, e, n)
  });
}, ie = b((e, t) => {
  var o;
  const n = (o = t == null ? void 0 : t.config) != null ? o : j;
  return {
    prosePlugins: (r, s) => {
      const a = n(s);
      return [ae(e, a, "slash-dropdown")];
    }
  };
}), ge = E.create([ie()]);
export {
  p as createDropdownItem,
  v as defaultActions,
  j as defaultConfig,
  ge as slash,
  ie as slashPlugin
};
//# sourceMappingURL=index.es.js.map
