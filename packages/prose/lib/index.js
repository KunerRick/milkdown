import { PluginKey, Plugin, NodeSelection } from 'prosemirror-state';
import { InputRule } from 'prosemirror-inputrules';
import { expectDomTypeError, missingRootElement, getAtomFromSchemaFail } from '@milkdown/exception';

const nav = typeof navigator != "undefined" ? navigator : null;
const doc = typeof document != "undefined" ? document : null;
const agent = nav && nav.userAgent || "";
const ie_edge = /Edge\/(\d+)/.exec(agent);
const ie_upto10 = /MSIE \d/.exec(agent);
const ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(agent);
const ie = !!(ie_upto10 || ie_11up || ie_edge);
const ie_version = ie_upto10 ? document.documentMode : ie_11up ? +ie_11up[1] : ie_edge ? +ie_edge[1] : 0;
const gecko = !ie && /gecko\/(\d+)/i.test(agent);
const gecko_version = gecko && +(/Firefox\/(\d+)/.exec(agent) || [0, 0])[1];
const _chrome = !ie && /Chrome\/(\d+)/.exec(agent);
const chrome = !!_chrome;
const chrome_version = _chrome ? +_chrome[1] : 0;
const safari = !ie && !!nav && /Apple Computer/.test(nav.vendor);
const ios = safari && (/Mobile\/\w+/.test(agent) || !!nav && nav.maxTouchPoints > 2);
const mac = ios || (nav ? /Mac/.test(nav.platform) : false);
const android = /Android \d/.test(agent);
const webkit = !!doc && "webkitFontSmoothing" in doc.documentElement.style;
const webkit_version = webkit ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;

var browser = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ie: ie,
    ie_version: ie_version,
    gecko: gecko,
    gecko_version: gecko_version,
    chrome: chrome,
    chrome_version: chrome_version,
    safari: safari,
    ios: ios,
    mac: mac,
    android: android,
    webkit: webkit,
    webkit_version: webkit_version
});

function run(view, from, to, text, rules, plugin) {
  if (view.composing)
    return false;
  const state = view.state, $from = state.doc.resolve(from);
  if ($from.parent.type.spec.code)
    return false;
  const textBefore = $from.parent.textBetween(Math.max(0, $from.parentOffset - 500), $from.parentOffset, void 0, "\uFFFC") + text;
  for (let i = 0; i < rules.length; i++) {
    const match = rules[i].match.exec(textBefore);
    const tr = match && match[0] && rules[i].handler(state, match, from - (match[0].length - text.length), to);
    if (!tr)
      continue;
    view.dispatch(tr.setMeta(plugin, { transform: tr, from, to, text }));
    return true;
  }
  return false;
}
const customInputRulesKey = new PluginKey("MILKDOWN_CUSTOM_INPUTRULES");
const customInputRules = ({ rules }) => {
  const plugin = new Plugin({
    key: customInputRulesKey,
    isInputRules: true,
    state: {
      init() {
        return null;
      },
      apply(tr, prev) {
        const stored = tr.getMeta(this);
        if (stored)
          return stored;
        return tr.selectionSet || tr.docChanged ? null : prev;
      }
    },
    props: {
      handleTextInput(view, from, to, text) {
        return run(view, from, to, text, rules, plugin);
      },
      handleDOMEvents: {
        compositionend: (view) => {
          setTimeout(() => {
            const { $cursor } = view.state.selection;
            if ($cursor)
              run(view, $cursor.pos, $cursor.pos, "", rules, plugin);
          });
          return false;
        }
      },
      handleKeyDown(view, event) {
        if (event.key !== "Enter")
          return false;
        const { $cursor } = view.state.selection;
        if ($cursor)
          return run(view, $cursor.pos, $cursor.pos, "\n", rules, plugin);
        return false;
      }
    }
  });
  return plugin;
};

