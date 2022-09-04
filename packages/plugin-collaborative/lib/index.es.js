var b = (o, t, e) => {
  if (!t.has(o))
    throw TypeError("Cannot " + e);
};
var r = (o, t, e) => (b(o, t, "read from private field"), e ? e.call(o) : t.get(o)), c = (o, t, e) => {
  if (t.has(o))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(o) : t.set(o, e);
}, l = (o, t, e, i) => (b(o, t, "write to private field"), i ? i.call(o, e) : t.set(o, e), e);
var m = (o, t, e) => (b(o, t, "access private method"), e);
import { schemaCtx as x, parserCtx as A, getDoc as N, prosePluginsCtx as v, editorViewCtx as R, themeManagerCtx as O, ThemeSize as B, ThemeBorder as T, ThemeColor as E, createSlice as L, createTimer as W, ThemeReady as Y, emotionCtx as V, EditorViewReady as X } from "@milkdown/core";
import { ctxNotBind as f, missingYjsDoc as K } from "@milkdown/exception";
import { keydownHandler as _ } from "@milkdown/prose/keymap";
import { PluginKey as H, Plugin as I } from "@milkdown/prose/state";
import { ySyncPlugin as q, yUndoPlugin as G, undo as J, redo as D, yCursorPlugin as Q, yDocToProsemirror as Z, prosemirrorToYDoc as tt, ySyncPluginKey as et, yCursorPluginKey as rt, yUndoPluginKey as ot } from "y-prosemirror";
export * from "y-prosemirror";
import { encodeStateAsUpdate as it, applyUpdate as st } from "yjs";
const j = new H("MILKDOWN_COLLAB_KEYMAP"), nt = [j, et, rt, ot];
var a, h, p, s, d, P, F, C, U, y, M;
class $ {
  constructor() {
    c(this, P);
    c(this, C);
    c(this, y);
    c(this, a, {});
    c(this, h, null);
    c(this, p, null);
    c(this, s, null);
    c(this, d, !1);
  }
  bindCtx(t) {
    return l(this, s, t), this;
  }
  bindDoc(t) {
    return l(this, h, t), this;
  }
  setOptions(t) {
    return l(this, a, t), this;
  }
  mergeOptions(t) {
    return Object.assign(r(this, a), t), this;
  }
  setAwareness(t) {
    return l(this, p, t), this;
  }
  applyTemplate(t, e) {
    if (!r(this, s))
      throw f();
    if (!r(this, h))
      throw K();
    const i = e || ((w) => w.textContent.length === 0), n = m(this, P, F).call(this, t), u = r(this, s).get(x), g = Z(u, r(this, h));
    if (n && i(g, n)) {
      const w = r(this, h).getXmlFragment("prosemirror");
      w.delete(0, w.length);
      const S = tt(n), z = it(S);
      st(r(this, h), z), S.destroy();
    }
    return this;
  }
  connect() {
    if (!r(this, s))
      throw f();
    if (r(this, d))
      return;
    const t = r(this, s).get(v), e = m(this, C, U).call(this), i = t.concat(e);
    return m(this, y, M).call(this, i), l(this, d, !0), this;
  }
  disconnect() {
    if (!r(this, s))
      throw f();
    if (!r(this, d))
      return this;
    const e = r(this, s).get(v).filter((i) => !i.spec.key || !nt.includes(i.spec.key));
    return m(this, y, M).call(this, e), l(this, d, !1), this;
  }
}
a = new WeakMap(), h = new WeakMap(), p = new WeakMap(), s = new WeakMap(), d = new WeakMap(), P = new WeakSet(), F = function(t) {
  if (!r(this, s))
    throw f();
  const e = r(this, s).get(x), i = r(this, s).get(A);
  return N(t, i, e);
}, C = new WeakSet(), U = function() {
  if (!r(this, h))
    throw K();
  const { ySyncOpts: t, yUndoOpts: e } = r(this, a), i = r(this, h).getXmlFragment("prosemirror"), n = [
    q(i, t),
    G(e),
    new I({
      key: j,
      props: {
        handleKeyDown: _({
          "Mod-z": J,
          "Mod-y": D,
          "Mod-Shift-z": D
        })
      }
    })
  ];
  if (r(this, p)) {
    const { yCursorOpts: u, yCursorStateField: g } = r(this, a);
    n.push(Q(r(this, p), u, g));
  }
  return n;
}, y = new WeakSet(), M = function(t) {
  if (!r(this, s))
    throw f();
  r(this, s).set(v, t);
  const e = r(this, s).get(R), i = e.state.reconfigure({ plugins: t });
  e.updateState(i), r(this, s).get(O).flush(r(this, s));
};
const ht = (o, { injectGlobal: t }) => {
  const e = (u, g = 1) => o.get(E, [u, g]), i = o.get(B, "lineWidth");
  t`
        .milkdown .paragraph {
            overflow: visible;
        }
        /* this is a rough fix for the first cursor position when the first paragraph is empty */
        .ProseMirror > .ProseMirror-yjs-cursor:first-child {
            margin-top: 1em;
        }
        .ProseMirror p:first-child,
        .ProseMirror h1:first-child,
        .ProseMirror h2:first-child,
        .ProseMirror h3:first-child,
        .ProseMirror h4:first-child,
        .ProseMirror h5:first-child,
        .ProseMirror h6:first-child {
            margin-top: 1em;
        }
        /* This gives the remote user caret. The colors are automatically overwritten*/
        .ProseMirror-yjs-cursor {
            position: relative;
            margin-left: -${i};
            margin-right: -${i};
            ${o.get(T, "left")};
            ${o.get(T, "right")};
            word-break: normal;
            pointer-events: none;
        }
        /* This renders the username above the caret */
        .ProseMirror-yjs-cursor > div {
            position: absolute;
            top: -1.05em;
            left: -${i};
            font-size: 13px;
            background-color: ${e("background")};
            font-family: serif;
            font-style: normal;
            font-weight: normal;
            line-height: normal;
            user-select: none;
            color: white;
            padding-left: 2px;
            padding-right: 2px;
            white-space: nowrap;
        }
    `;
}, ct = L(new $(), "collabServiceCtx"), k = W("CollabReady"), ft = (o) => {
  const t = new $();
  return o.inject(ct, t).record(k), async (e) => {
    await e.wait(Y);
    const i = e.get(O), n = e.get(V);
    i.onFlush(() => {
      ht(i, n);
    }), await e.wait(X), t.bindCtx(e), e.done(k);
  };
};
export {
  k as CollabReady,
  $ as CollabService,
  ct as collabServiceCtx,
  ft as collaborative
};
//# sourceMappingURL=index.es.js.map
