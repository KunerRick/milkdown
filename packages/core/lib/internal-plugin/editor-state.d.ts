import { MilkdownPlugin, Timer } from '@milkdown/ctx';
import { Node, Schema } from '@milkdown/prose/model';
import { EditorState } from '@milkdown/prose/state';
import { JSONRecord } from '@milkdown/transformer';
import { Parser } from './parser';
export declare type DefaultValue = string | {
    type: 'html';
    dom: HTMLElement;
} | {
    type: 'json';
    value: JSONRecord;
};
declare type StateOptions = Parameters<typeof EditorState.create>[0];
declare type StateOptionsOverride = (prev: StateOptions) => StateOptions;
export declare const defaultValueCtx: import("@milkdown/ctx").Slice<DefaultValue, "defaultValue">;
export declare const editorStateCtx: import("@milkdown/ctx").Slice<EditorState, "editorState">;
export declare const editorStateOptionsCtx: import("@milkdown/ctx").Slice<StateOptionsOverride, string>;
export declare const editorStateTimerCtx: import("@milkdown/ctx").Slice<Timer[], "editorStateTimer">;
export declare const EditorStateReady: Timer;
export declare const getDoc: (defaultValue: DefaultValue, parser: Parser, schema: Schema) => Node | undefined;
export declare const editorState: MilkdownPlugin;
export {};
//# sourceMappingURL=editor-state.d.ts.map