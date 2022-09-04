import { MarkType, Node, NodeType } from '@milkdown/prose/model';
import { EditorState } from '@milkdown/prose/state';
export declare type Position = {
    start: number;
    end: number;
};
export declare const hasMark: (editorState: EditorState, type?: MarkType) => boolean;
export declare const isTextSelection: (editorState: EditorState) => boolean;
export declare const isInCodeFence: (editorState: EditorState) => boolean;
export declare const isTextAndNotHasMark: (editorState: EditorState, mark?: MarkType) => boolean;
export declare const equalNodeType: (nodeType: NodeType, node: Node) => boolean;
//# sourceMappingURL=prosemirror.d.ts.map