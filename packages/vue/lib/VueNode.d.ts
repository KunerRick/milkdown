import { Ctx } from '@milkdown/core';
import { Mark, Node } from '@milkdown/prose/model';
import { Decoration, EditorView } from '@milkdown/prose/view';
import { InjectionKey, Ref } from 'vue';
export declare type NodeContext<T extends Node | Mark = Node | Mark> = {
    ctx: Ctx;
    node: Ref<T>;
    view: EditorView;
    getPos: T extends Mark ? boolean : T extends Node ? () => number : boolean | (() => number);
    decorations: Ref<readonly Decoration[]>;
};
export declare const nodeMetadata: InjectionKey<NodeContext>;
export declare type UseNodeCtx = <T extends Node | Mark = Node | Mark>() => NodeContext<T>;
export declare const useNodeCtx: UseNodeCtx;
export declare const VueNodeContainer: import("vue").DefineComponent<NodeContext<Node | Mark> & {
    as: string;
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<NodeContext<Node | Mark> & {
    as: string;
}>, {}>;
export declare const Content: import("vue").DefineComponent<{
    isInline?: boolean | undefined;
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    isInline?: boolean | undefined;
}>, {}>;
//# sourceMappingURL=VueNode.d.ts.map