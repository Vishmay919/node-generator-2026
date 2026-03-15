const VALID_HANDLE_TYPES = new Set(['source', 'target']);
const VALID_POSITIONS = new Set(['left', 'right']);

const isNonEmptyString = (val) => typeof val === 'string' && val.trim().length > 0;

const validateHandleConfig = (handle, nodeType, index) => {
  if (!handle || typeof handle !== 'object') {
    return `"${nodeType}" handle[${index}] must be an object`;
  }
  if (!VALID_HANDLE_TYPES.has(handle.type)) {
    return `"${nodeType}" handle[${index}].type must be "source" or "target", got "${handle.type}"`;
  }
  if (!VALID_POSITIONS.has(handle.position)) {
    return `"${nodeType}" handle[${index}].position must be "left" or "right", got "${handle.position}"`;
  }
  if (!isNonEmptyString(handle.idSuffix)) {
    return `"${nodeType}" handle[${index}].idSuffix must be a non-empty string`;
  }
  return null;
};

/**
 * Returns null if valid, or an error string if invalid.
 */
export const validateNodeConfig = (type, config) => {
  if (!isNonEmptyString(type)) {
    return 'node type key must be a non-empty string';
  }
  if (!config || typeof config !== 'object') {
    return `"${type}": config must be an object`;
  }
  if (!isNonEmptyString(config.label)) {
    return `"${type}": label must be a non-empty string, got "${config.label}"`;
  }
  if (!Array.isArray(config.handles)) {
    return `"${type}": handles must be an array`;
  }
  for (let i = 0; i < config.handles.length; i++) {
    const msg = validateHandleConfig(config.handles[i], type, i);
    if (msg) return msg;
  }
  return null;
};

/**
 * Returns true only when `type` is a non-empty string that is registered
 * in the given nodeTypes map. Used in the drop handler to prevent unknown
 * node types from reaching the store and React Flow.
 */
export const isRegisteredNodeType = (type, nodeTypes) =>
  isNonEmptyString(type) && Object.prototype.hasOwnProperty.call(nodeTypes, type);
