import { MilkdownPlugin, Timer } from '@milkdown/ctx';
import { DirectEditorProps, EditorView } from '@milkdown/prose/view';
declare type EditorOptions = Omit<DirectEditorProps, 'state'>;
declare type RootType = Node | undefined | null | string;
export declare const editorViewCtx: import("@milkdown/ctx").Slice<EditorView, "editorView">;
export declare const editorViewOptionsCtx: import("@milkdown/ctx").Slice<Partial<EditorOptions>, "editorViewOptions">;
export declare const rootCtx: import("@milkdown/ctx").Slice<RootType, "root">;
export declare const editorViewTimerCtx: import("@milkdown/ctx").Slice<Timer[], "editorViewTimer">;
export declare const rootDOMCtx: import("@milkdown/ctx").Slice<HTMLElement, "rootDOM">;
export declare const EditorViewReady: Timer;
export declare const editorView: MilkdownPlugin;
export {};
//# sourceMappingURL=editor-view.d.ts.map