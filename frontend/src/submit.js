import { Grid, Button } from '@mui/material';
import './submit.css';

export const SubmitButton = () => {
  return (
    <Grid container className="submit_bar" alignItems="center" justifyContent="center">
      <Grid>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};
