import type { Node } from '@milkdown/prose/model';
import type { EditorView } from '@milkdown/prose/view';
declare type InnerEditorRenderer = {
    dom: HTMLElement;
    preview: HTMLElement;
    editor: HTMLElement;
    onUpdate: (node: Node, isInit: boolean) => void;
    onFocus: (node: Node) => void;
    onBlur: (node: Node) => void;
    onDestroy: () => void;
    stopEvent: (event: Event) => boolean;
};
declare type InnerEditorOptions = {
    view: EditorView;
    getPos: () => number;
    render: (content: string) => void;
};
export declare const ThemeInnerEditor: import("../../manager").ThemeSliceKey<InnerEditorRenderer, InnerEditorOptions, "inner-editor">;
export declare type ThemeInnerEditorType = typeof ThemeInnerEditor;
export {};
//# sourceMappingURL=inner-editor.d.ts.map