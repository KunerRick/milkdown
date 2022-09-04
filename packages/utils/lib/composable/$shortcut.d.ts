import { Ctx, MilkdownPlugin } from '@milkdown/core';
import { Command } from '@milkdown/prose/state';
declare type Keymap = Record<string, Command>;
export declare type $Shortcut = MilkdownPlugin & {
    keymap: Keymap;
};
export declare const $shortcut: (shortcut: (ctx: Ctx) => Keymap) => $Shortcut;
export declare const $shortcutAsync: (shortcut: (ctx: Ctx) => Promise<Keymap>, timerName?: string) => MilkdownPlugin & {
    keymap: Keymap;
} & {
    timer: import("@milkdown/core").Timer;
};
export {};
//# sourceMappingURL=$shortcut.d.ts.map