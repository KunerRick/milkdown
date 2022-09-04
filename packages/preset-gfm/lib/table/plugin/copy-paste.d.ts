import { Fragment, Node, NodeType, Slice } from '@milkdown/prose/model';
import { EditorState, Transaction } from '@milkdown/prose/state';
import { Rect } from './table-map';
export declare function pastedCells(slice: Slice): R | null;
export declare type R = {
    width: number;
    height: number;
    rows: Fragment[];
};
export declare function fitSlice(nodeType: NodeType, slice: Slice): Node;
export declare function clipCells({ width, height, rows }: R, newWidth: number, newHeight: number): R;
export declare function insertCells(state: EditorState, dispatch: (tr: Transaction) => void, tableStart: number, rect: Rect, cells: R): void;
//# sourceMappingURL=copy-paste.d.ts.map