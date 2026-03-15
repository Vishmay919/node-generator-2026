export const NODE_CONFIGS = {
  customInput: {
    label: 'Input',
    handles: [
      { type: 'source', position: 'right', idSuffix: 'value' },
    ],
  },
  llm: {
    label: 'LLM',
    handles: [
      { type: 'target', position: 'left', idSuffix: 'system', style: { top: '33.33%' } },
      { type: 'target', position: 'left', idSuffix: 'prompt', style: { top: '66.66%' } },
      { type: 'source', position: 'right', idSuffix: 'response' },
    ],
  },
  customOutput: {
    label: 'Output',
    handles: [
      { type: 'target', position: 'left', idSuffix: 'value' },
    ],
  },
  text: {
    label: 'Text',
    handles: [
      { type: 'source', position: 'right', idSuffix: 'output' },
    ],
  },
  filter: {
    label: 'Filter',
    handles: [
      { type: 'target', position: 'left', idSuffix: 'input' },
      { type: 'source', position: 'right', idSuffix: 'pass', style: { top: '33.33%' } },
      { type: 'source', position: 'right', idSuffix: 'reject', style: { top: '66.66%' } },
    ],
  },
  merge: {
    label: 'Merge',
    handles: [
      { type: 'target', position: 'left', idSuffix: 'inputA', style: { top: '33.33%' } },
      { type: 'target', position: 'left', idSuffix: 'inputB', style: { top: '66.66%' } },
      { type: 'source', position: 'right', idSuffix: 'output' },
    ],
  },
  note: {
    label: 'Note',
    handles: [],
  },
  api: {
    label: 'API',
    handles: [
      { type: 'target', position: 'left', idSuffix: 'request' },
      { type: 'source', position: 'right', idSuffix: 'response', style: { top: '33.33%' } },
      { type: 'source', position: 'right', idSuffix: 'error', style: { top: '66.66%' } },
    ],
  },
  timer: {
    label: 'Timer',
    handles: [
      { type: 'source', position: 'right', idSuffix: 'tick' },
    ],
  },
};
