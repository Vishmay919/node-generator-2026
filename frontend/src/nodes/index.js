import { InputNode } from './InputNode';
import { OutputNode } from './OutputNode';
import { LLMNode } from './LLMNode';
import { TextNode } from './TextNode';
import { FilterNode } from './FilterNode';
import { MergeNode } from './MergeNode';
import { NoteNode } from './NoteNode';
import { APINode } from './APINode';
import { TimerNode } from './TimerNode';
import { NODE_CONFIGS } from './nodeConfigs';
import { validateNodeConfig } from './validators';

const componentMap = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  filter: FilterNode,
  merge: MergeNode,
  note: NoteNode,
  api: APINode,
  timer: TimerNode,
};

const buildValidNodeRegistry = () => {
  const nodeTypes = {};
  const toolbarNodes = [];
  const configErrors = [];

  for (const [type, config] of Object.entries(NODE_CONFIGS)) {
    const error = validateNodeConfig(type, config);
    if (error) {
      configErrors.push({ type, message: error });
      console.error(`[NODE_CONFIGS] ${error}`);
    } else {
      const component = componentMap[type];
      if (component) {
        nodeTypes[type] = component;
        toolbarNodes.push({ type, label: config.label });
      } else {
        configErrors.push({ type, message: `"${type}": no component registered` });
        console.error(`[NODE_CONFIGS] "${type}": no component registered`);
      }
    }
  }

  return { nodeTypes, toolbarNodes, configErrors };
};

export const { nodeTypes, toolbarNodes, configErrors } = buildValidNodeRegistry();
