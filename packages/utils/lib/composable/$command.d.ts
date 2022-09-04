import { CmdKey, CmdTuple, Ctx, MilkdownPlugin } from '@milkdown/core';
export declare type $Command<T> = MilkdownPlugin & {
    run: (payload?: T) => boolean;
    key: CmdKey<T>;
};
export declare const $command: <T>(cmd: (ctx: Ctx) => CmdTuple<T>) => $Command<T>;
export declare const $commandAsync: <T>(cmd: (ctx: Ctx) => Promise<CmdTuple<T>>, timerName?: string) => MilkdownPlugin & {
    run: (payload?: T | undefined) => boolean;
    key: CmdKey<T>;
} & {
    timer: import("@milkdown/core").Timer;
};
//# sourceMappingURL=$command.d.ts.map