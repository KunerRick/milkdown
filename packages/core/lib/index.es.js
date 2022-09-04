var Z = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var c = (n, e, t) => (Z(n, e, "read from private field"), t ? t.call(n) : e.get(n)), u = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
}, l = (n, e, t, o) => (Z(n, e, "write to private field"), o ? o.call(n, t) : e.set(n, t), t);
import { createTimer as g, createSlice as r, createContainer as we, createClock as Oe, Ctx as Me, Pre as Pe } from "@milkdown/ctx";
export * from "@milkdown/ctx";
import { docTypeError as Ve, callCommandBeforeEditorView as ve } from "@milkdown/exception";
import { PluginKey as U, Plugin as X, EditorState as De } from "@milkdown/prose/state";
import { EditorView as be } from "@milkdown/prose/view";
import { customInputRules as Ke } from "@milkdown/prose";
import { baseKeymap as Ne } from "@milkdown/prose/commands";
import { keymap as ze } from "@milkdown/prose/keymap";
import { Schema as Ie, DOMParser as _e, Node as Le } from "@milkdown/prose/model";
import z from "remark-parse";
import I from "remark-stringify";
import { unified as _ } from "unified";
import { createThemeManager as Ae, emotionConfigCtx as x, emotionCtx as L, themeManagerCtx as ye, initEmotion as We, internalThemeKeys as Ce, ThemeGlobal as $e } from "@milkdown/design-system";
export * from "@milkdown/design-system";
import { createParser as qe, createSerializer as Be } from "@milkdown/transformer";
export * from "@milkdown/transformer";
const A = g("ConfigReady"), Ge = (n) => (e) => (e.record(A), async (t) => {
  await n(t), t.done(A);
}), ee = r([], "themeTimer"), W = g("ThemeEnvironmentReady"), $ = g("ThemeReady"), He = new U("MILKDOWN_THEME_RESET"), Je = (n) => {
  const e = Ae();
  return n.inject(x).inject(L).inject(ye, e).inject(ee, [A]).record($).record(W), async (t) => {
    await t.waitTimers(ee);
    const o = We(t.get(x));
    Ce.forEach((i) => {
      e.inject(i);
    }), t.set(L, o), t.done(W), t.done($), await t.wait(S), t.update(O, (i) => i.concat(new X({
      key: He,
      view: () => (e.runExecutor(), {
        destroy: () => {
          o.flush();
        }
      })
    })));
  };
}, Rt = (n) => {
  let e = null;
  const t = () => async (o) => {
    await o.wait(W);
    const i = o.get(L), a = o.get(ye);
    a.setExecutor(() => {
      n == null || n(i, a), e == null || e(i, a), Ce.forEach((p) => {
        a.has(p) || console.warn("Theme key not found: ", p.sliceName);
      }), a.get($e, void 0);
    });
  };
  return t.override = (o) => (e = o, t), t;
}, S = g("InitReady"), te = r([], "initTimer"), Fe = r({}, "editor"), fe = r([], "inputRules"), O = r([], "prosePlugins"), je = r([], "remarkPlugins"), Te = r([], "nodeView"), ke = r([], "markView"), R = r(_().use(z).use(I), "remark"), Qe = {}, ne = r(Qe, "remarkStringifyOptions"), Ue = (n) => (e) => (e.inject(Fe, n).inject(O).inject(je).inject(fe).inject(Te).inject(ke).inject(ne).inject(R, _().use(z).use(I)).inject(te, [$]).record(S), async (t) => {
  await t.waitTimers(te);
  const o = t.get(ne);
  t.set(R, _().use(z).use(I, o)), t.done(S);
}), M = g("schemaReady"), P = r({}, "schema"), re = r([], "schemaTimer"), b = r([], "nodes"), K = r([], "marks"), oe = (n) => {
  var e;
  return {
    ...n,
    parseDOM: (e = n.parseDOM) == null ? void 0 : e.map((t) => ({ priority: n.priority, ...t }))
  };
}, Xe = (n) => (n.inject(P).inject(b).inject(K).inject(re, [S]).record(M), async (e) => {
  await e.waitTimers(re);
  const t = e.get(R), i = e.get(je).reduce((d, s) => d.use(s), t);
  e.set(R, i);
  const a = Object.fromEntries(e.get(b).map(([d, s]) => [d, oe(s)])), p = Object.fromEntries(e.get(K).map(([d, s]) => [d, oe(s)]));
  e.set(P, new Ie({
    nodes: a,
    marks: p
  })), e.done(M);
}), q = r(() => {
}, "parser"), se = r([], "parserTimer"), B = g("ParserReady"), Ye = (n) => (n.inject(q).inject(se, [M]).record(B), async (e) => {
  await e.waitTimers(se);
  const t = e.get(b), o = e.get(K), i = e.get(R), a = e.get(P), p = [
    ...t.map(([s, h]) => ({ id: s, ...h })).map((s) => ({ ...s, is: "node" })),
    ...o.map(([s, h]) => ({ id: s, ...h })).map((s) => ({ ...s, is: "mark" }))
  ], d = Object.fromEntries(p.map(({ id: s, parseMarkdown: h, is: C }) => [s, { ...h, is: C, key: s }]));
  e.set(q, qe(a, d, i)), e.done(B);
}), ie = r(() => "", "serializer"), ae = r([], "serializerTimer"), G = g("SerializerReady"), Ze = (n) => (n.inject(ie).inject(ae, [M]).record(G), async (e) => {
  await e.waitTimers(ae);
  const t = e.get(b), o = e.get(K), i = e.get(R), a = e.get(P), p = [...t, ...o], d = Object.fromEntries(p.map(([s, h]) => [s, h.toMarkdown]));
  e.set(ie, Be(a, d, i)), e.done(G);
}), ce = r("", "defaultValue"), D = r({}, "editorState"), me = r((n) => n, "stateOptions"), de = r([], "editorStateTimer"), H = g("EditorStateReady"), xe = new U("MILKDOWN_STATE_TRACKER"), et = (n, e, t) => {
  if (typeof n == "string")
    return e(n);
  if (n.type === "html")
    return _e.fromSchema(t).parse(n.dom);
  if (n.type === "json")
    return Le.fromJSON(t, n.value);
  throw Ve(n);
}, tt = (n) => (n.inject(ce).inject(D).inject(me).inject(de, [B, G, Q]).record(H), async (e) => {
  await e.waitTimers(de);
  const t = e.get(P), o = e.get(q), i = e.get(fe), a = e.get(me), p = e.get(O), d = e.get(ce), s = et(d, o, t), h = [
    ...p,
    new X({
      key: xe,
      state: {
        init: () => {
        },
        apply: (Re, N, mt, Se) => {
          e.set(D, Se);
        }
      }
    }),
    Ke({ rules: i }),
    ze(Ne)
  ];
  e.set(O, h);
  const C = a({
    schema: t,
    doc: s,
    plugins: h
  }), m = De.create(C);
  e.set(D, m), e.done(H);
}), J = r({}, "editorView"), pe = r({}, "editorViewOptions"), he = r(null, "root"), le = r([], "editorViewTimer"), Ee = r(null, "rootDOM"), F = g("EditorViewReady"), nt = (n, e) => {
  const t = document.createElement("div");
  return t.className = "milkdown", n.appendChild(t), e.set(Ee, t), t;
}, rt = (n) => {
  n.classList.add("editor"), n.setAttribute("role", "textbox");
}, ot = new U("MILKDOWN_VIEW_CLEAR"), st = (n) => (n.inject(he, document.body).inject(J).inject(pe).inject(Ee).inject(le, [H]).record(F), async (e) => {
  await e.wait(S);
  const t = e.get(he) || document.body, o = typeof t == "string" ? document.querySelector(t) : t;
  e.update(O, (h) => [
    new X({
      key: ot,
      view: (C) => {
        const m = o ? nt(o, e) : void 0;
        return (() => {
          if (m && o) {
            const N = C.dom;
            o.replaceChild(m, N), m.appendChild(N);
          }
        })(), {
          destroy: () => {
            m != null && m.parentNode && (m == null || m.parentNode.replaceChild(C.dom, m)), m == null || m.remove();
          }
        };
      }
    }),
    ...h
  ]), await e.waitTimers(le);
  const i = e.get(D), a = e.get(pe), p = Object.fromEntries(e.get(Te)), d = Object.fromEntries(e.get(ke)), s = new be(o, {
    state: i,
    nodeViews: p,
    markViews: d,
    ...a
  });
  rt(s.dom), e.set(J, s), e.done(F);
});
var f, w;
class it {
  constructor() {
    u(this, f, void 0);
    u(this, w, void 0);
    l(this, f, we()), l(this, w, null), this.setCtx = (e) => {
      l(this, w, e);
    };
  }
  create(e, t) {
    return e(c(this, f).sliceMap, t);
  }
  get(e) {
    return c(this, f).getSlice(e).get();
  }
  call(e, t) {
    if (c(this, w) == null)
      throw ve();
    const i = this.get(e)(t), a = c(this, w).get(J);
    return i(a.state, a.dispatch, a);
  }
}
f = new WeakMap(), w = new WeakMap();
const St = (n, e) => [n, e], Ot = (n = "cmdKey") => r(() => () => !1, n), at = r({}, "commands"), ue = r([], "commandsTimer"), Q = g("CommandsReady"), ct = (n) => {
  const e = new it();
  return n.inject(at, e).inject(ue, [M]).record(Q), async (t) => {
    await t.waitTimers(ue), t.done(Q), await t.wait(F), e.setCtx(t);
  };
};
var j, T, k, E, y, V, v;
const Y = class {
  constructor() {
    u(this, j, void 0);
    u(this, T, void 0);
    u(this, k, void 0);
    u(this, E, void 0);
    u(this, y, void 0);
    u(this, V, void 0);
    u(this, v, void 0);
    l(this, j, we()), l(this, T, Oe()), l(this, k, /* @__PURE__ */ new Set()), l(this, E, []), l(this, y, new Me(c(this, j), c(this, T))), l(this, V, new Pe(c(this, j), c(this, T))), l(this, v, () => {
      const e = [
        Je,
        Xe,
        Ye,
        Ze,
        ct,
        tt,
        st,
        Ue(this)
      ], t = Ge(async (o) => {
        await Promise.all(c(this, E).map((i) => i(o)));
      });
      this.use(e.concat(t));
    }), this.use = (e) => ([e].flat().forEach((t) => {
      c(this, k).add(t(c(this, V)));
    }), this), this.config = (e) => (c(this, E).push(e), this), this.create = async () => (c(this, v).call(this), await Promise.all([...c(this, k)].map((e) => e(c(this, y)))), this), this.action = (e) => e(c(this, y));
  }
  static make() {
    return new Y();
  }
  get ctx() {
    return c(this, y);
  }
};
let ge = Y;
j = new WeakMap(), T = new WeakMap(), k = new WeakMap(), E = new WeakMap(), y = new WeakMap(), V = new WeakMap(), v = new WeakMap();
export {
  it as CommandManager,
  Q as CommandsReady,
  A as ConfigReady,
  ge as Editor,
  H as EditorStateReady,
  F as EditorViewReady,
  S as InitReady,
  B as ParserReady,
  M as SchemaReady,
  G as SerializerReady,
  W as ThemeEnvironmentReady,
  $ as ThemeReady,
  ct as commands,
  at as commandsCtx,
  ue as commandsTimerCtx,
  Ge as config,
  St as createCmd,
  Ot as createCmdKey,
  ce as defaultValueCtx,
  Fe as editorCtx,
  tt as editorState,
  D as editorStateCtx,
  me as editorStateOptionsCtx,
  de as editorStateTimerCtx,
  st as editorView,
  J as editorViewCtx,
  pe as editorViewOptionsCtx,
  le as editorViewTimerCtx,
  et as getDoc,
  Ue as init,
  te as initTimerCtx,
  fe as inputRulesCtx,
  ke as markViewCtx,
  K as marksCtx,
  Te as nodeViewCtx,
  b as nodesCtx,
  Ye as parser,
  q as parserCtx,
  se as parserTimerCtx,
  O as prosePluginsCtx,
  R as remarkCtx,
  je as remarkPluginsCtx,
  Qe as remarkStringifyDefaultOptions,
  ne as remarkStringifyOptionsCtx,
  he as rootCtx,
  Ee as rootDOMCtx,
  Xe as schema,
  P as schemaCtx,
  re as schemaTimerCtx,
  Ze as serializer,
  ie as serializerCtx,
  ae as serializerTimerCtx,
  Je as themeEnvironment,
  Rt as themeFactory,
  ee as themeTimerCtx
};
//# sourceMappingURL=index.es.js.map
