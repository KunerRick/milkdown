import { Attrs, CmdKey, Ctx, Slice } from '@milkdown/core';
import { AddMetadata, CommandConfig, CommonOptions, Factory, GetPlugin, ThemeUtils, UnknownRecord, WithExtend } from '../types';
export declare const getClassName: (className: CommonOptions['className']) => (attrs: Attrs, ...defaultValue: (string | null | undefined)[]) => string;
export declare const createShortcut: <T>(commandKey: CmdKey<T>, defaultKey: string | string[], args?: T | undefined) => CommandConfig<unknown>;
export declare const getThemeUtils: <Options extends UnknownRecord>(ctx: Ctx, options?: Options | undefined) => ThemeUtils;
/**
 * @deprecated Use `getThemeUtils` instead.
 */
export declare const getUtils: <Options extends UnknownRecord>(ctx: Ctx, options?: Options | undefined) => ThemeUtils;
export declare const addMetadata: <SupportedKeys extends string = string, Options extends UnknownRecord = UnknownRecord>(x: GetPlugin<SupportedKeys, Options>) => AddMetadata<SupportedKeys, Options>;
export declare const withExtend: <SupportedKeys extends string, Options extends UnknownRecord, Type, Rest>(factory: Factory<SupportedKeys, Options, Type, Rest>, creator: (factory: Factory<SupportedKeys, Options, Type, Rest>, inject?: Slice<any>[]) => WithExtend<SupportedKeys, Options, Type, Rest>) => (origin: AddMetadata<SupportedKeys, Options>) => WithExtend<SupportedKeys, Options, Type, Rest>;
//# sourceMappingURL=common.d.ts.map