import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import NavigationBar from "./pages/sitestruct/navigationbar/navigationBar.css";
import Footer from "./pages/sitestruct/footer/Footer";
import Home from "./pages/home/Home";
import Filmes from "./pages/filmes/Filmes";
import Novidades from "./pages/novidades/Novidades";
import './App.css';

function App() {
  return (
    <div className="App">
        <HashRouter>
            <div className="navbar">
                {/*<div className="navLeft">*/}
                {/*    <h1>Filmes e Séries - Conteúdos Online</h1>*/}
                {/*</div>*/}

            </div>

            <div>
                <NavigationBar />

                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/" component={Filmes} />
                    <Route exact path="/" component={Novidades} />
                </div>
            </div>

            <Footer />
        </HashRouter>
    </div>
  );
}

export default App;
