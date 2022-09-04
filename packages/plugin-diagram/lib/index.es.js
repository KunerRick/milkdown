import { createNode as D, AtomList as B } from "@milkdown/utils";
import { getPalette as E, createCmdKey as I, createCmd as $, themeManagerCtx as T } from "@milkdown/core";
import { expectDomTypeError as O } from "@milkdown/exception";
import { setBlockType as A } from "@milkdown/prose/commands";
import { InputRule as H } from "@milkdown/prose/inputrules";
import { NodeSelection as R } from "@milkdown/prose/state";
import M from "mermaid";
import { visit as F } from "unist-util-visit";
import { customAlphabet as V } from "nanoid";
const j = (r) => {
  const t = E(r), s = t("line"), u = t("solid"), o = t("neutral"), c = t("background");
  return Object.entries({
    background: c,
    primaryColor: c,
    secondaryColor: s,
    primaryTextColor: o,
    noteBkgColor: c,
    noteTextColor: u,
    fontSize: "16px"
  }).filter(([h, d]) => (d == null ? void 0 : d.length) > 0).map(([h, d]) => `'${h}':'${d}'`).join(", ");
}, z = V("abcedfghicklmn", 10), v = (r) => {
  var t;
  return ((t = r == null ? void 0 : r.attrs) == null ? void 0 : t.identity) || z();
}, P = /^```mermaid$/, W = I("TurnIntoDiagram"), _ = D((r, t) => {
  var g, h, d;
  const s = (g = t == null ? void 0 : t.theme) != null ? g : void 0, u = (h = t == null ? void 0 : t.themeCSS) != null ? h : void 0, o = "diagram";
  M.startOnLoad = !1, M.initialize({ startOnLoad: !1, theme: s, themeCSS: u });
  const c = {
    empty: "Empty",
    error: "Syntax Error",
    ...(d = t == null ? void 0 : t.placeholder) != null ? d : {}
  };
  return {
    id: o,
    schema: () => ({
      content: "text*",
      group: "block",
      marks: "",
      defining: !0,
      atom: !0,
      code: !0,
      isolating: !0,
      attrs: {
        value: {
          default: ""
        },
        identity: {
          default: ""
        }
      },
      parseDOM: [
        {
          tag: `div[data-type="${o}"]`,
          preserveWhitespace: "full",
          getAttrs: (e) => {
            if (!(e instanceof HTMLElement))
              throw O(e);
            return {
              value: e.dataset.value,
              identity: e.id
            };
          }
        }
      ],
      toDOM: (e) => {
        const a = v(e);
        return [
          "div",
          {
            id: a,
            class: r.getClassName(e.attrs, "mermaid"),
            "data-type": o,
            "data-value": e.attrs.value || e.textContent || ""
          },
          0
        ];
      },
      parseMarkdown: {
        match: ({ type: e }) => e === o,
        runner: (e, a, m) => {
          const n = a.value;
          e.openNode(m, { value: n }), n && e.addText(n), e.closeNode();
        }
      },
      toMarkdown: {
        match: (e) => e.type.name === o,
        runner: (e, a) => {
          var m;
          e.addNode("code", void 0, ((m = a.content.firstChild) == null ? void 0 : m.text) || "", { lang: "mermaid" });
        }
      }
    }),
    commands: (e) => [$(W, () => A(e, { id: v() }))],
    view: (e) => (a, m, n) => {
      const y = v(a);
      let f = "", i = a;
      e.get(T).onFlush(() => {
        f = `%%{init: {'theme': 'base', 'themeVariables': { ${j(r.themeManager)} }}}%%
`;
      });
      const l = r.themeManager.get("inner-editor", {
        view: m,
        getPos: n,
        render: (p) => {
          try {
            p ? l.preview.innerHTML = M.render(y, f + p) : l.preview.innerHTML = c.empty;
          } catch {
            const x = document.getElementById("d" + y);
            x && x.remove(), l.preview.innerHTML = c.error;
          } finally {
            l.dom.appendChild(l.preview);
          }
        }
      });
      if (!l)
        return {};
      const { onUpdate: C, editor: b, dom: k, onFocus: w, onBlur: N, onDestroy: S, stopEvent: L } = l;
      return b.dataset.type = o, k.classList.add("mermaid", "diagram"), C(i, !0), e.get(T).onFlush(() => {
        C(i, !1);
      }, !1), {
        dom: k,
        update: (p) => p.sameMarkup(i) ? (i = p, C(i, !1), !0) : !1,
        selectNode: () => {
          w(i);
        },
        deselectNode: () => {
          N(i);
        },
        stopEvent: L,
        ignoreMutation: () => !0,
        destroy() {
          S();
        }
      };
    },
    inputRules: (e) => [
      new H(P, (a, m, n, y) => {
        const f = a.doc.resolve(n);
        if (!f.node(-1).canReplaceWith(f.index(-1), f.indexAfter(-1), e))
          return null;
        const i = a.tr.delete(n, y).setBlockType(n, n, e, { id: v() });
        return i.setSelection(R.create(i.doc, n - 1));
      })
    ],
    remarkPlugins: () => [q]
  };
}), K = (r) => ({
  type: "diagram",
  value: r
}), U = (r) => F(r, "code", (t, s, u) => {
  const { lang: o, value: c } = t;
  if (o !== "mermaid")
    return t;
  const g = K(c);
  return u && s != null && u.children.splice(s, 1, g), t;
}), q = () => {
  function r(t) {
    U(t);
  }
  return r;
}, ae = B.create([_()]);
export {
  W as TurnIntoDiagram,
  ae as diagram,
  _ as diagramNode,
  q as remarkMermaid
};
//# sourceMappingURL=index.es.js.map
