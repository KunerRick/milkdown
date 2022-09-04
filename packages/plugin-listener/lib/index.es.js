import { createSlice as c, InitReady as L, SerializerReady as w, serializerCtx as m, prosePluginsCtx as y, EditorViewReady as b } from "@milkdown/core";
import { PluginKey as g, Plugin as E } from "@milkdown/prose/state";
class a {
  constructor() {
    this.beforeMountedListeners = [], this.mountedListeners = [], this.updatedListeners = [], this.markdownUpdatedListeners = [], this.blurListeners = [], this.focusListeners = [], this.destroyListeners = [], this.beforeMount = (e) => (this.beforeMountedListeners.push(e), this), this.mounted = (e) => (this.mountedListeners.push(e), this), this.updated = (e) => (this.updatedListeners.push(e), this);
  }
  get listeners() {
    return {
      beforeMounted: this.beforeMountedListeners,
      mounted: this.mountedListeners,
      updated: this.updatedListeners,
      markdownUpdated: this.markdownUpdatedListeners,
      blur: this.blurListeners,
      focus: this.focusListeners,
      destroy: this.destroyListeners
    };
  }
  markdownUpdated(e) {
    return this.markdownUpdatedListeners.push(e), this;
  }
  blur(e) {
    return this.blurListeners.push(e), this;
  }
  focus(e) {
    return this.focusListeners.push(e), this;
  }
  destroy(e) {
    return this.destroyListeners.push(e), this;
  }
}
const u = c(new a(), "listener"), k = new g("MILKDOWN_LISTENER"), v = (d) => (d.inject(u, new a()), async (e) => {
  await e.wait(L);
  const h = e.get(u), { listeners: s } = h;
  s.beforeMounted.forEach((t) => t(e)), await e.wait(w);
  const l = e.get(m);
  let r = null, i = null;
  const p = new E({
    key: k,
    view: () => ({
      destroy: () => {
        s.destroy.forEach((t) => t(e));
      }
    }),
    props: {
      handleDOMEvents: {
        focus: () => (s.focus.forEach((t) => t(e)), !1),
        blur: () => (s.blur.forEach((t) => t(e)), !1)
      }
    },
    state: {
      init: () => {
      },
      apply: (t) => {
        if (!t.docChanged)
          return;
        const { doc: o } = t;
        if (s.updated.length > 0 && (r == null || !r.eq(o)) && s.updated.forEach((n) => {
          n(e, o, r);
        }), s.markdownUpdated.length > 0 && (r == null || !r.eq(o))) {
          const n = l(t.doc);
          (i == null || i !== n) && (s.markdownUpdated.forEach((f) => {
            f(e, n, i);
          }), i = n);
        }
        r = o;
      }
    }
  });
  e.update(y, (t) => t.concat(p)), await e.wait(b), s.mounted.forEach((t) => t(e));
});
export {
  k as key,
  v as listener,
  u as listenerCtx
};
//# sourceMappingURL=index.es.js.map
