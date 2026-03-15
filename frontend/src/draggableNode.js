import { Grid, Typography } from '@mui/material';
import './draggableNode.css';

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Grid
      container
      className={`draggable_node ${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      draggable
      alignItems="center"
      justifyContent="center"
    >
      <Grid size="auto">
        <Typography variant="bodySmall" color="textSecondary" className="draggable_node_label">
          {label}
        </Typography>
      </Grid>
    </Grid>
  );
};
  