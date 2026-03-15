import { Grid, Button } from '@mui/material';
import './submit.css';
import { useStore } from './store';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    const payload = {
      nodes: nodes.map((n) => ({ id: n.id })),
      edges: edges.map((e) => ({ source: e.source, target: e.target })),
    };

    try {
      const res = await fetch(`${API_BASE_URL}/pipelines/parse`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errText = await res.text();
        alert(`Failed to parse pipeline: ${errText || res.statusText}`);
        return;
      }

      const data = await res.json();
      const dagText = data.is_dag ? 'Yes' : 'No';
      alert(
        `Pipeline: ${data.num_nodes} nodes, ${data.num_edges} edges.\nIt is a DAG: ${dagText}`
      );
    } catch (err) {
      alert(`Failed to parse pipeline: ${err.message || 'Network error'}`);
    }
  };

  return (
    <Grid container className="submit_bar" alignItems="center" justifyContent="center">
      <Grid>
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};
