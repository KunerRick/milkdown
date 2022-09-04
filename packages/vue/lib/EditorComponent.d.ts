import { Editor } from '@milkdown/core';
import { GetEditor } from './types';
export declare const EditorComponent: import("vue").DefineComponent<{
    editor: GetEditor;
    editorRef?: EditorRef | undefined;
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    editor: GetEditor;
    editorRef?: EditorRef | undefined;
}>, {}>;
export declare type EditorRef = {
    get: () => Editor | undefined;
    dom: () => HTMLDivElement | null;
};
//# sourceMappingURL=EditorComponent.d.ts.map