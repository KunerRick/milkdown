import type { Node } from '@milkdown/prose/model';
declare type ThemeRenderer = {
    dom: HTMLElement;
    contentDOM: HTMLElement;
    onUpdate: (node: Node) => void;
};
declare type ThemeOptions = {
    editable: () => boolean;
    onChange: (selected: boolean) => void;
};
export declare const ThemeTaskListItem: import("../../manager").ThemeSliceKey<ThemeRenderer, ThemeOptions, "task-list-item">;
export declare type ThemeTaskListItemType = typeof ThemeTaskListItem;
export {};
//# sourceMappingURL=task-list-item.d.ts.map