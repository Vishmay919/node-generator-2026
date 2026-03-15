import { Typography } from '@mui/material';
import { withNodeConfig } from './WithNodeConfig.jsx';

const TimerNodeBody = () => (
  <Typography variant="body1">Emit on interval</Typography>
);

export const TimerNode = withNodeConfig('timer')(TimerNodeBody);
