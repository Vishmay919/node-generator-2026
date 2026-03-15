import React from 'react';
import { Grid, Typography } from '@mui/material';
import './ErrorBoundary.css';

/**
 * React Error Boundary: catches errors during render and in lifecycle.
 * Renders a simple fallback instead of crashing so the app doesn't show a white screen.
 */
export class ErrorBoundary extends React.Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <Grid container direction="column" className="error_boundary">
          <Grid size={12}>
            <Typography variant="h6" color="error" className="error_boundary_title">
              Something went wrong
            </Typography>
          </Grid>
          <Grid size={12}>
            <Typography variant="body1" className="error_boundary_message">
              {this.state.error?.message ?? String(this.state.error)}
            </Typography>
          </Grid>
        </Grid>
      );
    }
    return this.props.children;
  }
}
