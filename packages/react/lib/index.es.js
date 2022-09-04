import Me, { createContext as oe, memo as yr, useContext as G, useCallback as N, forwardRef as Fe, useImperativeHandle as Er, useState as Ae, useEffect as Rr, useMemo as br, useRef as Se } from "react";
import { editorViewCtx as _r, rootCtx as Pr } from "@milkdown/core";
import { Node as ne, Mark as Or } from "@milkdown/prose/model";
import { customAlphabet as wr } from "nanoid";
import { createPortal as Cr } from "react-dom";
var J = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function Tr() {
  if (De)
    return W;
  De = 1;
  var u = Me, o = Symbol.for("react.element"), d = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, g = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(p, c, P) {
    var h, y = {}, b = null, C = null;
    P !== void 0 && (b = "" + P), c.key !== void 0 && (b = "" + c.key), c.ref !== void 0 && (C = c.ref);
    for (h in c)
      l.call(c, h) && !R.hasOwnProperty(h) && (y[h] = c[h]);
    if (p && p.defaultProps)
      for (h in c = p.defaultProps, c)
        y[h] === void 0 && (y[h] = c[h]);
    return { $$typeof: o, type: p, key: b, ref: C, props: y, _owner: g.current };
  }
  return W.Fragment = d, W.jsx = v, W.jsxs = v, W;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function xr() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var u = Me, o = Symbol.for("react.element"), d = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), p = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), T = Symbol.iterator, x = "@@iterator";
    function S(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = T && e[T] || e[x];
      return typeof r == "function" ? r : null;
    }
    var O = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        $e("error", e, t);
      }
    }
    function $e(e, r, t) {
      {
        var n = O.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var f = t.map(function(i) {
          return String(i);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var We = !1, Ye = !1, Ve = !1, Ue = !1, Be = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Ke(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === R || Be || e === g || e === P || e === h || Ue || e === C || We || Ye || Ve || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === y || e.$$typeof === v || e.$$typeof === p || e.$$typeof === c || e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function qe(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case d:
          return "Portal";
        case R:
          return "Profiler";
        case g:
          return "StrictMode";
        case P:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var r = e;
            return se(r) + ".Consumer";
          case v:
            var t = e;
            return se(t._context) + ".Provider";
          case c:
            return qe(e, e.render, "ForwardRef");
          case y:
            var n = e.displayName || null;
            return n !== null ? n : j(e.type) || "Memo";
          case b: {
            var s = e, f = s._payload, i = s._init;
            try {
              return j(i(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, L = 0, ue, ce, le, fe, de, ve, pe;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function Ge() {
      {
        if (L === 0) {
          ue = console.log, ce = console.info, le = console.warn, fe = console.error, de = console.group, ve = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: he,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        L++;
      }
    }
    function Je() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: ue
            }),
            info: M({}, e, {
              value: ce
            }),
            warn: M({}, e, {
              value: le
            }),
            error: M({}, e, {
              value: fe
            }),
            group: M({}, e, {
              value: de
            }),
            groupCollapsed: M({}, e, {
              value: ve
            }),
            groupEnd: M({}, e, {
              value: pe
            })
          });
        }
        L < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = O.ReactCurrentDispatcher, H;
    function V(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            H = n && n[1] || "";
          }
        return `
` + H + e;
      }
    }
    var X = !1, U;
    {
      var ze = typeof WeakMap == "function" ? WeakMap : Map;
      U = new ze();
    }
    function me(e, r) {
      if (!e || X)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      X = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = z.current, z.current = null, Ge();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (I) {
              n = I;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (I) {
              n = I;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            n = I;
          }
          e();
        }
      } catch (I) {
        if (I && n && typeof I.stack == "string") {
          for (var a = I.stack.split(`
`), w = n.stack.split(`
`), m = a.length - 1, E = w.length - 1; m >= 1 && E >= 0 && a[m] !== w[E]; )
            E--;
          for (; m >= 1 && E >= 0; m--, E--)
            if (a[m] !== w[E]) {
              if (m !== 1 || E !== 1)
                do
                  if (m--, E--, E < 0 || a[m] !== w[E]) {
                    var k = `
` + a[m].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, k), k;
                  }
                while (m >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        X = !1, z.current = f, Je(), Error.prepareStackTrace = s;
      }
      var A = e ? e.displayName || e.name : "", ke = A ? V(A) : "";
      return typeof e == "function" && U.set(e, ke), ke;
    }
    function He(e, r, t) {
      return me(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, Xe(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case P:
          return V("Suspense");
        case h:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return He(e.render);
          case y:
            return B(e.type, r, t);
          case b: {
            var n = e, s = n._payload, f = n._init;
            try {
              return B(f(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var K = Object.prototype.hasOwnProperty, ge = {}, ye = O.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function Ze(e, r, t, n, s) {
      {
        var f = Function.call.bind(K);
        for (var i in e)
          if (f(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var w = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              a = m;
            }
            a && !(a instanceof Error) && (q(s), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), q(null)), a instanceof Error && !(a.message in ge) && (ge[a.message] = !0, q(s), _("Failed %s type: %s", t, a.message), q(null));
          }
      }
    }
    var Qe = Array.isArray;
    function Z(e) {
      return Qe(e);
    }
    function er(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function rr(e) {
      try {
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function Re(e) {
      if (rr(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), Ee(e);
    }
    var $ = O.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, _e, Q;
    Q = {};
    function nr(e) {
      if (K.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function or(e) {
      if (K.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ar(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = j($.current.type);
        Q[t] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j($.current.type), e.ref), Q[t] = !0);
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          be || (be = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function sr(e, r) {
      {
        var t = function() {
          _e || (_e = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ur = function(e, r, t, n, s, f, i) {
      var a = {
        $$typeof: o,
        type: e,
        key: r,
        ref: t,
        props: i,
        _owner: f
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function cr(e, r, t, n, s) {
      {
        var f, i = {}, a = null, w = null;
        t !== void 0 && (Re(t), a = "" + t), or(r) && (Re(r.key), a = "" + r.key), nr(r) && (w = r.ref, ar(r, s));
        for (f in r)
          K.call(r, f) && !tr.hasOwnProperty(f) && (i[f] = r[f]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (f in m)
            i[f] === void 0 && (i[f] = m[f]);
        }
        if (a || w) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && ir(i, E), w && sr(i, E);
        }
        return ur(e, a, w, s, n, $.current, i);
      }
    }
    var ee = O.ReactCurrentOwner, Pe = O.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(t);
      } else
        Pe.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Oe() {
      {
        if (ee.current) {
          var e = j(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var we = {};
    function fr(e) {
      {
        var r = Oe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ce(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = fr(r);
        if (we[t])
          return;
        we[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ee.current && (n = " It was passed a child from " + j(e._owner.type) + "."), F(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            te(n) && Ce(n, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = S(e);
          if (typeof s == "function" && s !== e.entries)
            for (var f = s.call(e), i; !(i = f.next()).done; )
              te(i.value) && Ce(i.value, r);
        }
      }
    }
    function dr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = j(r);
          Ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var s = j(r);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    function xe(e, r, t, n, s, f) {
      {
        var i = Ke(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = lr(s);
          w ? a += w : a += Oe();
          var m;
          e === null ? m = "null" : Z(e) ? m = "array" : e !== void 0 && e.$$typeof === o ? (m = "<" + (j(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, a);
        }
        var E = cr(e, r, t, s, f);
        if (E == null)
          return E;
        if (i) {
          var k = r.children;
          if (k !== void 0)
            if (n)
              if (Z(k)) {
                for (var A = 0; A < k.length; A++)
                  Te(k[A], e);
                Object.freeze && Object.freeze(k);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(k, e);
        }
        return e === l ? vr(E) : dr(E), E;
      }
    }
    function pr(e, r, t) {
      return xe(e, r, t, !0);
    }
    function hr(e, r, t) {
      return xe(e, r, t, !1);
    }
    var mr = hr, gr = pr;
    Y.Fragment = l, Y.jsx = mr, Y.jsxs = gr;
  }()), Y;
}
(function(u) {
  process.env.NODE_ENV === "production" ? u.exports = Tr() : u.exports = xr();
})(J);
const kr = J.exports.Fragment, D = J.exports.jsx, Sr = J.exports.jsxs, Ne = oe(() => () => {
  throw new Error();
});
yr(({
  portals: u
}) => /* @__PURE__ */ D(kr, {
  children: u
}));
const ae = oe({}), Dr = (u) => {
  const o = G(Ne), { dom: d, editor: l, setLoading: g } = G(ae);
  return N((v) => {
    var c, P, h;
    if (!v)
      return;
    if (d.current = v, v.querySelector(".milkdown") != null) {
      const y = (c = l.current) == null ? void 0 : c.action((C) => C.get(_r)), b = (P = l.current) == null ? void 0 : P.action((C) => C.get(Pr));
      (h = b == null ? void 0 : b.firstChild) == null || h.remove(), y == null || y.destroy();
    }
    const p = u(v, o);
    !p || (g(!0), p.create().then((y) => {
      l.current = y;
    }).finally(() => {
      g(!1);
    }).catch(console.error));
  }, [d, l, u, o, g]);
}, jr = () => {
  const u = G(ae);
  return {
    get: () => u.editor.current,
    dom: () => u.dom.current
  };
}, Ir = Fe(({
  editor: u
}, o) => {
  const d = jr(), l = Dr(u);
  return Er(o, () => d), /* @__PURE__ */ D("div", {
    ref: l
  });
}), Le = oe({
  ctx: void 0,
  node: void 0,
  view: void 0,
  getPos: void 0,
  decorations: void 0
}), Mr = ({
  ctx: u,
  node: o,
  view: d,
  getPos: l,
  decorations: g,
  children: R
}) => /* @__PURE__ */ D(Le.Provider, {
  value: {
    ctx: u,
    node: o,
    view: d,
    getPos: l,
    decorations: g
  },
  children: R
}), Kr = () => G(Le), Fr = ({
  contentRef: u,
  isInline: o
}) => o ? /* @__PURE__ */ D("span", {
  "data-view-content": !0,
  className: "content-dom-wrapper",
  ref: u
}) : /* @__PURE__ */ D("div", {
  "data-view-content": !0,
  className: "content-dom-wrapper",
  ref: u
}), Ie = wr("abcedfghicklmn", 10), Ar = (u, o, d) => (l, g = {}) => (R) => (v, p, c, P) => new Nr(R, l, u, o, d, g, v, p, c, P);
class Nr {
  constructor(o, d, l, g, R, v, p, c, P, h) {
    var C, T;
    this.ctx = o, this.component = d, this.addPortal = l, this.removePortalByKey = g, this.replacePortalByKey = R, this.options = v, this.node = p, this.view = c, this.getPos = P, this.decorations = h, this.getPortal = () => {
      const x = this.component, S = (O) => {
        O && this.contentDOMElement && O.firstChild !== this.contentDOMElement && O.appendChild(this.contentDOMElement);
      };
      return Cr(/* @__PURE__ */ D(Mr, {
        ctx: this.ctx,
        node: this.node,
        view: this.view,
        getPos: this.getPos,
        decorations: this.decorations,
        children: /* @__PURE__ */ D(x, {
          children: /* @__PURE__ */ D(Fr, {
            isInline: this.isInlineOrMark,
            contentRef: S
          })
        })
      }), this.teleportDOM, this.key);
    }, this.selectNode = (C = this.options) == null ? void 0 : C.selectNode, this.deselectNode = (T = this.options) == null ? void 0 : T.deselectNode, this.key = Ie();
    const y = v.as ? v.as : this.isInlineOrMark ? "span" : "div";
    this.teleportDOM = document.createElement(y);
    const b = p instanceof ne && p.isLeaf ? null : document.createElement(this.isInlineOrMark ? "span" : "div");
    b && b.classList.add("content-dom"), this.contentDOMElement = b, this.key = Ie(), this.renderPortal();
  }
  get isInlineOrMark() {
    return this.node instanceof Or || this.node.isInline;
  }
  get dom() {
    return this.teleportDOM;
  }
  get contentDOM() {
    return this.node instanceof ne && this.node.isLeaf ? null : this.contentDOMElement;
  }
  renderPortal() {
    this.addPortal(this.getPortal());
  }
  destroy() {
    var o, d;
    (d = (o = this.options).destroy) == null || d.call(o), this.contentDOMElement = null, this.removePortalByKey(this.key);
  }
  ignoreMutation(o) {
    return this.options.ignoreMutation ? this.options.ignoreMutation(o) : !this.dom || !this.contentDOM || this.node instanceof ne && (this.node.isLeaf || this.node.isAtom) ? !0 : o.type === "selection" || this.contentDOM === this.dom ? !1 : this.contentDOM === o.target && o.type === "attributes" ? !0 : !this.contentDOM.contains(o.target);
  }
  update(o, d, l) {
    const R = (() => {
      var v, p;
      if (this.options.update) {
        const c = (p = (v = this.options).update) == null ? void 0 : p.call(v, o, d, l);
        if (c != null)
          return c;
      }
      return this.node.type !== o.type ? !1 : (o === this.node && this.decorations === d || (this.node = o, this.decorations = d), !0);
    })();
    return R && this.replacePortalByKey(this.key, this.getPortal()), R;
  }
}
const Lr = `
@milkdown/react:
Passing ref to ReactEditor will soon be deprecated, please use:

const { editor, getInstance, getDom, loading } = useEditor(/* creator */);

useEffect(() => {
    if (!loading) {
        const editor = getInstance();
        const rootDOM = getDom();
    }
}, [getInstance])

<ReactEditor editor={editor} />
`, $r = `
@milkdown/react:
Passing editor directly to ReactEditor will soon be deprecated, please use:

const { editor } = useEditor(/* creator */);

<ReactEditor editor={editor} />
`, qr = Fe(({
  editor: u
}, o) => {
  const [d, l] = Ae([]), g = N((T) => {
    l((x) => [...x, T]);
  }, []), R = N((T) => {
    l((x) => {
      const S = x.findIndex((O) => O.key === T);
      return [...x.slice(0, S), ...x.slice(S + 1)];
    });
  }, []), v = N((T, x) => {
    l((S) => {
      const O = S.findIndex((_) => _.key === T);
      return [...S.slice(0, O), x, ...S.slice(O + 1)];
    });
  }, []), p = N((T, x) => Ar(g, R, v)(T, x), [g, R, v]), c = Object.hasOwnProperty.call(u, "getInstance"), {
    getEditorCallback: P,
    dom: h,
    editor: y,
    setLoading: b
  } = c ? u.editor : u;
  Rr(() => {
    c && console.warn($r), o && console.warn(Lr);
  }, [o, c]);
  const C = br(() => ({
    dom: h,
    editor: y,
    setLoading: b
  }), [h, y, b]);
  return /* @__PURE__ */ D(ae.Provider, {
    value: C,
    children: /* @__PURE__ */ Sr(Ne.Provider, {
      value: p,
      children: [d, /* @__PURE__ */ D(Ir, {
        ref: o,
        editor: P
      })]
    })
  });
}), Gr = (u, o = []) => {
  const d = Se(void 0), l = Se(), [g, R] = Ae(!0), v = N((...p) => u(...p), o);
  return {
    loading: g,
    getInstance: () => l.current,
    getDom: () => d.current,
    editor: {
      getEditorCallback: v,
      dom: d,
      editor: l,
      setLoading: R
    }
  };
};
export {
  Fr as Content,
  qr as ReactEditor,
  Mr as ReactNodeContainer,
  Nr as ReactNodeView,
  Ar as createReactView,
  Gr as useEditor,
  Kr as useNodeCtx
};
//# sourceMappingURL=index.es.js.map
