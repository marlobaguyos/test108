import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Catalog from './components/catalog';
import Home from './components/home';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>

        <Home></Home>
        <Catalog></Catalog>

        
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
