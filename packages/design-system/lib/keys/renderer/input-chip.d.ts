import type { EditorView } from '@milkdown/prose/view';
declare type InputChipRenderer = {
    dom: HTMLElement;
    update: (value: string) => void;
    init: (editorView: EditorView) => void;
    show: (editorView: EditorView) => void;
    hide: () => void;
    destroy: () => void;
};
declare type InputChipOptions = {
    width?: string;
    isBindMode?: boolean;
    buttonText?: string;
    placeholder?: string;
    calculatePosition?: (editorView: EditorView, dom: HTMLElement) => void;
    onUpdate: (value: string) => void;
};
export declare const ThemeInputChip: import("../../manager").ThemeSliceKey<InputChipRenderer, InputChipOptions, "input-chip">;
export declare type ThemeInputChipType = typeof ThemeInputChip;
export {};
//# sourceMappingURL=input-chip.d.ts.map