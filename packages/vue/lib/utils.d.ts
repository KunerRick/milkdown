import { DefineComponent } from 'vue';
declare type Prepend<T, U extends unknown[]> = [T, ...U];
declare type Keys_<T extends Record<string, unknown>, U extends PropertyKey[]> = {
    [P in keyof T]: Record<string, unknown> extends Omit<T, P> ? [P] : Prepend<P, Keys_<Omit<T, P>, U>>;
}[keyof T];
export declare type Keys<T extends Record<string, unknown>> = Keys_<T, []>;
export declare type AnyVueComponent = DefineComponent<any, any, any, any, any, any, any, any, any, any, any, any>;
export {};
//# sourceMappingURL=utils.d.ts.map