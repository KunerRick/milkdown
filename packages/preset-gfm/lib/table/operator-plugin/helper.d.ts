import { EditorView } from '@milkdown/prose/view';
import { CellSelection } from '../plugin';
import { Item } from './actions';
export declare const getCellSelection: (view: EditorView) => CellSelection;
export declare const isFirstRowSelected: (selection: CellSelection) => boolean;
export declare const calculateItem: (actions: Record<string, Item>, view: EditorView) => void;
//# sourceMappingURL=helper.d.ts.map