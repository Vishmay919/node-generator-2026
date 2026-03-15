import { Handle } from 'reactflow';
import { DEFAULT_NODE_WIDTH, DEFAULT_NODE_HEIGHT } from './constants';
import { buildHandleId, resolvePosition } from './utils';

export const BaseNode = ({
  id,
  title,
  handles = [],
  className,
  style,
  children,
}) => {
  const containerStyle = {
    width: DEFAULT_NODE_WIDTH,
    height: DEFAULT_NODE_HEIGHT,
    border: '1px solid black',
    ...style,
  };

  return (
    <div className={className} style={containerStyle}>
      {handles.map((h) => (
        <Handle
          key={buildHandleId(id, h.idSuffix)}
          type={h.type}
          position={resolvePosition(h.position)}
          id={buildHandleId(id, h.idSuffix)}
          style={h.style}
        />
      ))}
      <div>
        <span>{title}</span>
      </div>
      <div>{children}</div>
    </div>
  );
};
