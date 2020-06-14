import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import './footer.css';


class Footer extends Component {

    render() {
        return(
            <div className="footer">
                <ul>
                    <li><NavLink className="nav-item nav-link" to="/">Suporte Técnico</NavLink></li>
                    <li><NavLink className="nav-item nav-link" to="/">Contactos</NavLink></li>
                    <li><NavLink className="nav-item nav-link" to="/">Sobre Nós</NavLink></li>
                </ul>
            </div>
        );
    }

}

export default Footer;
