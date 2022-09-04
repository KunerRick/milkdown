import { EditorState } from '@milkdown/prose/state';
import { DecorationSet, EditorView } from '@milkdown/prose/view';
import { ThemeUtils } from '@milkdown/utils';
import type { Status } from './status';
export declare type Props = ReturnType<typeof createProps>;
export declare const createProps: (status: Status, utils: ThemeUtils) => {
    handleKeyDown: (_: EditorView, event: Event) => boolean;
    decorations: (state: EditorState) => DecorationSet | null;
};
//# sourceMappingURL=props.d.ts.map