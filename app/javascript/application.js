// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';

function App(params) {
  const [counter, setCounter] = React.useState(0);
  return (
    <h1>
      Hello netlinks!
      {counter}
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </h1>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
