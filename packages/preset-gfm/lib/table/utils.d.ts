import { Node as ProsemirrorNode, Schema } from '@milkdown/prose/model';
import { Selection, Transaction } from '@milkdown/prose/state';
import { Rect } from './plugin/table-map';
export declare type CellPos = {
    pos: number;
    start: number;
    node: ProsemirrorNode;
};
export declare const findTable: (selection: Selection) => import("@milkdown/prose").ContentNodeWithPos | undefined;
export declare const getCellsInColumn: (columnIndex: number) => (selection: Selection) => CellPos[] | undefined;
export declare const getCellsInRow: (rowIndex: number) => (selection: Selection) => CellPos[] | undefined;
export declare const createTable: (schema: Schema, rowsCount?: number, colsCount?: number) => any;
export declare const selectLine: (type: 'row' | 'col') => (index: number) => (tr: Transaction) => Transaction;
export declare const getCellsInTable: (selection: Selection) => {
    pos: number;
    start: number;
    node: ProsemirrorNode | null;
}[] | undefined;
export declare const selectTable: (tr: Transaction) => Transaction;
export declare function addRowWithAlignment(tr: Transaction, { map, tableStart, table }: Required<Rect>, row: number): Transaction;
//# sourceMappingURL=utils.d.ts.map