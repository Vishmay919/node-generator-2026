import { Typography } from '@mui/material';
import { withNodeConfig } from './WithNodeConfig.jsx';

const LLMNodeBody = () => (
  <Typography variant="body1">This is a LLM.</Typography>
);

export const LLMNode = withNodeConfig('llm')(LLMNodeBody);