function markRule(regexp, markType) {
  return new InputRule(regexp, (state, match, start, end) => {
    const { tr } = state;
    const matchLength = match.length;
    let markStart = start;
    let markEnd = end;
    if (match[matchLength - 1]) {
      const first = match[0];
      const last = match[matchLength - 1];
      const last1 = match[matchLength - 2];
      const matchStart = start + first.indexOf(last1);
      const matchEnd = matchStart + last1.length - 1;
      const textStart = matchStart + last1.lastIndexOf(last);
      const textEnd = textStart + last.length;
      const excludedMarks = getMarksBetween(start, end, state).filter((item) => item.mark.type.excludes(markType)).filter((item) => item.end > matchStart);
      if (excludedMarks.length) {
        return null;
      }
      if (textEnd < matchEnd) {
        tr.delete(textEnd, matchEnd);
      }
      if (textStart > matchStart) {
        tr.delete(matchStart, textStart);
      }
      markStart = matchStart;
      markEnd = markStart + last.length;
    }
    tr.addMark(markStart, markEnd, markType.create());
    tr.removeStoredMark(markType);
    return tr;
  });
}
function getMarksBetween(start, end, state) {
  let marks = [];
  state.doc.nodesBetween(start, end, (node, pos) => {
    marks = [
      ...marks,
      ...node.marks.map((mark) => ({
        start: pos,
        end: pos + node.nodeSize,
        mark
      }))
    ];
  });
  return marks;
}

const calculateNodePosition = (view, target, handler) => {
  const state = view.state;
  const { from } = state.selection;
  const { node } = view.domAtPos(from);
  const element = node instanceof Text ? node.parentElement : node;
  if (!(element instanceof HTMLElement)) {
    throw expectDomTypeError(element);
  }
  const selectedNodeRect = element.getBoundingClientRect();
  const targetNodeRect = target.getBoundingClientRect();
  const parent = target.parentElement;
  if (!parent) {
    throw expectDomTypeError(parent);
  }
  const parentNodeRect = parent.getBoundingClientRect();
  const [top, left] = handler(selectedNodeRect, targetNodeRect, parentNodeRect);
  target.style.top = top + "px";
  target.style.left = left + "px";
};
const calculateTextPosition = (view, target, handler) => {
  const state = view.state;
  const { from, to } = state.selection;
  const start = view.coordsAtPos(from);
  const end = view.coordsAtPos(to);
  const targetNodeRect = target.getBoundingClientRect();
  const parent = target.parentElement;
  if (!parent) {
    throw missingRootElement();
  }
  const parentNodeRect = parent.getBoundingClientRect();
  const [top, left] = handler(start, end, targetNodeRect, parentNodeRect);
  target.style.top = top + "px";
  target.style.left = left + "px";
};

const cloneTr = (tr) => {
  return Object.assign(Object.create(tr), tr).setTime(Date.now());
};
const equalNodeType = (nodeType, node) => {
  return Array.isArray(nodeType) && nodeType.indexOf(node.type) > -1 || node.type === nodeType;
};

const flatten = (node, descend = true) => {
  const result = [];
  node.descendants((child, pos) => {
    result.push({ node: child, pos });
    if (!descend) {
      return false;
    }
    return void 0;
  });
  return result;
};
const findChildren = (predicate) => (node, descend) => flatten(node, descend).filter((child) => predicate(child.node));
const findChildrenByMark = (node, markType, descend) => findChildren((child) => Boolean(markType.isInSet(child.marks)))(node, descend);

const getNodeFromSchema = (type, schema) => {
  const target = schema.nodes[type];
  if (!target) {
    throw getAtomFromSchemaFail("node", type);
  }
  return target;
};
const getMarkFromSchema = (type, schema) => {
  const target = schema.marks[type];
  if (!target) {
    throw getAtomFromSchemaFail("mark", type);
  }
  return target;
};

const findParentNodeClosestToPos = (predicate) => ($pos) => {
  for (let i = $pos.depth; i > 0; i--) {
    const node = $pos.node(i);
    if (predicate(node)) {
      return {
        pos: i > 0 ? $pos.before(i) : 0,
        start: $pos.start(i),
        depth: i,
        node
      };
    }
  }
  return;
};
const findParentNode = (predicate) => (selection) => {
  return findParentNodeClosestToPos(predicate)(selection.$from);
};
const findSelectedNodeOfType = (selection, nodeType) => {
  if (!(selection instanceof NodeSelection)) {
    return;
  }
  const { node, $from } = selection;
  if (equalNodeType(nodeType, node)) {
    return { node, pos: $from.pos, start: $from.start($from.depth), depth: $from.depth };
  }
  return void 0;
};

export { browser, calculateNodePosition, calculateTextPosition, cloneTr, customInputRules, customInputRulesKey, equalNodeType, findChildren, findChildrenByMark, findParentNode, findParentNodeClosestToPos, findSelectedNodeOfType, flatten, getMarkFromSchema, getNodeFromSchema, markRule };
//# sourceMappingURL=index.js.map
