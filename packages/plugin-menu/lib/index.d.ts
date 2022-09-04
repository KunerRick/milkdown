import { Ctx } from '@milkdown/core';
import { PluginKey } from '@milkdown/prose/state';
import { AtomList } from '@milkdown/utils';
import { Config } from './default-config';
import { HandleDOM } from './menubar';
export declare const menuKey: PluginKey<any>;
export * from './default-config';
export type { HandleDOM, HandleDOMParams } from './menubar';
export declare type Options = {
    config: Config | ((ctx: Ctx) => Config);
    domHandler: HandleDOM;
};
export declare const menuPlugin: import("@milkdown/utils").WithExtend<string, Options, import("@milkdown/utils").TypeMapping<string, string>, import("@milkdown/utils").PluginRest<string, string>>;
export declare const menu: AtomList<import("@milkdown/utils").Metadata<import("@milkdown/utils").GetPlugin<string, Options>> & import("@milkdown/core").MilkdownPlugin>;
//# sourceMappingURL=index.d.ts.map