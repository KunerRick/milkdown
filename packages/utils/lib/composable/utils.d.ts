import { Ctx, MilkdownPlugin, Slice, Timer } from '@milkdown/core';
export declare const nanoid: (size?: number | undefined) => string;
export declare const addTimer: <T extends MilkdownPlugin, PluginWithTimer extends T = T & {
    timer: Timer;
}>(runner: (ctx: Ctx, plugin: PluginWithTimer, done: () => void) => Promise<void>, injectTo: Slice<Timer[], string>, timerName?: string) => PluginWithTimer;
//# sourceMappingURL=utils.d.ts.map