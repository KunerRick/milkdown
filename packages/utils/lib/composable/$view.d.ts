import { Ctx, MilkdownPlugin } from '@milkdown/core';
import { MarkViewConstructor, NodeViewConstructor } from '@milkdown/prose/view';
import { $Mark, $Node } from '.';
export declare type $View<T extends $Node | $Mark, V extends NodeViewConstructor | MarkViewConstructor> = MilkdownPlugin & {
    view: V;
    type: T;
};
export declare const $view: <T extends $Mark | $Node, V extends NodeViewConstructor | MarkViewConstructor = T extends $Node ? NodeViewConstructor : T extends $Mark ? MarkViewConstructor : NodeViewConstructor | MarkViewConstructor>(type: T, view: (ctx: Ctx) => V) => $View<T, V>;
export declare const $viewAsync: <T extends $Mark | $Node, V extends NodeViewConstructor | MarkViewConstructor = T extends $Node ? NodeViewConstructor : T extends $Mark ? MarkViewConstructor : NodeViewConstructor | MarkViewConstructor>(type: T, view: (ctx: Ctx) => Promise<V>, timerName?: string) => MilkdownPlugin & {
    view: V;
    type: T;
} & {
    timer: import("@milkdown/core").Timer;
};
//# sourceMappingURL=$view.d.ts.map