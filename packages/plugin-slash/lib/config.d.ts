import { Ctx } from '@milkdown/core';
import { Node } from '@milkdown/prose/model';
import { EditorState } from '@milkdown/prose/state';
import { WrappedAction } from './item';
declare type Nullable<T> = T | null | undefined;
export declare type StatusConfig = {
    placeholder?: Nullable<string>;
    actions?: Nullable<WrappedAction[]>;
};
export declare type StatusConfigBuilderParams = {
    content: string;
    isTopLevel: boolean;
    parentNode: Node;
    state: EditorState;
};
export declare type StatusConfigBuilder = (params: StatusConfigBuilderParams) => Nullable<StatusConfig>;
export declare type Config = (ctx: Ctx) => StatusConfigBuilder;
export declare const defaultActions: (ctx: Ctx, input?: string) => WrappedAction[];
export declare const defaultConfig: Config;
export {};
//# sourceMappingURL=config.d.ts.map