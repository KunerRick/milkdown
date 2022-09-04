import { Ctx } from '@milkdown/core';
import { Mark, Node } from '@milkdown/prose/model';
import type { Decoration, DecorationSource, EditorView, MarkViewConstructor, NodeView, NodeViewConstructor } from '@milkdown/prose/view';
import { DefineComponent } from 'vue';
export declare type RenderOptions = Partial<{
    as: string;
    update?: (node: Node, decorations: readonly Decoration[], innerDecorations: DecorationSource) => boolean;
} & Pick<NodeView, 'ignoreMutation' | 'deselectNode' | 'selectNode' | 'destroy'>>;
export declare const createVueView: (addPortal: (portal: DefineComponent, key: string) => void, removePortalByKey: (key: string) => void) => (component: DefineComponent, options?: RenderOptions) => (ctx: Ctx) => NodeViewConstructor | MarkViewConstructor;
export declare class VueNodeView implements NodeView {
    private ctx;
    private component;
    private addPortal;
    private removePortalByKey;
    private options;
    private view;
    private getPos;
    teleportDOM: HTMLElement;
    key: string;
    get isInlineOrMark(): boolean;
    private node;
    private decorations;
    constructor(ctx: Ctx, component: DefineComponent, addPortal: (portal: DefineComponent, key: string) => void, removePortalByKey: (key: string) => void, options: RenderOptions, node: Node | Mark, view: EditorView, getPos: boolean | (() => number), decorations: readonly Decoration[]);
    get dom(): HTMLElement;
    get contentDOM(): HTMLElement | undefined;
    getPortal: () => DefineComponent;
    renderPortal(): void;
    destroy(): void;
    ignoreMutation(mutation: MutationRecord): boolean;
    update(node: Node, decorations: readonly Decoration[], innerDecorations: DecorationSource): boolean;
    selectNode: (() => void) | undefined;
    deselectNode: (() => void) | undefined;
}
//# sourceMappingURL=VueNodeView.d.ts.map