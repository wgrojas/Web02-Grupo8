import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Login from './components/Login/Login'
import Navbar from "./components/Navbar/Navbar";

import AppRouter from "./components/Router/Router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
