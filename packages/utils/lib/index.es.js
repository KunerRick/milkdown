import { createTimer as Pt, SchemaReady as g, commandsCtx as S, commandsTimerCtx as vt, inputRulesCtx as K, editorStateTimerCtx as q, ThemeReady as O, marksCtx as U, schemaCtx as j, schemaTimerCtx as B, nodesCtx as D, prosePluginsCtx as R, InitReady as G, remarkPluginsCtx as J, nodeViewCtx as Q, markViewCtx as W, editorViewTimerCtx as Ct, themeManagerCtx as X, emotionCtx as Tt, createSlice as f, createContainer as St, createClock as jt, Env as Rt, editorViewCtx as C, serializerCtx as At, parserCtx as gt, editorStateOptionsCtx as Et } from "@milkdown/core";
import { customAlphabet as Ot } from "nanoid";
import { missingMarkInSchema as pt, missingNodeInSchema as ht, themeMustInstalled as lt } from "@milkdown/exception";
import { keymap as Y } from "@milkdown/prose/keymap";
import { NodeType as yt, DOMSerializer as $t, Slice as ft } from "@milkdown/prose/model";
import { EditorState as bt } from "@milkdown/prose/state";
const wt = (n) => Object.prototype.hasOwnProperty.call(n, "origin");
class kt extends Array {
  findThenRun(s, t) {
    const e = this.findIndex((a) => wt(a) && a.origin === s);
    return e < 0 ? this : (t(e), this);
  }
  configure(s, t) {
    return this.findThenRun(s, (e) => {
      this.splice(e, 1, s(t));
    });
  }
  replace(s, t) {
    return this.findThenRun(s, (e) => {
      this.splice(e, 1, t);
    });
  }
  remove(s) {
    return this.findThenRun(s, (t) => {
      this.splice(t, 1);
    });
  }
  headless() {
    return this.filter(wt).forEach((s) => {
      this.configure(s.origin, { headless: !0 });
    }), this;
  }
  static create(s) {
    return new kt(...s);
  }
}
const Mt = Ot("abcedfghicklmn", 10), T = (n, s, t) => {
  const e = Pt(t || Mt());
  let a = !1;
  const r = () => async (c) => {
    const i = () => {
      c.done(e), a = !0;
    };
    c.update(s, (u) => u.concat(e)), await n(c, r, i), a || c.done(e);
  };
  return r.timer = e, r;
}, Bt = (n) => {
  const s = () => async (t) => {
    await t.wait(g);
    const [e, a] = n(t);
    t.get(S).create(e, a), s.run = (r) => t.get(S).call(e, r), s.key = e;
  };
  return s;
}, Gt = (n, s) => T(async (t, e) => {
  await t.wait(g);
  const [a, r] = await n(t);
  t.get(S).create(a, r), e.run = (c) => t.get(S).call(a, c), e.key = a;
}, vt, s), Jt = (n) => {
  const s = () => async (t) => {
    await t.wait(g);
    const e = n(t);
    t.update(K, (a) => [...a, e]), s.inputRule = e;
  };
  return s;
}, Qt = (n, s) => T(async (t, e) => {
  await t.wait(g);
  const a = await n(t);
  t.update(K, (r) => [...r, a]), e.inputRule = a;
}, q, s), Wt = (n, s) => {
  const t = () => async (e) => {
    await e.wait(O);
    const a = s(e);
    e.update(U, (c) => [...c, [n, a]]), t.id = n, t.schema = a, await e.wait(g);
    const r = e.get(j).marks[n];
    if (!r)
      throw pt(n);
    t.type = r;
  };
  return t;
}, Xt = (n, s, t) => T(async (e, a, r) => {
  await e.wait(O);
  const c = await s(e);
  e.update(U, (u) => [...u, [n, c]]), a.id = n, a.schema = c, r(), await e.wait(g);
  const i = e.get(j).marks[n];
  if (!i)
    throw pt(n);
  a.type = i;
}, B, t), Yt = (n, s) => {
  const t = () => async (e) => {
    await e.wait(O);
    const a = s(e);
    e.update(D, (c) => [...c, [n, a]]), t.id = n, t.schema = a, await e.wait(g);
    const r = e.get(j).nodes[n];
    if (!r)
      throw ht(n);
    t.type = r;
  };
  return t;
}, Zt = (n, s, t) => T(async (e, a, r) => {
  await e.wait(O);
  const c = await s(e);
  e.update(D, (u) => [...u, [n, c]]), a.id = n, a.schema = c, r(), await e.wait(g);
  const i = e.get(j).nodes[n];
  if (!i)
    throw ht(n);
  a.type = i;
}, B, t), _t = (n) => {
  const s = () => async (t) => {
    await t.wait(g);
    const e = n(t);
    t.update(R, (a) => [...a, e]), s.plugin = e;
  };
  return s;
}, xt = (n, s) => T(async (t, e) => {
  await t.wait(g);
  const a = await n(t);
  t.update(R, (r) => [...r, a]), e.plugin = a;
}, q, s), te = (n) => {
  const s = () => async (t) => {
    await t.wait(G);
    const e = n(t);
    t.update(J, (a) => [...a, e]), s.plugin = e;
  };
  return s;
}, ee = (n, s) => T(async (t, e) => {
  await t.wait(G);
  const a = await n(t);
  t.update(J, (r) => [...r, a]), e.plugin = a;
}, B, s), ne = (n) => {
  const s = () => async (t) => {
    await t.wait(g);
    const e = n(t);
    t.update(R, (a) => [...a, Y(e)]), s.keymap = e;
  };
  return s;
}, se = (n, s) => T(async (t, e) => {
  await t.wait(g);
  const a = await n(t);
  t.update(R, (r) => [...r, Y(a)]), e.keymap = a;
}, q, s), ae = (n, s) => {
  const t = () => async (e) => {
    await e.wait(g);
    const a = s(e);
    n.type instanceof yt ? e.update(Q, (r) => [...r, [n.id, a]]) : e.update(W, (r) => [...r, [n.id, a]]), t.view = a, t.type = n;
  };
  return t;
}, re = (n, s, t) => T(async (e, a) => {
  await e.wait(g);
  const r = await s(e);
  n.type instanceof yt ? e.update(Q, (c) => [...c, [n.id, r]]) : e.update(W, (c) => [...c, [n.id, r]]), a.view = r, a.type = n;
}, Ct, t), It = (n) => (s, ...t) => {
  var a;
  const e = (a = n == null ? void 0 : n(s, ...t)) != null ? a : t;
  return Array.isArray(e) ? e.filter((r) => r).join(" ") : e;
}, ce = (n, s, t) => [n, s, t], H = (n, s) => {
  try {
    const t = n.get(X), e = n.get(Tt);
    if (!e.css)
      throw lt();
    return {
      getClassName: It(s == null ? void 0 : s.className),
      getStyle: (a) => s != null && s.headless ? "" : a(e),
      themeManager: t
    };
  } catch {
    throw lt();
  }
}, ie = H, Z = (n) => {
  const s = (t) => {
    const e = n(t);
    return e.origin = s, e;
  };
  return s;
}, _ = (n, s) => (t) => {
  const e = t, a = (r, c) => s((...i) => r(n(...i), ...i), c);
  return e.extend = a, e;
}, x = (...n) => {
  const s = n.length;
  let t = s;
  for (; t--; )
    if (typeof n[t] != "function")
      throw new TypeError("Expected a function");
  return (...e) => {
    let a = 0, r = s ? n[a](...e) : e[0];
    for (; ++a < s; )
      r = n[a](r);
    return r;
  };
}, tt = (n) => async (s, t) => {
  n == null || n.forEach((e) => s.pre.inject(e)), await t();
}, et = async (n, s) => {
  const { ctx: t } = n;
  await t.wait(O), await s();
}, $ = f(void 0, "getRemarkPluginsPipeCtx"), nt = async (n, s) => {
  const { ctx: t, pipelineCtx: e } = n;
  await t.wait(G);
  const a = e.get($);
  if (a) {
    const r = a(t);
    t.update(J, (c) => c.concat(r));
  }
  await s();
}, b = f(void 0, "getSchemaPipeCtx"), M = f({}, "Type"), st = async (n, s) => {
  var p;
  const { ctx: t, pipelineCtx: e } = n, a = e.get(b), r = (p = a == null ? void 0 : a(n.ctx)) != null ? p : {};
  let c = {}, i = {};
  if (r.node) {
    c = r.node;
    const l = Object.entries(r.node);
    t.update(D, (h) => [...h, ...l]);
  }
  if (r.mark) {
    i = r.mark;
    const l = Object.entries(r.mark);
    t.update(U, (h) => [...h, ...l]);
  }
  await t.wait(g);
  const u = t.get(j), m = Object.keys(c).map((l) => [l, u.nodes[l]]), w = Object.keys(i).map((l) => [l, u.marks[l]]), o = Object.fromEntries([...m, ...w]);
  e.set(M, o), await s();
}, I = f(void 0, "getCommandsPipeCtx"), at = async (n, s) => {
  const { ctx: t, pipelineCtx: e } = n, a = e.get(I);
  if (a) {
    const r = e.get(M);
    a(r, t).forEach(([c, i]) => {
      t.get(S).create(c, i);
    });
  }
  await s();
}, V = f(void 0, "getInputRulesPipeCtx"), rt = async (n, s) => {
  const { ctx: t, pipelineCtx: e } = n, a = e.get(V);
  if (a) {
    const r = e.get(M);
    t.update(K, (c) => [...c, ...a(r, t)]);
  }
  await s();
}, z = f({}, "shortcutsPipeCtx"), ct = async (n, s) => {
  const { pipelineCtx: t, ctx: e } = n, a = t.get(z), r = t.get(A), c = (u, m) => {
    var w, o;
    return (o = (w = r == null ? void 0 : r.keymap) == null ? void 0 : w[u]) != null ? o : m;
  }, i = Object.entries(a).flatMap(([u, [m, w, o]]) => {
    const p = () => e.get(S).call(m, o), l = c(u, w);
    return Array.isArray(l) ? l.map((h) => ({ key: h, runner: p })) : { key: l, runner: p };
  }).map((u) => [u.key, u.runner]);
  e.update(R, (u) => u.concat(Y(Object.fromEntries(i)))), await s();
}, L = f(void 0, "getProsePluginsPipeCtx"), it = async (n, s) => {
  const { pipelineCtx: t, ctx: e } = n, a = t.get(L);
  if (a) {
    const r = t.get(M);
    e.update(R, (c) => [...c, ...a(r, e)]);
  }
  await s();
}, N = f(void 0, "getViewPipeCtx"), ot = async (n, s) => {
  const { pipelineCtx: t, ctx: e } = n, a = t.get(N), r = t.get(A), c = r.view ? r.view(e) : a == null ? void 0 : a(e);
  if (c) {
    const i = Object.entries(c).filter(([m]) => e.get(D).findIndex((w) => w[0] === m) !== -1), u = Object.entries(c).filter(([m]) => e.get(U).findIndex((w) => w[0] === m) !== -1);
    e.update(Q, (m) => [...m, ...i]), e.update(W, (m) => [...m, ...u]);
  }
  await s();
}, A = f({}, "optionsPipeCtx"), ut = f("", "idPipeCtx"), dt = async (n, s) => {
  const { pipelineCtx: t } = n;
  t.inject(ut).inject(A).inject($).inject(b).inject(M).inject(I).inject(V).inject(z).inject(L).inject(N), await s();
}, Vt = (n) => (s, t) => {
  let e = -1;
  const a = (r) => {
    if (r <= e)
      return Promise.reject(new Error("next() called multiple times"));
    e = r;
    let c = n[r];
    if (r === n.length && (c = t), !c)
      return Promise.resolve();
    try {
      return Promise.resolve(c(s, () => a(r + 1)));
    } catch (i) {
      return Promise.reject(i);
    }
  };
  return a(0);
}, mt = (n) => {
  const s = Vt(n), t = St(), e = jt(), a = new Rt(t, e);
  return (r, c) => s({
    pre: r,
    ctx: c,
    pipelineCtx: a
  });
}, zt = (n, s) => x(Z, _(n, zt))((t) => (e) => async (a) => {
  const r = async ({ pipelineCtx: i }, u) => {
    const m = H(a, t), w = n(m, t), { id: o, commands: p, remarkPlugins: l, schema: h, inputRules: k, shortcuts: P, prosePlugins: v, view: E } = w, F = {
      ...t || {},
      view: t != null && t.view ? (d) => ({ [o]: t.view(d) }) : void 0
    };
    i.set(ut, o), i.set(A, F), i.set($, l), i.set(b, (d) => ({ mark: { [o]: h(d) } })), p && i.set(I, (d, y) => p(d[o], y)), k && i.set(V, (d, y) => k(d[o], y)), P && i.set(z, P), v && i.set(L, (d, y) => v(d[o], y)), E && i.set(N, (d) => ({ [o]: E(d) })), await u();
  };
  await mt([
    dt,
    tt(s),
    et,
    r,
    nt,
    st,
    at,
    rt,
    ct,
    it,
    ot
  ])(e, a);
}), Lt = (n, s) => x(Z, _(n, Lt))((t) => (e) => async (a) => {
  const r = async ({ pipelineCtx: i }, u) => {
    const m = H(a, t), w = n(m, t), { id: o, commands: p, remarkPlugins: l, schema: h, inputRules: k, shortcuts: P, prosePlugins: v, view: E } = w, F = {
      ...t || {},
      view: t != null && t.view ? (d) => ({ [o]: t.view(d) }) : void 0
    };
    i.set(ut, o), i.set(A, F), i.set($, l), i.set(b, (d) => ({ node: { [o]: h(d) } })), p && i.set(I, (d, y) => p(d[o], y)), k && i.set(V, (d, y) => k(d[o], y)), P && i.set(z, P), v && i.set(L, (d, y) => v(d[o], y)), E && i.set(N, (d) => ({ [o]: E(d) })), await u();
  };
  await mt([
    dt,
    tt(s),
    et,
    r,
    nt,
    st,
    at,
    rt,
    ct,
    it,
    ot
  ])(e, a);
}), Nt = (n, s) => x(Z, _(n, Nt))((t) => (e) => async (a) => {
  const r = async ({ pipelineCtx: i }, u) => {
    const m = H(a, t), w = n(m, t), { commands: o, remarkPlugins: p, schema: l, inputRules: h, shortcuts: k, prosePlugins: P, view: v } = w;
    i.set(A, t || {}), i.set($, p), l && i.set(b, l), o && i.set(I, o), h && i.set(V, h), k && i.set(z, k), P && i.set(L, P), v && i.set(N, v), await u();
  };
  await mt([
    dt,
    tt(s),
    et,
    r,
    nt,
    st,
    at,
    rt,
    ct,
    it,
    ot
  ])(e, a);
});
function oe(n, s) {
  return (t) => t.get(S).call(n, s);
}
const ue = () => (n) => n.get(C).destroy(), de = () => (n) => {
  const s = n.get(C), { tr: t } = s.state, e = Object.assign(Object.create(t), t).setTime(Date.now());
  return s.dispatch(e);
}, me = () => (n) => {
  const s = document.createElement("div"), t = n.get(j), e = n.get(C), a = $t.fromSchema(t).serializeFragment(e.state.doc.content);
  return s.appendChild(a), s.innerHTML;
}, le = () => (n) => {
  const s = n.get(C);
  return n.get(At)(s.state.doc);
}, we = (n) => (s) => {
  const t = s.get(C), a = s.get(gt)(n);
  if (!a)
    return;
  const r = t.state.selection.content();
  return t.dispatch(t.state.tr.replaceSelection(new ft(a.content, r.openStart, r.openEnd)).scrollIntoView());
}, ge = () => (n) => {
  const s = n.get(C), t = [];
  return s.state.doc.descendants((a) => {
    a.type.name === "heading" && a.attrs.level && t.push({ text: a.textContent, level: a.attrs.level, id: a.attrs.id });
  }), t;
}, pe = (n, s = !1) => (t) => {
  const e = t.get(C), r = t.get(gt)(n);
  if (!r)
    return;
  if (!s) {
    const { state: o } = e;
    return e.dispatch(o.tr.replace(0, o.doc.content.size, new ft(r.content, 0, 0)));
  }
  const c = t.get(j), i = t.get(Et), u = t.get(R), m = t.get(X), w = bt.create({
    schema: c,
    doc: r,
    plugins: u,
    ...i
  });
  e.updateState(w), m.flush(t);
}, he = (n, s) => (t) => {
  const e = t.get(C), { tr: a } = e.state, r = a.doc.nodeAt(n);
  if (!r)
    return;
  const c = s(r.attrs);
  return e.dispatch(a.setNodeMarkup(n, void 0, c));
}, ye = (n) => (s) => s.get(X).switch(s, n);
export {
  Bt as $command,
  Gt as $commandAsync,
  Jt as $inputRule,
  Qt as $inputRuleAsync,
  Wt as $mark,
  Xt as $markAsync,
  Yt as $node,
  Zt as $nodeAsync,
  _t as $prose,
  xt as $proseAsync,
  te as $remark,
  ee as $remarkAsync,
  ne as $shortcut,
  se as $shortcutAsync,
  ae as $view,
  re as $viewAsync,
  kt as AtomList,
  Z as addMetadata,
  oe as callCommand,
  zt as createMark,
  Lt as createNode,
  Nt as createPlugin,
  ce as createShortcut,
  ue as destroy,
  de as forceUpdate,
  It as getClassName,
  me as getHTML,
  le as getMarkdown,
  H as getThemeUtils,
  ie as getUtils,
  we as insert,
  ge as outline,
  x as pipe,
  pe as replaceAll,
  he as setAttr,
  ye as switchTheme,
  _ as withExtend
};
//# sourceMappingURL=index.es.js.map
