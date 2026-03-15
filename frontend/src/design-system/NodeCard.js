import Paper from '@mui/material/Paper';
import './NodeCard.css';

export const NodeCard = ({
  accentCssVar,
  width,
  height,
  borderRadius,
  className,
  style = {},
  children,
}) => {
  const combinedStyle = {
    '--node-accent': accentCssVar,
    '--node-border-radius': borderRadius ?? 'var(--node-border-radius)',
    width,
    height,
    ...style,
  };
  return (
    <Paper
      className={`node_card ${className ?? ''}`.trim()}
      style={combinedStyle}
      elevation={4}
    >
      {children}
    </Paper>
  );
};
