import type { ThemeManager } from './manager';
import type { Color } from './types';
declare type RGB = [number, number, number];
export declare const hex2rgb: (hex: string) => RGB | null;
export declare const getPalette: (manager: ThemeManager) => (color: Color, opacity?: number) => string;
export {};
//# sourceMappingURL=utils.d.ts.map