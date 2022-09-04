import { $Slice, Slice } from './slice';
export declare type Container = {
    readonly getSlice: <T, N extends string = string>(slice: Slice<T, N> | N) => $Slice<T, N>;
    readonly sliceMap: Map<symbol, $Slice>;
};
export declare const createContainer: () => Container;
//# sourceMappingURL=container.d.ts.map