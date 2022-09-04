import { ThemeManager } from '@milkdown/core';
import type { Icon } from '@milkdown/design-system';
import type { Node } from '@milkdown/prose/model';
import type { Command } from '@milkdown/prose/state';
import type { ThemeUtils } from '@milkdown/utils';
export declare const createDropdown: (utils: ThemeUtils, className: string) => HTMLDivElement;
declare type ItemOptions = {
    textClassName: string;
};
export declare const createDropdownItem: (themeManager: ThemeManager, text: string, icon: Icon, options?: Partial<ItemOptions>) => HTMLDivElement;
export declare const getDepth: (node: Node) => number;
export declare const cleanUpAndCreateNode: (createCommand: () => void) => Command;
export {};
//# sourceMappingURL=utility.d.ts.map