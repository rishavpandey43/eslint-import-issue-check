import { Button } from '@demo-org/ui-lib';
import { consoleLog } from '@pay/utils';

function App() {
  return (
    <div>
      <h1>This is Main App</h1>
      <Button
        onClick={() => {
          consoleLog('Hello World!');
        }}
      >
        Click Me!
      </Button>
    </div>
  );
}

export default App;
