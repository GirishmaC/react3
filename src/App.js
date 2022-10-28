import  Stateeg from "./components/useState";
import AxiosFetch from "./components/AxiosFetch";
import Effeteg from "./components/useEffect";
import Parent from "./components/parent";
import Counter from "./components/useReducer";
import Fragment from "./components/useRef";
import Theory from "./components/theory";
import Class from './components/Class';





function App() {
  return (
    <div className="App">
<AxiosFetch/>
  <Stateeg/>
  <Effeteg/>
  <Counter/>
  <Parent/>
  <Fragment/>
  <Theory/>
  <Class/>

    </div>
  );
}

export default App;