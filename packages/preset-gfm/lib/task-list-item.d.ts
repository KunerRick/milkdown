import { SupportedKeys } from './supported-keys';
declare type Keys = Extract<keyof SupportedKeys, 'SinkListItem' | 'LiftListItem' | 'NextListItem' | 'TaskList'>;
export declare const SplitTaskListItem: import("@milkdown/core").CmdKey<undefined>;
export declare const SinkTaskListItem: import("@milkdown/core").CmdKey<undefined>;
export declare const LiftTaskListItem: import("@milkdown/core").CmdKey<undefined>;
export declare const TurnIntoTaskList: import("@milkdown/core").CmdKey<undefined>;
export declare const taskListItem: import("@milkdown/utils").NodeCreator<Keys, import("@milkdown/utils").UnknownRecord>;
export {};
//# sourceMappingURL=task-list-item.d.ts.map