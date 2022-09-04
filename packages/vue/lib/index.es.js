var N = Object.defineProperty;
var S = (o, e, t) => e in o ? N(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var v = (o, e, t) => (S(o, typeof e != "symbol" ? e + "" : e, t), t);
import { inject as g, ref as u, onMounted as j, onUnmounted as C, defineComponent as p, createVNode as c, provide as w, h as K, markRaw as k, Teleport as U, shallowReactive as B, getCurrentInstance as A, onBeforeMount as L, effect as _, isVNode as q } from "vue";
import { editorViewCtx as G, rootCtx as T } from "@milkdown/core";
import { vueRendererCallOutOfScope as z } from "@milkdown/exception";
import { Mark as F, Node as I } from "@milkdown/prose/model";
import { customAlphabet as H } from "nanoid";
const E = Symbol(), J = (o) => {
  const e = g(E, () => {
    throw z();
  }), { dom: t, loading: i, editor: a } = g(O, {}), s = u(!1);
  j(() => {
    if (!t.value)
      return;
    const r = o(t.value, e);
    !r || s.value || (i.value = !0, s.value = !0, r.create().then((n) => {
      a.value = n;
    }).finally(() => {
      i.value = !1, s.value = !1;
    }).catch((n) => console.error(n)));
  }), C(() => {
    var d, f, h;
    const r = (d = a.value) == null ? void 0 : d.action((l) => l.get(G)), n = (f = a.value) == null ? void 0 : f.action((l) => l.get(T));
    (h = n == null ? void 0 : n.firstChild) == null || h.remove(), r == null || r.destroy();
  });
}, V = p({
  name: "milkdown-dom-root",
  setup: (o, {
    slots: e
  }) => {
    J(o.editor);
    const t = g(O, {});
    return o.editorRef && (o.editorRef.get = () => t.editor.value, o.editorRef.dom = () => t.dom.value), () => {
      var i;
      return c("div", {
        ref: t.dom
      }, [(i = e.default) == null ? void 0 : i.call(e)]);
    };
  }
});
V.props = ["editor", "editorRef"];
const b = Symbol(), de = () => g(b), x = p({
  name: "milkdown-node-container",
  setup: ({
    node: o,
    view: e,
    getPos: t,
    decorations: i,
    ctx: a,
    as: s
  }, r) => (w(b, {
    ctx: a,
    node: o,
    view: e,
    getPos: t,
    decorations: i
  }), () => {
    var n, d;
    return K(s, {
      "data-view-container": !0
    }, (d = (n = r.slots).default) == null ? void 0 : d.call(n));
  })
});
x.props = ["ctx", "editor", "node", "view", "getPos", "decorations", "as"];
const R = p({
  name: "milkdown-content",
  setup: ({
    isInline: o
  }) => () => o ? c("span", {
    "data-view-content": !0
  }, null) : c("div", {
    "data-view-content": !0
  }, null)
});
R.props = ["isInline"];
const Q = H("abcedfghicklmn", 10), W = (o, e) => (t, i = {}) => (a) => (s, r, n, d) => new X(a, t, o, e, i, s, r, n, d);
var P, D;
class X {
  constructor(e, t, i, a, s, r, n, d, f) {
    v(this, "getPortal", () => {
      const e = this.component, t = this.options.as ? this.options.as : this.isInlineOrMark ? "span" : "div";
      return k(p({
        name: "milkdown-portal",
        setup: () => () => c(U, {
          key: this.key,
          to: this.teleportDOM
        }, {
          default: () => [c(x, {
            as: t,
            ctx: this.ctx,
            node: this.node,
            view: this.view,
            getPos: this.getPos,
            decorations: this.decorations
          }, {
            default: () => [c(e, null, {
              default: () => [c(R, {
                isInline: this.isInlineOrMark
              }, null)]
            })]
          })]
        })
      }));
    });
    v(this, "selectNode", (P = this.options) == null ? void 0 : P.selectNode);
    v(this, "deselectNode", (D = this.options) == null ? void 0 : D.deselectNode);
    this.ctx = e, this.component = t, this.addPortal = i, this.removePortalByKey = a, this.options = s, this.view = n, this.getPos = d, this.key = Q(), this.node = u(r), this.decorations = u(f);
    const h = s.as ? s.as : this.isInlineOrMark ? "span" : "div";
    this.teleportDOM = document.createElement(h), this.renderPortal();
  }
  get isInlineOrMark() {
    return this.node.value instanceof F || this.node.value.isInline;
  }
  get dom() {
    return this.teleportDOM.firstElementChild || this.teleportDOM;
  }
  get contentDOM() {
    if (!(this.node instanceof I && this.node.isLeaf))
      return this.teleportDOM.querySelector("[data-view-content]") || this.dom;
  }
  renderPortal() {
    if (!this.teleportDOM)
      return;
    const e = this.getPortal();
    this.addPortal(e, this.key);
    const t = Z();
    t && t.update();
  }
  destroy() {
    var e, t;
    (t = (e = this.options).destroy) == null || t.call(e), this.teleportDOM.remove(), this.removePortalByKey(this.key);
  }
  ignoreMutation(e) {
    return this.options.ignoreMutation ? this.options.ignoreMutation(e) : !this.dom || !this.contentDOM || this.node instanceof I && (this.node.isLeaf || this.node.isAtom) ? !0 : !(e.type === "selection" || this.contentDOM === this.dom || this.contentDOM.contains(e.target));
  }
  update(e, t, i) {
    return (() => {
      var r, n;
      if (this.options.update) {
        const d = (n = (r = this.options).update) == null ? void 0 : n.call(r, e, t, i);
        if (d != null)
          return d;
      }
      return this.node.value.type !== e.type ? !1 : (e === this.node.value && this.decorations.value === t || (this.node.value = e, this.decorations.value = t), !0);
    })();
  }
}
function Y(o) {
  return typeof o == "function" || Object.prototype.toString.call(o) === "[object Object]" && !q(o);
}
const M = {
  instance: null
}, Z = () => M.instance, O = Symbol(), $ = `
@milkdown/vue:
Passing ref to VueEditor will soon be deprecated, please use:

const { editor, getInstance, getDom, loading } = useEditor(/* creator */);

effect(() => {
    if (!loading) {
        const editor = getInstance();
        const rootDOM = getDom();
    }
})

<VueEditor editor={editor} />
`, ee = `
@milkdown/vue:
Passing editor directly to VueEditor will soon be deprecated, please use:

const { editor } = useEditor(/* creator */);

<VueEditor editor={editor} />
`, te = p({
  name: "milkdown-vue-root",
  setup: (o) => {
    const e = B([]), t = A();
    L(() => {
      M.instance = t.ctx._;
    }), C(() => {
      M.instance = null;
    });
    const i = k((l, m) => {
      e.push([m, l]);
    }), a = k((l) => {
      const m = e.findIndex((y) => y[0] === l);
      e.splice(m, 1);
    }), s = W(i, a);
    w(E, s);
    const r = Object.hasOwnProperty.call(o.editor, "getInstance"), {
      getEditorCallback: n,
      dom: d,
      editor: f,
      loading: h
    } = r ? o.editor.editor : o.editor;
    return _(() => {
      r && console.warn(ee), o.editorRef && console.warn($);
    }), w(O, {
      dom: d,
      editor: f,
      loading: h
    }), () => {
      const l = e.map(([m, y]) => c(y, {
        key: m
      }, null));
      return c(V, {
        editorRef: o.editorRef,
        editor: n.value
      }, Y(l) ? l : {
        default: () => [l]
      });
    };
  }
});
te.props = ["editor", "editorRef"];
const le = (o) => {
  const e = u(null), t = u(), i = u(!0), a = u((...s) => o(...s));
  return {
    loading: i,
    getInstance: () => t.value,
    getDom: () => e.value,
    editor: {
      getEditorCallback: a,
      dom: e,
      editor: t,
      loading: i
    }
  };
};
export {
  R as Content,
  te as VueEditor,
  x as VueNodeContainer,
  O as editorInfoCtxKey,
  Z as getRootInstance,
  b as nodeMetadata,
  le as useEditor,
  de as useNodeCtx
};
//# sourceMappingURL=index.es.js.map
