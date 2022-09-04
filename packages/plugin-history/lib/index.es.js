import { createCmdKey as e, createCmd as t } from "@milkdown/core";
import { undo as r, redo as o, history as m } from "@milkdown/prose/history";
import { keymap as i } from "@milkdown/prose/keymap";
import { createPlugin as s, AtomList as d } from "@milkdown/utils";
const n = e("Undo"), c = e("Redo"), a = s(() => ({
  commands: () => [t(n, () => r), t(c, () => o)],
  prosePlugins: () => [
    m(),
    i({
      "Mod-z": r,
      "Mod-y": o,
      "Shift-Mod-z": o
    })
  ]
})), u = d.create([a()]);
export {
  c as Redo,
  n as Undo,
  u as history,
  a as historyPlugin
};
//# sourceMappingURL=index.es.js.map
