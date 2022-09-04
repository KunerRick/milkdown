import { Ctx } from '@milkdown/core';
import { EditorView } from '@milkdown/prose/view';
import { ThemeUtils } from '@milkdown/utils';
import { BlockHandleDOM } from './block-handle-dom';
import { BlockMenuDOM } from './block-menu-dom';
import { ConfigBuilder } from './config';
import { FilterNodes } from './create-block-plugin';
export declare class BlockService {
    #private;
    readonly blockHandle$: BlockHandleDOM;
    readonly blockMenu$: BlockMenuDOM;
    constructor(ctx: Ctx, utils: ThemeUtils, filterNodes: FilterNodes, configBuilder: ConfigBuilder);
    mount(view: EditorView): void;
    unmount(): void;
    keydownCallback: () => boolean;
    mousedownCallback: () => boolean;
    mousemoveCallback: (view: EditorView, event: MouseEvent) => boolean;
    dragoverCallback: (_: EditorView, event: DragEvent) => boolean;
    dropCallback: (view: EditorView, _event: MouseEvent) => boolean;
}
//# sourceMappingURL=block-service.d.ts.map