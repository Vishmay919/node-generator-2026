import { useState } from 'react';
import { Typography } from '@mui/material';
import { withNodeConfig } from './WithNodeConfig.jsx';

const OutputNodeBody = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  return (
    <>
      <label>
        <Typography variant="label" component="span">Name:</Typography>
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </label>
      <label>
        <Typography variant="label" component="span">Type:</Typography>
        <select value={outputType} onChange={(e) => setOutputType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </>
  );
};

export const OutputNode = withNodeConfig('customOutput')(OutputNodeBody);
