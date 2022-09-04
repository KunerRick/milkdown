import { Ctx, MilkdownPlugin } from '@milkdown/core';
import { InputRule } from '@milkdown/prose/inputrules';
export declare type $InputRule = MilkdownPlugin & {
    inputRule: InputRule;
};
export declare const $inputRule: (inputRule: (ctx: Ctx) => InputRule) => $InputRule;
export declare const $inputRuleAsync: (inputRule: (ctx: Ctx) => Promise<InputRule>, timerName?: string) => MilkdownPlugin & {
    inputRule: InputRule;
} & {
    timer: import("@milkdown/core").Timer;
};
//# sourceMappingURL=$inputRule.d.ts.map