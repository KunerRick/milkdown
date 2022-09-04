import { Plugin, PluginKey, Transaction } from '@milkdown/prose/state';
import { TableView } from './table-view';
export declare const key: PluginKey<any>;
export declare function columnResizing({ handleWidth, cellMinWidth, View, lastColumnResizable, }?: {
    handleWidth?: number | undefined;
    cellMinWidth?: number | undefined;
    View?: typeof TableView | undefined;
    lastColumnResizable?: boolean | undefined;
}): Plugin<ResizeState>;
declare class ResizeState {
    activeHandle: number;
    dragging: null | boolean;
    constructor(activeHandle: number, dragging: null | boolean);
    apply(this: ResizeState, tr: Transaction): ResizeState;
}
export {};
//# sourceMappingURL=column-resizing.d.ts.map