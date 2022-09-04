import { Ctx } from '@milkdown/core';
import { EditorView } from '@milkdown/prose/view';
import { ThemeUtils } from '@milkdown/utils';
export declare type HandleDOMParams = {
    menu: HTMLDivElement;
    menuWrapper: HTMLDivElement;
    editorRoot: HTMLElement;
    milkdownDOM: HTMLElement;
    editorDOM: HTMLDivElement;
};
export declare type HandleDOM = (params: HandleDOMParams) => void;
export declare const initWrapper: (ctx: Ctx, view: EditorView) => HTMLDivElement;
export declare const menubar: (utils: ThemeUtils, view: EditorView, ctx: Ctx, menuWrapper: HTMLDivElement | null, domHandler?: HandleDOM) => readonly [HTMLDivElement, () => HTMLElement];
//# sourceMappingURL=menubar.d.ts.map