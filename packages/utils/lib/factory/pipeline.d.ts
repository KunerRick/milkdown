import { Ctx, Env, Pre } from '@milkdown/core';
export declare type PipelineEnv = {
    readonly pre: Pre;
    readonly ctx: Ctx;
    readonly pipelineCtx: Env;
};
export declare type Pipeline = (env: PipelineEnv, next: () => Promise<void>) => Promise<void>;
export declare const run: (pipelines: Pipeline[]) => (pre: Pre, ctx: Ctx) => Promise<void>;
//# sourceMappingURL=pipeline.d.ts.map