import "./App.css";
import { useGlobalContext } from "./context";

function App() {
  //using custom hook
  const { name } = useGlobalContext();
  return <div className="App">Using {name} from global context</div>;
}

export default App;
