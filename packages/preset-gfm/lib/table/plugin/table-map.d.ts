import { Node } from '@milkdown/prose/model';
export declare class Rect {
    left: number;
    top: number;
    right: number;
    bottom: number;
    tableStart?: number;
    map?: TableMap;
    table?: Node;
    constructor(left: number, top: number, right: number, bottom: number);
}
export declare class TableMap {
    width: number;
    height: number;
    map: number[];
    problems?: Problem[] | undefined;
    constructor(width: number, height: number, map: number[], problems?: Problem[] | undefined);
    findCell(pos: number): Rect;
    colCount(pos: number): number;
    nextCell(pos: number, axis: string, dir: number): number | undefined;
    rectBetween(a: number, b: number): Rect;
    cellsInRect(rect: Rect): number[];
    positionAt(row: number, col: number, table: Node): number;
    static get(table: Node): TableMap;
}
export declare type Problem = {
    type: 'missing';
    row: number;
    n: number;
} | {
    type: 'overlong_rowspan';
    pos: number;
    n: number;
} | {
    type: 'collision';
    row: number;
    pos: number;
    n: number;
} | {
    type: 'colwidth mismatch';
    pos: number;
    colwidth: boolean;
};
//# sourceMappingURL=table-map.d.ts.map