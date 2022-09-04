import { MilkdownPlugin } from '@milkdown/core';
import { AddMetadata, Metadata } from '../types';
export declare type MilkdownPluginWithMetadata = MilkdownPlugin & Metadata;
export declare type AtomPlugin = MilkdownPlugin | MilkdownPluginWithMetadata;
export declare class AtomList<T extends AtomPlugin = AtomPlugin> extends Array<T> {
    private findThenRun;
    configure<U extends AddMetadata>(target: U, config: Parameters<U>[0]): this;
    replace<U extends AddMetadata, Next extends AtomPlugin>(target: U, next: Next): this;
    remove<U extends AddMetadata>(target: U): this;
    headless(): this;
    static create<T extends AtomPlugin = AtomPlugin>(from: T[]): AtomList<T>;
}
//# sourceMappingURL=atom-list.d.ts.map