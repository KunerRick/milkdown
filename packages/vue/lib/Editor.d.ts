import { ComponentInternalInstance, DefineComponent, InjectionKey } from 'vue';
import { EditorRef } from './EditorComponent';
import { EditorInfo, EditorInfoCtx } from './types';
export declare const getRootInstance: () => ComponentInternalInstance | null;
export declare const editorInfoCtxKey: InjectionKey<EditorInfoCtx>;
export declare const VueEditor: DefineComponent<{
    editor: EditorInfo;
    editorRef?: EditorRef | undefined;
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    editor: EditorInfo;
    editorRef?: EditorRef | undefined;
}>, {}>;
//# sourceMappingURL=Editor.d.ts.map