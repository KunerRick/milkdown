import { AtomList } from '@milkdown/utils';
export declare type Options = {
    type: 'space' | 'tab';
    size: number;
};
export declare const Indent: import("@milkdown/core").CmdKey<boolean>;
export declare const indentPlugin: import("@milkdown/utils").WithExtend<string, Options, import("@milkdown/utils").TypeMapping<string, string>, import("@milkdown/utils").PluginRest<string, string>>;
export declare const indent: AtomList<import("@milkdown/utils").Metadata<import("@milkdown/utils").GetPlugin<string, Options>> & import("@milkdown/core").MilkdownPlugin>;
//# sourceMappingURL=index.d.ts.map