import  Stateeg from "./components/useState";
import AxiosFetch from "./components/AxiosFetch";
import Effeteg from "./components/useEffect";
import Parent from "./components/parent";
import Counter from "./components/useReducer";
function App() {
  return (
    <div className="App">
<AxiosFetch/>
  <Stateeg/>
  <Effeteg/>
  <Counter/>
  <Parent/>

    </div>
  );
}

export default App;