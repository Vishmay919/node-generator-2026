import { Typography } from '@mui/material';
import { withNodeConfig } from './WithNodeConfig.jsx';

const MergeNodeBody = () => (
  <Typography variant="body1">Merge two inputs</Typography>
);

export const MergeNode = withNodeConfig('merge')(MergeNodeBody);
