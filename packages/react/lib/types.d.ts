import { Ctx, Editor } from '@milkdown/core';
import { Mark, Node } from '@milkdown/prose/model';
import { MarkViewConstructor, NodeViewConstructor } from '@milkdown/prose/view';
import { MutableRefObject, ReactNode } from 'react';
import { RenderOptions } from './ReactNodeView';
export declare type RenderReact<U = never> = <T>(Component: React.FC<{
    children: ReactNode;
}>, renderOptions?: RenderOptions) => (ctx: Ctx) => U extends never ? T extends Node ? NodeViewConstructor : T extends Mark ? MarkViewConstructor : NodeViewConstructor & MarkViewConstructor : U extends Node ? NodeViewConstructor : U extends Mark ? MarkViewConstructor : NodeViewConstructor & MarkViewConstructor;
export declare type GetEditor = (container: HTMLElement, renderReact: RenderReact) => Editor | undefined;
export declare type UseEditorReturn = {
    readonly loading: boolean;
    readonly getInstance: () => Editor | undefined;
    readonly getDom: () => HTMLDivElement | undefined;
    readonly editor: EditorInfo;
};
export declare type EditorInfoCtx = {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    dom: MutableRefObject<HTMLDivElement | undefined>;
    editor: MutableRefObject<Editor | undefined>;
};
export declare type EditorInfo = {
    getEditorCallback: GetEditor;
} & EditorInfoCtx;
export declare type EditorRef = {
    get: () => Editor | undefined;
    dom: () => HTMLDivElement | undefined;
};
//# sourceMappingURL=types.d.ts.map