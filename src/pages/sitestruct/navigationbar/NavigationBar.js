import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import './navigationBar.css';


class NavigationBar extends Component {

    render() {
        return(
            <nav className="navbar navbar-expand-md navbar-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavBar" aria-controls="mainNavBar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="mainNavBar">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" exact to="/">Home</NavLink>
                        <NavLink className="nav-item nav-link" to="/novidades">Novidades</NavLink>
                        <NavLink className="nav-item nav-link" to="/filmes">Filmes</NavLink>
                        <NavLink className="nav-item nav-link" to="/">Favoritos</NavLink>
                    </div>
                </div>
            </nav>
        );
    }

}

export default NavigationBar;
