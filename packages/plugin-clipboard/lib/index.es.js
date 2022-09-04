import { schemaCtx as D, editorViewOptionsCtx as T, parserCtx as N, serializerCtx as P } from "@milkdown/core";
import { getNodeFromSchema as O } from "@milkdown/prose";
import { DOMParser as z, Slice as C } from "@milkdown/prose/model";
import { PluginKey as A, Plugin as M, TextSelection as L } from "@milkdown/prose/state";
import { createPlugin as B } from "@milkdown/utils";
const m = (r) => {
  if (!r)
    return !1;
  if (Array.isArray(r))
    return r.length > 1 ? !1 : m(r[0]);
  const t = r.content;
  return t ? m(t) : r.type === "text";
}, E = new A("MILKDOWN_CLIPBOARD"), F = B(() => ({
  prosePlugins: (r, t) => {
    const p = t.get(D);
    return t.update(T, (e) => {
      var o;
      return {
        ...e,
        editable: (o = e.editable) != null ? o : () => !0
      };
    }), [new M({
      key: E,
      props: {
        handlePaste: (e, o, u) => {
          var x, S;
          const a = t.get(N), g = t.get(P), b = (S = (x = e.props).editable) == null ? void 0 : S.call(x, e.state), { clipboardData: c } = o;
          if (!b || !c || e.state.selection.$from.node().type.spec.code)
            return !1;
          let s = c.getData("text/plain");
          const h = c.getData("vscode-editor-data");
          if (h) {
            const n = JSON.parse(h), i = n == null ? void 0 : n.mode;
            if (s && i) {
              const { tr: l } = e.state, y = O("fence", p);
              return l.replaceSelectionWith(y.create({ language: i })).setSelection(L.near(l.doc.resolve(Math.max(0, l.selection.from - 2)))).insertText(s.replace(/\r\n?/g, `
`)), e.dispatch(l), !0;
            }
          }
          const d = c.getData("text/html");
          if (d.length === 0 && s.length === 0)
            return !1;
          if (d.length > 0 || s.length === 0) {
            const n = document.createElement("template");
            n.innerHTML = d;
            const i = z.fromSchema(p).parse(n.content);
            n.remove(), s = g(i);
          }
          const f = a(s);
          return !f || typeof f == "string" ? !1 : (e.dispatch(e.state.tr.replaceSelection(new C(f.content, u.openStart, u.openEnd))), !0);
        },
        clipboardTextSerializer: (e) => {
          const o = t.get(P);
          if (m(e.content.toJSON()))
            return e.content.textBetween(0, e.content.size, `

`);
          const a = p.topNodeType.createAndFill(void 0, e.content);
          return a ? o(a) : "";
        }
      }
    })];
  }
})), R = F();
export {
  R as clipboard,
  F as clipboardPlugin
};
//# sourceMappingURL=index.es.js.map
