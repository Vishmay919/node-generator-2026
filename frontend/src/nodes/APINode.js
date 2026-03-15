import { Typography } from '@mui/material';
import { withNodeConfig } from './WithNodeConfig.jsx';

const APINodeBody = () => (
  <Typography variant="body1">Call external API</Typography>
);

export const APINode = withNodeConfig('api')(APINodeBody);
