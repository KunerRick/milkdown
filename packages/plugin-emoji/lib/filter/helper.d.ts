import { EditorView } from '@milkdown/prose/view';
import type { Emoji } from 'node-emoji';
export declare const checkTrigger: (view: EditorView, from: number, to: number, text: string, setRange: (from: number, to: number) => void, setSearch: (words: string) => void) => boolean;
export declare const renderDropdownList: (list: Emoji[], dropDown: HTMLElement, $active: HTMLElement | null, onConfirm: () => void, setActive: (active: HTMLElement | null) => void) => void;
//# sourceMappingURL=helper.d.ts.map