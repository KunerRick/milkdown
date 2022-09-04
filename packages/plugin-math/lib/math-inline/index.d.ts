import { KatexOptions } from 'katex';
declare type Options = {
    placeholder: {
        empty: string;
        error: string;
    };
    input: {
        placeholder: string;
    };
    katexOptions: KatexOptions;
};
export declare const ModifyInlineMath: import("@milkdown/core").CmdKey<string>;
export declare const mathInline: import("@milkdown/utils").NodeCreator<string, Options>;
export {};
//# sourceMappingURL=index.d.ts.map