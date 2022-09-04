import { Ctx, MarkSchema, NodeSchema } from '@milkdown/core';
import { MarkType, NodeType } from '@milkdown/prose/model';
import { MarkViewConstructor, NodeViewConstructor } from '@milkdown/prose/view';
import { AnySlice, Factory, UnknownRecord, WithExtend } from '../types';
export declare type TypeMapping<NodeKeys extends string, MarkKeys extends string> = {
    [K in NodeKeys]: NodeType;
} & {
    [K in MarkKeys]: MarkType;
};
export declare type ViewMapping<NodeKeys extends string, MarkKeys extends string> = {
    [K in NodeKeys]: NodeViewConstructor;
} & {
    [K in MarkKeys]: MarkViewConstructor;
};
export declare type PluginRest<NodeKeys extends string, MarkKeys extends string> = {
    schema?: (ctx: Ctx) => {
        node?: Record<NodeKeys, NodeSchema>;
        mark?: Record<MarkKeys, MarkSchema>;
    };
    view?: (ctx: Ctx) => Partial<ViewMapping<NodeKeys, MarkKeys>>;
};
export declare type PluginFactory<SupportedKeys extends string = string, Options extends UnknownRecord = UnknownRecord, NodeKeys extends string = string, MarkKeys extends string = string> = Factory<SupportedKeys, Options, TypeMapping<NodeKeys, MarkKeys>, PluginRest<NodeKeys, MarkKeys>>;
export declare const createPlugin: <SupportedKeys extends string = string, Options extends UnknownRecord = UnknownRecord, NodeKeys extends string = string, MarkKeys extends string = string>(factory: PluginFactory<SupportedKeys, Options, NodeKeys, MarkKeys>, inject?: AnySlice[]) => WithExtend<SupportedKeys, Options, TypeMapping<NodeKeys, MarkKeys>, PluginRest<NodeKeys, MarkKeys>>;
//# sourceMappingURL=create-plugin.d.ts.map