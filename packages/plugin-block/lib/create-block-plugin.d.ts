import { Ctx } from '@milkdown/core';
import { Node } from '@milkdown/prose/model';
import { Plugin } from '@milkdown/prose/state';
import { ThemeUtils } from '@milkdown/utils';
import { ConfigBuilder } from './config';
export declare type FilterNodes = (node: Node) => boolean;
export declare const createBlockPlugin: (ctx: Ctx, utils: ThemeUtils, filterNodes: FilterNodes, configBuilder: ConfigBuilder) => Plugin<any>;
//# sourceMappingURL=create-block-plugin.d.ts.map