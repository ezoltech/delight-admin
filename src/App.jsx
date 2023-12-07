import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Commands } from "./components/Commands";

function App() {
  return (
    <div className="App">
      <Nav />
      <Commands />
      <Outlet />
    </div>
  );
}

export default App;
