import { Ctx, MilkdownPlugin } from '@milkdown/core';
import { Plugin } from '@milkdown/prose/state';
export declare type $Prose = MilkdownPlugin & {
    plugin: Plugin;
};
export declare const $prose: (prose: (ctx: Ctx) => Plugin) => $Prose;
export declare const $proseAsync: (prose: (ctx: Ctx) => Promise<Plugin>, timerName?: string) => MilkdownPlugin & {
    plugin: Plugin;
} & {
    timer: import("@milkdown/core").Timer;
};
//# sourceMappingURL=$prose.d.ts.map