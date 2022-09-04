import type { EditorView } from '@milkdown/prose/view';
import type { ThemeUtils } from '@milkdown/utils';
import type { ButtonList } from '../item';
declare type Tooltip = {
    dom: HTMLDivElement;
    render: (editorView: EditorView) => void;
};
export declare const createTooltip: (buttonMap: ButtonList, utils: ThemeUtils, className: string) => Tooltip;
export {};
//# sourceMappingURL=create-tooltip.d.ts.map