import { Node } from '@milkdown/prose/model';
import { DecorationSet } from '@milkdown/prose/view';
import type { Refractor } from 'refractor/lib/core';
export declare type FlattedNode = {
    text: string;
    className: string[];
};
export declare function getDecorations(doc: Node, name: string, refractor: Refractor): DecorationSet;
//# sourceMappingURL=get-decorations.d.ts.map