import { EditorState } from '@milkdown/prose/state';
import type { EditorView } from '@milkdown/prose/view';
import { ThemeUtils } from '@milkdown/utils';
import type { ButtonList } from './item';
export declare const createPlugin: (buttonMap: ButtonList, utils: ThemeUtils, bottom: boolean, containerClassName: string) => {
    recreate: (editorView: EditorView) => void;
    update: (view: EditorView, prevState?: EditorState) => void;
    destroy: () => void;
    render: (editorView: EditorView) => void;
    setHide: (isTyping: boolean) => void;
};
//# sourceMappingURL=selection-marks-tooltip.d.ts.map