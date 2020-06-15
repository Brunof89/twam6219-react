import React, { Component } from "react";
import Axios from "axios";

import { API_BASE_URL, API_KEY, LANGUAGE } from "../../services/const";
import './filmes.css'

export default class Filmes extends Component {

    constructor() {
        super();

        this.state = {
            genres: [],

        };

        //this.getCategoriesFromAPI();
        //this.getOptionSelected();
    }

    componentDidMount() {
        let categoriesApi = `${API_BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${LANGUAGE}`;

        Axios.get(categoriesApi)
            .then(({ data }) => {
                const { genres } = data;

                this.setState({ genres });
        });
    }

    getOptionSelected = () => {
        console.log('option: ');
    }

    render() {
        const { genres } = this.state;

        return (
            <div>
                <h2>Página Novidades - FAZER CSS!!</h2>
                <p>Seleccione uma categoria</p>
                <select className="form-control mt-4 col-md-2 col-offset-4" id="categorySelectBox">
                    {genres.map( ({ id, name }) => (
                        <option key={id} id={id} value={name}> {name} </option>
                    ))}
                </select>
                <button className="btn btn-success btnSearchCategory" onClick={""}>Pesquisar</button>
                <hr/>
                <p>dfdfdf</p>
            </div>
        );
    }
}
