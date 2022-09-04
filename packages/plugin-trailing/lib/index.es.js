import { PluginKey as P, Plugin as _ } from "@milkdown/prose/state";
import { createPlugin as p, AtomList as y } from "@milkdown/utils";
const A = new P("MILKDOWN_TRAILING"), N = p((I, e) => ({
  prosePlugins: () => {
    var u;
    const d = (u = e == null ? void 0 : e.shouldAppend) != null ? u : (r) => !(!r || ["heading", "paragraph"].includes(r.type.name)), l = new _({
      key: A,
      state: {
        init: (r, t) => {
          const n = t.tr.doc.lastChild;
          return d(n, t);
        },
        apply: (r, t, n, a) => {
          if (!r.docChanged)
            return t;
          const c = r.doc.lastChild;
          return d(c, a);
        }
      },
      appendTransaction: (r, t, n) => {
        var g, s, h;
        const { doc: a, tr: c, schema: f } = n, i = (h = (g = e == null ? void 0 : e.getNode) == null ? void 0 : g.call(e, n)) != null ? h : (s = f.nodes.paragraph) == null ? void 0 : s.create(), o = l.getState(n), m = a.content.size;
        if (!(!o || !i))
          return c.insert(m, i);
      }
    });
    return [l];
  }
})), L = y.create([N()]);
export {
  L as trailing,
  N as trailingPlugin,
  A as trailingPluginKey
};
//# sourceMappingURL=index.es.js.map
