import React, {Component} from "react";
import './novidades.css';


class CoversRow extends Component{

    render() {
        return(

            <div className="row">
                <img src={this.props.movie.poster_src} width="120" alt={this.props.movie.title} />

                <div className="column">
                    <div className="column">
                        <h3>{this.props.movie.title}</h3>
                        <p>{this.props.movie.overview}</p>
                    </div>
                </div>

            </div>
            /*<div className="gallery-container">
                <img id={this.props.movie.title} className="" src={this.props.movie.poster_src} alt={this.props.movie.title} />
            </div>*/

        );
    }


}


export default CoversRow;
