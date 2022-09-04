export declare const SupportedKeys: {
    readonly NextCell: "NextCell";
    readonly PrevCell: "PrevCell";
    readonly ExitTable: "ExitTable";
};
export declare type SupportedKeys = typeof SupportedKeys;
export declare const PrevCell: import("@milkdown/core").CmdKey<undefined>;
export declare const NextCell: import("@milkdown/core").CmdKey<undefined>;
export declare const BreakTable: import("@milkdown/core").CmdKey<undefined>;
export declare const InsertTable: import("@milkdown/core").CmdKey<undefined>;
export declare const table: import("@milkdown/utils").WithExtend<"NextCell" | "PrevCell" | "ExitTable", Record<string, unknown>, import("@milkdown/utils").TypeMapping<"table" | "table_row" | "table_cell" | "table_header", string>, import("@milkdown/utils").PluginRest<"table" | "table_row" | "table_cell" | "table_header", string>>;
//# sourceMappingURL=index.d.ts.map