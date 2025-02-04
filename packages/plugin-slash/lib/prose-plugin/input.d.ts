import { EditorView } from '@milkdown/prose/view';
import { Status } from './status';
export declare const createMouseManager: () => {
    isLock: () => boolean;
    lock: () => void;
    unlock: () => void;
};
export declare type MouseManager = ReturnType<typeof createMouseManager>;
export declare const handleMouseMove: (mouseManager: MouseManager) => () => void;
export declare const handleMouseEnter: (status: Status, mouseManager: MouseManager) => (e: MouseEvent) => void;
export declare const handleMouseLeave: () => (e: MouseEvent) => void;
export declare const handleClick: (status: Status, view: EditorView, dropdownElement: HTMLElement) => (e: Event) => void;
export declare const handleKeydown: (status: Status, view: EditorView, dropdownElement: HTMLElement, mouseManager: MouseManager) => (e: Event) => void;
//# sourceMappingURL=input.d.ts.map