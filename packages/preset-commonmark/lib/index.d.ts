import { AtomList } from '@milkdown/utils';
import { commonmarkPlugins } from './plugin';
export * from './mark';
export * from './node';
export * from './supported-keys';
export declare const commonmarkNodes: AtomList<import("@milkdown/utils").AtomPlugin>;
export { commonmarkPlugins };
export declare const commonmark: AtomList<import("@milkdown/utils").AtomPlugin>;
export declare const commands: {
    readonly ToggleInlineCode: import("@milkdown/core").CmdKey<undefined>;
    readonly ToggleItalic: import("@milkdown/core").CmdKey<undefined>;
    readonly ToggleLink: import("@milkdown/core").CmdKey<string>;
    readonly ToggleBold: import("@milkdown/core").CmdKey<undefined>;
    readonly ModifyLink: import("@milkdown/core").CmdKey<string>;
    readonly ModifyImage: import("@milkdown/core").CmdKey<string>;
    readonly WrapInBlockquote: import("@milkdown/core").CmdKey<undefined>;
    readonly WrapInBulletList: import("@milkdown/core").CmdKey<undefined>;
    readonly WrapInOrderedList: import("@milkdown/core").CmdKey<undefined>;
    readonly TurnIntoCodeFence: import("@milkdown/core").CmdKey<undefined>;
    readonly TurnIntoHeading: import("@milkdown/core").CmdKey<number>;
    readonly TurnIntoText: import("@milkdown/core").CmdKey<undefined>;
    readonly InsertHardbreak: import("@milkdown/core").CmdKey<undefined>;
    readonly InsertHr: import("@milkdown/core").CmdKey<string>;
    readonly InsertImage: import("@milkdown/core").CmdKey<string>;
    readonly SplitListItem: import("@milkdown/core").CmdKey<undefined>;
    readonly SinkListItem: import("@milkdown/core").CmdKey<undefined>;
    readonly LiftListItem: import("@milkdown/core").CmdKey<undefined>;
};
export declare type Commands = typeof commands;
//# sourceMappingURL=index.d.ts.map