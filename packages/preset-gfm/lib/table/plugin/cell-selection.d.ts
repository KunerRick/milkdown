import { Node, ResolvedPos, Slice } from '@milkdown/prose/model';
import { EditorState, Selection, Transaction } from '@milkdown/prose/state';
import { Mappable } from '@milkdown/prose/transform';
import { DecorationSet } from '@milkdown/prose/view';
export declare class CellSelection extends Selection {
    $anchorCell: ResolvedPos;
    $headCell: ResolvedPos;
    constructor($anchorCell: ResolvedPos, $headCell?: ResolvedPos);
    map(doc: Node, mapping: Mappable): Selection;
    content(): Slice;
    replace(tr: Transaction, content?: Slice): void;
    replaceWith(tr: Transaction, node: Node): void;
    forEachCell(f: (node: Node, index: number) => void): void;
    isColSelection(): boolean;
    static colSelection($anchorCell: ResolvedPos, $headCell?: ResolvedPos): CellSelection;
    isRowSelection(): boolean;
    eq(other: Selection): boolean;
    static rowSelection($anchorCell: ResolvedPos, $headCell?: ResolvedPos): CellSelection;
    toJSON(): {
        type: string;
        anchor: number;
        head: number;
    };
    static fromJSON(doc: Node, json: any): CellSelection;
    static create(doc: Node, anchorCell: number, headCell?: number): CellSelection;
    getBookmark(): CellBookmark;
}
declare class CellBookmark {
    anchor: number;
    head: number;
    constructor(anchor: number, head: number);
    map(mapping: Mappable): CellBookmark;
    resolve(doc: Node): Selection;
}
export declare function drawCellSelection(state: EditorState): DecorationSet | null;
export declare function normalizeSelection(state: EditorState, tr: Transaction | undefined, allowTableNodeSelection: boolean): Transaction | undefined;
export {};
//# sourceMappingURL=cell-selection.d.ts.map