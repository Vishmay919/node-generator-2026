import { Typography } from '@mui/material';
import { withNodeConfig } from './WithNodeConfig.jsx';

const NoteNodeBody = () => (
  <Typography variant="body1">Sticky note</Typography>
);

export const NoteNode = withNodeConfig('note')(NoteNodeBody);
