import { ThemeIcon as S, ThemeFont as T, ThemeBorder as M, ThemeShadow as P, ThemeScrollbar as D, getPalette as $, ThemeSize as w } from "@milkdown/core";
import { baseKeymap as A, chainCommands as F, deleteSelection as _ } from "@milkdown/prose/commands";
import { history as W, undo as j, redo as C } from "@milkdown/prose/history";
import { keymap as I } from "@milkdown/prose/keymap";
import { EditorState as O, TextSelection as L } from "@milkdown/prose/state";
import { StepMap as B } from "@milkdown/prose/transform";
import { EditorView as N } from "@milkdown/prose/view";
import { missingRootElement as z } from "@milkdown/exception";
import { calculateTextPosition as U } from "@milkdown/prose";
const ae = ({ injectGlobal: e }) => e`
    /* copy from https://github.com/ProseMirror/@milkdown/prose/blob/master/style/prosemirror.css */
    .ProseMirror {
        position: relative;
    }

    .ProseMirror {
        word-wrap: break-word;
        white-space: pre-wrap;
        white-space: break-spaces;
        -webkit-font-variant-ligatures: none;
        font-variant-ligatures: none;
        font-feature-settings: 'liga' 0; /* the above doesn't seem to work in Edge */
    }

    .ProseMirror pre {
        white-space: pre-wrap;
    }

    .ProseMirror li {
        position: relative;
    }

    .ProseMirror-hideselection *::selection {
        background: transparent;
    }
    .ProseMirror-hideselection *::-moz-selection {
        background: transparent;
    }
    .ProseMirror-hideselection {
        caret-color: transparent;
    }

    .ProseMirror-selectednode {
        outline: 2px solid #8cf;
    }

    /* Make sure li selections wrap around markers */

    li.ProseMirror-selectednode {
        outline: none;
    }

    li.ProseMirror-selectednode:after {
        content: '';
        position: absolute;
        left: -32px;
        right: -2px;
        top: -2px;
        bottom: -2px;
        border: 2px solid #8cf;
        pointer-events: none;
    }

    /* Protect against generic img rules */

    img.ProseMirror-separator {
        display: inline !important;
        border: none !important;
        margin: 0 !important;
    }
`, H = (e, { css: f }) => {
  const o = $(e), r = e.get(w, "radius"), x = e.get(w, "lineWidth");
  return f`
        background-color: ${o("background")};
        color: ${o("neutral")};
        font-size: 14px;
        padding: 18px 6px 22px;
        border-radius: ${r};
        font-family: ${e.get(T, "typography")};

        .code-fence_selector-wrapper {
            position: relative;
        }

        .code-fence_selector {
            width: 180px;
            box-sizing: border-box;
            border-radius: ${r};
            margin: 0 18px 18px;
            cursor: pointer;
            background-color: ${o("surface")};
            position: relative;
            display: flex;
            color: ${o("neutral", 0.87)};
            letter-spacing: 0.5px;
            height: 42px;
            align-items: center;

            ${e.get(M, void 0)};
            ${e.get(P, void 0)};

            & > .icon {
                width: 42px;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: ${o("solid", 0.87)};
                border-left: ${x} solid ${o("line")};

                text-align: center;
                transition: all 0.2s ease-in-out;
                &:hover {
                    background: ${o("background")};
                    color: ${o("primary")};
                }
            }

            > span:first-child {
                padding-left: 16px;
                flex: 1;
                font-weight: 500;
            }
        }

        .code-fence_selector-list-item {
            list-style: none;
            line-height: 2;
            padding-left: 16px;
            cursor: pointer;
            margin: 0 !important;
            :hover {
                background: ${o("secondary", 0.12)};
                color: ${o("primary")};
            }
        }

        .code-fence_selector-list {
            &[data-fold='true'] {
                display: none;
            }

            margin: 0 !important;
            font-weight: 500;
            position: absolute;
            z-index: 1;
            top: 42px;
            box-sizing: border-box;
            left: 18px;
            padding: 8px 0;
            max-height: 260px;
            width: 180px;
            background-color: ${o("surface")};
            border-top: none;
            overflow-y: auto;
            display: flex;
            flex-direction: column;

            ${e.get(D, ["y"])}
            ${e.get(M, void 0)};
            ${e.get(P, void 0)};
        }
    `;
}, K = (e, f) => {
  e.set("code-fence", ({ editable: o, onSelectLanguage: r, onBlur: x, onFocus: g, languageList: p }) => {
    const c = document.createElement("div"), t = document.createElement("div"), s = document.createElement("ul"), d = document.createElement("pre"), a = document.createElement("code"), n = document.createElement("div");
    n.className = "code-fence_selector";
    const i = document.createElement("span");
    n.appendChild(i);
    const u = e.get(S, "downArrow");
    o() && u && n.appendChild(u.dom), a.spellcheck = !1, t.className = "code-fence_selector-wrapper", t.contentEditable = "false", t.append(n), t.append(s), d.append(a);
    const l = document.createElement("div");
    a.append(l), l.style.whiteSpace = "inherit", c.append(t, d), c.classList.add("code-fence"), e.onFlush(() => {
      const y = H(e, f);
      y && c.classList.add(y);
    }), s.className = "code-fence_selector-list", s.addEventListener("mousedown", (y) => {
      if (y.preventDefault(), y.stopPropagation(), !o())
        return;
      const v = y.target;
      if (!(v instanceof HTMLLIElement))
        return;
      const h = v.dataset.value;
      h != null && r(h);
    }), n.addEventListener("mousedown", (y) => {
      y.preventDefault(), y.stopPropagation(), o() && g();
    });
    const m = () => {
      !o() || s.dataset.fold === "true" || x();
    };
    return document.addEventListener("mousedown", m), p.forEach((y) => {
      const v = document.createElement("li");
      v.className = "code-fence_selector-list-item", v.innerText = y || "--", s.appendChild(v), v.setAttribute("data-value", y);
    }), {
      dom: c,
      contentDOM: l,
      onUpdate: (y) => {
        c.dataset.language = y.attrs.language, i.innerText = y.attrs.language || "--", s.setAttribute("data-fold", y.attrs.fold ? "true" : "false");
      },
      onDestroy: () => {
        c.remove(), document.removeEventListener("mousedown", m);
      }
    };
  });
}, R = (e, { css: f }) => {
  const o = $(e);
  e.set("image", ({ placeholder: r, isBlock: x, onError: g, onLoad: p }) => {
    const c = (l) => {
      var m;
      return (m = e.get(S, l)) == null ? void 0 : m.dom;
    }, t = document.createElement("span");
    t.classList.add("image-container"), e.onFlush(() => {
      const l = f`
                display: inline-block;
                position: relative;
                text-align: center;
                font-size: 0;
                vertical-align: text-bottom;
                line-height: 1;

                ${x ? `
                width: 100%;
                margin: 0 auto;
                ` : ""}

                &.ProseMirror-selectednode::after {
                    content: '';
                    background: ${o("secondary", 0.38)};
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                }

                img {
                    max-width: 100%;
                    height: auto;
                    object-fit: contain;
                    margin: 0 2px;
                }
                .icon,
                .placeholder {
                    display: none;
                }

                &.system {
                    width: 100%;
                    padding: 0 32px;
                    font-size: inherit;

                    img {
                        width: 0;
                        height: 0;
                        display: none;
                    }

                    .icon,
                    .placeholder {
                        display: inline;
                    }

                    box-sizing: border-box;
                    height: 48px;
                    background-color: ${o("background")};
                    border-radius: ${e.get(w, "radius")};
                    display: inline-flex;
                    gap: 32px;
                    justify-content: flex-start;
                    align-items: center;
                    .placeholder {
                        margin: 0;
                        line-height: 1;
                        &::before {
                            content: '';
                            font-size: 14px;
                            color: ${o("neutral", 0.6)};
                        }
                    }
                }

                &.empty {
                    .placeholder {
                        &::before {
                            content: '${r}';
                        }
                    }
                }
            `;
      l && t.classList.add(l);
    });
    const s = document.createElement("img");
    t.append(s);
    let d = c("image");
    const a = document.createElement("span");
    a.classList.add("placeholder"), t.append(d, a);
    const n = (l) => {
      const m = c(l);
      t.replaceChild(m, d), d = m;
    }, i = (l) => {
      t.classList.add("system", "loading"), n("loading");
      const m = document.createElement("img");
      m.src = l, m.onerror = () => {
        g == null || g(m);
      }, m.onload = () => {
        p == null || p(m);
      };
    };
    return {
      dom: t,
      onUpdate: (l) => {
        const { src: m, alt: b, title: E, loading: y, failed: v } = l.attrs;
        if (s.src = m, s.title = E || b, s.alt = b, m.length === 0) {
          t.classList.add("system", "empty"), n("image");
          return;
        }
        if (y) {
          i(m);
          return;
        }
        if (v) {
          t.classList.remove("loading", "empty"), t.classList.add("system", "failed"), n("brokenImage");
          return;
        }
        if (m.length > 0) {
          t.classList.remove("system", "empty", "loading");
          return;
        }
        t.classList.add("system", "empty"), n("image");
      }
    };
  });
}, V = (e, { css: f }) => {
  const o = $(e), r = e.get(w, "radius"), x = e.get(T, "code"), g = f`
        color: ${o("neutral", 0.87)};
        background-color: ${o("background")};
        border-radius: ${r};
        padding: 16px 32px;
        font-size: 14px;
        font-family: ${x};
        overflow: hidden;
        line-height: 1.5;
        .ProseMirror {
            outline: none;
        }
    `, p = f`
        display: none;
    `, c = f`
        display: flex;
        justify-content: center;
        padding: 16px 0;
    `;
  return {
    codeStyle: g,
    hideCodeStyle: p,
    previewPanelStyle: c
  };
}, Y = (e, f) => {
  let o = !1, r;
  return {
    isEditing: () => o,
    innerView: () => r,
    openEditor: (p, c) => {
      r = new N(p, {
        state: O.create({
          doc: c,
          plugins: [
            W(),
            I({
              ...A,
              Backspace: F(_, (s) => {
                var l;
                if (!s.selection.empty || r && r.state.doc.textContent.length > 0)
                  return !1;
                const { dispatch: d, state: a } = e, n = (l = a.schema.nodes.paragraph) == null ? void 0 : l.create();
                if (!n)
                  return !1;
                const i = a.tr.replaceSelectionWith(n);
                let u = i.selection.from - 2;
                return u < 0 && (u = 0), d(i.setSelection(L.create(i.doc, u))), e.focus(), !0;
              }),
              "Mod-Enter": (s, d) => {
                var a;
                if (d) {
                  const { state: n } = e, { to: i } = n.selection, u = (a = n.schema.nodes.paragraph) == null ? void 0 : a.createAndFill();
                  if (!u)
                    return !1;
                  const l = n.tr.replaceWith(i, i, u);
                  e.dispatch(l.setSelection(L.create(l.doc, i))), e.focus();
                }
                return !0;
              }
            }),
            I({
              "Mod-z": j,
              "Mod-y": C,
              "Shift-Mod-z": C
            })
          ]
        }),
        plugins: [],
        dispatchTransaction: (s) => {
          if (!r)
            return;
          const { state: d, transactions: a } = r.state.applyTransaction(s);
          if (r.updateState(d), !s.getMeta("fromOutside")) {
            const n = e.state.tr, i = B.offset(f() + 1);
            a.forEach((u) => {
              const { steps: l } = u;
              l.forEach((m) => {
                const b = m.map(i);
                if (!b)
                  throw Error("step discarded!");
                n.step(b);
              });
            }), n.docChanged && e.dispatch(n);
          }
        }
      }), r.focus();
      const { state: t } = r;
      r.dispatch(t.tr.setSelection(L.create(t.doc, 0))), o = !0;
    },
    closeEditor: () => {
      r && r.destroy(), r = void 0, o = !1;
    }
  };
}, q = (e, f) => {
  e.set("inner-editor", ({ view: o, getPos: r, render: x }) => {
    const g = Y(o, r), p = document.createElement("div");
    p.classList.add("math-block");
    const c = document.createElement("div"), t = document.createElement("div");
    let s = "", d = "", a = "";
    return e.onFlush(() => {
      ({ codeStyle: s, hideCodeStyle: d, previewPanelStyle: a } = V(e, f)), s && d && c.classList.add(s, d), a && t.classList.add(a);
    }), p.append(c), {
      dom: p,
      preview: t,
      editor: c,
      onUpdate: (n, i) => {
        var m;
        if (i) {
          const b = n.attrs.value || n.textContent || "";
          c.dataset.value = b, x(b);
          return;
        }
        const u = g.innerView();
        if (u) {
          const b = u.state, E = n.content.findDiffStart(b.doc.content);
          if (E != null) {
            const y = n.content.findDiffEnd(b.doc.content);
            if (y) {
              let { a: v, b: h } = y;
              const k = E - Math.min(v, h);
              k > 0 && (v += k, h += k), u.dispatch(b.tr.replace(E, h, n.slice(E, v)).setMeta("fromOutside", !0));
            }
          }
        }
        const l = ((m = n.content.firstChild) == null ? void 0 : m.text) || "";
        c.dataset.value = l, x(l);
      },
      onFocus: (n) => {
        !o.editable || (d && c.classList.remove(d), g.openEditor(c, n), p.classList.add("ProseMirror-selectednode"));
      },
      onBlur: () => {
        d && c.classList.add(d), g.closeEditor(), p.classList.remove("ProseMirror-selectednode");
      },
      onDestroy: () => {
        t.remove(), c.remove(), p.remove();
      },
      stopEvent: (n) => {
        const i = g.innerView(), { target: u } = n, l = u && (i == null ? void 0 : i.dom.contains(u));
        return !!(i && l);
      }
    };
  });
}, G = (e, { css: f }, o) => {
  const r = $(e);
  return f`
        ${e.get(M, void 0)}
        ${e.get(P, void 0)}

        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        background: ${r("surface")};
        border-radius: ${e.get(w, "radius")};
        font-size: 16px;

        height: 56px;
        box-sizing: border-box;
        width: ${o.width};
        padding: 0 16px;
        gap: 16px;
        z-index: 2;

        input,
        button {
            all: unset;
        }

        input {
            flex-grow: 1;
            caret-color: ${r("primary")};
            &::placeholder {
                color: ${r("neutral", 0.6)};
            }
        }

        button {
            cursor: pointer;
            height: 36px;
            color: ${r("primary")};
            font-size: 14px;
            padding: 0 8px;
            font-weight: 500;
            letter-spacing: 1.25px;
            &:hover {
                background-color: ${r("secondary", 0.12)};
            }
            &.disable {
                color: ${r("neutral", 0.38)};
                cursor: not-allowed;
                &:hover {
                    background: transparent;
                }
            }
            &.hide {
                display: none;
            }
        }

        &.hide {
            display: none;
        }
    `;
}, J = (e, f) => {
  U(e, f, (o, r, x, g) => {
    const p = e.dom.parentElement;
    if (!p)
      throw z();
    const c = r.left - o.left;
    let t = o.left - g.left - (x.width - c) / 2;
    const s = o.bottom - g.top + 14 + p.scrollTop;
    return t < 0 && (t = 0), [s, t];
  });
}, Q = (e, f) => {
  e.set("input-chip", ({ isBindMode: o, onUpdate: r, buttonText: x, placeholder: g, width: p = "400px", calculatePosition: c = J }) => {
    let t = null, s = !1, d = "";
    const a = document.createElement("div");
    e.onFlush(() => {
      const h = G(e, f, { width: p });
      h && a.classList.add(h);
    }), a.classList.add("tooltip-input");
    const n = document.createElement("input");
    g && (n.placeholder = g), a.appendChild(n), o || (t = document.createElement("button"), t.innerText = x || "APPLY", a.appendChild(t));
    const i = () => {
      a.classList.add("hide");
    }, u = (h) => {
      a.classList.remove("hide"), c(h, a);
    }, l = (h) => {
      const { target: k } = h;
      if (k instanceof HTMLInputElement) {
        if (d = k.value, !t) {
          r(d);
          return;
        }
        if (!d) {
          t.classList.add("disable"), s = !0;
          return;
        }
        t.classList.remove("disable"), s = !1;
      }
    }, m = (h) => {
      s || (h.stopPropagation(), r(d), i());
    }, b = (h) => {
      "key" in h && h.key === "Enter" && (r(d), i());
    };
    return {
      dom: a,
      init: (h) => {
        const k = h.dom.parentElement;
        if (!k)
          throw z();
        n.addEventListener("input", l), n.addEventListener("keydown", b), t == null || t.addEventListener("mousedown", m), k.appendChild(a), i();
      },
      show: u,
      hide: i,
      destroy: () => {
        n.removeEventListener("input", l), n.removeEventListener("keydown", b), t == null || t.removeEventListener("mousedown", m), a.remove();
      },
      update: (h) => {
        d = h, n.value = h;
      }
    };
  });
}, X = (e, { css: f }) => {
  const o = $(e);
  e.set("task-list-item", ({ onChange: r, editable: x }) => {
    const g = (i) => {
      var u;
      return (u = e.get(S, i)) == null ? void 0 : u.dom;
    }, p = document.createElement("li"), c = document.createElement("label"), t = document.createElement("span"), s = document.createElement("input"), d = document.createElement("div");
    let a = g("unchecked");
    c.appendChild(a);
    const n = (i) => {
      const u = g(i);
      c.replaceChild(u, a), a = u;
    };
    return c.append(s, t), p.append(c, d), c.contentEditable = "false", s.type = "checkbox", x() || (s.disabled = !0, c.style.cursor = "not-allowed"), s.onchange = (i) => {
      if (i.target instanceof HTMLInputElement) {
        if (!x()) {
          s.checked = !s.checked;
          return;
        }
        i.preventDefault(), r(s.checked);
      }
    }, p.dataset.type = "task-item", p.classList.add("task-list-item"), e.onFlush(() => {
      const i = f`
                list-style-type: none;
                position: relative;

                & > div {
                    overflow: hidden;
                    padding: 0 2px;
                    width: 100%;
                }

                label {
                    display: inline-block;
                    width: 24px;
                    height: 24px;
                    cursor: pointer;
                    input {
                        visibility: hidden;
                    }
                }
                &[data-checked='true'] {
                    label {
                        color: ${o("primary")};
                    }
                }
                &[data-checked='false'] {
                    label {
                        color: ${o("solid", 0.87)};
                    }
                }
                .paragraph {
                    margin: 8px 0;
                }
            `;
      i && p.classList.add(i);
    }), {
      dom: p,
      contentDOM: d,
      onUpdate: (i) => {
        p.dataset.checked = i.attrs.checked, i.attrs.checked ? s.setAttribute("checked", "checked") : s.removeAttribute("checked"), n(i.attrs.checked ? "checked" : "unchecked");
      }
    };
  });
}, de = (e, f) => {
  [Q, R, K, X, q].forEach((o) => {
    o(e, f);
  });
};
export {
  K as codeFence,
  R as image,
  ae as injectProsemirrorView,
  q as innerEditor,
  Q as inputChip,
  X as taskListItem,
  de as useAllPresetRenderer
};
//# sourceMappingURL=index.es.js.map
