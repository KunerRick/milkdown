import { Ctx } from '@milkdown/core';
import { EditorView } from '@milkdown/prose/view';
import { ThemeUtils } from '@milkdown/utils';
import { BlockHandleDOM } from './block-handle-dom';
import { ConfigBuilder } from './config';
import { ActiveNode } from './select-node-by-dom';
export declare class BlockMenuDOM {
    #private;
    readonly dom$: HTMLElement;
    constructor(utils: ThemeUtils, ctx: Ctx, configBuilder: ConfigBuilder, blockHandle: BlockHandleDOM, getActive: () => null | ActiveNode);
    hide(): void;
    show(): void;
    toggle(): void;
    mount(view: EditorView): void;
    unmount(): void;
    render(view: EditorView, targetNodeRect: DOMRect): void;
}
//# sourceMappingURL=block-menu-dom.d.ts.map