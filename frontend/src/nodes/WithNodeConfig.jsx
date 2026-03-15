import { NODE_CONFIGS } from './nodeConfigs';
import { BaseNode } from './BaseNode';

export const withNodeConfig = (type) => (NodeBody) => {
  const config = NODE_CONFIGS[type];
  if (!config) return () => null;

  return function NodeWithConfig({ id, data }) {
    return (
      <BaseNode id={id} title={config.label} handles={config.handles}>
        <NodeBody id={id} data={data} />
      </BaseNode>
    );
  };
};
