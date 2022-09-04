import { Attrs, Node, ResolvedPos } from '@milkdown/prose/model';
import { EditorState } from '@milkdown/prose/state';
import { TableMap } from './table-map';
export declare function cellAround($pos: ResolvedPos): ResolvedPos | undefined;
export declare function cellWrapping($pos: ResolvedPos): Node | null;
export declare function pointsAtCell($pos: ResolvedPos): Node | null;
export declare function moveCellForward($pos: ResolvedPos): ResolvedPos;
export declare function inSameTable($a: ResolvedPos, $b: ResolvedPos): boolean;
export declare function nextCell($pos: ResolvedPos, axis: string, dir: number): ResolvedPos | null;
export declare function setAttr<T>(attrs: Attrs, name: string, value: T): Attrs;
export declare function removeColSpan(attrs: Attrs, pos: number, n?: number): Record<string, unknown>;
export declare function isInTable(state: EditorState): boolean;
export declare function selectionCell(state: EditorState): ResolvedPos | undefined;
export declare function addColSpan(attrs: Attrs, pos: number, n?: number): Attrs;
export declare function columnIsHeader(map: TableMap, table: Node, col: number): boolean;
//# sourceMappingURL=util.d.ts.map