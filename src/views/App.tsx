import { root } from "..";

let lastState: any;

function myUseState(initialState: any) {
  lastState = lastState || initialState;
  function setState(newState: any) {
    lastState = newState;
    render();
  }
  return [lastState, setState];
}

function render() {
  root.render(<App />);
}

export default function App() {
  const [useName, setUseName] = myUseState("xc");
  return (
    <div>
      <input onChange={(e) => setUseName(e.target.value)}></input>
      {useName}
    </div>
  );
}
