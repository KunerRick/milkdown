import { Ctx, Editor } from '@milkdown/core';
import type { Mark, Node } from '@milkdown/prose/model';
import { Decoration, DecorationSource, MarkViewConstructor, NodeView, NodeViewConstructor } from '@milkdown/prose/view';
import { Ref } from 'vue';
import { AnyVueComponent } from './utils';
export declare type RenderOptions = Partial<{
    as: string;
    update?: (node: Node, decorations: readonly Decoration[], innerDecorations: DecorationSource) => boolean;
} & Pick<NodeView, 'ignoreMutation' | 'deselectNode' | 'selectNode' | 'destroy'>>;
export declare type RenderVue<U = never> = <T extends Node | Mark = Node | Mark>(Component: AnyVueComponent, options?: RenderOptions) => (ctx: Ctx) => U extends never ? T extends Node ? NodeViewConstructor : T extends Mark ? MarkViewConstructor : NodeViewConstructor & MarkViewConstructor : U extends Node ? NodeViewConstructor : U extends Mark ? MarkViewConstructor : NodeViewConstructor & MarkViewConstructor;
export declare type GetEditor = (container: HTMLDivElement, renderVue: RenderVue) => Editor;
export declare type EditorInfoCtx = {
    dom: Ref<HTMLDivElement | null>;
    editor: Ref<Editor | undefined>;
    loading: Ref<boolean>;
};
export declare type EditorInfo = {
    getEditorCallback: Ref<GetEditor>;
} & EditorInfoCtx;
export declare type UseEditorReturn = {
    loading: Ref<boolean>;
    getInstance: () => Editor | undefined;
    getDom: () => HTMLDivElement | null;
    editor: EditorInfo;
};
//# sourceMappingURL=types.d.ts.map