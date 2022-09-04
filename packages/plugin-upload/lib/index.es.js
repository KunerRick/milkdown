import { createPlugin as I, AtomList as w } from "@milkdown/utils";
import { schemaCtx as C, themeManagerCtx as E, ThemeIcon as L } from "@milkdown/core";
import { missingNodeInSchema as M, missingIcon as S } from "@milkdown/exception";
import { PluginKey as U, Plugin as D } from "@milkdown/prose/state";
import { DecorationSet as _, Decoration as x } from "@milkdown/prose/view";
const F = (l) => new Promise((o) => {
  const i = new FileReader();
  i.addEventListener("load", () => {
    o({
      alt: l.name,
      src: i.result
    });
  }, !1), i.readAsDataURL(l);
}), K = async (l, o) => {
  const i = [];
  for (let s = 0; s < l.length; s++) {
    const d = l.item(s);
    !d || !d.type.includes("image") || i.push(d);
  }
  const { image: u } = o.nodes;
  if (!u)
    throw M("image");
  return (await Promise.all(i.map((s) => F(s)))).map(({ alt: s, src: d }) => u.createAndFill({ src: d, alt: s }));
}, N = new U("MILKDOWN_UPLOAD"), O = I((l, o) => {
  var u;
  const i = (u = o == null ? void 0 : o.uploader) != null ? u : K;
  return {
    prosePlugins: (y, s) => {
      const d = s.get(C), p = new D({
        key: N,
        state: {
          init() {
            return _.empty;
          },
          apply(e, r) {
            const t = r.map(e.mapping, e.doc), n = e.getMeta(this);
            if (!n)
              return t;
            if (n.add) {
              const a = document.createElement("span"), c = s.get(E).get(L, "loading");
              if (!c)
                throw S("loading");
              a.appendChild(c.dom);
              const m = x.widget(n.add.pos, a, { id: n.add.id });
              return t.add(e.doc, [m]);
            }
            return n.remove ? t.remove(t.find(void 0, void 0, (a) => a.id === n.remove.id)) : t;
          }
        },
        props: {
          decorations(e) {
            return this.getState(e);
          }
        }
      }), b = (e, r) => {
        var a, c;
        const t = p.getState(e);
        if (!t)
          return -1;
        const n = t.find(void 0, void 0, (m) => m.id === r);
        return n.length && (c = (a = n[0]) == null ? void 0 : a.from) != null ? c : -1;
      }, h = (e, r, t) => {
        var m, P;
        if (!t || t.length <= 0)
          return !1;
        const n = Symbol("upload symbol"), { tr: a } = e.state, c = r instanceof DragEvent && (P = (m = e.posAtCoords({ left: r.clientX, top: r.clientY })) == null ? void 0 : m.pos) != null ? P : a.selection.from;
        return e.dispatch(a.setMeta(p, { add: { id: n, pos: c } })), i(t, d).then((f) => {
          const g = b(e.state, n);
          g < 0 || e.dispatch(e.state.tr.replaceWith(g, g, f).setMeta(p, { remove: { id: n } }));
        }).catch((f) => {
          console.error(f);
        }), !0;
      }, A = new D({
        props: {
          handlePaste: (e, r) => {
            var t, n;
            return !(r instanceof ClipboardEvent) || !(o != null && o.enableHtmlFileUploader) && ((t = r.clipboardData) == null ? void 0 : t.getData("text/html")) ? !1 : h(e, r, (n = r.clipboardData) == null ? void 0 : n.files);
          },
          handleDrop: (e, r) => {
            var t;
            return r instanceof DragEvent ? h(e, r, (t = r.dataTransfer) == null ? void 0 : t.files) : !1;
          }
        }
      });
      return [p, A];
    }
  };
}), H = w.create([O()]);
export {
  N as key,
  H as upload,
  O as uploadPlugin
};
//# sourceMappingURL=index.es.js.map
