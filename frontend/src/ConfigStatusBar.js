import { Grid, Typography } from '@mui/material';
import './ConfigStatusBar.css';

export const ConfigStatusBar = ({ errors }) => {
  if (!errors.length) return null;

  const types = errors.map((e) => `"${e.type}"`).join(', ');
  return (
    <Grid container className="config_status_bar" alignItems="center">
      <Grid size="auto">
        <Typography variant="body2" component="span">
          <strong>Config warning:</strong> The following node types have invalid config and are
          unavailable: {types}. Check the console for details.
        </Typography>
      </Grid>
    </Grid>
  );
};
