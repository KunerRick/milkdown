import { Ctx } from '@milkdown/core';
import type { Icon } from '@milkdown/design-system';
import type { MarkType } from '@milkdown/prose/model';
import { EditorView } from '@milkdown/prose/view';
export declare type Pred = (view: EditorView) => boolean;
export declare type Updater = (view: EditorView, $: HTMLElement) => void;
export declare type Event2Command = (e: Event) => void;
export declare type OnClick = (ctx: Ctx) => void;
export declare type Item = {
    icon: Icon | ((ctx: Ctx) => HTMLElement);
    onClick: string | ((ctx: Ctx) => () => void);
    isHidden: (ctx: Ctx) => Pred;
    isActive: (ctx: Ctx) => Pred;
    canAddToDOM: (ctx: Ctx) => Pred;
};
export declare type ButtonItem = {
    $: HTMLElement;
    command: () => void;
    active: Pred;
    disable?: Pred;
    enable: Pred;
};
export declare const createToggleIcon: (icon: Icon, onClick: string, mark?: MarkType, disableForMark?: MarkType) => Item;
export declare const defaultButtons: (ctx: Ctx) => Item[];
export declare type ButtonList = ButtonItem[];
export declare type TooltipOptions = {
    bottom: boolean;
    items: (ctx: Ctx) => Array<Item>;
};
export declare const buttonMap: (ctx: Ctx, items?: (ctx: Ctx) => Array<Item>) => ButtonList;
//# sourceMappingURL=item.d.ts.map