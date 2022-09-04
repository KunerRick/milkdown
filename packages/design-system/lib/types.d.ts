export declare type Color = 'neutral' | 'solid' | 'shadow' | 'primary' | 'secondary' | 'line' | 'background' | 'surface';
export declare type Font = 'typography' | 'code';
export declare type Size = 'radius' | 'lineWidth';
export declare type KnownIcon = 'h1' | 'h2' | 'h3' | 'text' | 'loading' | 'quote' | 'code' | 'table' | 'divider' | 'image' | 'brokenImage' | 'bulletList' | 'orderedList' | 'taskList' | 'bold' | 'italic' | 'inlineCode' | 'strikeThrough' | 'link' | 'leftArrow' | 'rightArrow' | 'upArrow' | 'downArrow' | 'alignLeft' | 'alignRight' | 'alignCenter' | 'delete' | 'select' | 'unchecked' | 'checked' | 'undo' | 'redo' | 'liftList' | 'sinkList' | 'dragHandle';
export declare type Icon = KnownIcon | (string & {});
export declare type IconValue = {
    dom: HTMLElement;
    label: string;
};
//# sourceMappingURL=types.d.ts.map