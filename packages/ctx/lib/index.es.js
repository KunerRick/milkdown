var S = (e, s, i) => {
  if (!s.has(e))
    throw TypeError("Cannot " + i);
};
var o = (e, s, i) => (S(e, s, "read from private field"), i ? i.call(e) : s.get(e)), h = (e, s, i) => {
  if (s.has(e))
    throw TypeError("Cannot add the same private member more than once");
  s instanceof WeakSet ? s.add(e) : s.set(e, i);
}, a = (e, s, i, t) => (S(e, s, "write to private field"), t ? t.call(e, i) : s.set(e, i), i);
import { contextNotFound as E, ctxCallOutOfScope as T, timerNotFound as M } from "@milkdown/exception";
const N = () => {
  const e = /* @__PURE__ */ new Map();
  return { getSlice: (i) => {
    const t = typeof i == "string" ? [...e.values()].find((n) => n.name === i) : e.get(i.id);
    if (!t) {
      const n = typeof i == "string" ? i : i.sliceName;
      throw E(n);
    }
    return t;
  }, sliceMap: e };
}, P = (e) => Array.isArray(e) ? [...e] : typeof e == "object" ? { ...e } : e, j = (e, s) => {
  const i = Symbol("Context"), t = (n, d = P(e)) => {
    let r = d;
    const m = {
      name: s,
      id: i,
      set: (c) => {
        r = c;
      },
      get: () => r,
      update: (c) => {
        r = c(r);
      }
    };
    return n.set(i, m), m;
  };
  return t.sliceName = s, t.id = i, t._typeInfo = () => {
    throw T();
  }, t;
};
var g, p;
class x {
  constructor(s, i) {
    h(this, g, void 0);
    h(this, p, void 0);
    this.use = (t) => o(this, g).getSlice(t), this.get = (t) => this.use(t).get(), this.set = (t, n) => this.use(t).set(n), this.update = (t, n) => this.use(t).update(n), this.timing = (t) => o(this, p).get(t), this.wait = (t) => this.timing(t)(), this.done = (t) => this.timing(t).done(), this.waitTimers = async (t) => {
      await Promise.all(this.get(t).map((n) => this.wait(n)));
    }, a(this, g, s), a(this, p, i);
  }
}
g = new WeakMap(), p = new WeakMap();
var u, l;
class L {
  constructor(s, i) {
    h(this, u, void 0);
    h(this, l, void 0);
    this.inject = (t, n) => (t(o(this, u).sliceMap, n), this), this.record = (t) => (t(o(this, l).store), this), this.use = (t) => o(this, u).getSlice(t), this.get = (t) => this.use(t).get(), this.set = (t, n) => this.use(t).set(n), this.update = (t, n) => this.use(t).update(n), this.timing = (t) => o(this, l).get(t), this.wait = (t) => this.timing(t)(), this.done = (t) => this.timing(t).done(), this.waitTimers = async (t) => {
      await Promise.all(this.get(t).map((n) => this.wait(n)));
    }, a(this, u, s), a(this, l, i);
  }
}
u = new WeakMap(), l = new WeakMap();
var w, f;
class A {
  constructor(s, i) {
    h(this, w, void 0);
    h(this, f, void 0);
    this.inject = (t, n) => (t(o(this, w).sliceMap, n), this), this.record = (t) => (t(o(this, f).store), this), a(this, w, s), a(this, f, i);
  }
}
w = new WeakMap(), f = new WeakMap();
const F = () => {
  const e = /* @__PURE__ */ new Map();
  return {
    store: e,
    get: (i) => {
      const t = e.get(i.id);
      if (!t)
        throw M(i.name);
      return t;
    }
  };
}, I = (e, s = 3e3) => {
  const i = Symbol("Timer"), t = (n) => {
    let d = null, r;
    const m = Symbol(e), c = () => d != null ? d : d = new Promise((y, C) => {
      r = (v) => {
        v instanceof CustomEvent && v.detail.id === m && (removeEventListener(e, r), v.stopImmediatePropagation(), y());
      }, setTimeout(() => {
        C(`Timing ${e} timeout.`), removeEventListener(e, r);
      }, s), addEventListener(e, r);
    });
    return c.done = () => {
      const y = new CustomEvent(e, { detail: { id: m } });
      dispatchEvent(y);
    }, n.set(i, c), c;
  };
  return t.id = i, t;
};
export {
  x as Ctx,
  L as Env,
  A as Pre,
  F as createClock,
  N as createContainer,
  j as createSlice,
  I as createTimer
};
//# sourceMappingURL=index.es.js.map
