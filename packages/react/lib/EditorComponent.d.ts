/// <reference types="react" />
import { EditorRef, GetEditor } from './types';
export declare const useGetter: () => {
    get: () => import("@milkdown/core").Editor | undefined;
    dom: () => HTMLDivElement | undefined;
};
export declare const EditorComponent: import("react").ForwardRefExoticComponent<{
    editor: GetEditor;
} & import("react").RefAttributes<EditorRef>>;
//# sourceMappingURL=EditorComponent.d.ts.map