import { Ctx } from '@milkdown/core';
import { Mark, Node } from '@milkdown/prose/model';
import type { Decoration, DecorationSource, EditorView, MarkViewConstructor, NodeView, NodeViewConstructor } from '@milkdown/prose/view';
import { FC, ReactNode, ReactPortal } from 'react';
export declare type RenderOptions = Partial<{
    as: string;
    update?: (node: Node, decorations: readonly Decoration[], innerDecorations: DecorationSource) => boolean;
} & Pick<NodeView, 'ignoreMutation' | 'deselectNode' | 'selectNode' | 'destroy'>>;
export declare const createReactView: (addPortal: (portal: ReactPortal) => void, removePortalByKey: (key: string) => void, replacePortalByKey: (key: string, portal: ReactPortal) => void) => (component: FC<{
    children: ReactNode;
}>, options?: RenderOptions) => (ctx: Ctx) => NodeViewConstructor | MarkViewConstructor;
export declare class ReactNodeView implements NodeView {
    private ctx;
    private component;
    private addPortal;
    private removePortalByKey;
    private replacePortalByKey;
    private options;
    private node;
    private view;
    private getPos;
    private decorations;
    teleportDOM: HTMLElement;
    contentDOMElement: HTMLElement | null;
    key: string;
    get isInlineOrMark(): boolean;
    constructor(ctx: Ctx, component: React.FC<{
        children: React.ReactNode;
    }>, addPortal: (portal: ReactPortal) => void, removePortalByKey: (key: string) => void, replacePortalByKey: (key: string, portal: ReactPortal) => void, options: RenderOptions, node: Node | Mark, view: EditorView, getPos: boolean | (() => number), decorations: readonly Decoration[]);
    get dom(): HTMLElement;
    get contentDOM(): HTMLElement | null;
    getPortal: () => ReactPortal;
    renderPortal(): void;
    destroy(): void;
    ignoreMutation(mutation: MutationRecord): boolean;
    update(node: Node, decorations: readonly Decoration[], innerDecorations: DecorationSource): boolean;
    selectNode: (() => void) | undefined;
    deselectNode: (() => void) | undefined;
}
//# sourceMappingURL=ReactNodeView.d.ts.map