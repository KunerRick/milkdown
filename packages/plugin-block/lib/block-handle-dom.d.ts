import { EditorView } from '@milkdown/prose/view';
import { ThemeUtils } from '@milkdown/utils';
export declare class BlockHandleDOM {
    #private;
    readonly dom$: HTMLElement;
    constructor(utils: ThemeUtils);
    hide(): void;
    show(): void;
    toggle(): void;
    mount(view: EditorView): void;
    unmount(): void;
    render(view: EditorView, el: HTMLElement): void;
}
//# sourceMappingURL=block-handle-dom.d.ts.map