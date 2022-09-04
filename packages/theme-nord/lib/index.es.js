import { ThemeSize as d, ThemeBorder as g, ThemeFont as p, ThemeScrollbar as u, ThemeShadow as m, themeFactory as S, ThemeColor as b, hex2rgb as q, ThemeIcon as H, ThemeGlobal as F } from "@milkdown/core";
import { injectProsemirrorView as I, useAllPresetRenderer as G } from "@milkdown/theme-pack-helper";
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
], U = ["Consolas", "Monaco", "Andale Mono", "Ubuntu Mono", "monospace"], $ = {
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
  const c = $[e];
  if (!c)
    return;
  const o = document.createElement("span");
  o.className = "icon material-icons material-icons-outlined";
  const i = $[e];
  return i ? (o.textContent = i.icon, o.dataset.label = i.label) : console.warn(`Icon not found: "${e}", did you forget to add it to the icon mapping?`), {
    dom: o,
    label: c.label
  };
}, r = {
  nord0: "#2e3440",
  nord1: "#3b4252",
  nord2: "#434c5e",
  nord3: "#4c566a",
  nord4: "#d8dee9",
  nord5: "#e5e9f0",
  nord6: "#eceff4",
  nord7: "#8fbcbb",
  nord8: "#88c0d0",
  nord9: "#81a1c1",
  nord10: "#5e81ac",
  nord11: "#bf616a",
  nord12: "#d08770",
  nord13: "#ebcb8b",
  nord14: "#a3be8c",
  nord15: "#b48ead"
}, w = {
  shadow: r.nord1,
  primary: r.nord10,
  secondary: r.nord9,
  neutral: r.nord0,
  solid: r.nord3,
  line: r.nord4,
  background: r.nord6,
  surface: "#fff"
}, _ = {
  shadow: r.nord1,
  primary: r.nord10,
  secondary: r.nord9,
  neutral: r.nord6,
  solid: r.nord4,
  line: r.nord2,
  background: "#252932",
  surface: r.nord0
}, Y = {
  lightColor: w,
  darkColor: _
}, E = (e, c) => {
  const { injectGlobal: o, css: i } = c, n = R(e), t = e.get(d, "radius"), l = n("neutral", 0.87), a = n("surface"), h = n("line"), s = n("secondary", 0.38), f = i`
        .ProseMirror-selectednode {
            outline: ${e.get(d, "lineWidth")} solid ${h};
        }

        li.ProseMirror-selectednode {
            outline: none;
        }

        li.ProseMirror-selectednode::after {
            ${e.get(g, void 0)};
        }

        & ::selection {
            background: ${s};
        }
    `, v = i`
        padding: 50px 20px;
        outline: none;
        & > * {
            margin: 30px 0;
        }
    `, z = i`
        p {
            font-size: 16px;
            line-height: 1.5;
            letter-spacing: 0.5px;
        }
    `, C = i`
        blockquote {
            padding-left: 30px;
            line-height: 28px;
            border-left: 4px solid ${n("primary")};
            margin-left: 0;
            margin-right: 0;
            * {
                font-size: 16px;
                line-height: 24px;
            }
        }
    `, L = i`
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
    `, M = i`
        hr {
            height: ${e.get(d, "lineWidth")};
            background-color: ${h};
            border-width: 0;
        }
    `, T = i`
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
            color: ${n("primary")};
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
    `, W = i`
        .code-fence {
            pre {
                font-family: ${e.get(p, "code")};
                margin: 0 18px;
                white-space: pre;
                overflow: auto;
                ${e.get(u, ["x"])}

                background-color: ${n("background")};
                color: ${n("neutral")};
                font-size: 14px;
                border-radius: ${t};

                code {
                    line-height: 1.5;
                    font-family: ${e.get(p, "code")};
                }
            }
        }
    `, A = i`
        .image {
            display: inline-block;
            margin: 0 auto;
            object-fit: contain;
            width: 100%;
            position: relative;
            height: auto;
            text-align: center;
        }
    `, P = i`
        .code-inline {
            background-color: ${n("neutral")};
            color: ${n("background")};
            border-radius: ${t};
            font-weight: 500;
            font-family: ${e.get(p, "code")};
            padding: 0 3px;
        }

        .strong {
            font-weight: 600;
        }

        .link,
        a {
            color: ${n("secondary")};
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            font-weight: 500;
            &:hover {
                background-color: ${n("line")};
                box-shadow: 0 3px ${n("line")}, 0 -3px ${n("line")};
            }
        }

        .strike-through {
            text-decoration-color: ${n("secondary")};
        }
    `, j = i`
        .footnote-definition {
            ${e.get(g, void 0)};
            border-radius: ${e.get(d, "radius")};
            background-color: ${n("background")};
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
                    color: ${n("secondary")};
                    font-weight: 500;
                }
            }
            & > .footnote-definition_anchor {
                width: 16px;
            }
        }
    `, N = i`
        /* copy from https://github.com/ProseMirror/prosemirror-tables/blob/master/style/tables.css */
        .tableWrapper {
            overflow-x: auto;
            margin: 0;
            ${e.get(u, ["x"])}
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
            border-radius: ${e.get(d, "radius")};
        }
        tr {
            ${e.get(g, "bottom")};
        }
        td,
        th {
            padding: 0 16px;
            vertical-align: top;
            box-sizing: border-box;
            position: relative;

            min-width: 100px;
            ${e.get(g, void 0)};
            text-align: left;
            line-height: 3;
            height: 48px;
            vertical-align: middle;
        }
        th {
            background: ${n("background", 0.5)};
            font-weight: 400;
        }
        .column-resize-handle {
            position: absolute;
            right: -2px;
            top: 0;
            bottom: 0;
            z-index: 20;
            pointer-events: none;
            background: ${n("secondary")};
            width: ${e.get(d, "lineWidth")};
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
                background: ${n("secondary", 0.38)};
                pointer-events: none;
            }

            & ::selection {
                background: transparent;
            }
        }
    `;
  I(c), o`
        .milkdown {
            .material-icons-outlined {
                font-size: 24px;
            }

            position: relative;
            margin-left: auto;
            margin-right: auto;
            box-sizing: border-box;


            color: ${l};
            background: ${a};
            font-family: ${e.get(p, "typography")};

            ${e.get(m, void 0)}
            ${e.get(u, void 0)}
            ${f};

            .resize-cursor {
                cursor: ew-resize;
                cursor: col-resize;
            }

            .editor {
                ${v};

                ${z};
                ${C};
                ${M};
                ${T};
                ${W};
                ${A};
                ${L};

                ${N};
                ${j};

                ${P};
            }
        }
    `;
}, V = {
  typography: B,
  code: U
}, J = {
  radius: "4px",
  lineWidth: "1px"
}, K = (e) => (c, o) => {
  const { css: i } = c, n = e ? _ : w;
  o.set(b, (t) => {
    if (!t)
      return;
    const [l, a] = t, h = n[l], s = q(h);
    if (!!s)
      return `rgba(${s == null ? void 0 : s.join(", ")}, ${a || 1})`;
  }), o.set(d, (t) => {
    if (!!t)
      return J[t];
  }), o.set(p, (t) => {
    if (!!t)
      return V[t].join(", ");
  }), o.set(u, ([t = "y", l = "normal"] = ["y", "normal"]) => {
    const a = o.get(b, ["secondary", 0.38]), h = o.get(b, ["secondary", 0.12]), s = o.get(b, ["secondary"]), f = i({
      "&::-webkit-scrollbar": {
        [t === "y" ? "width" : "height"]: `${l === "thin" ? 2 : 12}px`,
        backgroundColor: "transparent"
      }
    });
    return i`
            scrollbar-width: thin;
            scrollbar-color: ${a} ${h};
            -webkit-overflow-scrolling: touch;

            ${f};

            &::-webkit-scrollbar-track {
                border-radius: 999px;
                background: transparent;
                border: 4px solid transparent;
            }

            &::-webkit-scrollbar-thumb {
                border-radius: 999px;
                background-color: ${a};
                border: ${l === "thin" ? 0 : 4}px solid transparent;
                background-clip: content-box;
            }

            &::-webkit-scrollbar-thumb:hover {
                background-color: ${s};
            }
        `;
  }), o.set(m, () => {
    const t = o.get(d, "lineWidth"), l = (a) => o.get(b, ["shadow", a]);
    return i`
            box-shadow: 0 ${t} ${t} ${l(0.14)}, 0 2px ${t} ${l(0.12)},
                0 ${t} 3px ${l(0.2)};
        `;
  }), o.set(g, (t) => {
    const l = o.get(d, "lineWidth"), a = o.get(b, ["line"]);
    return t ? i({
      [`border${((s) => s.charAt(0).toUpperCase() + s.slice(1))(t)}`]: `${l} solid ${a}`
    }) : i`
                border: ${l} solid ${a};
            `;
  }), o.set(H, (t) => {
    if (!!t)
      return D(t);
  }), o.set(F, () => {
    E(o, c);
  }), G(o, c);
}, x = (e = !1) => S((c, o) => K(e)(c, o)), Z = x(!0), ee = x(!1);
let y = !1;
var k;
typeof window < "u" && (y = Boolean((k = window.matchMedia) == null ? void 0 : k.call(window, "(prefers-color-scheme: dark)").matches));
const oe = x(y);
export {
  Y as color,
  K as createTheme,
  _ as darkColor,
  V as font,
  x as getNord,
  w as lightColor,
  oe as nord,
  Z as nordDark,
  ee as nordLight,
  J as size
};
//# sourceMappingURL=index.es.js.map
