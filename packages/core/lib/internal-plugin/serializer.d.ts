import { MilkdownPlugin, Timer } from '@milkdown/ctx';
import type { Node as ProsemirrorNode } from '@milkdown/prose/model';
export declare const serializerCtx: import("@milkdown/ctx").Slice<(node: ProsemirrorNode) => string, "serializer">;
export declare const serializerTimerCtx: import("@milkdown/ctx").Slice<Timer[], "serializerTimer">;
export declare const SerializerReady: Timer;
export declare const serializer: MilkdownPlugin;
//# sourceMappingURL=serializer.d.ts.map