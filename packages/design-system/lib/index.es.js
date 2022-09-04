var R = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var m = (t, e, n) => (R(t, e, "read from private field"), n ? n.call(t) : e.get(t)), b = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, A = (t, e, n, r) => (R(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
import U from "@emotion/cache";
import { createSlice as S, createContainer as W } from "@milkdown/ctx";
function q(t) {
  for (var e = 0, n, r = 0, s = t.length; s >= 4; ++r, s -= 4)
    n = t.charCodeAt(r) & 255 | (t.charCodeAt(++r) & 255) << 8 | (t.charCodeAt(++r) & 255) << 16 | (t.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, e = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (s) {
    case 3:
      e ^= (t.charCodeAt(r + 2) & 255) << 16;
    case 2:
      e ^= (t.charCodeAt(r + 1) & 255) << 8;
    case 1:
      e ^= t.charCodeAt(r) & 255, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  }
  return e ^= e >>> 13, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
}
var B = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function K(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return e[n] === void 0 && (e[n] = t(n)), e[n];
  };
}
var I = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, J = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", H = /[A-Z]|^ms/g, L = /_EMO_([^_]+?)_([^]*?)_EMO_/g, O = function(e) {
  return e.charCodeAt(1) === 45;
}, V = function(e) {
  return e != null && typeof e != "boolean";
}, N = /* @__PURE__ */ K(function(t) {
  return O(t) ? t : t.replace(H, "-$&").toLowerCase();
}), w = function(e, n) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(L, function(r, s, o) {
          return h = {
            name: s,
            styles: o,
            next: h
          }, s;
        });
  }
  return B[e] !== 1 && !O(e) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
