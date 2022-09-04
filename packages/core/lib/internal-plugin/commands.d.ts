import { Ctx, MilkdownPlugin, Slice, Timer } from '@milkdown/ctx';
import type { Command } from '@milkdown/prose/state';
export declare type Cmd<T = undefined> = (payload?: T) => Command;
export declare type CmdKey<T = undefined> = Slice<Cmd<T>>;
declare type InferParams<T> = T extends CmdKey<infer U> ? U : never;
export declare class CommandManager {
    #private;
    setCtx: (ctx: Ctx) => void;
    /**
     * Create a command with provided key and command function.
     *
     * @param meta - The key of the command that needs to be created.
     * @param value - The implementation of the command function.
     */
    create<T>(meta: CmdKey<T>, value: Cmd<T>): import("@milkdown/ctx").$Slice<Cmd<T>, string>;
    get<T extends CmdKey<any>>(slice: string): Cmd<InferParams<T>>;
    get<T>(slice: CmdKey<T>): Cmd<T>;
    get(slice: string | CmdKey<any>): Cmd<any>;
    call<T extends CmdKey<any>>(slice: string, payload?: InferParams<T>): boolean;
    call<T>(slice: CmdKey<T>, payload?: T): boolean;
    call(slice: string | CmdKey<any>, payload?: any): boolean;
}
export declare type CmdTuple<T = unknown> = [key: CmdKey<T>, value: Cmd<T>];
export declare const createCmd: <T>(key: CmdKey<T>, value: Cmd<T>) => CmdTuple<unknown>;
export declare const createCmdKey: <T = undefined>(key?: string) => CmdKey<T>;
export declare const commandsCtx: Slice<CommandManager, "commands">;
export declare const commandsTimerCtx: Slice<Timer[], "commandsTimer">;
export declare const CommandsReady: Timer;
export declare const commands: MilkdownPlugin;
export {};
//# sourceMappingURL=commands.d.ts.map