import { Grid } from '@mui/material';
import './NodeBody.css';

export const NodeBody = ({ children }) => (
  <Grid container className="node_body">
    <Grid size={12}>{children}</Grid>
  </Grid>
);