if (process.env.NODE_ENV !== "production") {
  var Q = /(var|attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Z = ["normal", "none", "initial", "inherit", "unset"], X = w, k = /^-ms-/, ee = /-(.)/g, D = {};
  w = function(e, n) {
    if (e === "content" && (typeof n != "string" || Z.indexOf(n) === -1 && !Q.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + n + "\"'`");
    var r = X(e, n);
    return r !== "" && !O(e) && e.indexOf("-") !== -1 && D[e] === void 0 && (D[e] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + e.replace(k, "ms-").replace(ee, function(s, o) {
      return o.toUpperCase();
    }) + "?")), r;
  };
}
var F = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function y(t, e, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && n.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(F);
    return n;
  }
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return h = {
          name: n.name,
          styles: n.styles,
          next: h
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            h = {
              name: r.name,
              styles: r.styles,
              next: h
            }, r = r.next;
        var s = n.styles + ";";
        return process.env.NODE_ENV !== "production" && n.map !== void 0 && (s += n.map), s;
      }
      return ne(t, e, n);
    }
    case "function": {
      if (t !== void 0) {
        var o = h, i = n(t);
        return h = o, y(t, e, i);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var c = [], f = n.replace(L, function(a, u, p) {
          var T = "animation" + c.length;
          return c.push("const " + T + " = keyframes`" + p.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + T + "}";
        });
        c.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(c, ["`" + f + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + f + "`"));
      }
      break;
  }
  if (e == null)
    return n;
  var l = e[n];
  return l !== void 0 ? l : n;
}
function ne(t, e, n) {
  var r = "";
  if (Array.isArray(n))
    for (var s = 0; s < n.length; s++)
      r += y(t, e, n[s]) + ";";
  else
    for (var o in n) {
      var i = n[o];
      if (typeof i != "object")
        e != null && e[i] !== void 0 ? r += o + "{" + e[i] + "}" : V(i) && (r += N(o) + ":" + w(o, i) + ";");
      else {
        if (o === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(F);
        if (Array.isArray(i) && typeof i[0] == "string" && (e == null || e[i[0]] === void 0))
          for (var c = 0; c < i.length; c++)
            V(i[c]) && (r += N(o) + ":" + w(o, i[c]) + ";");
        else {
          var f = y(t, e, i);
          switch (o) {
            case "animation":
            case "animationName": {
              r += N(o) + ":" + f + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && o === "undefined" && console.error(J), r += o + "{" + f + "}";
          }
        }
      }
    }
  return r;
}
var M = /label:\s*([^\s;\n{]+)\s*(;|$)/g, z;
process.env.NODE_ENV !== "production" && (z = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var h, C = function(e, n, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var s = !0, o = "";
  h = void 0;
  var i = e[0];
  i == null || i.raw === void 0 ? (s = !1, o += y(r, n, i)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(I), o += i[0]);
  for (var c = 1; c < e.length; c++)
    o += y(r, n, e[c]), s && (process.env.NODE_ENV !== "production" && i[c] === void 0 && console.error(I), o += i[c]);
  var f;
  process.env.NODE_ENV !== "production" && (o = o.replace(z, function(p) {
    return f = p, "";
  })), M.lastIndex = 0;
  for (var l = "", a; (a = M.exec(o)) !== null; )
    l += "-" + a[1];
  var u = q(o) + l;
  return process.env.NODE_ENV !== "production" ? {
    name: u,
    styles: o,
    map: f,
    next: h,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: u,
    styles: o,
    next: h
  };
}, te = !0;
function Y(t, e, n) {
  var r = "";
  return n.split(" ").forEach(function(s) {
    t[s] !== void 0 ? e.push(t[s] + ";") : r += s + " ";
  }), r;
}
var re = function(e, n, r) {
  var s = e.key + "-" + n.name;
  (r === !1 || te === !1) && e.registered[s] === void 0 && (e.registered[s] = n.styles);
}, oe = function(e, n, r) {
  re(e, n, r);
  var s = e.key + "-" + n.name;
  if (e.inserted[n.name] === void 0) {
    var o = n;
    do
      e.insert(n === o ? "." + s : "", o, e.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function j(t, e) {
  if (t.inserted[e.name] === void 0)
    return t.insert("", e, t.sheet, !0);
}
function G(t, e, n) {
  var r = [], s = Y(t, r, n);
  return r.length < 2 ? n : s + e(r);
}
var se = function(e) {
  var n = U(e);
  n.sheet.speedy = function(c) {
    if (process.env.NODE_ENV !== "production" && this.ctr !== 0)
      throw new Error("speedy must be changed before any rules are inserted");
    this.isSpeedy = c;
  }, n.compat = !0;
  var r = function() {
    for (var f = arguments.length, l = new Array(f), a = 0; a < f; a++)
      l[a] = arguments[a];
    var u = C(l, n.registered, void 0);
    return oe(n, u, !1), n.key + "-" + u.name;
  }, s = function() {
    for (var f = arguments.length, l = new Array(f), a = 0; a < f; a++)
      l[a] = arguments[a];
    var u = C(l, n.registered), p = "animation-" + u.name;
    return j(n, {
      name: u.name,
      styles: "@keyframes " + p + "{" + u.styles + "}"
    }), p;
  }, o = function() {
    for (var f = arguments.length, l = new Array(f), a = 0; a < f; a++)
      l[a] = arguments[a];
    var u = C(l, n.registered);
    j(n, u);
  }, i = function() {
    for (var f = arguments.length, l = new Array(f), a = 0; a < f; a++)
      l[a] = arguments[a];
    return G(n.registered, r, ie(l));
  };
  return {
    css: r,
    cx: i,
    injectGlobal: o,
    keyframes: s,
    hydrate: function(f) {
      f.forEach(function(l) {
        n.inserted[l] = !0;
      });
    },
    flush: function() {
      n.registered = {}, n.inserted = {}, n.sheet.flush();
    },
    sheet: n.sheet,
    cache: n,
    getRegisteredStyles: Y.bind(null, n.registered),
    merge: G.bind(null, n.registered, r)
  };
}, ie = function t(e) {
  for (var n = "", r = 0; r < e.length; r++) {
    var s = e[r];
    if (s != null) {
      var o = void 0;
      switch (typeof s) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(s))
            o = t(s);
          else {
            o = "";
            for (var i in s)
              s[i] && i && (o && (o += " "), o += i);
          }
          break;
        }
        default:
          o = s;
      }
      o && (n && (n += " "), n += o);
    }
  }
  return n;
};
const we = (t) => se(t), Se = S({ key: "milkdown" }, "EmotionConfig"), _ = S({}, "Emotion"), d = (t) => S(() => null, t);
var g, v, E, x;
class $ {
  constructor() {
    b(this, g, W());
    b(this, v, /* @__PURE__ */ new Map());
    b(this, E, /* @__PURE__ */ new Set());
    b(this, x, () => {
    });
  }
  inject(e) {
    e(m(this, g).sliceMap);
  }
  has(e) {
    const n = typeof e == "string" ? e : e.sliceName;
    return m(this, v).has(n) ? !0 : m(this, g).getSlice(e).get()(null) != null;
  }
  set(e, n) {
    const r = typeof e == "string" ? e : e.sliceName;
    m(this, v).set(r, n);
  }
  get(e, n) {
    const r = typeof e == "string" ? e : e.sliceName, s = m(this, v).get(r);
    return s && (m(this, g).getSlice(e).set(s), m(this, v).delete(e)), m(this, g).getSlice(e).get()(n);
  }
  onFlush(e, n = !0) {
    m(this, E).has(e) || m(this, E).add(e), n && e();
  }
  async switch(e, n) {
    e.get(_).flush(), await n(e)(e), this.runExecutor(), m(this, E).forEach((s) => s());
  }
  flush(e) {
    e.get(_).flush(), this.runExecutor(), m(this, E).forEach((r) => r());
  }
  setExecutor(e) {
    e(), A(this, x, e);
  }
  runExecutor() {
    m(this, x).call(this);
  }
}
g = new WeakMap(), v = new WeakMap(), E = new WeakMap(), x = new WeakMap();
const Ne = S(new $(), "themeManager"), Ce = () => new $(), ae = d("border"), P = d("color"), ce = d("font"), fe = d("global"), le = d("icon"), ue = d("code-fence"), me = d("image"), de = d("inner-editor"), he = d("input-chip"), pe = d("task-list-item"), ge = d("scrollbar"), ve = d("shadow"), Ee = d("size"), Oe = [
  P,
  Ee,
  ce,
  ge,
  ve,
  ae,
  le,
  fe,
  ue,
  me,
  de,
  pe,
  he
], Te = (t) => {
  const e = /^([a-f\d])([a-f\d])([a-f\d])$/i, n = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, r = (l) => parseInt(l, 16), s = t.slice(1).replace(e, (l, a, u, p) => a + a + u + u + p + p), [o, i = "0", c = "0", f = "0"] = s.match(n) || [];
  return o ? [i, c, f].map(r) : null;
}, Re = (t) => (e, n = 1) => t.get(P, [e, n]);
export {
  ae as ThemeBorder,
  ue as ThemeCodeFence,
  P as ThemeColor,
  ce as ThemeFont,
  fe as ThemeGlobal,
  le as ThemeIcon,
  me as ThemeImage,
  de as ThemeInnerEditor,
  he as ThemeInputChip,
  $ as ThemeManager,
  ge as ThemeScrollbar,
  ve as ThemeShadow,
  Ee as ThemeSize,
  pe as ThemeTaskListItem,
  Ce as createThemeManager,
  d as createThemeSliceKey,
  Se as emotionConfigCtx,
  _ as emotionCtx,
  Re as getPalette,
  Te as hex2rgb,
  we as initEmotion,
  Oe as internalThemeKeys,
  Ne as themeManagerCtx
};
//# sourceMappingURL=index.es.js.map
