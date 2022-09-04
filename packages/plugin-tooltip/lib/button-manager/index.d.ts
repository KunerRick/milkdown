import type { EditorView } from '@milkdown/prose/view';
import type { ThemeUtils } from '@milkdown/utils';
import type { ButtonList } from '../item';
export declare const createButtonManager: (buttons: ButtonList, utils: ThemeUtils, bottom: boolean, containerClassName: string) => {
    destroy: () => void;
    hide: () => void;
    update: (editorView: EditorView) => void;
    render: (editorView: EditorView) => void;
};
//# sourceMappingURL=index.d.ts.map