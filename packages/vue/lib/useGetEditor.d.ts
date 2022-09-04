import { Ctx } from '@milkdown/core';
import { MarkViewConstructor, NodeViewConstructor } from '@milkdown/prose/view';
import { DefineComponent, InjectionKey } from 'vue';
import { GetEditor, RenderOptions } from './types';
export declare const rendererKey: InjectionKey<(component: DefineComponent, options?: RenderOptions) => (ctx: Ctx) => NodeViewConstructor | MarkViewConstructor>;
export declare const useGetEditor: (getEditor: GetEditor) => void;
//# sourceMappingURL=useGetEditor.d.ts.map