import { Emotion, ThemeManager } from '@milkdown/core';
export declare const font: {
    typography: string[];
    code: string[];
};
export declare const size: {
    radius: string;
    lineWidth: string;
};
export declare const createTheme: (isDarkMode: boolean) => (emotion: Emotion, manager: ThemeManager) => void;
export declare const getNord: (isDarkMode?: boolean) => import("@milkdown/core").ThemePlugin;
export declare const nordDark: import("@milkdown/core").ThemePlugin;
export declare const nordLight: import("@milkdown/core").ThemePlugin;
export declare const nord: import("@milkdown/core").ThemePlugin;
export { color, darkColor, lightColor } from './nord';
//# sourceMappingURL=index.d.ts.map