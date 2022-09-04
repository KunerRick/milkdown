import { Ctx, Icon } from '@milkdown/core';
import { ActiveNode } from './select-node-by-dom';
export declare type BlockAction = {
    id: string;
    icon: Icon | HTMLElement;
    content: string;
    command: (ctx: Ctx, active: ActiveNode) => void;
    disabled: (ctx: Ctx, active: ActiveNode) => boolean;
};
export declare type ConfigBuilder = (ctx: Ctx) => BlockAction[];
export declare const defaultConfigBuilder: ConfigBuilder;
//# sourceMappingURL=config.d.ts.map