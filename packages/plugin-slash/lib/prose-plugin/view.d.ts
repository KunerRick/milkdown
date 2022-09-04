import { EditorView } from '@milkdown/prose/view';
import { ThemeUtils } from '@milkdown/utils';
import { Status } from './status';
export declare const createView: (status: Status, view: EditorView, utils: ThemeUtils, className: string) => {
    update?: undefined;
    destroy?: undefined;
} | {
    update: (view: EditorView) => void;
    destroy: () => void;
};
//# sourceMappingURL=view.d.ts.map