import { CmdTuple, Ctx, MarkSchema, NodeSchema, RemarkPlugin } from '@milkdown/core';
import { InputRule } from '@milkdown/prose/inputrules';
import { MarkType, NodeType } from '@milkdown/prose/model';
import { Plugin } from '@milkdown/prose/state';
import { MarkViewConstructor, NodeViewConstructor } from '@milkdown/prose/view';
import { AnySlice, CommandConfig, CommonOptions } from '../types';
import { Pipeline } from './pipeline';
export declare type UserSchema = (ctx: Ctx) => {
    node?: Record<string, NodeSchema>;
    mark?: Record<string, MarkSchema>;
};
export declare type PluginType = Record<string, NodeType | MarkType>;
export declare type PluginView = Record<string, NodeViewConstructor | MarkViewConstructor>;
declare type Maybe<T> = T | undefined;
export declare const injectSlices: (inject?: AnySlice[]) => Pipeline;
export declare const waitThemeReady: Pipeline;
export declare const getRemarkPluginsPipeCtx: import("@milkdown/core").Slice<Maybe<(ctx: Ctx) => RemarkPlugin[]>, string>;
export declare const applyRemarkPlugins: Pipeline;
export declare const getSchemaPipeCtx: import("@milkdown/core").Slice<Maybe<UserSchema>, string>;
export declare const typePipeCtx: import("@milkdown/core").Slice<PluginType, "Type">;
export declare const applySchema: Pipeline;
export declare const getCommandsPipeCtx: import("@milkdown/core").Slice<Maybe<(types: PluginType, ctx: Ctx) => CmdTuple[]>, string>;
export declare const createCommands: Pipeline;
export declare const getInputRulesPipeCtx: import("@milkdown/core").Slice<Maybe<(types: PluginType, ctx: Ctx) => InputRule[]>, string>;
export declare const createInputRules: Pipeline;
export declare const shortcutsPipeCtx: import("@milkdown/core").Slice<Record<string, CommandConfig<unknown>>, string>;
export declare const createShortcuts: Pipeline;
export declare const getProsePluginsPipeCtx: import("@milkdown/core").Slice<Maybe<(types: PluginType, ctx: Ctx) => Plugin[]>, string>;
export declare const applyProsePlugins: Pipeline;
export declare const getViewPipeCtx: import("@milkdown/core").Slice<Maybe<(ctx: Ctx) => PluginView>, string>;
export declare const applyView: Pipeline;
export declare type PluginOptions = Omit<CommonOptions<string, {}>, 'view'> & {
    view?: (ctx: Ctx) => PluginView;
};
export declare const optionsPipeCtx: import("@milkdown/core").Slice<PluginOptions, string>;
export declare const idPipeCtx: import("@milkdown/core").Slice<string, "idPipeCtx">;
export declare const injectPipeEnv: Pipeline;
export {};
//# sourceMappingURL=pieces.d.ts.map