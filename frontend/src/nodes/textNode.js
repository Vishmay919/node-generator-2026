import { useState } from 'react';
import { withNodeConfig } from './WithNodeConfig.jsx';

const TextNodeBody = ({ data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  return (
    <label>
      Text:
      <input
        type="text"
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
      />
    </label>
  );
};

export const TextNode = withNodeConfig('text')(TextNodeBody);
