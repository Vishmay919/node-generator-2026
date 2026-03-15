import React from 'react';

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
        <div style={{ padding: 24, fontFamily: 'system-ui', maxWidth: 560, margin: '40px auto' }}>
          <h2 style={{ color: '#c00', margin: '0 0 8px' }}>Something went wrong</h2>
          <p style={{ margin: 0 }}>{this.state.error?.message ?? String(this.state.error)}</p>
        </div>
      );
    }
    return this.props.children;
  }
}
