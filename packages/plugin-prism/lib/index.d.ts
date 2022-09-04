import type { Refractor } from 'refractor/lib/core';
export declare type Options = {
    nodeName: string;
    configureRefractor: (refractor: Refractor) => void;
};
export declare const prismPlugin: (options?: Partial<Options>) => import("@milkdown/utils").$Prose;
export declare const prism: import("@milkdown/utils").$Prose;
//# sourceMappingURL=index.d.ts.map