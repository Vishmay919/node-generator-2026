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
