import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Catalog from "./components/catalog";
import Home from "./components/home";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import About from "./components/about";
import Cart from "./components/cart";

function App() {
  return ( <
    BrowserRouter >
    <
    div className = " container-fluid App" >
    <
    NavBar > < /NavBar> <
    Switch >
    <
    Route path = "/"
    exact component = {
      Home
    } > < /Route> <
    Route path = "/home"
    exact component = {
      Home
    } > < /Route> <
    Route path = "/catalog"
    exact component = {
      Catalog
    } > < /Route> <
    Route path = "/about"
    exact component = {
      About
    } > < /Route> <
    Route path = "/cart"
    exact component = {
      Cart
    } > < /Route> <
    /Switch> <
    Footer > < /Footer> <
    /div> <
    /BrowserRouter>
  );
}
dfasd;
export default App;