import { Ctx, MarkSchema } from '@milkdown/core';
import { MarkType } from '@milkdown/prose/model';
import { MarkViewConstructor } from '@milkdown/prose/view';
import { AnySlice, Factory, UnknownRecord, WithExtend } from '../types';
export declare type MarkRest = {
    id: string;
    schema: (ctx: Ctx) => MarkSchema;
    view?: (ctx: Ctx) => MarkViewConstructor;
};
export declare type MarkFactory<SupportedKeys extends string, Options extends UnknownRecord> = Factory<SupportedKeys, Options, MarkType, MarkRest>;
export declare type MarkCreator<SupportedKeys extends string, Options extends UnknownRecord> = WithExtend<SupportedKeys, Options, MarkType, MarkRest>;
export declare const createMark: <SupportedKeys extends string = string, Options extends UnknownRecord = UnknownRecord>(factory: MarkFactory<SupportedKeys, Options>, inject?: AnySlice[]) => MarkCreator<string, Options>;
//# sourceMappingURL=create-mark.d.ts.map