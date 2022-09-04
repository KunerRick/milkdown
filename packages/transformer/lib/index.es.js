var J = (e, t, s) => {
  if (!t.has(e))
    throw TypeError("Cannot " + s);
};
var h = (e, t, s) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, s);
};
var a = (e, t, s) => (J(e, t, "access private method"), s);
import { stackOverFlow as v, createNodeInParserFail as A, parserMatchError as C, serializerMatchError as U } from "@milkdown/exception";
import { Mark as $ } from "@milkdown/prose/model";
const w = () => {
  const e = (o) => o.elements.length, t = (o) => o.elements[e(o) - 1];
  return {
    size: e,
    top: t,
    push: (o) => (c) => {
      var i;
      (i = t(o)) == null || i.push(c);
    },
    open: (o) => (c) => {
      o.elements.push(c);
    },
    close: (o) => {
      const c = o.elements.pop();
      if (!c)
        throw v();
      return c;
    }
  };
}, q = (e, t, ...s) => {
  e.content.push(t, ...s);
}, x = (e) => e.content.pop(), B = (e, t, s) => {
  const n = {
    type: e,
    content: t,
    attrs: s,
    push: (...r) => q(n, ...r),
    pop: () => x(n)
  };
  return n;
}, { size: G, push: H, top: K, open: L, close: Q } = w(), S = (e) => e.isText, V = (e, t, s) => {
  if (S(t) && S(s) && $.sameSet(t.marks, s.marks))
    return e.text(t.text + s.text, t.marks);
}, W = (e) => (t, s) => L(e)(B(t, [], s)), E = (e) => (t, s, n) => {
  const r = t.createAndFill(s, n, e.marks);
  if (!r)
    throw A(t, s, n);
  return H(e)(r), r;
}, T = (e) => () => {
  e.marks = $.none;
  const t = Q(e);
  return E(e)(t.type, t.attrs, t.content);
}, X = (e) => (t, s) => {
  const n = t.create(s);
  e.marks = n.addToSet(e.marks);
}, Y = (e) => (t) => {
  e.marks = t.removeFromSet(e.marks);
}, Z = (e) => (t) => {
  const s = K(e);
  if (!s)
    throw v();
  const n = s.pop(), r = e.schema.text(t, e.marks);
  if (!n) {
    s.push(r);
    return;
  }
  const o = V(e.schema, n, r);
  if (o) {
    s.push(o);
    return;
  }
  s.push(n, r);
}, _ = (e) => () => {
  let t;
  do
    t = T(e)();
  while (G(e));
  return t;
}, tt = (e) => {
  const t = {
    marks: [],
    elements: [],
    schema: e
  };
  return {
    build: _(t),
    openMark: X(t),
    closeMark: Y(t),
    addText: Z(t),
    openNode: W(t),
    addNode: E(t),
    closeNode: T(t)
  };
};
var k, b, m, P;
class et {
  constructor(t, s, n) {
    h(this, k);
    h(this, m);
    this.stack = t, this.schema = s, this.specMap = n, this.run = (r, o) => {
      const c = r.runSync(r.parse(o), o);
      return this.next(c), this;
    }, this.next = (r = []) => ([r].flat().forEach((o) => a(this, m, P).call(this, o)), this), this.toDoc = () => this.stack.build(), this.injectRoot = (r, o, c) => (this.stack.openNode(o, c), this.next(r.children), this), this.addText = (r = "") => (this.stack.addText(r), this), this.addNode = (...r) => (this.stack.addNode(...r), this), this.openNode = (...r) => (this.stack.openNode(...r), this), this.closeNode = (...r) => (this.stack.closeNode(...r), this), this.openMark = (...r) => (this.stack.openMark(...r), this), this.closeMark = (...r) => (this.stack.closeMark(...r), this);
  }
}
k = new WeakSet(), b = function(t) {
  const s = Object.values(this.specMap).find((n) => n.match(t));
  if (!s)
    throw C(t);
  return s;
}, m = new WeakSet(), P = function(t) {
  const { key: s, runner: n, is: r } = a(this, k, b).call(this, t), o = this.schema[r === "node" ? "nodes" : "marks"][s];
  n(this, t, o);
};
const yt = (e, t, s) => {
  const n = new et(tt(e), e, t);
  return (r) => (n.run(s, r), n.toDoc());
}, st = (e, t, ...s) => {
  e.children || (e.children = []), e.children.push(t, ...s);
}, rt = (e) => {
  var t;
  return (t = e.children) == null ? void 0 : t.pop();
}, z = (e, t, s, n = {}) => {
  const r = {
    type: e,
    children: t,
    props: n,
    value: s,
    push: (...o) => st(r, ...o),
    pop: () => rt(r)
  };
  return r;
}, { size: nt, push: ot, open: ct, close: it } = w(), at = (e, t) => {
  var c;
  if (e.type === t || ((c = e.children) == null ? void 0 : c.length) !== 1)
    return e;
  const s = (i) => {
    var p;
    if (i.type === t)
      return i;
    if (((p = i.children) == null ? void 0 : p.length) !== 1)
      return null;
    const [u] = i.children;
    return u ? s(u) : null;
  }, n = s(e);
  if (!n)
    return e;
  const r = n.children ? [...n.children] : void 0, o = { ...e, children: r };
  return o.children = r, n.children = [o], n;
}, O = (e) => {
  const { children: t } = e;
  return t && (e.children = t.reduce((s, n, r) => {
    if (r === 0)
      return [n];
    const o = s[s.length - 1];
    if (o && o.isMark && n.isMark) {
      n = at(n, o.type);
      const { children: c, ...i } = n, { children: u, ...p } = o;
      if (n.type === o.type && c && u && JSON.stringify(i) === JSON.stringify(p)) {
        const D = {
          ...p,
          children: [...u, ...c]
        };
        return s.slice(0, -1).concat(O(D));
      }
    }
    return s.concat(n);
  }, [])), e;
}, ht = (e) => {
  const t = {
    ...e.props,
    type: e.type
  };
  return e.children && (t.children = e.children), e.value && (t.value = e.value), t;
}, F = (e) => (t, s, n) => ct(e)(z(t, [], s, n)), I = (e) => (t, s, n, r) => {
  const o = z(t, s, n, r), c = O(ht(o));
  return ot(e)(c), c;
}, g = (e) => () => {
  const t = it(e);
  return I(e)(t.type, t.children, t.value, t.props);
}, ut = (e) => (t, s, n, r) => {
  t.isInSet(e.marks) || (e.marks = t.addToSet(e.marks), F(e)(s, n, { ...r, isMark: !0 }));
}, pt = (e) => (t) => t.isInSet(e.marks) ? (e.marks = t.type.removeFromSet(e.marks), g(e)()) : null, dt = (e) => () => {
  let t = null;
  do
    t = g(e)();
  while (nt(e));
  return t;
}, lt = () => {
  const e = {
    marks: [],
    elements: []
  };
  return {
    build: dt(e),
    openMark: ut(e),
    closeMark: pt(e),
    openNode: F(e),
    addNode: I(e),
    closeNode: g(e)
  };
}, kt = (e) => Object.prototype.hasOwnProperty.call(e, "size");
var d, M, f, j, N, R, l, y;
class mt {
  constructor(t, s, n) {
    h(this, d);
    h(this, f);
    h(this, N);
    h(this, l);
    this.stack = t, this.schema = s, this.specMap = n, this.toString = (r) => r.stringify(this.stack.build()), this.next = (r) => kt(r) ? (r.forEach((o) => {
      a(this, l, y).call(this, o);
    }), this) : (a(this, l, y).call(this, r), this), this.addNode = (...r) => (this.stack.addNode(...r), this), this.openNode = (...r) => (this.stack.openNode(...r), this), this.closeNode = (...r) => (this.stack.closeNode(...r), this), this.withMark = (...r) => (this.stack.openMark(...r), this);
  }
  run(t) {
    return this.next(t), this;
  }
}
d = new WeakSet(), M = function(t) {
  const s = Object.entries(this.specMap).map(([n, r]) => ({
    key: n,
    ...r
  })).find((n) => n.match(t));
  if (!s)
    throw U(t.type);
  return s;
}, f = new WeakSet(), j = function(t) {
  const { runner: s } = a(this, d, M).call(this, t);
  s(this, t);
}, N = new WeakSet(), R = function(t, s) {
  const { runner: n } = a(this, d, M).call(this, t);
  return n(this, t, s);
}, l = new WeakSet(), y = function(t) {
  const { marks: s } = t, n = (c) => {
    var i;
    return (i = c.type.spec.priority) != null ? i : 50;
  };
  [...s].sort((c, i) => n(c) - n(i)).every((c) => !a(this, N, R).call(this, c, t)) && a(this, f, j).call(this, t), s.forEach((c) => this.stack.closeMark(c));
};
const gt = (e, t, s) => (n) => {
  const r = new mt(lt(), e, t);
  return r.run(n), r.toString(s);
};
export {
  yt as createParser,
  gt as createSerializer,
  w as getStackUtil
};
//# sourceMappingURL=index.es.js.map
