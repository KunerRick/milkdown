import { MarkType, Node, NodeType, Schema } from '@milkdown/prose/model';
import type { Attrs } from './types';
export declare const createStack: (schema: Schema) => {
    build: () => Node;
    openMark: (markType: MarkType, attrs?: Attrs) => void;
    closeMark: (markType: MarkType) => void;
    addText: (text: string) => void;
    openNode: (nodeType: NodeType, attrs?: Attrs) => void;
    addNode: (nodeType: NodeType, attrs?: Attrs, content?: Node[]) => Node;
    closeNode: () => Node;
};
export declare type Stack = ReturnType<typeof createStack>;
//# sourceMappingURL=stack.d.ts.map