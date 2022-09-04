import { MilkdownPlugin, Timer } from '@milkdown/ctx';
import { Emotion, ThemeManager } from '@milkdown/design-system';
export declare const themeTimerCtx: import("@milkdown/ctx").Slice<Timer[], "themeTimer">;
export declare const ThemeEnvironmentReady: Timer;
export declare const ThemeReady: Timer;
export declare const themeEnvironment: MilkdownPlugin;
export declare type CreateThemePack = (emotion: Emotion, manager: ThemeManager) => void;
export declare type ThemePlugin = MilkdownPlugin & {
    override: (overrideFn: CreateThemePack) => ThemePlugin;
};
export declare const themeFactory: (createThemePack?: CreateThemePack) => ThemePlugin;
//# sourceMappingURL=theme.d.ts.map