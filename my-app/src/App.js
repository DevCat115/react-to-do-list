import logo from "./logo.svg";
import "./App.css";
import NewSchedule from "./Components/NewSchedule";
import Schedules from "./Components/Schedules";

function App() {
  return (
    <div className="App">
      <NewSchedule />
      <hr />
      <Schedules />
    </div>
  );
}

export default App;
