import { Node, ResolvedPos } from '@milkdown/prose/model';
import { EditorView } from '@milkdown/prose/view';
import { FilterNodes } from './create-block-plugin';
export declare type ActiveNode = Readonly<{
    $pos: ResolvedPos;
    node: Node;
    el: HTMLElement;
}>;
export declare const selectRootNodeByDom: (dom: Element, view: EditorView, filterNodes: FilterNodes) => ActiveNode | null;
//# sourceMappingURL=select-node-by-dom.d.ts.map