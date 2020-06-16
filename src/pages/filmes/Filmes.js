import React, { Component } from "react";
import Axios from "axios";

import { API_BASE_URL, API_KEY, LANGUAGE } from "../../services/const";
import './filmes.css';
import CoversRow from '../novidades/CoversRow';

export default class Filmes extends Component {

    constructor() {
        super();

        this.state = {
            genres: [],
			films:[]	
        };		
		this.getOptionSelected = this.getOptionSelected.bind(this);
    }

    componentDidMount() {
        let categoriesApi = `${API_BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${LANGUAGE}`;

        Axios.get(categoriesApi)
            .then(({ data }) => {
				
                const { genres } = data;

                this.setState({ genres });
        });
    }

    getOptionSelected(e,a,b) {
		let categoriesApi = API_BASE_URL + '/search/multi?api_key=' +API_KEY +'&query='+ e.target.value + '&language=' + LANGUAGE + '&page=1';

		Axios.get(categoriesApi)
            .then(({ data }) => {
				 const results = data.results;

                    var coverRows = [];

                    results.forEach( (movie) => {
                        movie.poster_src = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
                        const movieRow = <CoversRow key={movie.id} movie={movie} />
                        coverRows.push(movieRow);
                    });

                    this.setState({ films: coverRows }); //element (rows) for the "render"

        });
    }

    render() {
        const { genres } = this.state;

        return (
            <div>
                <h2>Página Novidades - FAZER CSS!!</h2>
                <p>Seleccione uma categoria</p>
                <select className="form-control mt-4 col-md-2 col-offset-4" id="categorySelectBox" onChange={this.getOptionSelected}>
                    {genres.map( ({ id, name }) => (
                        <option key={id} id={id} value={name}> {name} </option>
                    ))}
                </select>
                
                <hr/>
				<div>                
                {this.state.films}
				</div>
            </div>
        );
    }
}
