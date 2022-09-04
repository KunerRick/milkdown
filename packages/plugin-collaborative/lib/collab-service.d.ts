import { Ctx, DefaultValue } from '@milkdown/core';
import { Node } from '@milkdown/prose/model';
import { PluginKey } from '@milkdown/prose/state';
import type { DecorationAttrs } from '@milkdown/prose/view';
import { Awareness } from 'y-protocols/awareness';
import { Doc, PermanentUserData } from 'yjs';
export declare type ColorDef = {
    light: string;
    dark: string;
};
export declare type YSyncOpts = {
    colors?: Array<ColorDef>;
    colorMapping?: Map<string, ColorDef>;
    permanentUserData?: PermanentUserData | null;
};
export declare type yCursorOpts = {
    cursorBuilder?: (arg: any) => HTMLElement;
    selectionBuilder?: (arg: any) => DecorationAttrs;
    getSelection?: (arg: any) => any;
};
export declare type yUndoOpts = {
    protectedNodes?: Set<string>;
    trackedOrigins?: any[];
    undoManager?: any;
};
export declare type Options = {
    ySyncOpts?: YSyncOpts;
    yCursorOpts?: yCursorOpts;
    yCursorStateField?: string;
    yUndoOpts?: yUndoOpts;
};
export declare const CollabKeymapPluginKey: PluginKey<any>;
export declare class CollabService {
    #private;
    bindCtx(ctx: Ctx): this;
    bindDoc(doc: Doc): this;
    setOptions(options: Options): this;
    mergeOptions(options: Partial<Options>): this;
    setAwareness(awareness: Awareness): this;
    applyTemplate(template: DefaultValue, condition?: (yDocNode: Node, templateNode: Node) => boolean): this;
    connect(): this | undefined;
    disconnect(): this;
}
//# sourceMappingURL=collab-service.d.ts.map