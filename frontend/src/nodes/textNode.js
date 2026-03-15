import { useState } from 'react';
import { Typography } from '@mui/material';
import { BaseNode } from './BaseNode';
import { NODE_CONFIGS } from './nodeConfigs';
import { NODE_UI_CONFIGS } from './nodeUIConfigs';
import { buildTextHandles } from './utils';
import { useStore } from '../store';
import './TextNode.css';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text ?? '{{input}}');
  const updateTextNode = useStore((s) => s.updateTextNode);
  const config = NODE_CONFIGS.text;
  const uiConfig = NODE_UI_CONFIGS.text ?? {};
  const accentVar = uiConfig.accentToken ? `var(--node-accent-${uiConfig.accentToken})` : 'var(--node-accent)';

  const handleTextChange = (e) => {
    const value = e.target.value;
    setText(value);
    updateTextNode(id, value);
  };

  return (
    <BaseNode
      id={id}
      title={config.label}
      handles={buildTextHandles(text)}
      accentCssVar={accentVar}
      borderRadius={uiConfig.borderRadius}
      className={uiConfig.className}
      style={uiConfig.style}
    >
      <Typography variant="label" component="span" className="text_node_label">
        Text:
      </Typography>
      <textarea
        className="text_node_input"
        value={text}
        onChange={handleTextChange}
        placeholder="Use {{ variableName }} for inputs."
      />
    </BaseNode>
  );
};
