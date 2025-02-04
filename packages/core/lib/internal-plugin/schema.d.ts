import { MilkdownPlugin, Timer } from '@milkdown/ctx';
import type { MarkSpec, NodeSpec } from '@milkdown/prose/model';
import { Schema } from '@milkdown/prose/model';
import type { MarkParserSpec, MarkSerializerSpec, NodeParserSpec, NodeSerializerSpec } from '@milkdown/transformer';
export declare const SchemaReady: Timer;
export declare const schemaCtx: import("@milkdown/ctx").Slice<Schema<any, any>, "schema">;
export declare const schemaTimerCtx: import("@milkdown/ctx").Slice<Timer[], "schemaTimer">;
export declare type NodeSchema = {
    readonly toMarkdown: NodeSerializerSpec;
    readonly parseMarkdown: NodeParserSpec;
    readonly priority?: number;
} & Readonly<NodeSpec>;
export declare const nodesCtx: import("@milkdown/ctx").Slice<[string, NodeSchema][], "nodes">;
export declare type MarkSchema = {
    readonly toMarkdown: MarkSerializerSpec;
    readonly parseMarkdown: MarkParserSpec;
} & Readonly<MarkSpec>;
export declare const marksCtx: import("@milkdown/ctx").Slice<[string, MarkSchema][], "marks">;
export declare const schema: MilkdownPlugin;
//# sourceMappingURL=schema.d.ts.map