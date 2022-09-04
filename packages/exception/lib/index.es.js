var n = /* @__PURE__ */ ((e) => (e.docTypeError = "docTypeError", e.contextNotFound = "contextNotFound", e.timerNotFound = "timerNotFound", e.ctxCallOutOfScope = "ctxCallOutOfScope", e.createNodeInParserFail = "createNodeInParserFail", e.stackOverFlow = "stackOverFlow", e.parserMatchError = "parserMatchError", e.serializerMatchError = "serializerMatchError", e.getAtomFromSchemaFail = "getAtomFromSchemaFail", e.expectDomTypeError = "expectDomTypeError", e.callCommandBeforeEditorView = "callCommandBeforeEditorView", e.themeMustInstalled = "themeMustInstalled", e.missingRootElement = "missingRootElement", e.missingNodeInSchema = "missingNodeInSchema", e.missingMarkInSchema = "missingMarkInSchema", e.missingIcon = "missingIcon", e.vueRendererCallOutOfScope = "vueRendererCallOutOfScope", e.ctxNotBind = "ctxNotBind", e.missingYjsDoc = "missingYjsDoc", e.repeatCallsToMenuWrapperInit = "repeatCallsToMenuWrapperInit", e.missingMenuWrapper = "missingMenuWrapper", e))(n || {});
class t extends Error {
  constructor(o, s) {
    super(s), this.name = "MilkdownError", this.code = o;
  }
}
const l = (e, o) => typeof o == "function" ? "[Function]" : o, r = (e) => JSON.stringify(e, l), p = (e) => new t(n.docTypeError, `Doc type error, unsupported type: ${r(e)}`), u = (e) => new t(n.contextNotFound, `Context "${e}" not found, do you forget to inject it?`), d = (e) => new t(n.timerNotFound, `Timer "${e}" not found, do you forget to record it?`), h = () => new t(n.ctxCallOutOfScope, "Should not call a context out of the plugin."), g = (...e) => {
  const o = e.reduce((s, a) => {
    if (!a)
      return s;
    const c = (i) => Array.isArray(i) ? i.map((m) => c(m)).join(", ") : i.toJSON ? r(i.toJSON()) : i.spec ? r(i.spec) : i.toString();
    return `${s}, ${c(a)}`;
  }, "Create prosemirror node from remark failed in parser");
  return new t(n.createNodeInParserFail, o);
}, f = () => new t(n.stackOverFlow, "Stack over flow, cannot pop on an empty stack."), w = (e) => new t(n.parserMatchError, `Cannot match target parser for node: ${r(e)}.`), M = (e) => new t(n.serializerMatchError, `Cannot match target serializer for node: ${r(e)}.`), S = (e, o) => new t(n.getAtomFromSchemaFail, `Cannot get ${e}: ${o} from schema.`), y = (e) => new t(n.expectDomTypeError, `Expect to be a dom, but get: ${r(e)}.`), F = () => new t(n.callCommandBeforeEditorView, "You're trying to call a command before editor view initialized, make sure to get commandManager from ctx after editor view has been initialized"), I = () => new t(n.themeMustInstalled, "It seems that no theme found in editor, please make sure you have use theme in front of all plugins.\nIf you prefer to use an empty theme, you can use `themeFactory({})`."), N = () => new t(n.missingRootElement, "Missing root element, milkdown cannot find root element of the editor."), O = (e) => new t(n.missingNodeInSchema, `Missing node in schema, milkdown cannot find "${e}" in schema.`), k = (e) => new t(n.missingMarkInSchema, `Missing mark in schema, milkdown cannot find "${e}" in schema.`), x = (e) => new t(n.missingIcon, `Missing icon in theme, milkdown cannot find icon "${e}" in theme.`), v = () => new t(n.ctxNotBind, "Context not bind, please make sure the plugin has been initialized."), T = () => new t(n.missingYjsDoc, "Missing yjs doc, please make sure you have bind one."), $ = () => new t(n.vueRendererCallOutOfScope, "Should not call vue renderer before it has been created."), z = () => new t(n.missingMenuWrapper, "Missing menu wrapper, should init menu wrapper first."), R = () => new t(n.repeatCallsToMenuWrapperInit, "Repeated calls to menu wrapper initialization");
export {
  F as callCommandBeforeEditorView,
  u as contextNotFound,
  g as createNodeInParserFail,
  h as ctxCallOutOfScope,
  v as ctxNotBind,
  p as docTypeError,
  y as expectDomTypeError,
  S as getAtomFromSchemaFail,
  x as missingIcon,
  k as missingMarkInSchema,
  z as missingMenuWrapper,
  O as missingNodeInSchema,
  N as missingRootElement,
  T as missingYjsDoc,
  w as parserMatchError,
  R as repeatCallsToMenuWrapperInit,
  M as serializerMatchError,
  f as stackOverFlow,
  I as themeMustInstalled,
  d as timerNotFound,
  $ as vueRendererCallOutOfScope
};
//# sourceMappingURL=index.es.js.map
