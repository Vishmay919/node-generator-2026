import { Grid } from '@mui/material';
import './toolbar.css';
import { DraggableNode } from './draggableNode';
import { toolbarNodes } from './nodes';

export const PipelineToolbar = () => {
  return (
    <div className="toolbar">
      <div className="toolbar_scroll">
        <Grid
          container
          className="toolbar_nodes"
          direction="row"
          wrap="nowrap"
          spacing={2}
          alignItems="center"
        >
          {toolbarNodes.map((n) => (
            <Grid size="auto" key={n.type}>
              <DraggableNode type={n.type} label={n.label} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};
