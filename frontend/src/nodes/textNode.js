import { useState } from 'react';
import { Typography } from '@mui/material';
import { withNodeConfig } from './WithNodeConfig.jsx';

const TextNodeBody = ({ data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  return (
    <label>
      <Typography variant="label" component="span">Text:</Typography>
      <input
        type="text"
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
      />
    </label>
  );
};

export const TextNode = withNodeConfig('text')(TextNodeBody);
