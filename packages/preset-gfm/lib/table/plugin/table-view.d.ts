import { Node } from '@milkdown/prose/model';
import { NodeView } from '@milkdown/prose/view';
export declare class TableView implements NodeView {
    node: Node;
    cellMinWidth: number;
    dom: HTMLElement;
    contentDOM: HTMLElement;
    table: HTMLTableElement;
    colgroup: HTMLTableColElement;
    constructor(node: Node, cellMinWidth: number);
    update(node: Node): boolean;
    ignoreMutation(record: MutationRecord): boolean;
}
export declare function updateColumns(node: Node, colgroup: HTMLTableColElement, table: HTMLTableElement, cellMinWidth: number, overrideCol?: number, overrideValue?: number): void;
//# sourceMappingURL=table-view.d.ts.map