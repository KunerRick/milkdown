import { AtomList } from '@milkdown/utils';
import { ConfigBuilder } from './config';
import { FilterNodes } from './create-block-plugin';
export declare const defaultNodeFilter: FilterNodes;
export declare type Options = {
    filterNodes: FilterNodes;
    configBuilder: ConfigBuilder;
};
export declare const blockPlugin: import("@milkdown/utils").WithExtend<string, Options, import("@milkdown/utils").TypeMapping<string, string>, import("@milkdown/utils").PluginRest<string, string>>;
export { defaultConfigBuilder } from './config';
export declare const block: AtomList;
//# sourceMappingURL=index.d.ts.map