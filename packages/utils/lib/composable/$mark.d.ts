import { Ctx, MarkSchema, MilkdownPlugin } from '@milkdown/core';
import { MarkType } from '@milkdown/prose/model';
export declare type $Mark = MilkdownPlugin & {
    id: string;
    type: MarkType;
    schema: MarkSchema;
};
export declare const $mark: (id: string, schema: (ctx: Ctx) => MarkSchema) => $Mark;
export declare const $markAsync: (id: string, schema: (ctx: Ctx) => Promise<MarkSchema>, timerName?: string) => MilkdownPlugin & {
    id: string;
    type: MarkType;
    schema: MarkSchema;
} & {
    timer: import("@milkdown/core").Timer;
};
//# sourceMappingURL=$mark.d.ts.map