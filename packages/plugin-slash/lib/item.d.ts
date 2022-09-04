import type { Command } from '@milkdown/prose/state';
export declare type Action = {
    id: string;
    $: HTMLElement;
    command: Command;
};
export declare type WrappedAction = Pick<Action, 'id'> & {
    command: () => void;
    dom: HTMLElement;
};
export declare const transformAction: (action: WrappedAction) => Action;
//# sourceMappingURL=item.d.ts.map