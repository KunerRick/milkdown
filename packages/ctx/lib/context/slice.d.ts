export declare type $Slice<T = unknown, N extends string = string> = {
    readonly id: symbol;
    readonly name: N;
    readonly set: (value: T) => void;
    readonly get: () => T;
    readonly update: (updater: (prev: T) => T) => void;
};
export declare type SliceMap = Map<symbol, $Slice>;
export declare type Slice<T, N extends string = string> = {
    readonly id: symbol;
    readonly sliceName: N;
    readonly _typeInfo: () => T;
    (container: SliceMap, resetValue?: T): $Slice<T>;
};
export declare const createSlice: <T, N extends string = string>(value: T, name: N) => Slice<T, N>;
//# sourceMappingURL=slice.d.ts.map