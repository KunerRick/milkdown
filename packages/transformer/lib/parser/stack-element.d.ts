import { Node, NodeType } from '@milkdown/prose/model';
import type { Attrs } from './types';
export declare type StackElement = {
    type: NodeType;
    content: Node[];
    attrs?: Attrs;
    push: (node: Node, ...rest: Node[]) => void;
    pop: () => Node | undefined;
};
export declare const createElement: (type: NodeType, content: Node[], attrs?: Attrs) => StackElement;
//# sourceMappingURL=stack-element.d.ts.map