import { SupportedKeys as lt, commonmark as st, commands as rt } from "@milkdown/preset-commonmark";
import { InsertHardbreak as io, InsertHr as co, InsertImage as ao, LiftListItem as fo, ModifyImage as uo, ModifyLink as po, SinkListItem as ho, SplitListItem as mo, ToggleBold as go, ToggleInlineCode as wo, ToggleItalic as bo, ToggleLink as Co, TurnIntoCodeFence as yo, TurnIntoHeading as ko, TurnIntoText as Ao, WrapInBlockquote as Mo, WrapInBulletList as So, WrapInOrderedList as No, blockquote as xo, bulletList as Ro, codeFence as To, codeInline as Lo, commonmark as vo, commonmarkNodes as Eo, commonmarkPlugins as Io, doc as $o, em as Do, HardbreakFilterPluginKey as Oo, heading as _o, hr as zo, image as Fo, link as Bo, listItem as Po, orderedList as Wo, paragraph as Ho, strong as jo, text as Ko } from "@milkdown/preset-commonmark";
import { createNode as be, createPlugin as it, createShortcut as $, createMark as ct, AtomList as at, $remark as dt } from "@milkdown/utils";
import ft from "remark-gfm";
import { createCmdKey as R, editorViewCtx as ee, createCmd as N, commandsCtx as Ue, themeManagerCtx as L, ThemeIcon as v, ThemeBorder as ut, ThemeShadow as pt, getPalette as ht, ThemeSize as Ne, schemaCtx as re } from "@milkdown/core";
import { expectDomTypeError as Ce, missingRootElement as mt } from "@milkdown/exception";
import { findSelectedNodeOfType as B, findParentNode as gt, cloneTr as Xe, calculateNodePosition as wt, browser as xe } from "@milkdown/prose";
import { wrappingInputRule as Ve, InputRule as Ge } from "@milkdown/prose/inputrules";
import { PluginKey as F, NodeSelection as te, Plugin as W, Selection as S, SelectionRange as bt, TextSelection as D } from "@milkdown/prose/state";
import { toggleMark as Ct, wrapIn as yt } from "@milkdown/prose/commands";
import { Fragment as E, Slice as O } from "@milkdown/prose/model";
import { Decoration as ye, DecorationSet as ke } from "@milkdown/prose/view";
import { keydownHandler as kt } from "@milkdown/prose/keymap";
import { Transform as At } from "@milkdown/prose/transform";
import { splitListItem as Mt, sinkListItem as St, liftListItem as Nt } from "@milkdown/prose/schema-list";
const Je = (o) => `footnote-ref-${o}`, Ye = (o) => `footnote-def-${o}`, xt = new F("MILKDOWN_FOOTNOTE_DEF_INPUT"), Re = R("ModifyFootnoteDef"), Rt = be((o) => {
  const e = "footnote_definition", t = "footnoteDefinition";
  return {
    id: e,
    schema: (n) => ({
      group: "block",
      content: "block+",
      defining: !0,
      attrs: {
        label: {
          default: ""
        }
      },
      parseDOM: [
        {
          tag: `div[data-type="${e}"]`,
          getAttrs: (l) => {
            if (!(l instanceof HTMLElement))
              throw Ce(l);
            return {
              label: l.dataset.label
            };
          },
          contentElement: "dd"
        }
      ],
      toDOM: (l) => {
        const s = l.attrs.label, r = o.getClassName(l.attrs, "footnote-definition"), a = document.createElement("dt");
        a.textContent = `[${s}]:`, a.onclick = () => {
          const c = n.get(ee), d = te.create(c.state.doc, c.state.selection.from - 2);
          c.dispatch(c.state.tr.setSelection(d));
        };
        const i = document.createElement("a");
        return i.href = `#${Je(s)}`, i.contentEditable = "false", i.textContent = "\u21A9", i.onmousedown = (c) => {
          c.preventDefault();
        }, [
          "div",
          {
            class: r,
            "data-label": s,
            "data-type": e,
            id: Ye(s)
          },
          ["div", { class: "footnote-definition_content" }, a, ["dd", 0]],
          ["div", { class: "footnote-definition_anchor" }, i]
        ];
      },
      parseMarkdown: {
        match: ({ type: l }) => l === t,
        runner: (l, s, r) => {
          l.openNode(r, {
            label: s.label
          }).next(s.children).closeNode();
        }
      },
      toMarkdown: {
        match: (l) => l.type.name === e,
        runner: (l, s) => {
          l.openNode(t, void 0, {
            label: s.attrs.label,
            identifier: s.attrs.label
          }).next(s.content).closeNode();
        }
      }
    }),
    commands: (n) => [
      N(Re, (l = "") => (s, r) => {
        const a = B(s.selection, n);
        if (!a)
          return !1;
        const { tr: i } = s, c = i.setNodeMarkup(a.pos, void 0, { ...a.node.attrs, label: l });
        return r == null || r(c.setSelection(te.create(c.doc, a.pos))), !0;
      })
    ],
    inputRules: (n) => [
      Ve(/(?:\[\^)([^:]+)(?::)$/, n, (l) => {
        var r;
        return {
          label: (r = l[1]) != null ? r : "footnote"
        };
      }, () => !1)
    ],
    prosePlugins: (n, l) => [
      new W({
        key: xt,
        view: (s) => {
          const r = o.themeManager.get("input-chip", {
            width: "12em",
            placeholder: "Input Footnote Label",
            onUpdate: (d) => {
              l.get(Ue).call(Re, d);
            },
            isBindMode: !0
          });
          if (!r)
            return {};
          const a = (d) => Boolean(n && B(d.state.selection, n)), i = (d) => {
            const f = B(d.state.selection, n);
            return f ? f.node.attrs.label : void 0;
          }, c = (d) => {
            if (!d.editable)
              return;
            a(d) ? (r.show(d), r.update(i(d))) : r.hide();
          };
          return r.init(s), c(s), {
            update: (d, f) => {
              (f == null ? void 0 : f.doc.eq(d.state.doc)) && f.selection.eq(d.state.selection) || c(d);
            },
            destroy: () => {
              r.destroy();
            }
          };
        }
      })
    ]
  };
}), Te = R("ModifyFootnoteRef"), Tt = new F("MILKDOWN_FOOTNOTE_REF_INPUT"), Lt = be((o) => {
  const e = "footnote_reference";
  return {
    id: e,
    schema: (t) => ({
      group: "inline",
      inline: !0,
      atom: !0,
      attrs: {
        label: {
          default: ""
        }
      },
      parseDOM: [
        {
          tag: `sup[data-type="${e}"]`,
          getAttrs: (n) => {
            if (!(n instanceof HTMLElement))
              throw Ce(n);
            return {
              label: n.dataset.label
            };
          }
        }
      ],
      toDOM: (n) => {
        const l = n.attrs.label, s = document.createElement("a"), r = `#${Ye(l)}`;
        return s.href = r, s.textContent = `[${l}]`, s.onclick = (a) => {
          t.get(ee).editable && a.preventDefault();
        }, s.ondblclick = () => {
          t.get(ee).editable && (window.location.href = r);
        }, [
          "sup",
          {
            "data-label": l,
            "data-type": e,
            id: Je(l)
          },
          s
        ];
      },
      parseMarkdown: {
        match: ({ type: n }) => n === "footnoteReference",
        runner: (n, l, s) => {
          n.addNode(s, {
            label: l.label
          });
        }
      },
      toMarkdown: {
        match: (n) => n.type.name === e,
        runner: (n, l) => {
          n.addNode("footnoteReference", void 0, void 0, {
            label: l.attrs.label,
            identifier: l.attrs.label
          });
        }
      }
    }),
    commands: (t) => [
      N(Te, (n = "") => (l, s) => {
        const r = B(l.selection, t);
        if (!r)
          return !1;
        const { tr: a } = l, i = a.setNodeMarkup(r.pos, void 0, { ...r.node.attrs, label: n });
        return s == null || s(i.setSelection(te.create(i.doc, r.pos))), !0;
      })
    ],
    inputRules: (t) => [
      new Ge(/(?:\[\^)([^\]]+)(?:\])$/, (n, l, s, r) => {
        const a = n.doc.resolve(s), i = a.index(), c = n.doc.resolve(r);
        if (!a.parent.canReplaceWith(i, c.index(), t))
          return null;
        const d = l[1];
        return n.tr.replaceRangeWith(s, r, t.create({
          label: d
        }));
      })
    ],
    prosePlugins: (t, n) => {
      const l = o.themeManager.get("input-chip", {
        width: "12em",
        placeholder: "Input Footnote Label",
        onUpdate: (i) => {
          n.get(Ue).call(Te, i);
        },
        isBindMode: !0
      });
      if (!l)
        return [];
      const s = (i) => Boolean(t && B(i.state.selection, t)), r = (i) => {
        const c = B(i.state.selection, t);
        return c ? c.node.attrs.label : void 0;
      }, a = (i) => {
        if (!i.editable)
          return;
        s(i) ? (l.show(i), l.update(r(i))) : l.hide();
      };
      return [
        new W({
          key: Tt,
          view: (i) => (l.init(i), a(i), {
            update: (c, d) => {
              (d == null ? void 0 : d.doc.eq(c.state.doc)) && d.selection.eq(c.state.selection) || a(c);
            },
            destroy: () => {
              l.destroy();
            }
          })
        })
      ];
    }
  };
}), Ze = /* @__PURE__ */ new WeakMap(), vt = (o) => Ze.get(o), Et = (o, e) => (Ze.set(o, e), e);
class Le {
  constructor(e, t, n, l) {
    this.left = e, this.top = t, this.right = n, this.bottom = l;
  }
}
class g {
  constructor(e, t, n, l) {
    this.width = e, this.height = t, this.map = n, this.problems = l, this.width = e, this.height = t, this.map = n, this.problems = l;
  }
  findCell(e) {
    for (let t = 0; t < this.map.length; t++) {
      const n = this.map[t];
      if (n != e)
        continue;
      const l = t % this.width, s = t / this.width | 0;
      let r = l + 1, a = s + 1;
      for (let i = 1; r < this.width && this.map[t + i] == n; i++)
        r++;
      for (let i = 1; a < this.height && this.map[t + this.width * i] == n; i++)
        a++;
      return new Le(l, s, r, a);
    }
    throw new RangeError("No cell with offset " + e + " found");
  }
  colCount(e) {
    for (let t = 0; t < this.map.length; t++)
      if (this.map[t] == e)
        return t % this.width;
    throw new RangeError("No cell with offset " + e + " found");
  }
  nextCell(e, t, n) {
    const { left: l, right: s, top: r, bottom: a } = this.findCell(e);
    return t == "horiz" ? (n < 0 ? l == 0 : s == this.width) ? void 0 : this.map[r * this.width + (n < 0 ? l - 1 : s)] : (n < 0 ? r == 0 : a == this.height) ? void 0 : this.map[l + this.width * (n < 0 ? r - 1 : a)];
  }
  rectBetween(e, t) {
    const { left: n, right: l, top: s, bottom: r } = this.findCell(e), { left: a, right: i, top: c, bottom: d } = this.findCell(t);
    return new Le(Math.min(n, a), Math.min(s, c), Math.max(l, i), Math.max(r, d));
  }
  cellsInRect(e) {
    const t = [], n = {};
    for (let l = e.top; l < e.bottom; l++)
      for (let s = e.left; s < e.right; s++) {
        const r = l * this.width + s, a = this.map[r];
        n[a] || (n[a] = !0, (s != e.left || !s || this.map[r - 1] != a) && (l != e.top || !l || this.map[r - this.width] != a) && t.push(a));
      }
    return t;
  }
  positionAt(e, t, n) {
    for (let l = 0, s = 0; ; l++) {
      const r = s + n.child(l).nodeSize;
      if (l == e) {
        let a = t + e * this.width;
        const i = (e + 1) * this.width;
        for (; a < i && this.map[a] < s; )
          a++;
        return a == i ? r - 1 : this.map[a];
      }
      s = r;
    }
  }
  static get(e) {
    return vt(e) || Et(e, It(e));
  }
}
function It(o) {
  if (o.type.spec.tableRole != "table")
    throw new RangeError("Not a table node: " + o.type.name);
  const e = $t(o), t = o.childCount, n = [], l = [];
  let s = 0, r;
  for (let c = 0, d = e * t; c < d; c++)
    n[c] = 0;
  for (let c = 0, d = 0; c < t; c++) {
    const f = o.child(c);
    d++;
    for (let h = 0; ; h++) {
      for (; s < n.length && n[s] != 0; )
        s++;
      if (h == f.childCount)
        break;
      const b = f.child(h), { colspan: w, rowspan: C, colwidth: Se } = b.attrs;
      for (let H = 0; H < C; H++) {
        if (H + c >= t) {
          (r || (r = [])).push({
            type: "overlong_rowspan",
            pos: d,
            n: C - H
          });
          break;
        }
        const le = s + H * e;
        for (let _ = 0; _ < w; _++) {
          n[le + _] == 0 ? n[le + _] = d : (r || (r = [])).push({
            type: "collision",
            row: c,
            pos: d,
            n: w - _
          });
          const X = Se && Se[_];
          if (X) {
            const j = (le + _) % e * 2, se = l[j];
            se == null || se != X && l[j + 1] == 1 ? (l[j] = X, l[j + 1] = 1) : se == X && l[j + 1]++;
          }
        }
      }
      s += w, d += b.nodeSize;
    }
    const u = (c + 1) * e;
    let p = 0;
    for (; s < u; )
      n[s++] == 0 && p++;
    p && (r || (r = [])).push({ type: "missing", row: c, n: p }), d++;
  }
  const a = new g(e, t, n, r);
  let i = !1;
  for (let c = 0; !i && c < l.length; c += 2)
    l[c] != null && l[c + 1] < t && (i = !0);
  return i && Dt(a, l, o), a;
}
function $t(o) {
  let e = -1, t = !1;
  for (let n = 0; n < o.childCount; n++) {
    const l = o.child(n);
    let s = 0;
    if (t)
      for (let r = 0; r < n; r++) {
        const a = o.child(r);
        for (let i = 0; i < a.childCount; i++) {
          const c = a.child(i);
          r + c.attrs.rowspan > n && (s += c.attrs.colspan);
        }
      }
    for (let r = 0; r < l.childCount; r++) {
      const a = l.child(r);
      s += a.attrs.colspan, a.attrs.rowspan > 1 && (t = !0);
    }
    e == -1 ? e = s : e != s && (e = Math.max(e, s));
  }
  return e;
}
function Dt(o, e, t) {
  o.problems || (o.problems = []);
  for (let n = 0, l = {}; n < o.map.length; n++) {
    const s = o.map[n];
    if (l[s])
      continue;
    l[s] = !0;
    const r = t.nodeAt(s);
    let a = null;
    for (let i = 0; i < r.attrs.colspan; i++) {
      const c = (n + i) % o.width, d = e[c * 2];
      d != null && (!r.attrs.colwidth || r.attrs.colwidth[i] != d) && ((a || (a = Ot(r.attrs)))[i] = d);
    }
    a && o.problems.unshift({
      type: "colwidth mismatch",
      pos: s,
      colwidth: a
    });
  }
}
function Ot(o) {
  if (o.colwidth)
    return o.colwidth.slice();
  const e = [];
  for (let t = 0; t < o.colspan; t++)
    e.push(0);
  return e;
}
class m extends S {
  constructor(e, t = e) {
    const n = e.node(-1), l = g.get(n), s = e.start(-1), r = l.rectBetween(e.pos - s, t.pos - s), a = e.node(0), i = l.cellsInRect(r).filter((d) => d != t.pos - s);
    i.unshift(t.pos - s);
    const c = i.map((d) => {
      const f = n.nodeAt(d), u = d + s + 1;
      return new bt(a.resolve(u), a.resolve(u + f.content.size));
    });
    super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = t, this.$anchorCell = e, this.$headCell = t;
  }
  map(e, t) {
    const n = e.resolve(t.map(this.$anchorCell.pos)), l = e.resolve(t.map(this.$headCell.pos));
    if (de(n) && de(l) && Me(n, l)) {
      const s = this.$anchorCell.node(-1) != n.node(-1);
      return s && this.isRowSelection() ? m.rowSelection(n, l) : s && this.isColSelection() ? m.colSelection(n, l) : new m(n, l);
    }
    return D.between(n, l);
  }
  content() {
    const e = this.$anchorCell.node(-1), t = g.get(e), n = this.$anchorCell.start(-1), l = t.rectBetween(this.$anchorCell.pos - n, this.$headCell.pos - n), s = {}, r = [];
    for (let i = l.top; i < l.bottom; i++) {
      const c = [];
      for (let d = i * t.width + l.left, f = l.left; f < l.right; f++, d++) {
        const u = t.map[d];
        if (!s[u]) {
          s[u] = !0;
          const p = t.findCell(u);
          let h = e.nodeAt(u);
          const b = l.left - p.left, w = p.right - l.right;
          if (b > 0 || w > 0) {
            let C = h.attrs;
            b > 0 && (C = z(C, 0, b)), w > 0 && (C = z(C, C.colspan - w, w)), p.left < l.left ? h = h.type.createAndFill(C) : h = h.type.create(C, h.content);
          }
          if (p.top < l.top || p.bottom > l.bottom) {
            const C = y(h.attrs, "rowspan", Math.min(p.bottom, l.bottom) - Math.max(p.top, l.top));
            p.top < l.top ? h = h.type.createAndFill(C) : h = h.type.create(C, h.content);
          }
          c.push(h);
        }
      }
      r.push(e.child(i).copy(E.from(c)));
    }
    const a = this.isColSelection() && this.isRowSelection() ? e : r;
    return new O(E.from(a), 1, 1);
  }
  replace(e, t = O.empty) {
    const n = e.steps.length, l = this.ranges;
    for (let r = 0; r < l.length; r++) {
      const { $from: a, $to: i } = l[r], c = e.mapping.slice(n);
      e.replace(c.map(a.pos), c.map(i.pos), r ? O.empty : t);
    }
    const s = S.findFrom(e.doc.resolve(e.mapping.slice(n).map(this.to)), -1);
    s && e.setSelection(s);
  }
  replaceWith(e, t) {
    this.replace(e, new O(E.from(t), 0, 0));
  }
  forEachCell(e) {
    const t = this.$anchorCell.node(-1), n = g.get(t), l = this.$anchorCell.start(-1), s = n.cellsInRect(n.rectBetween(this.$anchorCell.pos - l, this.$headCell.pos - l));
    for (let r = 0; r < s.length; r++)
      e(t.nodeAt(s[r]), l + s[r]);
  }
  isColSelection() {
    const e = this.$anchorCell.index(-1), t = this.$headCell.index(-1);
    if (Math.min(e, t) > 0)
      return !1;
    const n = e + this.$anchorCell.nodeAfter.attrs.rowspan, l = t + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(n, l) == this.$headCell.node(-1).childCount;
  }
  static colSelection(e, t = e) {
    const n = g.get(e.node(-1)), l = e.start(-1), s = n.findCell(e.pos - l), r = n.findCell(t.pos - l), a = e.node(0);
    if (s.top <= r.top) {
      if (s.top > 0) {
        const i = n.map[s.left];
        e = a.resolve(l + i);
      }
      if (r.bottom < n.height) {
        const i = n.map[n.width * (n.height - 1) + r.right - 1];
        t = a.resolve(l + i);
      }
    } else {
      if (r.top > 0) {
        const i = n.map[s.left];
        t = a.resolve(l + i);
      }
      if (s.bottom < n.height) {
        const i = n.map[n.width * (n.height - 1) + s.right - 1];
        e = a.resolve(l + i);
      }
    }
    return new m(e, t);
  }
  isRowSelection() {
    const e = g.get(this.$anchorCell.node(-1)), t = this.$anchorCell.start(-1), n = e.colCount(this.$anchorCell.pos - t), l = e.colCount(this.$headCell.pos - t);
    if (Math.min(n, l) > 0)
      return !1;
    const s = n + this.$anchorCell.nodeAfter.attrs.colspan, r = l + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(s, r) == e.width;
  }
  eq(e) {
    return e instanceof m && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  static rowSelection(e, t = e) {
    const n = g.get(e.node(-1)), l = e.start(-1), s = n.findCell(e.pos - l), r = n.findCell(t.pos - l), a = e.node(0);
    if (s.left <= r.left) {
      if (s.left > 0) {
        const i = n.map[s.top * n.width];
        e = a.resolve(l + i);
      }
      if (r.right < n.width) {
        const i = n.map[n.width * (r.top + 1) - 1];
        t = a.resolve(l + i);
      }
    } else {
      if (r.left > 0) {
        const i = n.map[r.top * n.width];
        t = a.resolve(l + i);
      }
      if (s.right < n.width) {
        const i = n.map[n.width * (s.top + 1) - 1];
        e = a.resolve(l + i);
      }
    }
    return new m(e, t);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, t) {
    return new m(e.resolve(t.anchor), e.resolve(t.head));
  }
  static create(e, t, n = t) {
    return new m(e.resolve(t), e.resolve(n));
  }
  getBookmark() {
    return new Ae(this.$anchorCell.pos, this.$headCell.pos);
  }
}
m.prototype.visible = !1;
S.jsonID("cell", m);
class Ae {
  constructor(e, t) {
    this.anchor = e, this.head = t, this.anchor = e, this.head = t;
  }
  map(e) {
    return new Ae(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const t = e.resolve(this.anchor), n = e.resolve(this.head);
    return t.parent.type.spec.tableRole == "row" && n.parent.type.spec.tableRole == "row" && t.index() < t.parent.childCount && n.index() < n.parent.childCount && Me(t, n) ? new m(t, n) : S.near(n, 1);
  }
}
function _t(o) {
  if (!(o.selection instanceof m))
    return null;
  const e = [];
  return o.selection.forEachCell((t, n) => {
    e.push(ye.node(n, n + t.nodeSize, { class: "selectedCell" }));
  }), ke.create(o.doc, e);
}
function zt({ $from: o, $to: e }) {
  if (o.pos == e.pos || o.pos < o.pos - 6)
    return !1;
  let t = o.pos, n = e.pos, l = o.depth;
  for (; l >= 0 && !(o.after(l + 1) < o.end(l)); l--, t++)
    ;
  for (let s = e.depth; s >= 0 && !(e.before(s + 1) > e.start(s)); s--, n--)
    ;
  return t == n && /row|table/.test(o.node(l).type.spec.tableRole);
}
function Ft({ $from: o, $to: e }) {
  let t, n;
  for (let l = o.depth; l > 0; l--) {
    const s = o.node(l);
    if (s.type.spec.tableRole === "cell" || s.type.spec.tableRole === "header_cell") {
      t = s;
      break;
    }
  }
  for (let l = e.depth; l > 0; l--) {
    const s = e.node(l);
    if (s.type.spec.tableRole === "cell" || s.type.spec.tableRole === "header_cell") {
      n = s;
      break;
    }
  }
  return t !== n && e.parentOffset === 0;
}
function Bt(o, e, t) {
  const n = (e || o).selection, l = (e || o).doc;
  let s, r;
  if (n instanceof te && (r = n.node.type.spec.tableRole)) {
    if (r == "cell" || r == "header_cell")
      s = m.create(l, n.from);
    else if (r == "row") {
      const a = l.resolve(n.from + 1);
      s = m.rowSelection(a, a);
    } else if (!t) {
      const a = g.get(n.node), i = n.from + 1, c = a.map[a.width * a.height - 1], d = i + c;
      s = m.create(l, i + 1, d);
    }
  } else
    n instanceof D && zt(n) ? s = D.create(l, n.from) : n instanceof D && Ft(n) && (s = D.create(l, n.$from.start(), n.$from.end()));
  return s && (e || (e = o.tr)).setSelection(s), e;
}
function ve(o, e) {
  const t = o.getAttribute("data-colwidth"), n = t && /^\d+(,\d+)*$/.test(t) ? t.split(",").map((r) => Number(r)) : null, l = Number(o.getAttribute("colspan") || 1), s = {
    colspan: l,
    rowspan: Number(o.getAttribute("rowspan") || 1),
    colwidth: n && n.length == l ? n : null
  };
  for (const r in e) {
    const a = e[r].getFromDOM, i = a && a(o);
    i != null && (s[r] = i);
  }
  return s;
}
function Ee(o, e) {
  const t = {};
  o.attrs.colspan != 1 && (t.colspan = o.attrs.colspan), o.attrs.rowspan != 1 && (t.rowspan = o.attrs.rowspan), o.attrs.colwidth && (t["data-colwidth"] = o.attrs.colwidth.join(","));
  for (const n in e) {
    const l = e[n].setDOMAttr;
    l && l(o.attrs[n], t);
  }
  return t;
}
function Pt(o) {
  const e = o.cellAttributes || {}, t = {
    colspan: { default: 1 },
    rowspan: { default: 1 },
    colwidth: { default: null }
  };
  for (const s in e)
    t[s] = { default: e[s].default };
  const n = t;
  return {
    table: {
      content: "table_row+",
      tableRole: "table",
      isolating: !0,
      group: o.tableGroup,
      parseDOM: [{ tag: "table" }],
      toDOM() {
        return ["table", ["tbody", 0]];
      }
    },
    table_row: {
      content: "(table_cell | table_header)*",
      tableRole: "row",
      parseDOM: [{ tag: "tr" }],
      toDOM() {
        return ["tr", 0];
      }
    },
    table_cell: {
      content: o.cellContent,
      attrs: n,
      tableRole: "cell",
      isolating: !0,
      parseDOM: [{ tag: "td", getAttrs: (s) => ve(s, e) }],
      toDOM(s) {
        return ["td", Ee(s, e), 0];
      }
    },
    table_header: {
      content: o.cellContent,
      attrs: n,
      tableRole: "header_cell",
      isolating: !0,
      parseDOM: [{ tag: "th", getAttrs: (s) => ve(s, e) }],
      toDOM(s) {
        return ["th", Ee(s, e), 0];
      }
    }
  };
}
function A(o) {
  let e = o.cached.tableNodeTypes;
  if (!e) {
    e = o.cached.tableNodeTypes = {};
    for (const t in o.nodes) {
      const n = o.nodes[t], l = n == null ? void 0 : n.spec.tableRole;
      l && (e[l] = n);
    }
  }
  return e;
}
const V = Pt({
  tableGroup: "block",
  cellContent: "paragraph",
  cellAttributes: {
    alignment: {
      default: "left",
      getFromDOM: (o) => o.style.textAlign || "left",
      setDOMAttr: (o, e) => {
        e.style = `text-align: ${o || "left"}`;
      }
    }
  }
});
function U(o) {
  for (let e = o.depth - 1; e > 0; e--)
    if (o.node(e).type.spec.tableRole == "row")
      return o.node(0).resolve(o.before(e + 1));
}
function de(o) {
  return o.parent.type.spec.tableRole == "row" ? o.nodeAfter : null;
}
function Wt(o) {
  return o.node(0).resolve(o.pos + o.nodeAfter.nodeSize);
}
function Me(o, e) {
  return o.depth == e.depth && o.pos >= e.start(-1) && o.pos <= e.end(-1);
}
function Qe(o, e, t) {
  const n = o.start(-1), s = g.get(o.node(-1)).nextCell(o.pos - n, e, t);
  return s == null ? null : o.node(0).resolve(n + s);
}
function y(o, e, t) {
  const n = {};
  for (const l in o)
    n[l] = o[l];
  return n[e] = t, n;
}
function z(o, e, t = 1) {
  const n = y(o, "colspan", o.colspan - t);
  if (n.colwidth) {
    const l = n.colwidth;
    n.colwidth = l.slice(), l.splice(e, t), l.some((s) => s > 0) || (n.colwidth = null);
  }
  return n;
}
function M(o) {
  const e = o.selection.$head;
  for (let t = e.depth; t > 0; t--)
    if (e.node(t).type.spec.tableRole == "row")
      return !0;
  return !1;
}
function ne(o) {
  const e = o.selection;
  return e instanceof m ? e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell : e.node && e.node.type.spec.tableRole == "cell" ? e.$anchor : U(e.$head) || Ht(e.$head);
}
function Ht(o) {
  for (let e = o.nodeAfter, t = o.pos; e; e = e.firstChild, t++) {
    const n = e.type.spec.tableRole;
    if (n == "cell" || n == "header_cell")
      return o.doc.resolve(t);
  }
  for (let e = o.nodeBefore, t = o.pos; e; e = e.lastChild, t--) {
    const n = e.type.spec.tableRole;
    if (n == "cell" || n == "header_cell")
      return o.doc.resolve(t - e.nodeSize);
  }
}
function jt(o, e, t = 1) {
  const n = y(o, "colspan", o.colspan + t);
  if (n.colwidth) {
    const l = n.colwidth;
    n.colwidth = l.slice();
    for (let s = 0; s < t; s++)
      l.splice(e, 0, 0);
  }
  return n;
}
function Kt(o, e, t) {
  const n = A(e.type.schema).header_cell;
  for (let l = 0; l < o.height; l++) {
    const s = o.map[t + l * o.width];
    if (e.nodeAt(s).type != n)
      return !1;
  }
  return !0;
}
const qt = (o) => (e, t) => {
  if (!M(e))
    return !1;
  const { $head: n } = e.selection, l = n.after(), s = e.tr.replaceWith(l, l, o.createAndFill());
  return s.setSelection(S.near(s.doc.resolve(l), 1)), t == null || t(s.scrollIntoView()), !0;
};
function P(o) {
  const e = o.selection, t = ne(o), n = t.node(-1), l = t.start(-1), s = g.get(n);
  let r;
  return e instanceof m ? r = s.rectBetween(e.$anchorCell.pos - l, e.$headCell.pos - l) : r = s.findCell(t.pos - l), r.tableStart = l, r.map = s, r.table = n, r;
}
function et(o, { map: e, tableStart: t, table: n }, l) {
  e = e, n = n, t = t;
  let s = l > 0 ? -1 : 0;
  Kt(e, n, l + s) && (s = l == 0 || l == e.width ? null : 0);
  for (let r = 0; r < e.height; r++) {
    const a = r * e.width + l;
    if (l > 0 && l < e.width && e.map[a - 1] == e.map[a]) {
      const i = e.map[a], c = n.nodeAt(i);
      o.setNodeMarkup(o.mapping.map(t + i), null, jt(c.attrs, l - e.colCount(i))), r += c.attrs.rowspan - 1;
    } else {
      const i = e.map[a + s], c = s == null ? A(n.type.schema).cell : n.nodeAt(i).type, d = e.positionAt(r, l, n);
      o.insert(o.mapping.map(t + d), c.createAndFill());
    }
  }
  return o;
}
const Ut = (o, e) => {
  if (!M(o))
    return !1;
  if (e) {
    const t = P(o);
    e(et(o.tr, t, t.left));
  }
  return !0;
}, Xt = (o, e) => {
  if (!M(o))
    return !1;
  if (e) {
    const t = P(o);
    e(et(o.tr, t, t.right));
  }
  return !0;
};
function Vt(o, { map: e, table: t, tableStart: n }, l) {
  e = e, t = t, n = n;
  const s = o.mapping.maps.length;
  for (let r = 0; r < e.height; ) {
    const a = r * e.width + l, i = e.map[a], c = t.nodeAt(i);
    if (l > 0 && e.map[a - 1] == i || l < e.width - 1 && e.map[a + 1] == i)
      o.setNodeMarkup(o.mapping.slice(s).map(n + i), null, z(c.attrs, l - e.colCount(i)));
    else {
      const d = o.mapping.slice(s).map(n + i);
      o.delete(d, d + c.nodeSize);
    }
    r += c.attrs.rowspan;
  }
}
const Gt = (o, e) => {
  if (!M(o))
    return !1;
  if (e) {
    const t = P(o), n = o.tr;
    if (t.left == 0 && t.right == t.map.width)
      return !1;
    for (let l = t.right - 1; Vt(n, t, l), l != t.left; l--)
      t.table = t.tableStart ? n.doc.nodeAt(t.tableStart - 1) : n.doc, t.map = g.get(t.table);
    e(n);
  }
  return !0;
};
function Jt(o, { map: e, tableStart: t, table: n }, l) {
  e = e, n = n, t = t;
  let s = 0;
  for (let i = 0; i < l; i++)
    s += n.child(i).nodeSize;
  const r = s + n.child(l).nodeSize, a = o.mapping.maps.length;
  o.delete(s + t, r + t);
  for (let i = 0, c = l * e.width; i < e.width; i++, c++) {
    const d = e.map[c];
    if (l > 0 && d == e.map[c - e.width]) {
      const f = n.nodeAt(d).attrs;
      o.setNodeMarkup(o.mapping.slice(a).map(d + t), null, y(f, "rowspan", f.rowspan - 1)), i += f.colspan - 1;
    } else if (l < e.width && d == e.map[c + e.width]) {
      const f = n.nodeAt(d), u = f.type.create(y(f.attrs, "rowspan", f.attrs.rowspan - 1), f.content), p = e.positionAt(l + 1, i, n);
      o.insert(o.mapping.slice(a).map(t + p), u), i += f.attrs.colspan - 1;
    }
  }
}
const Yt = (o, e) => {
  if (!M(o))
    return !1;
  if (e) {
    const t = P(o), n = o.tr;
    if (t.top == 0 && t.bottom == t.map.height)
      return !1;
    for (let l = t.bottom - 1; Jt(n, t, l), l != t.top; l--)
      t.table = t.tableStart ? n.doc.nodeAt(t.tableStart - 1) : n.doc, t.map = g.get(t.table);
    e(n);
  }
  return !0;
};
function ie(o, e) {
  return (t, n) => {
    if (!M(t))
      return !1;
    const l = ne(t);
    if (l.nodeAfter.attrs[o] === e)
      return !1;
    if (n) {
      const s = t.tr;
      t.selection instanceof m ? t.selection.forEachCell((r, a) => {
        r.attrs[o] !== e && s.setNodeMarkup(a, null, y(r.attrs, o, e));
      }) : s.setNodeMarkup(l.pos, null, y(l.nodeAfter.attrs, o, e)), n(s);
    }
    return !0;
  };
}
function Zt(o, e) {
  if (e < 0) {
    const t = o.nodeBefore;
    if (t)
      return o.pos - t.nodeSize;
    for (let n = o.index(-1) - 1, l = o.before(); n >= 0; n--) {
      const s = o.node(-1).child(n);
      if (s.childCount)
        return l - 1 - s.lastChild.nodeSize;
      l -= s.nodeSize;
    }
  } else {
    if (o.index() < o.parent.childCount - 1)
      return o.pos + o.nodeAfter.nodeSize;
    const t = o.node(-1);
    for (let n = o.indexAfter(-1), l = o.after(); n < t.childCount; n++) {
      const s = t.child(n);
      if (s.childCount)
        return l + 1;
      l += s.nodeSize;
    }
  }
}
function Ie(o) {
  return (e, t) => {
    if (!M(e))
      return !1;
    const n = Zt(ne(e), o);
    if (n == null)
      return !1;
    if (t) {
      const l = e.doc.resolve(n);
      t(e.tr.setSelection(D.between(l, Wt(l))).scrollIntoView());
    }
    return !0;
  };
}
const Qt = (o, e) => {
  const t = o.selection.$anchor;
  for (let n = t.depth; n > 0; n--)
    if (t.node(n).type.spec.tableRole == "table")
      return e && e(o.tr.delete(t.before(n), t.after(n)).scrollIntoView()), !0;
  return !1;
}, oe = (o) => gt((e) => e.type.spec.tableRole === "table")(o), en = (o) => (e) => {
  const t = oe(e);
  if (!t)
    return;
  const n = g.get(t.node);
  if (!(o < 0 || o >= n.width))
    return n.cellsInRect({ left: o, right: o + 1, top: 0, bottom: n.height }).map((l) => {
      const s = t.node.nodeAt(l);
      if (!s)
        return;
      const r = l + t.start;
      return {
        pos: r,
        start: r + 1,
        node: s
      };
    }).filter((l) => l != null);
}, tn = (o) => (e) => {
  const t = oe(e);
  if (!t)
    return;
  const n = g.get(t.node);
  if (!(o < 0 || o >= n.height))
    return n.cellsInRect({ left: 0, right: n.width, top: o, bottom: o + 1 }).map((l) => {
      const s = t.node.nodeAt(l);
      if (!s)
        return;
      const r = l + t.start;
      return {
        pos: r,
        start: r + 1,
        node: s
      };
    }).filter((l) => l != null);
}, $e = (o, e = 3, t = 3) => {
  const { cell: n, header_cell: l, row: s, table: r } = A(o), a = Array(t).fill(0).map(() => n.createAndFill(null)), i = Array(t).fill(0).map(() => l.createAndFill(null)), c = Array(e).fill(0).map((d, f) => s.create(null, f === 0 ? i : a));
  return r.create(null, c);
}, De = (o) => (e) => (t) => {
  const n = oe(t.selection), l = o === "row";
  if (n) {
    const s = g.get(n.node);
    if (e >= 0 && e < (l ? s.height : s.width)) {
      const r = s.positionAt(l ? e : s.height - 1, l ? s.width - 1 : e, n.node), a = t.doc.resolve(n.start + r), i = l ? m.rowSelection : m.colSelection, c = s.positionAt(l ? e : 0, l ? 0 : e, n.node), d = t.doc.resolve(n.start + c);
      return Xe(t.setSelection(i(a, d)));
    }
  }
  return t;
}, nn = (o) => {
  const e = oe(o);
  if (!e)
    return;
  const t = g.get(e.node);
  return t.cellsInRect({
    left: 0,
    right: t.width,
    top: 0,
    bottom: t.height
  }).map((l) => {
    const s = e.node.nodeAt(l), r = l + e.start;
    return { pos: r, start: r + 1, node: s };
  });
}, on = (o) => {
  const e = nn(o.selection);
  if (e && e[0]) {
    const t = o.doc.resolve(e[0].pos), n = e[e.length - 1];
    if (n) {
      const l = o.doc.resolve(n.pos);
      return Xe(o.setSelection(new m(l, t)));
    }
  }
  return o;
};
function Oe(o, { map: e, tableStart: t, table: n }, l) {
  const s = Array(l).fill(0).reduce((c, d, f) => c + n.child(f).nodeSize, t), { cell: r, row: a } = A(n.type.schema), i = Array(e.width).fill(0).map((c, d) => {
    const f = n.nodeAt(e.map[d]);
    return r.createAndFill({ alignment: f == null ? void 0 : f.attrs.alignment });
  });
  return o.insert(s, a.create(null, i)), o;
}
const T = (o) => o.state.selection, ln = (o) => {
  const e = g.get(o.$anchorCell.node(-1)), t = o.$anchorCell.start(-1), n = e.cellsInRect({
    left: 0,
    right: e.width,
    top: 0,
    bottom: 1
  }), l = e.cellsInRect(e.rectBetween(o.$anchorCell.pos - t, o.$headCell.pos - t));
  for (let s = 0, r = n.length; s < r; s++)
    if (l.indexOf(n[s]) === -1)
      return !1;
  return !0;
}, sn = (o, e) => {
  Object.values(o).forEach((t) => {
    var l;
    if ((l = t.disable) == null ? void 0 : l.call(t, e)) {
      t.$.classList.add("hide");
      return;
    }
    t.$.classList.remove("hide");
  });
}, rn = (o) => {
  var e, t, n, l, s, r, a, i;
  return {
    [0]: {
      $: (e = o.get(L).get(v, "leftArrow")) == null ? void 0 : e.dom,
      command: () => Ut,
      disable: (c) => !T(c).isColSelection()
    },
    [1]: {
      $: (t = o.get(L).get(v, "rightArrow")) == null ? void 0 : t.dom,
      command: () => Xt,
      disable: (c) => !T(c).isColSelection()
    },
    [2]: {
      $: (n = o.get(L).get(v, "upArrow")) == null ? void 0 : n.dom,
      command: () => (c, d) => {
        if (!M(c))
          return !1;
        if (d) {
          const f = P(c);
          d(Oe(c.tr, f, f.top));
        }
        return !0;
      },
      disable: (c) => !T(c).isRowSelection() || T(c).$head.parent.type.name === "table_header"
    },
    [3]: {
      $: (l = o.get(L).get(v, "downArrow")) == null ? void 0 : l.dom,
      command: () => (c, d) => {
        if (!M(c))
          return !1;
        if (d) {
          const f = P(c);
          d(Oe(c.tr, f, f.bottom));
        }
        return !0;
      },
      disable: (c) => !T(c).isRowSelection()
    },
    [4]: {
      $: (s = o.get(L).get(v, "alignLeft")) == null ? void 0 : s.dom,
      command: () => ie("alignment", "left"),
      disable: (c) => !T(c).isColSelection()
    },
    [5]: {
      $: (r = o.get(L).get(v, "alignCenter")) == null ? void 0 : r.dom,
      command: () => ie("alignment", "center"),
      disable: (c) => !T(c).isColSelection()
    },
    [6]: {
      $: (a = o.get(L).get(v, "alignRight")) == null ? void 0 : a.dom,
      command: () => ie("alignment", "right"),
      disable: (c) => !T(c).isColSelection()
    },
    [7]: {
      $: (i = o.get(L).get(v, "delete")) == null ? void 0 : i.dom,
      command: (c, d) => {
        const f = T(d), u = f.isColSelection(), p = f.isRowSelection();
        return u && p ? Qt : u ? Gt : Yt;
      },
      disable: (c) => {
        const d = T(c);
        return d.isRowSelection() ? d.isColSelection() ? !1 : ln(d) : !1;
      }
    }
  };
}, cn = (o, e) => {
  const { selection: t } = o.state, n = t.isColSelection(), l = t.isRowSelection();
  wt(o, e, (s, r, a) => {
    const i = e.parentElement;
    if (!i)
      throw mt();
    let c = l ? s.left - a.left - r.width / 2 - 8 : s.left - a.left + (s.width - r.width) / 2;
    const d = s.top - a.top - r.height - (n ? 14 : 0) - 14 + i.scrollTop;
    return c < 0 && (c = 0), [d, c];
  });
};
var x = /* @__PURE__ */ ((o) => (o.Left = "Left", o.Top = "Top", o.Point = "Point", o))(x || {});
const an = (o, { css: e, injectGlobal: t }) => {
  const n = ht(o), l = o.get(Ne, "radius"), s = o.get(Ne, "lineWidth");
  return t`
        .milkdown {
            .tableWrapper {
                table {
                    width: calc(100% - 32px) !important;
                    margin: 16px 0 16px 16px !important;

                    .milkdown-cell-left,
                    .milkdown-cell-point,
                    .milkdown-cell-top {
                        position: absolute;

                        &::after {
                            cursor: pointer;
                            position: absolute;
                            top: 0;
                            left: 0;
                            height: 100%;
                            width: 100%;
                            display: block;
                            transition: all 0.2s ease-in-out;
                            background: ${n("secondary", 0.12)};
                            content: '';
                        }

                        &:hover::after {
                            background: ${n("secondary", 0.38)};
                        }
                    }

                    .milkdown-cell-left {
                        left: -14px;
                        top: 0;
                        bottom: 0;
                        width: 8px;
                    }

                    .milkdown-cell-top {
                        left: 0;
                        right: 0;
                        top: -14px;
                        height: 8px;
                    }

                    .milkdown-cell-point {
                        left: -18px;
                        top: -18px;
                        width: 16px;
                        height: 16px;

                        .icon {
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            left: 0;
                            right: 0;
                        }
                    }
                }
            }
        }
    `, e`
        display: inline-flex;
        cursor: pointer;
        z-index: 2;

        justify-content: space-evenly;

        position: absolute;

        border-radius: ${l};

        ${o.get(ut, void 0)};
        ${o.get(pt, void 0)};

        overflow: hidden;
        background: ${n("surface")};

        .icon {
            position: relative;
            color: ${n("solid", 0.87)};

            width: 48px;
            line-height: 48px;
            text-align: center;
            transition: all 0.4s ease-in-out;

            &:hover {
                background-color: ${n("secondary", 0.12)};
            }

            &.active {
                color: ${n("primary")};
            }

            &:not(:last-child)::after {
                content: '';
                position: absolute;
                right: 0;
                top: 0;
                width: ${s};
                bottom: 0;
                background: ${n("line")};
            }
        }

        &.hide,
        .hide {
            display: none;
        }
    `;
}, dn = (o) => {
  switch (o) {
    case x.Left:
      return "milkdown-cell-left";
    case x.Top:
      return "milkdown-cell-top";
    case x.Point:
    default:
      return "milkdown-cell-point";
  }
};
function ce(o, e, t, n = 0) {
  return ye.widget(e.pos + 1, (l) => {
    var r;
    const s = document.createElement("div");
    return s.classList.add(dn(t)), t === x.Point && s.appendChild((r = o.get(L).get(v, "select")) == null ? void 0 : r.dom), s.addEventListener("mousedown", (a) => {
      if (!!l)
        switch (a.preventDefault(), t) {
          case x.Point: {
            l.dispatch(on(l.state.tr));
            return;
          }
          case x.Left: {
            l.dispatch(De("row")(n)(l.state.tr));
            return;
          }
          case x.Top: {
            l.dispatch(De("col")(n)(l.state.tr));
            return;
          }
        }
    }), s;
  });
}
const fn = (o, e) => new W({
  key: new F("MILKDOWN_TABLE_OP"),
  props: {
    decorations: (t) => {
      const n = [], l = en(0)(t.selection);
      if (!l)
        return null;
      const s = tn(0)(t.selection);
      if (!s)
        return null;
      const [r] = l;
      return n.push(ce(o, r, x.Point)), l.forEach((a, i) => {
        n.push(ce(o, a, x.Left, i));
      }), s.forEach((a, i) => {
        n.push(ce(o, a, x.Top, i));
      }), ke.create(t.doc, n);
    }
  },
  view: (t) => {
    var a;
    const n = Object.fromEntries(Object.entries(rn(o)).filter(([, i]) => i.$ != null)), l = document.createElement("div");
    e.themeManager.onFlush(() => {
      const i = e.getStyle((c) => an(e.themeManager, c));
      i && l.classList.add(i);
    }), l.classList.add("table-tooltip", "hide"), Object.values(n).forEach(({ $: i }) => l.appendChild(i)), (a = t.dom.parentNode) == null || a.appendChild(l);
    const s = (i) => {
      !t || (i.stopPropagation(), i.preventDefault(), Object.values(n).forEach(({ $: c, command: d }) => {
        c.contains(i.target) && d(i, t)(t.state, t.dispatch, t);
      }));
    }, r = () => {
      l.classList.add("hide");
    };
    return l.addEventListener("mousedown", s), {
      update: (i, c) => {
        const d = i.state;
        if ((c == null ? void 0 : c.doc.eq(d.doc)) && c.selection.eq(d.selection))
          return;
        if (!(d.selection instanceof m) || !i.editable) {
          r();
          return;
        }
        if (sn(n, i), Object.values(n).every(({ $: u }) => u.classList.contains("hide"))) {
          r();
          return;
        }
        l.classList.remove("hide"), cn(i, l);
      },
      destroy: () => {
        l.removeEventListener("mousedown", s), l.remove();
      }
    };
  }
}), un = (o) => o.type.name === "paragraph" && o.nodeSize === 2, pn = (o) => o.type.name === "paragraph", hn = new F("plugin_autoInsertZeroSpace"), mn = () => new W({
  key: hn,
  props: {
    handleDOMEvents: {
      compositionstart(o) {
        const { state: e, dispatch: t } = o, { tr: n, selection: l } = e, { $from: s } = l;
        return xe.safari && M(e) && l.empty && un(s.parent) && t(n.insertText("\u2060", s.start())), !1;
      },
      compositionend(o) {
        const { state: e, dispatch: t } = o, { tr: n, selection: l } = e, { $from: s } = l;
        return xe.safari && M(e) && l.empty && pn(s.parent) && s.parent.textContent.startsWith("\u2060") && t(n.delete(s.start(), s.start() + 1)), !1;
      }
    }
  }
});
class gn {
  constructor(e, t) {
    this.node = e, this.cellMinWidth = t, this.node = e, this.cellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.colgroup = this.table.appendChild(document.createElement("colgroup")), fe(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, fe(e, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
}
function fe(o, e, t, n, l, s) {
  var d;
  let r = 0, a = !0, i = e.firstChild;
  const c = o.firstChild;
  for (let f = 0, u = 0; f < c.childCount; f++) {
    const { colspan: p, colwidth: h } = c.child(f).attrs;
    for (let b = 0; b < p; b++, u++) {
      const w = l == u ? s : h && h[b], C = w ? w + "px" : "";
      r += w || n, w || (a = !1), i ? (i.style.width != C && (i.style.width = C), i = i.nextSibling) : e.appendChild(document.createElement("col")).style.width = C;
    }
  }
  for (; i; ) {
    const f = i.nextSibling;
    (d = i.parentNode) == null || d.removeChild(i), i = f;
  }
  a ? (t.style.width = r + "px", t.style.minWidth = "") : (t.style.width = "", t.style.minWidth = r + "px");
}
const k = new F("tableColumnResizing");
function wn({
  handleWidth: o = 5,
  cellMinWidth: e = 25,
  View: t = gn,
  lastColumnResizable: n = !0
} = {}) {
  return new W({
    key: k,
    state: {
      init(s, r) {
        return this.spec.props.nodeViews[A(r.schema).table.name] = (a) => new t(a, e), new q(-1, !1);
      },
      apply(s, r) {
        return r.apply(s);
      }
    },
    props: {
      attributes(s) {
        return k.getState(s).activeHandle > -1 ? { class: "resize-cursor" } : void 0;
      },
      handleDOMEvents: {
        mousemove(s, r) {
          bn(s, r, o, n);
        },
        mouseleave(s) {
          Cn(s);
        },
        mousedown(s, r) {
          yn(s, r, e);
        }
      },
      decorations(s) {
        const r = k.getState(s);
        return r.activeHandle > -1 ? xn(s, r.activeHandle) : null;
      },
      nodeViews: {}
    }
  });
}
class q {
  constructor(e, t) {
    this.activeHandle = e, this.dragging = t, this.activeHandle = e, this.dragging = t;
  }
  apply(e) {
    let t = this;
    const n = e.getMeta(k);
    if (n && n.setHandle != null)
      return new q(n.setHandle, null);
    if (n && n.setDragging !== void 0)
      return new q(t.activeHandle, n.setDragging);
    if (t.activeHandle > -1 && e.docChanged) {
      let l = e.mapping.map(t.activeHandle, -1);
      de(e.doc.resolve(l)) || (l = 0), t = new q(l, t.dragging);
    }
    return t;
  }
}
function bn(o, e, t, n) {
  const l = k.getState(o.state);
  if (!l.dragging) {
    const s = An(e.target);
    let r = -1;
    if (s) {
      const { left: a, right: i } = s.getBoundingClientRect();
      e.clientX - a <= t ? r = _e(o, e, "left") : i - e.clientX <= t && (r = _e(o, e, "right"));
    }
    if (r != l.activeHandle) {
      if (!n && r !== -1) {
        const a = o.state.doc.resolve(r), i = a.node(-1), c = g.get(i), d = a.start(-1);
        if (c.colCount(a.pos - d) + a.nodeAfter.attrs.colspan - 1 == c.width - 1)
          return;
      }
      tt(o, r);
    }
  }
}
function Cn(o) {
  const e = k.getState(o.state);
  e.activeHandle > -1 && !e.dragging && tt(o, -1);
}
function yn(o, e, t) {
  const n = k.getState(o.state);
  if (n.activeHandle == -1 || n.dragging)
    return !1;
  const l = o.state.doc.nodeAt(n.activeHandle), s = kn(o, n.activeHandle, l.attrs);
  o.dispatch(o.state.tr.setMeta(k, {
    setDragging: { startX: e.clientX, startWidth: s }
  }));
  function r(i) {
    window.removeEventListener("mouseup", r), window.removeEventListener("mousemove", a);
    const c = k.getState(o.state);
    c.dragging && (Mn(o, c.activeHandle, ze(c.dragging, i, t)), o.dispatch(o.state.tr.setMeta(k, { setDragging: null })));
  }
  function a(i) {
    if (!i.which)
      return r(i);
    const c = k.getState(o.state), d = ze(c.dragging, i, t);
    Sn(o, c.activeHandle, d, t);
  }
  return window.addEventListener("mouseup", r), window.addEventListener("mousemove", a), e.preventDefault(), !0;
}
function kn(o, e, { colspan: t, colwidth: n }) {
  const l = n && n[n.length - 1];
  if (l)
    return l;
  const s = o.domAtPos(e);
  let a = s.node.childNodes[s.offset].offsetWidth, i = t;
  if (n)
    for (let c = 0; c < t; c++)
      n[c] && (a -= n[c], i--);
  return a / i;
}
function An(o) {
  for (; o && o.nodeName != "TD" && o.nodeName != "TH"; )
    o = o.classList.contains("ProseMirror") ? null : o.parentNode;
  return o;
}
function _e(o, e, t) {
  const n = o.posAtCoords({ left: e.clientX, top: e.clientY });
  if (!n)
    return -1;
  const { pos: l } = n, s = U(o.state.doc.resolve(l));
  if (!s)
    return -1;
  if (t == "right")
    return s.pos;
  const r = g.get(s.node(-1)), a = s.start(-1), i = r.map.indexOf(s.pos - a);
  return i % r.width == 0 ? -1 : a + r.map[i - 1];
}
function ze(o, e, t) {
  const n = e.clientX - o.startX;
  return Math.max(t, o.startWidth + n);
}
function tt(o, e) {
  o.dispatch(o.state.tr.setMeta(k, { setHandle: e }));
}
function Mn(o, e, t) {
  const n = o.state.doc.resolve(e), l = n.node(-1), s = g.get(l), r = n.start(-1), a = s.colCount(n.pos - r) + n.nodeAfter.attrs.colspan - 1, i = o.state.tr;
  for (let c = 0; c < s.height; c++) {
    const d = c * s.width + a;
    if (c && s.map[d] == s.map[d - s.width])
      continue;
    const f = s.map[d], { attrs: u } = l.nodeAt(f), p = u.colspan == 1 ? 0 : a - s.colCount(f);
    if (u.colwidth && u.colwidth[p] == t)
      continue;
    const h = u.colwidth ? u.colwidth.slice() : Nn(u.colspan);
    h[p] = t, i.setNodeMarkup(r + f, null, y(u, "colwidth", h));
  }
  i.docChanged && o.dispatch(i);
}
function Sn(o, e, t, n) {
  const l = o.state.doc.resolve(e), s = l.node(-1), r = l.start(-1), a = g.get(s).colCount(l.pos - r) + l.nodeAfter.attrs.colspan - 1;
  let i = o.domAtPos(l.start(-1)).node;
  for (; i.nodeName != "TABLE"; )
    i = i.parentNode;
  fe(s, i.firstChild, i, n, a, t);
}
function Nn(o) {
  const e = [];
  for (let t = 0; t < o; t++)
    e.push(0);
  return e;
}
function xn(o, e) {
  const t = [], n = o.doc.resolve(e), l = n.node(-1), s = g.get(l), r = n.start(-1), a = s.colCount(n.pos - r) + n.nodeAfter.attrs.colspan;
  for (let i = 0; i < s.height; i++) {
    const c = a + i * s.width - 1;
    if ((a == s.width || s.map[c] != s.map[c + 1]) && (i == 0 || s.map[c - 1] != s.map[c - 1 - s.width])) {
      const d = s.map[c], f = r + d + l.nodeAt(d).nodeSize - 1, u = document.createElement("div");
      u.className = "column-resize-handle", t.push(ye.widget(f, u));
    }
  }
  return ke.create(o.doc, t);
}
function Rn(o) {
  if (!o.size)
    return null;
  let { content: e, openStart: t, openEnd: n } = o;
  for (; e.childCount == 1 && (t > 0 && n > 0 || e.firstChild.type.spec.tableRole == "table"); )
    t--, n--, e = e.firstChild.content;
  const l = e.firstChild, s = l.type.spec.tableRole, r = l.type.schema, a = [];
  if (s == "row")
    for (let i = 0; i < e.childCount; i++) {
      let c = e.child(i).content;
      const d = i ? 0 : Math.max(0, t - 1), f = i < e.childCount - 1 ? 0 : Math.max(0, n - 1);
      (d || f) && (c = ue(A(r).row, new O(c, d, f)).content), a.push(c);
    }
  else if (s == "cell" || s == "header_cell")
    a.push(t || n ? ue(A(r).row, new O(e, t, n)).content : e);
  else
    return null;
  return Tn(r, a);
}
function Tn(o, e) {
  const t = [];
  for (let l = 0; l < e.length; l++) {
    const s = e[l];
    for (let r = s.childCount - 1; r >= 0; r--) {
      const { rowspan: a, colspan: i } = s.child(r).attrs;
      for (let c = l; c < l + a; c++)
        t[c] = (t[c] || 0) + i;
    }
  }
  let n = 0;
  for (let l = 0; l < t.length; l++)
    n = Math.max(n, t[l]);
  for (let l = 0; l < t.length; l++)
    if (l >= e.length && e.push(E.empty), t[l] < n) {
      const s = A(o).cell.createAndFill(), r = [];
      for (let a = t[l]; a < n; a++)
        r.push(s);
      e[l] = e[l].append(E.from(r));
    }
  return { height: e.length, width: n, rows: e };
}
function ue(o, e) {
  const t = o.createAndFill();
  return new At(t).replace(0, t.content.size, e).doc;
}
function Ln({ width: o, height: e, rows: t }, n, l) {
  if (o != n) {
    const s = [], r = [];
    for (let a = 0; a < t.length; a++) {
      const i = t[a], c = [];
      for (let d = s[a] || 0, f = 0; d < n; f++) {
        let u = i.child(f % i.childCount);
        d + u.attrs.colspan > n && (u = u.type.create(z(u.attrs, u.attrs.colspan, d + u.attrs.colspan - n), u.content)), c.push(u), d += u.attrs.colspan;
        for (let p = 1; p < u.attrs.rowspan; p++)
          s[a + p] = (s[a + p] || 0) + u.attrs.colspan;
      }
      r.push(E.from(c));
    }
    t = r, o = n;
  }
  if (e != l) {
    const s = [];
    for (let r = 0, a = 0; r < l; r++, a++) {
      const i = [], c = t[a % e];
      for (let d = 0; d < c.childCount; d++) {
        let f = c.child(d);
        r + f.attrs.rowspan > l && (f = f.type.create(y(f.attrs, "rowspan", Math.max(1, l - f.attrs.rowspan)), f.content)), i.push(f);
      }
      s.push(E.from(i));
    }
    t = s, e = l;
  }
  return { width: o, height: e, rows: t };
}
function vn(o, e, t, n, l, s, r) {
  const a = o.doc.type.schema, i = A(a);
  let c, d;
  if (l > e.width)
    for (let f = 0, u = 0; f < e.height; f++) {
      const p = t.child(f);
      u += p.nodeSize;
      const h = [];
      let b;
      p.lastChild == null || p.lastChild.type == i.cell ? b = c || (c = i.cell.createAndFill()) : b = d || (d = i.header_cell.createAndFill());
      for (let w = e.width; w < l; w++)
        h.push(b);
      o.insert(o.mapping.slice(r).map(u - 1 + n), h);
    }
  if (s > e.height) {
    const f = [];
    for (let h = 0, b = (e.height - 1) * e.width; h < Math.max(e.width, l); h++) {
      const w = h >= e.width ? !1 : t.nodeAt(e.map[b + h]).type == i.header_cell;
      f.push(w ? d || (d = i.header_cell.createAndFill()) : c || (c = i.cell.createAndFill()));
    }
    const u = i.row.create(null, E.from(f)), p = [];
    for (let h = e.height; h < s; h++)
      p.push(u);
    o.insert(o.mapping.slice(r).map(n + t.nodeSize - 2), p);
  }
  return !!(c || d);
}
function Fe(o, e, t, n, l, s, r, a) {
  if (r == 0 || r == e.height)
    return !1;
  let i = !1;
  for (let c = l; c < s; c++) {
    const d = r * e.width + c, f = e.map[d];
    if (e.map[d - e.width] == f) {
      i = !0;
      const u = t.nodeAt(f), { top: p, left: h } = e.findCell(f);
      o.setNodeMarkup(o.mapping.slice(a).map(f + n), null, y(u.attrs, "rowspan", r - p)), o.insert(o.mapping.slice(a).map(e.positionAt(r, h, t)), u.type.createAndFill(y(u.attrs, "rowspan", p + u.attrs.rowspan - r))), c += u.attrs.colspan - 1;
    }
  }
  return i;
}
function Be(o, e, t, n, l, s, r, a) {
  if (r == 0 || r == e.width)
    return !1;
  let i = !1;
  for (let c = l; c < s; c++) {
    const d = c * e.width + r, f = e.map[d];
    if (e.map[d - 1] == f) {
      i = !0;
      const u = t.nodeAt(f), p = e.colCount(f), h = o.mapping.slice(a).map(f + n);
      o.setNodeMarkup(h, null, z(u.attrs, r - p, u.attrs.colspan - (r - p))), o.insert(h + u.nodeSize, u.type.createAndFill(z(u.attrs, 0, r - p))), c += u.attrs.rowspan - 1;
    }
  }
  return i;
}
function Pe(o, e, t, n, l) {
  let s = t ? o.doc.nodeAt(t - 1) : o.doc, r = g.get(s);
  const { top: a, left: i } = n, c = i + l.width, d = a + l.height, f = o.tr;
  let u = 0;
  function p() {
    s = t ? f.doc.nodeAt(t - 1) : f.doc, r = g.get(s), u = f.mapping.maps.length;
  }
  vn(f, r, s, t, c, d, u) && p(), Fe(f, r, s, t, i, c, a, u) && p(), Fe(f, r, s, t, i, c, d, u) && p(), Be(f, r, s, t, a, d, i, u) && p(), Be(f, r, s, t, a, d, c, u) && p();
  for (let h = a; h < d; h++) {
    const b = r.positionAt(h, i, s), w = r.positionAt(h, c, s);
    f.replace(f.mapping.slice(u).map(b + t), f.mapping.slice(u).map(w + t), new O(l.rows[h - a], 0, 0));
  }
  p(), f.setSelection(new m(f.doc.resolve(t + r.positionAt(a, i, s)), f.doc.resolve(t + r.positionAt(d - 1, c - 1, s)))), e(f);
}
const En = new F("fix-tables");
function nt(o, e, t, n) {
  const l = o.childCount, s = e.childCount;
  e:
    for (let r = 0, a = 0; r < s; r++) {
      const i = e.child(r);
      for (let c = a, d = Math.min(l, r + 3); c < d; c++)
        if (o.child(c) == i) {
          a = c + 1, t += i.nodeSize;
          continue e;
        }
      n(i, t), a < l && o.child(a).sameMarkup(i) ? nt(o.child(a), i, t + 1, n) : i.nodesBetween(0, i.content.size, n, t + 1), t += i.nodeSize;
    }
}
function In(o, e) {
  let t;
  const n = (l, s) => {
    l.type.spec.tableRole == "table" && (t = $n(o, l, s, t));
  };
  return e ? e.doc != o.doc && nt(e.doc, o.doc, 0, n) : o.doc.descendants(n), t;
}
function $n(o, e, t, n) {
  const l = g.get(e);
  if (!l.problems)
    return n;
  n || (n = o.tr);
  const s = [];
  for (let i = 0; i < l.height; i++)
    s.push(0);
  for (let i = 0; i < l.problems.length; i++) {
    const c = l.problems[i];
    if (c.type == "collision") {
      const d = e.nodeAt(c.pos);
      for (let f = 0; f < d.attrs.rowspan; f++)
        s[c.row + f] += c.n;
      n.setNodeMarkup(n.mapping.map(t + 1 + c.pos), null, z(d.attrs, d.attrs.colspan - c.n, c.n));
    } else if (c.type == "missing")
      s[c.row] += c.n;
    else if (c.type == "overlong_rowspan") {
      const d = e.nodeAt(c.pos);
      n.setNodeMarkup(n.mapping.map(t + 1 + c.pos), null, y(d.attrs, "rowspan", d.attrs.rowspan - c.n));
    } else if (c.type == "colwidth mismatch") {
      const d = e.nodeAt(c.pos);
      n.setNodeMarkup(n.mapping.map(t + 1 + c.pos), null, y(d.attrs, "colwidth", c.colwidth));
    }
  }
  let r, a;
  for (let i = 0; i < s.length; i++)
    s[i] && (r == null && (r = i), a = i);
  for (let i = 0, c = t + 1; i < l.height; i++) {
    const d = e.child(i), f = c + d.nodeSize, u = s[i];
    if (u > 0) {
      let p = "cell";
      d.firstChild && (p = d.firstChild.type.spec.tableRole);
      const h = [];
      for (let w = 0; w < u; w++)
        h.push(A(o.schema)[p].createAndFill());
      const b = (i == 0 || r == i - 1) && a == i ? c + 1 : f - 1;
      n.insert(n.mapping.map(b), h);
    }
    c = f;
  }
  return n.setMeta(En, { fixTables: !0 });
}
const I = new F("selectingCells");
function We(o, e) {
  for (; e && e != o.dom; e = e.parentNode)
    if (e.nodeName == "TD" || e.nodeName == "TH")
      return e;
}
function ae(o, e) {
  const t = o.posAtCoords({ left: e.clientX, top: e.clientY });
  return t && t ? U(o.state.doc.resolve(t.pos)) : null;
}
function Dn(o, e) {
  const t = e;
  if (t.ctrlKey || t.metaKey)
    return;
  const n = We(o, t.target);
  let l;
  if (t.shiftKey && o.state.selection instanceof m)
    s(o.state.selection.$anchorCell, t), t.preventDefault();
  else if (t.shiftKey && n && (l = U(o.state.selection.$anchor)) != null && ae(o, t).pos != l.pos)
    s(l, t), t.preventDefault();
  else if (!n)
    return;
  function s(i, c) {
    let d = ae(o, c);
    const f = I.getState(o.state) == null;
    if (!d || !Me(i, d))
      if (f)
        d = i;
      else
        return;
    const u = new m(i, d);
    if (f || !o.state.selection.eq(u)) {
      const p = o.state.tr.setSelection(u);
      f && p.setMeta(I, i.pos), o.dispatch(p);
    }
  }
  function r() {
    o.root.removeEventListener("mouseup", r), o.root.removeEventListener("dragstart", r), o.root.removeEventListener("mousemove", a), I.getState(o.state) != null && o.dispatch(o.state.tr.setMeta(I, -1));
  }
  function a(i) {
    const c = I.getState(o.state);
    let d;
    if (c != null)
      d = o.state.doc.resolve(c);
    else if (We(o, i.target) != n && (d = ae(o, t), !d))
      return r();
    d && s(d, i);
  }
  o.root.addEventListener("mouseup", r), o.root.addEventListener("dragstart", r), o.root.addEventListener("mousemove", a);
}
function On(o, e) {
  const t = o.state.doc, n = U(t.resolve(e));
  return n ? (o.dispatch(o.state.tr.setSelection(new m(n))), !0) : !1;
}
function Z(o, e, t) {
  return t.eq(o.selection) ? !1 : (e && e(o.tr.setSelection(t).scrollIntoView()), !0);
}
function ot(o, e, t) {
  if (!(o.state.selection instanceof D))
    return null;
  const { $head: n } = o.state.selection;
  for (let l = n.depth - 1; l >= 0; l--) {
    const s = n.node(l);
    if ((t < 0 ? n.index(l) : n.indexAfter(l)) != (t < 0 ? 0 : s.childCount))
      return null;
    if (s.type.spec.tableRole == "cell" || s.type.spec.tableRole == "header_cell") {
      const a = n.before(l), i = e == "vert" ? t > 0 ? "down" : "up" : t > 0 ? "right" : "left";
      return o.endOfTextblock(i) ? a : null;
    }
  }
  return null;
}
function G(o, e) {
  return (t, n, l) => {
    const s = t.selection;
    if (s instanceof m)
      return Z(t, n, S.near(s.$headCell, e));
    if (o != "horiz" && !s.empty)
      return !1;
    const r = ot(l, o, e);
    if (r == null)
      return !1;
    if (o == "horiz")
      return Z(t, n, S.near(t.doc.resolve(s.head + e), e));
    {
      const a = t.doc.resolve(r), i = Qe(a, o, e);
      let c;
      return i ? c = S.near(i, 1) : e < 0 ? c = S.near(t.doc.resolve(a.before(-1)), -1) : c = S.near(t.doc.resolve(a.after(-1)), 1), Z(t, n, c);
    }
  };
}
function J(o, e) {
  return (t, n, l) => {
    let s = t.selection;
    if (!(s instanceof m)) {
      const a = ot(l, o, e);
      if (a == null)
        return !1;
      s = new m(t.doc.resolve(a));
    }
    const r = Qe(s.$headCell, o, e);
    return r ? Z(t, n, new m(s.$anchorCell, r)) : !1;
  };
}
function Y(o, e) {
  const t = o.selection;
  if (!(t instanceof m))
    return !1;
  if (e) {
    const n = o.tr, l = A(o.schema).cell.createAndFill().content;
    t.forEachCell((s, r) => {
      s.content.eq(l) || n.replace(n.mapping.map(r + 1), n.mapping.map(r + s.nodeSize - 1), new O(l, 0, 0));
    }), n.docChanged && e(n);
  }
  return !0;
}
const _n = kt({
  ArrowLeft: G("horiz", -1),
  ArrowRight: G("horiz", 1),
  ArrowUp: G("vert", -1),
  ArrowDown: G("vert", 1),
  "Shift-ArrowLeft": J("horiz", -1),
  "Shift-ArrowRight": J("horiz", 1),
  "Shift-ArrowUp": J("vert", -1),
  "Shift-ArrowDown": J("vert", 1),
  Backspace: Y,
  "Mod-Backspace": Y,
  Delete: Y,
  "Mod-Delete": Y
});
function zn(o, e, t) {
  if (!M(o.state))
    return !1;
  let n = Rn(t);
  const l = o.state.selection;
  if (l instanceof m) {
    n || (n = {
      width: 1,
      height: 1,
      rows: [E.from(ue(A(o.state.schema).cell, t))]
    });
    const s = l.$anchorCell.node(-1), r = l.$anchorCell.start(-1), a = g.get(s).rectBetween(l.$anchorCell.pos - r, l.$headCell.pos - r);
    return n = Ln(n, a.right - a.left, a.bottom - a.top), Pe(o.state, o.dispatch, r, a, n), !0;
  } else if (n) {
    const s = ne(o.state), r = s.start(-1);
    return Pe(o.state, o.dispatch, r, g.get(s.node(-1)).findCell(s.pos - r), n), !0;
  } else
    return !1;
}
function Fn({ allowTableNodeSelection: o = !1 } = {}) {
  return new W({
    key: I,
    state: {
      init() {
        return null;
      },
      apply(e, t) {
        const n = e.getMeta(I);
        if (n != null)
          return n == -1 ? null : n;
        if (t == null || !e.docChanged)
          return t;
        const { deleted: l, pos: s } = e.mapping.mapResult(t);
        return l ? null : s;
      }
    },
    props: {
      decorations: _t,
      handleDOMEvents: {
        mousedown: Dn
      },
      createSelectionBetween(e) {
        return I.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: On,
      handleKeyDown: _n,
      handlePaste: zn
    },
    appendTransaction(e, t, n) {
      return Bt(n, In(n, t), o);
    }
  });
}
const Q = {
  NextCell: "NextCell",
  PrevCell: "PrevCell",
  ExitTable: "ExitTable"
}, He = R("PrevCell"), je = R("NextCell"), Ke = R("BreakTable"), Bn = R("InsertTable"), Pn = it((o) => ({
  schema: () => ({
    node: {
      table: {
        ...V.table,
        parseMarkdown: {
          match: (e) => e.type === "table",
          runner: (e, t, n) => {
            const l = t.align, s = t.children.map((r, a) => ({
              ...r,
              align: l,
              isHeader: a === 0
            }));
            e.openNode(n), e.next(s), e.closeNode();
          }
        },
        toMarkdown: {
          match: (e) => e.type.name === "table",
          runner: (e, t) => {
            var s;
            const n = (s = t.content.firstChild) == null ? void 0 : s.content;
            if (!n)
              return;
            const l = [];
            n.forEach((r) => {
              l.push(r.attrs.alignment);
            }), e.openNode("table", void 0, { align: l }), e.next(t.content), e.closeNode();
          }
        }
      },
      table_row: {
        ...V.table_row,
        parseMarkdown: {
          match: (e) => e.type === "tableRow",
          runner: (e, t, n) => {
            const l = t.align, s = t.children.map((r, a) => ({
              ...r,
              align: l[a],
              isHeader: t.isHeader
            }));
            e.openNode(n), e.next(s), e.closeNode();
          }
        },
        toMarkdown: {
          match: (e) => e.type.name === "table_row",
          runner: (e, t) => {
            e.openNode("tableRow"), e.next(t.content), e.closeNode();
          }
        }
      },
      table_cell: {
        ...V.table_cell,
        parseMarkdown: {
          match: (e) => e.type === "tableCell" && !e.isHeader,
          runner: (e, t, n) => {
            const l = t.align;
            e.openNode(n, { alignment: l }).openNode(e.schema.nodes.paragraph).next(t.children).closeNode().closeNode();
          }
        },
        toMarkdown: {
          match: (e) => e.type.name === "table_cell",
          runner: (e, t) => {
            e.openNode("tableCell").next(t.content).closeNode();
          }
        }
      },
      table_header: {
        ...V.table_header,
        parseMarkdown: {
          match: (e) => e.type === "tableCell" && !!e.isHeader,
          runner: (e, t, n) => {
            const l = t.align;
            e.openNode(n, { alignment: l }), e.openNode(e.schema.nodes.paragraph), e.next(t.children), e.closeNode(), e.closeNode();
          }
        },
        toMarkdown: {
          match: (e) => e.type.name === "table_header",
          runner: (e, t) => {
            e.openNode("tableCell"), e.next(t.content), e.closeNode();
          }
        }
      }
    }
  }),
  inputRules: (e, t) => [
    new Ge(/^\|\|\s$/, (n, l, s, r) => {
      const a = n.doc.resolve(s);
      if (!a.node(-1).canReplaceWith(a.index(-1), a.indexAfter(-1), e.table))
        return null;
      const i = $e(t.get(re)), c = n.tr.replaceRangeWith(s, r, i).scrollIntoView();
      return c.setSelection(D.create(c.doc, s + 3));
    })
  ],
  commands: (e, t) => [
    N(He, () => Ie(-1)),
    N(je, () => Ie(1)),
    N(Ke, () => qt(t.get(re).nodes.paragraph)),
    N(Bn, () => (n, l) => {
      const { selection: s, tr: r } = n, { from: a } = s, i = $e(t.get(re)), c = r.replaceSelectionWith(i), d = S.findFrom(c.doc.resolve(a), 1, !0);
      return d && (l == null || l(c.setSelection(d))), !0;
    })
  ],
  shortcuts: {
    [Q.NextCell]: $(je, "Mod-]"),
    [Q.PrevCell]: $(He, "Mod-["),
    [Q.ExitTable]: $(Ke, "Mod-Enter")
  },
  prosePlugins: (e, t) => [fn(t, o), mn(), wn(), Fn()]
})), K = {
  ...lt,
  ...Q,
  StrikeThrough: "StrikeThrough",
  TaskList: "TaskList"
}, pe = R("ToggleStrikeThrough"), qe = "strike_through", Wn = ct((o) => ({
  id: qe,
  schema: () => ({
    inclusive: !1,
    parseDOM: [
      { tag: "del" },
      { style: "text-decoration", getAttrs: (e) => e === "line-through" }
    ],
    toDOM: (e) => ["del", { class: o.getClassName(e.attrs, "strike-through") }],
    parseMarkdown: {
      match: (e) => e.type === "delete",
      runner: (e, t, n) => {
        e.openMark(n), e.next(t.children), e.closeMark(n);
      }
    },
    toMarkdown: {
      match: (e) => e.type.name === qe,
      runner: (e, t) => {
        e.withMark(t, "delete");
      }
    }
  }),
  commands: (e) => [N(pe, () => Ct(e))],
  shortcuts: {
    [K.StrikeThrough]: $(pe, "Mod-Alt-x")
  }
})), he = R("SplitTaskListItem"), me = R("SinkTaskListItem"), ge = R("LiftTaskListItem"), we = R("TurnIntoTaskList"), Hn = be((o) => {
  const e = "task_list_item";
  return {
    id: e,
    schema: (t) => ({
      group: "listItem",
      content: "paragraph block*",
      defining: !0,
      priority: 60,
      attrs: {
        checked: {
          default: !1
        }
      },
      parseDOM: [
        {
          tag: 'li[data-type="task-item"]',
          getAttrs: (n) => {
            if (!(n instanceof HTMLElement))
              throw Ce(n);
            return { checked: n.dataset.checked === "true" };
          }
        }
      ],
      toDOM: (n) => {
        const l = document.createElement("input");
        return l.type = "checkbox", l.checked = n.attrs.checked, l.className = o.getClassName(n.attrs, "task-list-item_checkbox"), l.onchange = (s) => {
          const r = s.target;
          if (!(r instanceof HTMLInputElement))
            return;
          const a = t.get(ee);
          if (!a.editable) {
            l.checked = !l.checked;
            return;
          }
          const { top: i, left: c } = r.getBoundingClientRect(), d = a.posAtCoords({ top: i, left: c });
          if (!d)
            return;
          const { tr: f } = a.state;
          a.dispatch(f.setNodeMarkup(d.inside, void 0, {
            checked: r.checked
          }));
        }, [
          "li",
          {
            "data-type": "task-item",
            "data-checked": n.attrs.checked ? "true" : "false",
            class: o.getClassName(n.attrs, "task-list-item")
          },
          l,
          ["span", { class: o.getClassName(n.attrs, "task-list-item_body") }, 0]
        ];
      },
      parseMarkdown: {
        match: ({ type: n, checked: l }) => n === "listItem" && l !== null,
        runner: (n, l, s) => {
          n.openNode(s, { checked: l.checked }), n.next(l.children), n.closeNode();
        }
      },
      toMarkdown: {
        match: (n) => n.type.name === e,
        runner: (n, l) => {
          n.openNode("listItem", void 0, { checked: l.attrs.checked }), n.next(l.content), n.closeNode();
        }
      }
    }),
    inputRules: (t) => [
      Ve(/^\s*(\[([ |x])\])\s$/, t, (n) => ({
        checked: n[n.length - 1] === "x"
      }))
    ],
    commands: (t) => [
      N(he, () => Mt(t)),
      N(me, () => St(t)),
      N(ge, () => Nt(t)),
      N(we, () => yt(t))
    ],
    shortcuts: {
      [K.NextListItem]: $(he, "Enter"),
      [K.SinkListItem]: $(me, "Mod-]"),
      [K.LiftListItem]: $(ge, "Mod-["),
      [K.TaskList]: $(we, "Mod-Alt-9")
    },
    view: () => (t, n, l) => {
      let s = t;
      const r = o.themeManager.get("task-list-item", {
        editable: () => n.editable,
        onChange: (d) => {
          const { tr: f } = n.state;
          n.dispatch(f.setNodeMarkup(l(), void 0, {
            checked: d
          }));
        }
      });
      if (!r)
        return {};
      const { dom: a, contentDOM: i, onUpdate: c } = r;
      return c(s), {
        dom: a,
        contentDOM: i,
        update: (d) => d.type.name !== e ? !1 : (s = d, c(s), !0)
      };
    }
  };
}), oo = at.create([
  ...st,
  dt(() => ft),
  Pn(),
  Wn(),
  Hn(),
  Lt(),
  Rt()
]), lo = {
  ...rt,
  ToggleStrikeThrough: pe,
  TurnIntoTaskList: we,
  SinkTaskListItem: me,
  LiftTaskListItem: ge,
  SplitTaskListItem: he
};
export {
  Ke as BreakTable,
  io as InsertHardbreak,
  co as InsertHr,
  ao as InsertImage,
  Bn as InsertTable,
  fo as LiftListItem,
  ge as LiftTaskListItem,
  Re as ModifyFootnoteDef,
  Te as ModifyFootnoteRef,
  uo as ModifyImage,
  po as ModifyLink,
  je as NextCell,
  He as PrevCell,
  ho as SinkListItem,
  me as SinkTaskListItem,
  mo as SplitListItem,
  he as SplitTaskListItem,
  K as SupportedKeys,
  go as ToggleBold,
  wo as ToggleInlineCode,
  bo as ToggleItalic,
  Co as ToggleLink,
  pe as ToggleStrikeThrough,
  yo as TurnIntoCodeFence,
  ko as TurnIntoHeading,
  we as TurnIntoTaskList,
  Ao as TurnIntoText,
  Mo as WrapInBlockquote,
  So as WrapInBulletList,
  No as WrapInOrderedList,
  xo as blockquote,
  Ro as bulletList,
  To as codeFence,
  Lo as codeInline,
  lo as commands,
  vo as commonmark,
  Eo as commonmarkNodes,
  Io as commonmarkPlugins,
  $e as createTable,
  $o as doc,
  Do as em,
  Rt as footnoteDefinition,
  Lt as footnoteReference,
  oo as gfm,
  Oo as hardbreak,
  _o as heading,
  zo as hr,
  Fo as image,
  Bo as link,
  Po as listItem,
  Wo as orderedList,
  Ho as paragraph,
  Wn as strikeThrough,
  jo as strong,
  Pn as table,
  Hn as taskListItem,
  Ko as text
};
//# sourceMappingURL=index.es.js.map
