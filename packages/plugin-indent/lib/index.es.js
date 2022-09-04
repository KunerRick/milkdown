import { createCmdKey as s } from "@milkdown/core";
import { keymap as a } from "@milkdown/prose/keymap";
import { TextSelection as f, AllSelection as m } from "@milkdown/prose/state";
import { createPlugin as u, AtomList as g } from "@milkdown/utils";
const y = (e, t) => {
  const { doc: n, selection: r } = e;
  if (!n || !r || !(r instanceof f || r instanceof m))
    return e;
  const { to: c } = r, o = t.type === "space" ? Array(t.size).fill(" ").join("") : "	";
  return e.insertText(o, c);
}, d = (e, t) => {
  e.type === "tab" && t.getStyle(({ injectGlobal: n }) => n`
                .milkdown {
                    tab-size: ${e.size};
                }
            `);
}, A = s("Indent"), p = u((e, t) => ({
  prosePlugins: () => {
    const n = {
      type: "tab",
      size: 4,
      ...t != null ? t : {}
    };
    return e.themeManager.onFlush(() => {
      d(n, e);
    }), [a({
      Tab: (c, o) => {
        const { tr: l } = c, i = y(l, n);
        return i.docChanged ? (o == null || o(i), !0) : !1;
      }
    })];
  }
})), I = g.create([p()]);
export {
  A as Indent,
  I as indent,
  p as indentPlugin
};
//# sourceMappingURL=index.es.js.map
