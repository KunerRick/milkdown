import { Slice } from '@milkdown/prose/model';
import { Plugin, PluginKey } from '@milkdown/prose/state';
import { EditorView } from '@milkdown/prose/view';
export declare const tableEditingKey: PluginKey<any>;
export declare function handlePaste(view: EditorView, _: Event, slice: Slice): boolean;
export declare function tableEditing({ allowTableNodeSelection }?: {
    allowTableNodeSelection?: boolean | undefined;
}): Plugin<null>;
//# sourceMappingURL=table-editing.d.ts.map