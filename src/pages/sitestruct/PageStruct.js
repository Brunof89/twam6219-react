import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

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
                <div className="projectNameLeft">
                    <h1>Filmes e Séries - Conteúdos Online</h1>
                </div>

                <HashRouter>
                    <NavigationBar />

                        <div className="content">
                            <Route exact path="/" component={Home} />
                            <Route exact path="/filmes" component={Filmes} />
                            <Route exact path="/novidades" component={Novidades} />
                        </div>

                    <Footer />
                </HashRouter>
            </div>
        );
    }
}

export default PageStruct;
