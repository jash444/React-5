import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import{dashBoard} from "./components/dashBord"
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Login />
     
    </div>
  );
}

export default App;
