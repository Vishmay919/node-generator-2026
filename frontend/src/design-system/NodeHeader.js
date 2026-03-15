import { Grid, Typography } from '@mui/material';
import './NodeHeader.css';

export const NodeHeader = ({ title }) => (
  <Grid container className="node_header" alignItems="center">
    <Grid>
      <Typography variant="label">
        {title}
      </Typography>
    </Grid>
  </Grid>
);
