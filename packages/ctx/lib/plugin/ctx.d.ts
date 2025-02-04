import type { $Slice, Container, Slice } from '../context';
import type { Clock, Timer } from '../timing';
/**
 * The ctx object that can be accessed in plugin and action.
 */
export declare class Ctx {
    #private;
    constructor(container: Container, clock: Clock);
    /**
     * Get the slice instance.
     *
     * @param slice - The slice or slice name that needs to be used.
     * @returns The slice instance.
     */
    readonly use: <T, N extends string = string>(slice: N | Slice<T, N>) => $Slice<T, N>;
    /**
     * Get the slice value.
     *
     * @param slice - The slice needs to be used.
     * @returns The slice value.
     */
    readonly get: <T, N extends string>(slice: Slice<T, N>) => T;
    /**
     * Set the slice value.
     *
     * @param slice - The slice needs to be used.
     * @param value - The default value.
     * @returns
     */
    readonly set: <T, N extends string>(slice: Slice<T, N>, value: T) => void;
    /**
     * Update the slice by its current value.
     *
     * @example
     * ```
     * update(NumberSlice, x => x + 1);
     * ```
     *
     * @param slice - The slice needs to be used.
     * @param updater - The update function, gets current value as parameter and returns new value.
     * @returns
     */
    readonly update: <T, N extends string>(slice: Slice<T, N>, updater: (prev: T) => T) => void;
    /**
     * Get the timer instance.
     *
     * @param timer - The timer needs to be used.
     * @returns The timer instance.
     */
    readonly timing: (timer: Timer) => import("../timing").Timing;
    /**
     * Wait for a timer to finish.
     *
     * @param timer - The timer needs to be used.
     * @returns A promise that will be resolved when timer finish.
     */
    readonly wait: (timer: Timer) => Promise<void>;
    /**
     * Finish a timer
     *
     * @param timer - The timer needs to be finished.
     * @returns
     */
    readonly done: (timer: Timer) => void;
    /**
     * Wait for a list of timers in target slice to be all finished.
     *
     * @param slice - The slice that holds a list of timer.
     * @returns A promise that will be resolved when all timers finish.
     */
    readonly waitTimers: (slice: Slice<Timer[]>) => Promise<void>;
}
//# sourceMappingURL=ctx.d.ts.map