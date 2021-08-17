import { css } from '@emotion/css';
import { createCmd, createCmdKey } from '@milkdown/core';
import { createMark, createShortcut, markRule } from '@milkdown/utils';
import { toggleMark } from 'prosemirror-commands';
import { SupportedKeys } from '../supported-keys';

type Keys = SupportedKeys['CodeInline'];
const id = 'code_inline';

export const ToggleInlineCode = createCmdKey();

export const codeInline = createMark<Keys>((options, utils) => {
    const { palette } = utils.themeTool;
    const style = options?.headless
        ? null
        : css`
              background-color: ${palette('neutral')};
              color: ${palette('background')};
              border-radius: ${utils.themeTool.size.radius};
              font-weight: 500;
              font-family: ${utils.themeTool.font.fontCode};
              padding: 0 0.2rem;
          `;
    return {
        id,
        schema: {
            excludes: '_',
            parseDOM: [{ tag: 'code' }],
            toDOM: (mark) => ['code', { class: utils.getClassName(mark.attrs, 'code-inline', style) }],
        },
        parser: {
            match: (node) => node.type === 'inlineCode',
            runner: (state, node, markType) => {
                state.openMark(markType);
                state.addText(node.value as string);
                state.closeMark(markType);
            },
        },
        serializer: {
            match: (mark) => mark.type.name === id,
            runner: (state, _, node) => {
                state.addNode('inlineCode', undefined, node.text || '');

                return true;
            },
        },
        inputRules: (markType) => [markRule(/(?:^|[^`])(`([^`]+)`)$/, markType)],
        commands: (markType) => [createCmd(ToggleInlineCode, () => toggleMark(markType))],
        shortcuts: {
            [SupportedKeys.CodeInline]: createShortcut(ToggleInlineCode, 'Mod-e'),
        },
    };
});
