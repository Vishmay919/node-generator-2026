import { Position } from 'reactflow';

export const buildHandleId = (nodeId, suffix) => {
  if (!nodeId || !suffix) {
    throw new Error(`[buildHandleId] Both nodeId and suffix must be non-empty. Got: nodeId="${nodeId}", suffix="${suffix}"`);
  }
  return `${nodeId}-${suffix}`;
};

export const resolvePosition = (pos) => {
  if (pos === 'left') return Position.Left;
  if (pos === 'right') return Position.Right;
  throw new Error(`[resolvePosition] Unknown position "${pos}". Expected "left" or "right".`);
};

const JS_VAR_NAME = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
/** Parse "{{ variableName }}" from text; return unique valid JS variable names. */
export const parseTextVariables = (text) => {
  if (typeof text !== 'string') return [];
  const set = new Set();
  let m;
  const re = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  while ((m = re.exec(text)) !== null) {
    if (JS_VAR_NAME.test(m[1])) set.add(m[1]);
  }
  return [...set];
};

// Prefix for Text node target handles so the idSuffix never collides with the
// source handle's idSuffix "output" (e.g. if the user writes {{output}}).
export const TEXT_VAR_PREFIX = 'var-';

/** Build handle configs for Text node: one left target per {{ variableName }}, one right source for output. */
export const buildTextHandles = (text) => {
  const variables = parseTextVariables(text);
  const left = variables.map((name, i) => ({
    type: 'target',
    position: 'left',
    idSuffix: `${TEXT_VAR_PREFIX}${name}`,
    style: variables.length > 1 ? { top: `${((i + 1) * 100) / (variables.length + 1)}%` } : undefined,
  }));
  return [...left, { type: 'source', position: 'right', idSuffix: 'output' }];
};
