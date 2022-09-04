import { MilkdownPlugin, Timer } from '@milkdown/ctx';
import type { Node as ProsemirrorNode } from '@milkdown/prose/model';
export declare type Parser = (text: string) => ProsemirrorNode | undefined;
export declare const parserCtx: import("@milkdown/ctx").Slice<Parser, "parser">;
export declare const parserTimerCtx: import("@milkdown/ctx").Slice<Timer[], "parserTimer">;
export declare const ParserReady: Timer;
export declare const parser: MilkdownPlugin;
//# sourceMappingURL=parser.d.ts.map