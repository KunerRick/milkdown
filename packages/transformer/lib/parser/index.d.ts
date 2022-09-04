import type { Node, Schema } from '@milkdown/prose/model';
import type { RemarkParser } from '../utility';
import type { InnerParserSpecMap } from './types';
export declare const createParser: (schema: Schema, specMap: InnerParserSpecMap, remark: RemarkParser) => (text: string) => Node;
export * from './types';
//# sourceMappingURL=index.d.ts.map