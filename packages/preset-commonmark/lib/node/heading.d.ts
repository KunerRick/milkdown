import { Node } from '@milkdown/prose/model';
import { PluginKey } from '@milkdown/prose/state';
import { SupportedKeys } from '../supported-keys';
declare type Keys = SupportedKeys['H1'] | SupportedKeys['H2'] | SupportedKeys['H3'] | SupportedKeys['H4'] | SupportedKeys['H5'] | SupportedKeys['H6'] | SupportedKeys['DowngradeHeading'];
export declare const TurnIntoHeading: import("@milkdown/core").CmdKey<number>;
export declare const DowngradeHeading: import("@milkdown/core").CmdKey<undefined>;
export declare const headingIdPluginKey: PluginKey<any>;
export declare const headingHashPluginKey: PluginKey<any>;
export declare const heading: import("@milkdown/utils").NodeCreator<Keys, {
    getId: (node: Node) => string;
    displayHashtag: boolean;
}>;
export {};
//# sourceMappingURL=heading.d.ts.map