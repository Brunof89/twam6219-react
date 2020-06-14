import React, { Component } from "react";
import Axios from "axios";

import { API_BASE_URL, API_KEY, LANGUAGE } from "../../services/const";
//import MoviesDropdown from './MoviesDropdown';

export default class Filmes extends Component {

    constructor() {
        super();

        this.state = {
            genres: [],
        };

        this.getCategoriesFromAPI();
    }

    getCategoriesFromAPI() {
        let categoriesApi = `${API_BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${LANGUAGE}`;

        Axios.get(categoriesApi)
            .then(({ data }) => {
                const { genres } = data;

                this.setState({ genres });
        });
    }

    render() {
        const { genres } = this.state;

        return (
            <div>
                <select>
                    {genres.map( ({ id, name }) => (
                        <option key={id} id={id} value={name}> {name} </option>
                    ))}
                </select>
                <button className="btn btn-success">Pesquisar</button>
            </div>
        );
    }
}
