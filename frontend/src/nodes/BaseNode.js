import { Handle } from 'reactflow';
import { NodeCard, NodeHeader, NodeBody } from '../design-system';
import { buildHandleId, resolvePosition } from './utils';

export const BaseNode = ({
  id,
  title,
  handles = [],
  accentCssVar,
  borderRadius,
  width,
  height,
  className,
  style,
  children,
}) => (
  <NodeCard
    accentCssVar={accentCssVar}
    borderRadius={borderRadius}
    width={width}
    height={height}
    className={className}
    style={style}
  >
    {handles.map((h) => (
      <Handle
        key={buildHandleId(id, h.idSuffix)}
        type={h.type}
        position={resolvePosition(h.position)}
        id={buildHandleId(id, h.idSuffix)}
        style={h.style}
      />
    ))}
    <NodeHeader title={title} />
    <NodeBody>{children}</NodeBody>
  </NodeCard>
);
