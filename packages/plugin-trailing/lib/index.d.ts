import { Node } from '@milkdown/prose/model';
import { EditorState, PluginKey } from '@milkdown/prose/state';
import { AtomList, AtomPlugin } from '@milkdown/utils';
export declare type ShouldAppend = (lastNode: Node | null, state: EditorState) => boolean;
export declare type Options = {
    shouldAppend: ShouldAppend;
    getNode: (state: EditorState) => Node;
};
export declare const trailingPluginKey: PluginKey<any>;
export declare const trailingPlugin: import("@milkdown/utils").WithExtend<string, Options, import("@milkdown/utils").TypeMapping<string, string>, import("@milkdown/utils").PluginRest<string, string>>;
export declare const trailing: AtomList<AtomPlugin>;
//# sourceMappingURL=index.d.ts.map