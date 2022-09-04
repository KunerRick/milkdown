import { Ctx } from '@milkdown/core';
import { EditorView } from '@milkdown/prose/view';
import { ThemeUtils } from '@milkdown/utils';
import { Config } from './default-config';
export declare class Manager {
    private utils;
    private ctx;
    private config;
    constructor(originalConfig: Config, utils: ThemeUtils, ctx: Ctx, menu: HTMLElement, view: EditorView);
    update(view: EditorView): void;
    private $create;
}
//# sourceMappingURL=manager.d.ts.map