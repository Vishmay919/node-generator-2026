import { NODE_CONFIGS } from './nodeConfigs';
import { NODE_UI_CONFIGS, DEFAULT_NODE_WIDTH, DEFAULT_NODE_HEIGHT } from './nodeUIConfigs';
import { BaseNode } from './BaseNode';

export const withNodeConfig = (type) => (NodeBody) => {
  const config = NODE_CONFIGS[type];
  if (!config) return () => null;

  return function NodeWithConfig({ id, data }) {
    const uiConfig = NODE_UI_CONFIGS[type] ?? {};
    const accentVar = uiConfig.accentToken
      ? `var(--node-accent-${uiConfig.accentToken})`
      : 'var(--node-accent)';
    return (
      <BaseNode
        id={id}
        title={config.label}
        handles={config.handles}
        accentCssVar={accentVar}
        borderRadius={uiConfig.borderRadius}
        width={uiConfig.width ?? DEFAULT_NODE_WIDTH}
        height={uiConfig.height ?? DEFAULT_NODE_HEIGHT}
        className={uiConfig.className}
        style={uiConfig.style}
      >
        <NodeBody id={id} data={data} />
      </BaseNode>
    );
  };
};
