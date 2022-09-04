import type { Node } from '@milkdown/prose/model';
declare type ThemeOptions = {
    isBlock: boolean;
    placeholder: string;
    onError?: (img: HTMLImageElement) => void;
    onLoad?: (img: HTMLImageElement) => void;
};
declare type ThemeRenderer = {
    dom: HTMLElement;
    onUpdate: (node: Node) => void;
};
export declare const ThemeImage: import("../../manager").ThemeSliceKey<ThemeRenderer, ThemeOptions, "image">;
export declare type ThemeImageType = typeof ThemeImage;
export {};
//# sourceMappingURL=image.d.ts.map