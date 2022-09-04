import { Node } from '@milkdown/prose/model';
import { EditorState, PluginKey, Transaction } from '@milkdown/prose/state';
export declare const fixTablesKey: PluginKey<any>;
export declare function fixTables(state: EditorState, oldState: EditorState): Transaction | undefined;
export declare function fixTable(state: EditorState, table: Node, tablePos: number, tr?: Transaction): Transaction | undefined;
//# sourceMappingURL=fix-tables.d.ts.map