import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { configErrors } from './nodes';
import { ConfigStatusBar } from './ConfigStatusBar';

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
      <ConfigStatusBar errors={configErrors} />
    </div>
  );
}

export default App;
