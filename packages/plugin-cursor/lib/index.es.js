import { ThemeSize as c, ThemeColor as p, themeManagerCtx as l } from "@milkdown/core";
import { dropCursor as d } from "@milkdown/prose/dropcursor";
import { gapCursor as g } from "@milkdown/prose/gapcursor";
import { createPlugin as b } from "@milkdown/utils";
const M = b(({ getStyle: a, themeManager: r }) => (r.onFlush(() => {
  a(({ injectGlobal: s }) => {
    s`
                /* copy from https://github.com/ProseMirror/prosemirror-gapcursor/blob/master/style/gapcursor.css */
                .ProseMirror-gapcursor {
                    display: none;
                    pointer-events: none;
                    position: absolute;
                    margin: 0 !important;
                }

                .ProseMirror-gapcursor:after {
                    content: '';
                    display: block;
                    position: absolute;
                    top: -2px;
                    width: 20px;
                    border-top: ${r.get(c, "lineWidth")} solid
                        ${r.get(p, ["secondary"])};
                    animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
                }

                @keyframes ProseMirror-cursor-blink {
                    to {
                        visibility: hidden;
                    }
                }

                .ProseMirror-focused .ProseMirror-gapcursor {
                    display: block;
                }
            `;
  });
}), {
  prosePlugins: (s, t) => {
    var i, n;
    const e = t.get(l), o = e.get(c, "lineWidth"), m = e.get(p, ["secondary"]), u = Number((n = (i = o == null ? void 0 : o.match(/\d+/)) == null ? void 0 : i[0]) != null ? n : 1);
    return [g(), d({ color: m, width: u })];
  }
}))();
export {
  M as cursor
};
//# sourceMappingURL=index.es.js.map
