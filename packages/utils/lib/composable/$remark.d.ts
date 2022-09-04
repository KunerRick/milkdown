import { Ctx, MilkdownPlugin, RemarkPlugin } from '@milkdown/core';
export declare type $Remark = MilkdownPlugin & {
    plugin: RemarkPlugin;
};
export declare const $remark: (remark: (ctx: Ctx) => RemarkPlugin) => $Remark;
export declare const $remarkAsync: (remark: (ctx: Ctx) => Promise<RemarkPlugin>, timerName?: string) => MilkdownPlugin & {
    plugin: RemarkPlugin;
} & {
    timer: import("@milkdown/core").Timer;
};
//# sourceMappingURL=$remark.d.ts.map