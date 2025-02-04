import { Ctx, MilkdownPlugin } from '@milkdown/core';
import { Node as ProseNode } from '@milkdown/prose/model';
import { PluginKey } from '@milkdown/prose/state';
declare class ListenerManager {
    private beforeMountedListeners;
    private mountedListeners;
    private updatedListeners;
    private markdownUpdatedListeners;
    private blurListeners;
    private focusListeners;
    private destroyListeners;
    get listeners(): {
        beforeMounted: ((ctx: Ctx) => void)[];
        mounted: ((ctx: Ctx) => void)[];
        updated: ((ctx: Ctx, doc: ProseNode, prevDoc: ProseNode | null) => void)[];
        markdownUpdated: ((ctx: Ctx, markdown: string, prevMarkdown: string | null) => void)[];
        blur: ((ctx: Ctx) => void)[];
        focus: ((ctx: Ctx) => void)[];
        destroy: ((ctx: Ctx) => void)[];
    };
    beforeMount: (fn: (ctx: Ctx) => void) => this;
    mounted: (fn: (ctx: Ctx) => void) => this;
    updated: (fn: (ctx: Ctx, doc: ProseNode, prevDoc: ProseNode | null) => void) => this;
    markdownUpdated(fn: (ctx: Ctx, markdown: string, prevMarkdown: string | null) => void): this;
    blur(fn: (ctx: Ctx) => void): this;
    focus(fn: (ctx: Ctx) => void): this;
    destroy(fn: (ctx: Ctx) => void): this;
}
export declare const listenerCtx: import("@milkdown/core").Slice<ListenerManager, string>;
export declare const key: PluginKey<any>;
export declare const listener: MilkdownPlugin;
export {};
//# sourceMappingURL=index.d.ts.map