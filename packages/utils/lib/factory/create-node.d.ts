import { Ctx, NodeSchema } from '@milkdown/core';
import { NodeType } from '@milkdown/prose/model';
import { NodeViewConstructor } from '@milkdown/prose/view';
import { AnySlice, Factory, UnknownRecord, WithExtend } from '../types';
export declare type NodeRest = {
    id: string;
    schema: (ctx: Ctx) => NodeSchema;
    view?: (ctx: Ctx) => NodeViewConstructor;
};
export declare type NodeFactory<SupportedKeys extends string, Options extends UnknownRecord> = Factory<SupportedKeys, Options, NodeType, NodeRest>;
export declare type NodeCreator<SupportedKeys extends string = string, Options extends UnknownRecord = UnknownRecord> = WithExtend<SupportedKeys, Options, NodeType, NodeRest>;
export declare const createNode: <SupportedKeys extends string = string, Options extends UnknownRecord = UnknownRecord>(factory: NodeFactory<SupportedKeys, Options>, inject?: AnySlice[]) => NodeCreator<SupportedKeys, Options>;
//# sourceMappingURL=create-node.d.ts.map