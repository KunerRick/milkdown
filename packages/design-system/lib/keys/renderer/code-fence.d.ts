import type { Node } from '@milkdown/prose/model';
declare type ThemeOptions = {
    onSelectLanguage: (language: string) => void;
    editable: () => boolean;
    onFocus: () => void;
    onBlur: () => void;
    languageList: string[];
};
declare type ThemeRenderer = {
    dom: HTMLElement;
    contentDOM: HTMLElement;
    onUpdate: (node: Node) => void;
    onDestroy: () => void;
};
export declare const ThemeCodeFence: import("../../manager").ThemeSliceKey<ThemeRenderer, ThemeOptions, "code-fence">;
export declare type ThemeCodeFenceType = typeof ThemeCodeFence;
export {};
//# sourceMappingURL=code-fence.d.ts.map