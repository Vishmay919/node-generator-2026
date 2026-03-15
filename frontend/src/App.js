import { Grid } from '@mui/material';
import './App.css';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { configErrors } from './nodes';
import { ConfigStatusBar } from './ConfigStatusBar';

function App() {
  return (
    <Grid container direction="column" className="app_root">
        <PipelineToolbar />
        <PipelineUI />
        <SubmitButton />
        <ConfigStatusBar errors={configErrors} />
    </Grid>
  );
}

export default App;
