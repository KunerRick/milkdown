import { Fragment, Node, Schema } from '@milkdown/prose/model';
import { PluginKey } from '@milkdown/prose/state';
export declare type Uploader = (files: FileList, schema: Schema) => Promise<Fragment | Node | Node[]>;
export declare type Options = {
    uploader: Uploader;
    enableHtmlFileUploader: boolean;
};
export declare const key: PluginKey<any>;
export declare const uploadPlugin: import("@milkdown/utils").WithExtend<string, Options, import("@milkdown/utils").TypeMapping<string, string>, import("@milkdown/utils").PluginRest<string, string>>;
//# sourceMappingURL=upload.d.ts.map