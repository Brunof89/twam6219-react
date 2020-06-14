import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import Footer from "./footer/Footer";
import NavigationBar from "./navigationbar/NavigationBar";

import Home from "../home/Home";
import Filmes from "../filmes/Filmes";
import Novidades from "../novidades/Novidades";

import "./pageStruct.css";

class PageStruct extends Component {

    render() {
        return(
            <div className="mainApp">
                <HashRouter>
                    <div className="navbar navbar-expand-lg navbar-dark">
                        <div className="navLeft">
                            <h1>Filmes e Séries - Conteúdos Online</h1>
                        </div>
                        <div className="navRightTop">
                            <ul className="navRightTop-ul nav-item-lan">
                                <NavLink className="nav-link" to="">PT</NavLink>
                                <NavLink className="nav-link" to="">EN</NavLink>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <NavigationBar />

                        <div className="content">
                            <Route exact path="/" component={Home} />
                            <Route exact path="/filmes" component={Filmes} />
                            <Route exact path="/novidades" component={Novidades} />
                        </div>
                    </div>

                    <Footer />
                </HashRouter>
            </div>
        );
    }
}

export default PageStruct;
