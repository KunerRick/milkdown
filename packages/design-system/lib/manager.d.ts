import { Ctx, MilkdownPlugin, Slice } from '@milkdown/ctx';
export declare type ThemeSlice<Ret = unknown, T = undefined> = (payload: T) => Ret | undefined;
export declare type ThemeSliceKey<Ret = unknown, T = undefined, K extends string = string> = Slice<ThemeSlice<Ret, T>, K>;
export declare const createThemeSliceKey: <Ret, T = undefined, K extends string = string>(key: K) => ThemeSliceKey<Ret, T, K>;
declare type GetRet<Key extends ThemeSliceKey> = Key extends ThemeSliceKey<infer Ret, any, any> ? Ret : unknown;
declare type GetPayload<Key extends ThemeSliceKey> = Key extends ThemeSliceKey<any, infer T, any> ? T : undefined;
declare type GetKey<Key extends ThemeSliceKey> = Key extends ThemeSliceKey<any, any, infer T> ? T : undefined;
export declare class ThemeManager {
    #private;
    inject<Ret = unknown, T = undefined>(key: ThemeSliceKey<Ret, T>): void;
    has(key: ThemeSliceKey | string): boolean;
    set<Key extends ThemeSliceKey<any, any, any>, Ret extends GetRet<Key> = GetRet<Key>, Payload extends GetPayload<Key> = GetPayload<Key>, K extends GetKey<Key> = GetKey<Key>>(key: Key | (K & string), themeSlice: ThemeSlice<Ret, Payload>): void;
    set<Ret = unknown, T = undefined>(key: ThemeSliceKey<Ret, T> | string, themeSlice: ThemeSlice<Ret, T>): void;
    get<Key extends ThemeSliceKey<any, any, any>, Ret extends GetRet<Key> = GetRet<Key>, Payload extends GetPayload<Key> = GetPayload<Key>, K extends GetKey<Key> = GetKey<Key>>(key: Key | (K & string), payload: Payload): Ret;
    onFlush(fn: () => void, callWhenRegister?: boolean): void;
    switch(ctx: Ctx, theme: MilkdownPlugin): Promise<void>;
    flush(ctx: Ctx): void;
    setExecutor(executor: () => void): void;
    runExecutor(): void;
}
export declare const themeManagerCtx: Slice<ThemeManager, "themeManager">;
export declare const createThemeManager: () => ThemeManager;
export {};
//# sourceMappingURL=manager.d.ts.map