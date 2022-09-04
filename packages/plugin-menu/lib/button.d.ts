import { CmdKey, Ctx, Icon } from '@milkdown/core';
import type { EditorView } from '@milkdown/prose/view';
import type { ThemeUtils } from '@milkdown/utils';
import type { CommonConfig } from './default-config';
export declare type ButtonConfig<T = any> = {
    type: 'button';
    icon: Icon;
    active?: (view: EditorView) => boolean;
    key: CmdKey<T> | string;
    options?: T;
} & CommonConfig;
export declare const button: (utils: ThemeUtils, config: ButtonConfig, ctx: Ctx) => HTMLButtonElement;
//# sourceMappingURL=button.d.ts.map