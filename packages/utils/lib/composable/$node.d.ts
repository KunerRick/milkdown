import { Ctx, MilkdownPlugin, NodeSchema } from '@milkdown/core';
import { NodeType } from '@milkdown/prose/model';
export declare type $Node = MilkdownPlugin & {
    id: string;
    type: NodeType;
    schema: NodeSchema;
};
export declare const $node: (id: string, schema: (ctx: Ctx) => NodeSchema) => $Node;
export declare const $nodeAsync: (id: string, schema: (ctx: Ctx) => Promise<NodeSchema>, timerName?: string) => MilkdownPlugin & {
    id: string;
    type: NodeType;
    schema: NodeSchema;
} & {
    timer: import("@milkdown/core").Timer;
};
//# sourceMappingURL=$node.d.ts.map