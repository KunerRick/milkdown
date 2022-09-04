var X = (o, t, n) => {
  if (!t.has(o))
    throw TypeError("Cannot " + n);
};
var i = (o, t, n) => (X(o, t, "read from private field"), n ? n.call(o) : t.get(o)), h = (o, t, n) => {
  if (t.has(o))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(o) : t.set(o, n);
}, a = (o, t, n, l) => (X(o, t, "write to private field"), l ? l.call(o, n) : t.set(o, n), n);
var R = (o, t, n) => (X(o, t, "access private method"), n);
import { createPlugin as ct, AtomList as dt } from "@milkdown/utils";
import { commandsCtx as $, editorViewCtx as x, getPalette as et, ThemeSize as ot, ThemeIcon as nt, ThemeShadow as at, ThemeBorder as ht } from "@milkdown/core";
import { getNodeFromSchema as I, browser as q } from "@milkdown/prose";
import { wrapIn as W, setBlockType as ut } from "@milkdown/prose/commands";
import { NodeSelection as G, PluginKey as mt, Plugin as pt } from "@milkdown/prose/state";
import { missingRootElement as Y } from "@milkdown/exception";
import { dropPoint as ft } from "@milkdown/prose/transform";
import { DOMSerializer as gt } from "@milkdown/prose/model";
const bt = () => [
  {
    id: "text",
    icon: "text",
    content: "Text",
    command: (o) => o.get($).call("TurnIntoHeading", 0),
    disabled: (o, t) => !t.node.type.isTextblock
  },
  {
    id: "h1",
    icon: "h1",
    content: "Heading 1",
    command: (o) => o.get($).call("TurnIntoHeading", 1),
    disabled: (o, t) => !t.node.type.isTextblock
  },
  {
    id: "h2",
    icon: "h2",
    content: "Heading 2",
    command: (o) => o.get($).call("TurnIntoHeading", 2),
    disabled: (o, t) => !t.node.type.isTextblock
  },
  {
    id: "h3",
    icon: "h3",
    content: "Heading 3",
    command: (o) => o.get($).call("TurnIntoHeading", 3),
    disabled: (o, t) => !t.node.type.isTextblock
  },
  {
    id: "bullet_list",
    icon: "bulletList",
    content: "Bullet list",
    command: (o) => o.get($).call("WrapInBulletList"),
    disabled: (o) => {
      const t = o.get(x), n = I("bullet_list", t.state.schema);
      return !W(n)(t.state);
    }
  },
  {
    id: "ordered_list",
    icon: "orderedList",
    content: "Ordered list",
    command: (o) => o.get($).call("WrapInOrderedList"),
    disabled: (o) => {
      const t = o.get(x), n = I("ordered_list", t.state.schema);
      return !W(n)(t.state);
    }
  },
  {
    id: "task_list",
    icon: "taskList",
    content: "Task list",
    command: (o) => o.get($).call("TurnIntoTaskList"),
    disabled: (o) => {
      const t = o.get(x), n = I("task_list_item", t.state.schema);
      return !W(n)(t.state);
    }
  },
  {
    id: "blockquote",
    icon: "quote",
    content: "Blockquote",
    command: (o) => o.get($).call("WrapInBlockquote"),
    disabled: (o) => {
      const t = o.get(x), n = I("blockquote", t.state.schema);
      return !W(n)(t.state);
    }
  },
  {
    id: "code_fence",
    icon: "code",
    content: "Code",
    command: (o) => o.get($).call("TurnIntoCodeFence"),
    disabled: (o) => {
      const t = o.get(x), n = I("fence", t.state.schema);
      return !ut(n)(t.state);
    }
  }
];
var B, j, st, K, it;
class $t {
  constructor(t) {
    h(this, j);
    h(this, K);
    h(this, B, void 0);
    a(this, B, t), this.dom$ = R(this, K, it).call(this), R(this, j, st).call(this);
  }
  hide() {
    this.dom$.classList.add("hide");
  }
  show() {
    this.dom$.classList.remove("hide");
  }
  toggle() {
    this.dom$.classList.toggle("hide");
  }
  mount(t) {
    var n;
    (n = t.dom.parentNode) == null || n.appendChild(this.dom$);
  }
  unmount() {
    this.dom$.remove();
  }
  render(t, n) {
    const l = t.dom.parentElement;
    if (!l)
      throw Y();
    const r = n.getBoundingClientRect(), e = l.getBoundingClientRect(), c = this.dom$.getBoundingClientRect(), s = r.left - e.left - c.width, d = r.top - e.top + l.scrollTop;
    this.dom$.style.left = `${s}px`, this.dom$.style.top = `${d}px`;
  }
}
B = new WeakMap(), j = new WeakSet(), st = function() {
  const { themeManager: t, getStyle: n } = i(this, B);
  t.onFlush(() => {
    if (!this.dom$)
      return;
    const l = n(({ css: r }) => {
      const e = et(t);
      return r`
                    position: absolute;
                    color: ${e("solid")};
                    cursor: grab;
                    border-radius: ${t.get(ot, "radius")};
                    transition: background-color 0.4s;
                    height: 24px;
                    line-height: 24px;
                    &:hover {
                        color: ${e("primary")};
                        background-color: ${e("background")};
                    }
                    &.hide {
                        display: none;
                    }
                `;
    });
    if (l) {
      const r = ["block-handle", l, "hide"].filter((e) => e != null).join(" ");
      this.dom$.className = r;
    }
  });
}, K = new WeakSet(), it = function() {
  const { themeManager: t } = i(this, B), n = document.createElement("div");
  n.draggable = !0;
  const l = t.get(nt, "dragHandle");
  return n.appendChild(l.dom), n;
};
var H, T, P, v, L, E, V, lt, J, rt, D;
class kt {
  constructor(t, n, l, r, e) {
    h(this, V);
    h(this, J);
    h(this, H, void 0);
    h(this, T, void 0);
    h(this, P, void 0);
    h(this, v, void 0);
    h(this, L, void 0);
    h(this, E, void 0);
    h(this, D, void 0);
    a(this, D, (c) => {
      let s = c.target;
      for (; s && !s.dataset.id && s.parentElement; )
        s = s.parentElement;
      if (s) {
        const d = s.dataset.id, u = i(this, v).find((p) => p.id === d), m = i(this, E).call(this);
        m && (u == null || u.command(i(this, T), m));
      }
      i(this, L).hide(), this.hide();
    }), a(this, H, t), a(this, T, n), a(this, P, l), a(this, L, r), a(this, v, i(this, P).call(this, i(this, T))), a(this, E, e), this.dom$ = R(this, J, rt).call(this), R(this, V, lt).call(this);
  }
  hide() {
    this.dom$.classList.add("hide");
  }
  show() {
    this.dom$.classList.remove("hide");
  }
  toggle() {
    this.dom$.classList.toggle("hide");
  }
  mount(t) {
    var n;
    (n = t.dom.parentNode) == null || n.appendChild(this.dom$), this.dom$.addEventListener("click", i(this, D));
  }
  unmount() {
    this.dom$.remove(), this.dom$.removeEventListener("click", i(this, D));
  }
  render(t, n) {
    const l = t.dom.parentElement;
    if (!l)
      throw Y();
    if (i(this, v).reduce((m, { disabled: p, id: b }) => {
      const f = i(this, E).call(this);
      if (!f)
        return m;
      const F = p(i(this, T), f), U = this.dom$.querySelector(`[data-id="${b}"]`);
      return U ? F ? (U.classList.add("hide"), m) : (U.classList.remove("hide"), !1) : m;
    }, !0)) {
      this.hide();
      return;
    }
    const e = l.getBoundingClientRect(), c = i(this, L).dom$.getBoundingClientRect(), s = this.dom$.getBoundingClientRect(), d = n.left - e.left - c.width;
    let u = n.top - e.top + l.scrollTop + c.height;
    if (e.height + e.top - n.bottom < s.height) {
      const m = n.top - e.top - s.height + l.scrollTop;
      m > 0 && (u = m);
    }
    this.dom$.style.left = `${d}px`, this.dom$.style.top = `${u}px`;
  }
}
H = new WeakMap(), T = new WeakMap(), P = new WeakMap(), v = new WeakMap(), L = new WeakMap(), E = new WeakMap(), V = new WeakSet(), lt = function() {
  const { themeManager: t, getStyle: n } = i(this, H);
  t.onFlush(() => {
    if (!this.dom$)
      return;
    const l = n(({ css: r }) => {
      const e = et(t);
      return r`
                    position: absolute;
                    cursor: pointer;
                    background: ${e("surface")};
                    z-index: 2;
                    border-radius: ${t.get(ot, "radius")};
                    width: 140px;

                    ${t.get(at, void 0)};
                    ${t.get(ht, void 0)}

                    &.hide {
                        display: none;
                    }

                    .block-menu_item {
                        font-size: 14px;
                        display: flex;
                        height: 24px;
                        padding: 4px 10px;
                        align-items: center;
                        justify-content: start;
                        gap: 10px;
                        transition: all 0.4s;

                        &:hover {
                            background: ${e("secondary", 0.12)};
                            color: ${e("primary")};
                        }

                        &.hide {
                            display: none;
                        }
                    }
                `;
    });
    if (l) {
      const r = ["block-menu", l, "hide"].filter((e) => e != null).join(" ");
      this.dom$.className = r;
    }
  });
}, J = new WeakSet(), rt = function() {
  const t = document.createElement("div");
  return i(this, v).forEach(({ icon: n, content: l, id: r }) => {
    const e = document.createElement("div"), c = document.createElement("span");
    c.textContent = l;
    let s;
    typeof n == "string" ? s = i(this, H).themeManager.get(nt, n).dom : s = n, e.appendChild(s), e.appendChild(c), e.dataset.id = r, e.classList.add("block-menu_item"), t.appendChild(e);
  }), t;
}, D = new WeakMap();
const yt = (o, t) => {
  var r;
  const { state: n } = o, l = n.selection.$anchor;
  for (let e = l.depth; e > 0; e--)
    if (l.node(e).type.spec.tableRole == "table") {
      const s = o.posAtCoords({ left: t.clientX, top: t.clientY });
      if (!s)
        return null;
      const d = (r = o.dragging) == null ? void 0 : r.slice;
      if (!d)
        return null;
      const u = o.state.doc.resolve(s.pos), m = ft(o.state.doc, u.pos, d);
      if (!m)
        return null;
      let p = n.tr;
      p = p.delete(l.before(e), l.after(e));
      const b = p.mapping.map(m);
      return p = p.replaceRange(b, b, d).scrollIntoView(), p;
    }
  return null;
}, Ct = (o, t, n) => {
  const { node: l } = o.domAtPos(n.pos);
  let r = l, e = r.parentElement;
  for (; e && e !== t && n.pos === o.posAtDOM(e, 0); )
    r = e, e = e.parentElement;
  return r;
}, Tt = (o) => !o.type.isBlock, vt = (o) => {
  let t = o.parent;
  const n = o.node();
  return t === n && (t = o.node(o.depth - 1)), !t || t.type.name === "doc" ? !1 : t.firstChild === n;
}, Mt = (o, t, n) => {
  const l = t.dom.parentElement;
  if (!l)
    throw Y();
  const r = t.posAtDOM(o, 0);
  if (r === 0)
    return null;
  let e = t.state.doc.resolve(r), c = e.node();
  for (; c && (Tt(c) || vt(e) || !n(c)); )
    e = t.state.doc.resolve(e.before()), c = e.node();
  e = t.state.doc.resolve(e.pos - e.parentOffset);
  const s = Ct(t, l, e);
  return { node: c, $pos: e, el: s };
};
let Q = null;
function wt() {
  return Q || (Q = document.implementation.createHTMLDocument("title"));
}
const xt = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
function Bt(o, t) {
  const n = [];
  let { openStart: l, openEnd: r, content: e } = t;
  for (; l > 1 && r > 1 && e.childCount == 1 && e.firstChild.childCount == 1; ) {
    l -= 1, r -= 1;
    const f = e.firstChild;
    n.push(f.type.name, f.attrs != f.type.defaultAttrs ? f.attrs : null), e = f.content;
  }
  const c = o.someProp("clipboardSerializer") || gt.fromSchema(o.state.schema), s = wt(), d = s.createElement("div");
  d.appendChild(c.serializeFragment(e, { document: s }));
  let u = d.firstChild, m, p = 0;
  for (; u && u.nodeType == 1 && (m = xt[u.nodeName.toLowerCase()]); ) {
    for (let f = m.length - 1; f >= 0; f--) {
      const F = s.createElement(m[f]);
      for (; d.firstChild; )
        F.appendChild(d.firstChild);
      d.appendChild(F), p++;
    }
    u = d.firstChild;
  }
  u && u.nodeType == 1 && u.setAttribute("data-pm-slice", `${l} ${r}${p ? ` -${p}` : ""} ${JSON.stringify(n)}`);
  const b = o.someProp("clipboardTextSerializer", (f) => f(t)) || t.content.textBetween(0, t.content.size, `

`);
  return { dom: d, text: b };
}
const Z = q.ie && q.ie_version < 15 || q.ios && q.webkit_version < 604, tt = 20;
var N, M, k, w, g, A, z, y, C, S, _, O;
class Ht {
  constructor(t, n, l, r) {
    h(this, y);
    h(this, N, void 0);
    h(this, M, void 0);
    h(this, k, void 0);
    h(this, w, void 0);
    h(this, g, void 0);
    h(this, A, void 0);
    h(this, z, void 0);
    h(this, S, void 0);
    h(this, _, void 0);
    h(this, O, void 0);
    a(this, N, () => {
      if (!i(this, k))
        return null;
      const e = i(this, k), c = i(this, y, C);
      if (G.isSelectable(e.node)) {
        const s = G.create(c.state.doc, e.$pos.pos - 1);
        return c.dispatch(c.state.tr.setSelection(s)), c.focus(), a(this, M, s), s;
      }
      return null;
    }), a(this, M, null), a(this, k, null), a(this, w, void 0), a(this, g, !1), a(this, S, () => {
      var e;
      a(this, w, (e = i(this, k)) == null ? void 0 : e.el.getBoundingClientRect()), i(this, N).call(this);
    }), a(this, _, () => {
      if (!i(this, g)) {
        requestAnimationFrame(() => {
          !i(this, w) || (this.blockMenu$.toggle(), this.blockMenu$.render(i(this, y, C), i(this, w)), i(this, y, C).focus());
        });
        return;
      }
      a(this, g, !1), a(this, M, null);
    }), a(this, O, (e) => {
      a(this, g, !0);
      const c = i(this, M);
      if (e.dataTransfer && c) {
        const s = i(this, y, C), d = c.content();
        e.dataTransfer.effectAllowed = "copyMove";
        const { dom: u, text: m } = Bt(s, d);
        e.dataTransfer.clearData(), e.dataTransfer.setData(Z ? "Text" : "text/html", u.innerHTML), Z || e.dataTransfer.setData("text/plain", m), s.dragging = {
          slice: d,
          move: !0
        };
      }
    }), this.keydownCallback = () => (this.blockMenu$.hide(), this.blockHandle$.hide(), !1), this.mousedownCallback = () => (this.blockMenu$.hide(), !1), this.mousemoveCallback = (e, c) => {
      if (!e.editable)
        return !1;
      const s = c.target;
      if (!(s instanceof Element))
        return i(this, g) || this.blockHandle$.hide(), !1;
      const d = Mt(s, e, i(this, z));
      return a(this, k, d), d ? (this.blockHandle$.show(), this.blockHandle$.render(e, d.el), !1) : (i(this, g) || this.blockHandle$.hide(), !1);
    }, this.dragoverCallback = (e, c) => {
      if (i(this, g)) {
        const s = i(this, y, C).dom.parentElement;
        if (!s)
          return !1;
        const d = s.scrollHeight > s.clientHeight, u = s.getBoundingClientRect();
        if (d) {
          if (s.scrollTop > 0 && Math.abs(c.y - u.y) < tt) {
            const b = s.scrollTop > 10 ? s.scrollTop - 10 : 0;
            return s.scrollTop = b, !1;
          }
          const m = Math.round(i(this, y, C).dom.getBoundingClientRect().height);
          if (Math.round(s.scrollTop + u.height) < m && Math.abs(c.y - (u.height + u.y)) < tt) {
            const b = s.scrollTop + 10;
            return s.scrollTop = b, !1;
          }
        }
      }
      return !1;
    }, this.dropCallback = (e, c) => {
      if (i(this, g)) {
        this.blockMenu$.hide();
        const s = c, d = yt(e, s);
        if (a(this, g, !1), d)
          return e.dispatch(d), s.preventDefault(), !0;
      }
      return !1;
    }, a(this, A, t), a(this, z, l), this.blockHandle$ = new $t(n), this.blockMenu$ = new kt(n, t, r, this.blockHandle$, () => i(this, k));
  }
  mount(t) {
    this.blockHandle$.dom$.addEventListener("mousedown", i(this, S)), this.blockHandle$.dom$.addEventListener("mouseup", i(this, _)), this.blockHandle$.dom$.addEventListener("dragstart", i(this, O)), this.blockHandle$.mount(t), this.blockMenu$.mount(t);
  }
  unmount() {
    this.blockHandle$.dom$.removeEventListener("mousedown", i(this, S)), this.blockHandle$.dom$.removeEventListener("mouseup", i(this, _)), this.blockHandle$.dom$.removeEventListener("dragstart", i(this, O)), this.blockHandle$.unmount(), this.blockMenu$.unmount();
  }
}
N = new WeakMap(), M = new WeakMap(), k = new WeakMap(), w = new WeakMap(), g = new WeakMap(), A = new WeakMap(), z = new WeakMap(), y = new WeakSet(), C = function() {
  return i(this, A).get(x);
}, S = new WeakMap(), _ = new WeakMap(), O = new WeakMap();
const Lt = new mt("MILKDOWN_BLOCK"), Et = (o, t, n, l) => {
  const r = new Ht(o, t, n, l);
  return new pt({
    key: Lt,
    props: {
      handleDOMEvents: {
        drop: (e, c) => r.dropCallback(e, c),
        mousemove: (e, c) => r.mousemoveCallback(e, c),
        mousedown: () => r.mousedownCallback(),
        keydown: () => r.keydownCallback(),
        dragover: (e, c) => r.dragoverCallback(e, c)
      }
    },
    view: (e) => (r.mount(e), {
      destroy: () => {
        r.unmount();
      }
    })
  });
}, Dt = (o) => {
  const { name: t } = o.type;
  return !(t.startsWith("table") && t !== "table");
}, St = ct((o, t) => {
  var r, e;
  const n = (r = t == null ? void 0 : t.filterNodes) != null ? r : Dt, l = (e = t == null ? void 0 : t.configBuilder) != null ? e : bt;
  return {
    prosePlugins: (c, s) => [Et(s, o, n, l)]
  };
}), qt = dt.create([St()]);
export {
  qt as block,
  St as blockPlugin,
  bt as defaultConfigBuilder,
  Dt as defaultNodeFilter
};
//# sourceMappingURL=index.es.js.map
