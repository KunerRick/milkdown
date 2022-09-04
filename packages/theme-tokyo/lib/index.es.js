import { ThemeSize as a, ThemeBorder as b, ThemeFont as g, ThemeScrollbar as p, ThemeShadow as $, themeFactory as S, ThemeColor as h, hex2rgb as q, ThemeIcon as H, ThemeGlobal as I } from "@milkdown/core";
import { injectProsemirrorView as N, useAllPresetRenderer as G } from "@milkdown/theme-pack-helper";
import { getPalette as R } from "@milkdown/design-system";
const B = [
  "Roboto",
  "HelveticaNeue-Light",
  "Helvetica Neue Light",
  "Helvetica Neue",
  "Helvetica",
  "Arial",
  "Lucida Grande",
  "sans-serif"
], F = ["Consolas", "Monaco", "Andale Mono", "Ubuntu Mono", "monospace"], f = {
  h1: {
    label: "h1",
    icon: "looks_one"
  },
  h2: {
    label: "h2",
    icon: "looks_two"
  },
  h3: {
    label: "h3",
    icon: "looks_3"
  },
  loading: {
    label: "loading",
    icon: "hourglass_empty"
  },
  quote: {
    label: "quote",
    icon: "format_quote"
  },
  code: {
    label: "code",
    icon: "code"
  },
  table: {
    label: "table",
    icon: "table_chart"
  },
  divider: {
    label: "divider",
    icon: "horizontal_rule"
  },
  image: {
    label: "image",
    icon: "image"
  },
  brokenImage: {
    label: "broken image",
    icon: "broken_image"
  },
  bulletList: {
    label: "bullet list",
    icon: "format_list_bulleted"
  },
  orderedList: {
    label: "ordered list",
    icon: "format_list_numbered"
  },
  taskList: {
    label: "task list",
    icon: "checklist"
  },
  bold: {
    label: "bold",
    icon: "format_bold"
  },
  italic: {
    label: "italic",
    icon: "format_italic"
  },
  inlineCode: {
    label: "inline code",
    icon: "code"
  },
  strikeThrough: {
    label: "strike through",
    icon: "strikethrough_s"
  },
  link: {
    label: "link",
    icon: "link"
  },
  leftArrow: {
    label: "left arrow",
    icon: "chevron_left"
  },
  rightArrow: {
    label: "right arrow",
    icon: "chevron_right"
  },
  upArrow: {
    label: "up arrow",
    icon: "expand_less"
  },
  downArrow: {
    label: "down arrow",
    icon: "expand_more"
  },
  alignLeft: {
    label: "align left",
    icon: "format_align_left"
  },
  alignRight: {
    label: "align right",
    icon: "format_align_right"
  },
  alignCenter: {
    label: "align center",
    icon: "format_align_center"
  },
  delete: {
    label: "delete",
    icon: "delete"
  },
  select: {
    label: "select",
    icon: "select_all"
  },
  unchecked: {
    label: "unchecked",
    icon: "check_box_outline_blank"
  },
  checked: {
    label: "checked",
    icon: "check_box"
  },
  undo: {
    label: "undo",
    icon: "turn_left"
  },
  redo: {
    label: "redo",
    icon: "turn_right"
  },
  liftList: {
    label: "lift list",
    icon: "format_indent_decrease"
  },
  sinkList: {
    label: "sink list",
    icon: "format_indent_increase"
  },
  dragHandle: {
    label: "drag handle",
    icon: "drag_indicator"
  },
  text: {
    label: "text",
    icon: "title"
  }
}, D = (e) => {
  const c = f[e];
  if (!c)
    return;
  const o = document.createElement("span");
  o.className = "icon material-icons material-icons-outlined";
  const n = f[e];
  return n ? (o.textContent = n.icon, o.dataset.label = n.label) : console.warn(`Icon not found: "${e}", did you forget to add it to the icon mapping?`), {
    dom: o,
    label: c.label
  };
}, E = (e, c) => {
  const { injectGlobal: o, css: n } = c, i = R(e), t = e.get(a, "radius"), l = i("neutral", 0.87), r = i("surface"), d = i("line"), s = i("secondary", 0.38), y = n`
        .ProseMirror-selectednode {
            outline: ${e.get(a, "lineWidth")} solid ${d};
        }

        li.ProseMirror-selectednode {
            outline: none;
        }

        li.ProseMirror-selectednode::after {
            ${e.get(b, void 0)};
        }

        & ::selection {
            background: ${s};
        }
    `, _ = n`
        padding: 50px 20px;
        outline: none;
        & > * {
            margin: 30px 0;
        }
    `, v = n`
        p {
            font-size: 16px;
            line-height: 1.5;
            letter-spacing: 0.5px;
        }
    `, z = n`
        blockquote {
            padding-left: 30px;
            line-height: 28px;
            border-left: 4px solid ${i("primary")};
            margin-left: 0;
            margin-right: 0;
            * {
                font-size: 16px;
                line-height: 24px;
            }
        }
    `, L = n`
        h1 {
            font-size: 48px;
            line-height: 1.167;
        }
        h2 {
            font-size: 40px;
            line-height: 1.2;
        }
        h3 {
            font-size: 34px;
            line-height: 1.05;
        }
        h4 {
            font-size: 28px;
            line-height: 1.14;
        }
        h5 {
            font-size: 24px;
            line-height: 1;
        }
        h6 {
            font-size: 20px;
            line-height: 1;
        }
        .heading {
            margin: 40px 0;
            font-weight: 400;
        }
    `, M = n`
        hr {
            height: ${e.get(a, "lineWidth")};
            background-color: ${d};
            border-width: 0;
        }
    `, T = n`
        ul,
        ol {
            padding: 0;
        }

        .list-item,
        .task-list-item {
            margin: 8px 0;
        }

        .list-item_label,
        .list-item .paragraph {
            margin: 0;
        }

        .list-item {
            display: flex;

            &_body {
                flex: 1;
            }
        }

        .list-item_label {
            display: flex;
            justify-content: center;
            width: 24px;
            height: 24px;
            font-size: 16px;
            line-height: 1.5;
            color: ${i("primary")};
        }

        .list-item[data-list-type='bullet'] {
            & > .list-item_label {
                font-size: 24px;
                line-height: 1;
            }
        }

        li {
            &::marker {
                display: none;
            }
        }

        .task-list-item {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            &_checkbox {
                margin: 8px 8px 8px 0;
                height: 16px;
            }
            & .paragraph {
                margin: 0;
            }
        }
    `, W = n`
        .code-fence {
            pre {
                font-family: ${e.get(g, "code")};
                margin: 0 18px;
                white-space: pre;
                overflow: auto;
                ${e.get(p, ["x"])}

                background-color: ${i("background")};
                color: ${i("neutral")};
                font-size: 14px;
                border-radius: ${t};

                code {
                    line-height: 1.5;
                    font-family: ${e.get(g, "code")};
                }
            }
        }
    `, C = n`
        .image {
            display: inline-block;
            margin: 0 auto;
            object-fit: contain;
            width: 100%;
            position: relative;
            height: auto;
            text-align: center;
        }
    `, A = n`
        .code-inline {
            background-color: ${i("neutral")};
            color: ${i("background")};
            border-radius: ${t};
            font-weight: 500;
            font-family: ${e.get(g, "code")};
            padding: 0 3px;
        }

        .strong {
            font-weight: 600;
        }

        .link,
        a {
            color: ${i("secondary")};
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            font-weight: 500;
            &:hover {
                background-color: ${i("line")};
                box-shadow: 0 3px ${i("line")}, 0 -3px ${i("line")};
            }
        }

        .strike-through {
            text-decoration-color: ${i("secondary")};
        }
    `, P = n`
        .footnote-definition {
            ${e.get(b, void 0)};
            border-radius: ${e.get(a, "radius")};
            background-color: ${i("background")};
            padding: 16px;
            display: flex;
            flex-direction: row;
            & > .footnote-definition_content {
                flex: 1;
                width: calc(100% - 16px);
                & > dd {
                    margin-inline-start: 16px;
                }
                & > dt {
                    color: ${i("secondary")};
                    font-weight: 500;
                }
            }
            & > .footnote-definition_anchor {
                width: 16px;
            }
        }
    `, j = n`
        /* copy from https://github.com/ProseMirror/prosemirror-tables/blob/master/style/tables.css */
        .tableWrapper {
            overflow-x: auto;
            margin: 0;
            ${e.get(p, ["x"])}
            width: 100%;
            * {
                margin: 0;
                box-sizing: border-box;
                font-size: 16px;
            }
        }
        table {
            border-collapse: collapse;
            table-layout: fixed;
            width: 100%;
            overflow: auto;
            border-radius: ${e.get(a, "radius")};
        }
        tr {
            ${e.get(b, "bottom")};
        }
        td,
        th {
            padding: 0 16px;
            vertical-align: top;
            box-sizing: border-box;
            position: relative;

            min-width: 100px;
            ${e.get(b, void 0)};
            text-align: left;
            line-height: 3;
            height: 48px;
            vertical-align: middle;
        }
        th {
            background: ${i("background", 0.5)};
            font-weight: 400;
        }
        .column-resize-handle {
            position: absolute;
            right: -2px;
            top: 0;
            bottom: 0;
            z-index: 20;
            pointer-events: none;
            background: ${i("secondary")};
            width: ${e.get(a, "lineWidth")};
        }

        .selectedCell {
            &::after {
                z-index: 2;
                position: absolute;
                content: '';
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                background: ${i("secondary", 0.38)};
                pointer-events: none;
            }

            & ::selection {
                background: transparent;
            }
        }
    `;
  N(c), o`
        .milkdown {
            .material-icons-outlined {
                font-size: 24px;
            }

            position: relative;
            margin-left: auto;
            margin-right: auto;
            box-sizing: border-box;


            color: ${l};
            background: ${r};
            font-family: ${e.get(g, "typography")};

            ${e.get($, void 0)}
            ${e.get(p, void 0)}
            ${y};

            .resize-cursor {
                cursor: ew-resize;
                cursor: col-resize;
            }

            .editor {
                ${_};

                ${v};
                ${z};
                ${M};
                ${T};
                ${W};
                ${C};
                ${L};

                ${j};
                ${P};

                ${A};
            }
        }
    `;
}, k = {
  shadow: "#33635c",
  primary: "#8c4351",
  secondary: "#34548a",
  neutral: "#0f0f14",
  solid: "#343b58",
  line: "#8f5e15",
  background: "#dcdee3",
  surface: "#d5d6db"
}, m = {
  shadow: "#a9b1d6",
  primary: "#f7768e",
  secondary: "#e0af68",
  neutral: "#c0caf5",
  solid: "#7dcfff",
  line: "#bb9af7",
  background: "#1a1b26",
  surface: "#24283b"
}, Q = {
  lightColor: k,
  darkColor: m
}, U = {
  typography: B,
  code: F
}, V = {
  radius: "4px",
  lineWidth: "1px"
}, u = (e = !1) => S((c, o) => {
  const { css: n } = c, i = e ? m : k;
  o.set(h, (t) => {
    if (!t)
      return;
    const [l, r] = t, d = i[l], s = q(d);
    if (!!s)
      return `rgba(${s == null ? void 0 : s.join(", ")}, ${r || 1})`;
  }), o.set(a, (t) => {
    if (!!t)
      return V[t];
  }), o.set(g, (t) => {
    if (!!t)
      return U[t].join(", ");
  }), o.set(p, ([t = "y", l = "normal"] = ["y", "normal"]) => {
    const r = o.get(h, ["secondary", 0.38]), d = o.get(h, ["secondary", 0.12]), s = o.get(h, ["secondary"]);
    return n`
                scrollbar-width: thin;
                scrollbar-color: ${r} ${d};
                -webkit-overflow-scrolling: touch;

                &::-webkit-scrollbar {
                    ${t === "y" ? "width" : "height"}: ${l === "thin" ? 2 : 12}px;
                    background-color: transparent;
                }

                &::-webkit-scrollbar-track {
                    border-radius: 999px;
                    background: transparent;
                    border: 4px solid transparent;
                }

                &::-webkit-scrollbar-thumb {
                    border-radius: 999px;
                    background-color: ${r};
                    border: ${l === "thin" ? 0 : 4}px solid transparent;
                    background-clip: content-box;
                }

                &::-webkit-scrollbar-thumb:hover {
                    background-color: ${s};
                }
            `;
  }), o.set($, () => {
    const t = o.get(a, "lineWidth"), l = (r) => o.get(h, ["shadow", r]);
    return n`
                box-shadow: 0 ${t} ${t} ${l(0.14)}, 0 2px ${t} ${l(0.12)},
                    0 ${t} 3px ${l(0.2)};
            `;
  }), o.set(b, (t) => {
    const l = o.get(a, "lineWidth"), r = o.get(h, ["line"]);
    return t ? n`
                ${`border-${t}`}: ${l} solid ${r};
            ` : n`
                    border: ${l} solid ${r};
                `;
  }), o.set(H, (t) => {
    if (!!t)
      return D(t);
  }), o.set(I, () => {
    E(o, c);
  }), G(o, c);
}), X = u(!0), Y = u(!1);
let w = !1;
var x;
typeof window < "u" && (w = Boolean((x = window.matchMedia) == null ? void 0 : x.call(window, "(prefers-color-scheme: dark)").matches));
const Z = u(w);
export {
  Q as color,
  m as darkColor,
  U as font,
  u as getTokyo,
  k as lightColor,
  V as size,
  Z as tokyo,
  X as tokyoDark,
  Y as tokyoLight
};
//# sourceMappingURL=index.es.js.map
