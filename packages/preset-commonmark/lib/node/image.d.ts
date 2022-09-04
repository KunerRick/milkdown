export declare const ModifyImage: import("@milkdown/core").CmdKey<string>;
export declare const InsertImage: import("@milkdown/core").CmdKey<string>;
export declare type ImageOptions = {
    isBlock: boolean;
    placeholder: string;
    input: {
        placeholder: string;
        buttonText?: string;
    };
};
export declare const image: import("@milkdown/utils").NodeCreator<string, ImageOptions>;
//# sourceMappingURL=image.d.ts.map