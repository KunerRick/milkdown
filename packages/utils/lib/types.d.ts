import type { Attrs, CmdKey, CmdTuple, Ctx, Emotion, MilkdownPlugin, RemarkPlugin, Slice, ThemeManager } from '@milkdown/core';
import type { InputRule } from '@milkdown/prose/inputrules';
import type { Plugin } from '@milkdown/prose/state';
import type { MarkViewConstructor, NodeViewConstructor } from '@milkdown/prose/view';
export declare type ThemeUtils = {
    readonly getClassName: (attrs: Attrs, ...defaultValue: (string | null | undefined)[]) => string;
    readonly getStyle: (style: (emotion: Emotion) => string | void) => string | undefined;
    readonly themeManager: ThemeManager;
};
/**
 * @deprecated Use `ThemeUtils` instead.
 */
export declare type Utils = ThemeUtils;
export declare type UnknownRecord = Record<string, unknown>;
export declare type CommandConfig<T = unknown> = [commandKey: CmdKey<T>, defaultKey: string, args?: T];
export declare type CommonOptions<SupportedKeys extends string = string, Obj = UnknownRecord> = Obj & {
    className?: (attrs: Attrs, ...defaultValue: (string | null | undefined)[]) => string;
    keymap?: Partial<Record<SupportedKeys, string | string[]>>;
    headless?: boolean;
    view?: (ctx: Ctx) => NodeViewConstructor | MarkViewConstructor;
};
export declare type Methods<Keys extends string, Type> = {
    remarkPlugins?: (ctx: Ctx) => RemarkPlugin[];
    inputRules?: (types: Type, ctx: Ctx) => InputRule[];
    prosePlugins?: (types: Type, ctx: Ctx) => Plugin[];
    commands?: (types: Type, ctx: Ctx) => CmdTuple[];
    shortcuts?: Record<Keys, CommandConfig>;
};
export declare type GetPlugin<SupportedKeys extends string = string, Options extends UnknownRecord = UnknownRecord> = (options?: Partial<CommonOptions<SupportedKeys, Options>>) => MilkdownPlugin;
export declare type Metadata<Origin = unknown> = {
    origin: Origin;
};
export declare type AddMetadata<SupportedKeys extends string = string, Options extends UnknownRecord = UnknownRecord> = (options?: Partial<CommonOptions<SupportedKeys, Options>>) => Metadata<GetPlugin<SupportedKeys, Options>> & MilkdownPlugin;
export declare type Spec<SupportedKeys extends string, Type, Rest> = Methods<SupportedKeys, Type> & Rest;
export declare type Factory<SupportedKeys extends string, Options extends UnknownRecord, Type, Rest> = (utils: ThemeUtils, options?: Partial<CommonOptions<SupportedKeys, Options>>) => Spec<SupportedKeys, Type, Rest>;
export declare type Extendable<SupportedKeys extends string, Options extends UnknownRecord, Type, Rest> = {
    extend: <ExtendedSupportedKeys extends string = SupportedKeys, ExtendedOptions extends UnknownRecord = Options, ExtendedType extends Type = Type, ExtendedRest extends Rest = Rest>(extendFactory: (...args: [
        original: Spec<SupportedKeys, Type, Rest>,
        ...rest: Parameters<Factory<ExtendedSupportedKeys, ExtendedOptions, ExtendedType, ExtendedRest>>
    ]) => Spec<ExtendedSupportedKeys, ExtendedType, ExtendedRest>, inject?: Slice<any>[]) => WithExtend<ExtendedSupportedKeys, ExtendedOptions, Type, Rest>;
};
export declare type WithExtend<SupportedKeys extends string, Options extends UnknownRecord, Type, Rest> = AddMetadata<SupportedKeys, Options> & Extendable<SupportedKeys, Options, Type, Rest>;
export declare type MaybePromise<T> = T | Promise<T>;
export declare type AnySlice = Slice<any>;
//# sourceMappingURL=types.d.ts.map