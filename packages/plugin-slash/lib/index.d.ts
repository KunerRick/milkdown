import { AtomList } from '@milkdown/utils';
import type { Config } from './config';
export type { Config, StatusConfig, StatusConfigBuilder, StatusConfigBuilderParams } from './config';
export { defaultActions, defaultConfig } from './config';
export type { Action, WrappedAction } from './item';
export { createDropdownItem } from './utility';
export declare type Options = {
    config: Config;
};
export declare const slashPlugin: import("@milkdown/utils").WithExtend<string, Options, import("@milkdown/utils").TypeMapping<string, string>, import("@milkdown/utils").PluginRest<string, string>>;
export declare const slash: AtomList<import("@milkdown/utils").Metadata<import("@milkdown/utils").GetPlugin<string, Options>> & import("@milkdown/core").MilkdownPlugin>;
//# sourceMappingURL=index.d.ts.map