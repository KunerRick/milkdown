import { Ctx } from '@milkdown/core';
import { Mark, Node } from '@milkdown/prose/model';
import { Decoration, EditorView } from '@milkdown/prose/view';
import { FC, ReactNode } from 'react';
declare type NodeContext<T extends Node | Mark = Node | Mark> = {
    ctx: Ctx;
    node: T;
    view: EditorView;
    getPos: T extends Mark ? boolean : T extends Node ? () => number : boolean | (() => number);
    decorations: readonly Decoration[];
};
export declare const ReactNodeContainer: React.FC<NodeContext & {
    children: ReactNode;
}>;
export declare type UseNodeCtx = <T extends Node | Mark = Node | Mark>() => NodeContext<T>;
export declare const useNodeCtx: UseNodeCtx;
export declare const Content: FC<{
    isInline?: boolean;
    contentRef: (dom: HTMLElement | null) => void;
}>;
export {};
//# sourceMappingURL=ReactNode.d.ts.map