import { InputRule } from 'prosemirror-inputrules';
import { PluginKey, Plugin, Transaction, Selection } from 'prosemirror-state';
import { MarkType, NodeType, Node, Schema, ResolvedPos } from 'prosemirror-model';
import { EditorView } from 'prosemirror-view';

declare const ie: boolean;
declare const ie_version: unknown;
declare const gecko: boolean;
declare const gecko_version: number | false;
declare const chrome: boolean;
declare const chrome_version: number;
declare const safari: boolean;
declare const ios: boolean;
declare const mac: boolean;
declare const android: boolean;
declare const webkit: boolean;
declare const webkit_version: number;

declare const browser_ie: typeof ie;
declare const browser_ie_version: typeof ie_version;
declare const browser_gecko: typeof gecko;
declare const browser_gecko_version: typeof gecko_version;
declare const browser_chrome: typeof chrome;
declare const browser_chrome_version: typeof chrome_version;
declare const browser_safari: typeof safari;
declare const browser_ios: typeof ios;
declare const browser_mac: typeof mac;
declare const browser_android: typeof android;
declare const browser_webkit: typeof webkit;
declare const browser_webkit_version: typeof webkit_version;
declare namespace browser {
  export {
    browser_ie as ie,
    browser_ie_version as ie_version,
    browser_gecko as gecko,
    browser_gecko_version as gecko_version,
    browser_chrome as chrome,
    browser_chrome_version as chrome_version,
    browser_safari as safari,
    browser_ios as ios,
    browser_mac as mac,
    browser_android as android,
    browser_webkit as webkit,
    browser_webkit_version as webkit_version,
  };
}

declare const customInputRulesKey: PluginKey<any>;
declare const customInputRules: ({ rules }: {
    rules: InputRule[];
}) => Plugin;

declare function markRule(regexp: RegExp, markType: MarkType): InputRule;

declare type Point = [top: number, left: number];
declare const calculateNodePosition: (view: EditorView, target: HTMLElement, handler: (selectedRect: DOMRect, targetRect: DOMRect, parentRect: DOMRect) => Point) => void;
declare type Rect = {
    left: number;
    right: number;
    top: number;
    bottom: number;
};
declare const calculateTextPosition: (view: EditorView, target: HTMLElement, handler: (start: Rect, end: Rect, targetRect: DOMRect, parentRect: DOMRect) => Point) => void;

declare const cloneTr: (tr: Transaction) => Transaction;
declare const equalNodeType: (nodeType: NodeType | NodeType[], node: Node) => boolean;

declare type Predicate = (node: Node) => boolean;

declare type NodeWithPos = {
    pos: number;
    node: Node;
};
declare const flatten: (node: Node, descend?: boolean) => NodeWithPos[];
declare const findChildren: (predicate: Predicate) => (node: Node, descend?: boolean) => NodeWithPos[];
declare const findChildrenByMark: (node: Node, markType: MarkType, descend?: boolean) => NodeWithPos[];

declare const getNodeFromSchema: (type: string, schema: Schema) => NodeType;
declare const getMarkFromSchema: (type: string, schema: Schema) => MarkType;

declare type ContentNodeWithPos = {
    pos: number;
    start: number;
    depth: number;
    node: Node;
};
declare const findParentNodeClosestToPos: (predicate: Predicate) => ($pos: ResolvedPos) => ContentNodeWithPos | undefined;
declare const findParentNode: (predicate: Predicate) => (selection: Selection) => ContentNodeWithPos | undefined;
declare const findSelectedNodeOfType: (selection: Selection, nodeType: NodeType) => ContentNodeWithPos | undefined;

export { ContentNodeWithPos, NodeWithPos, browser, calculateNodePosition, calculateTextPosition, cloneTr, customInputRules, customInputRulesKey, equalNodeType, findChildren, findChildrenByMark, findParentNode, findParentNodeClosestToPos, findSelectedNodeOfType, flatten, getMarkFromSchema, getNodeFromSchema, markRule };
//# sourceMappingURL=index.d.ts.map
