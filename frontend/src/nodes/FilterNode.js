import { Typography } from '@mui/material';
import { withNodeConfig } from './WithNodeConfig.jsx';

const FilterNodeBody = () => (
  <Typography variant="body1">Filter items by condition</Typography>
);

export const FilterNode = withNodeConfig('filter')(FilterNodeBody);
