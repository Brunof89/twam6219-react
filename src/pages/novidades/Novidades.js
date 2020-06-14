import React, {Component} from "react";
import {API_BASE_URL, API_KEY, LANGUAGE} from "../../services/const";
import CoversRow from './CoversRow';
import $ from 'jquery';
import './novidades.css';



class Novidades extends Component{

    constructor(props){
        super(props);
        this.state = {}

        this.showCovers();
    }


    showCovers(){

        //jQuery syntax
        try{
            $.ajax({
                url: API_BASE_URL + '/movie/popular?api_key=' +API_KEY + '&language=' + LANGUAGE + '&page=1',
                success: (searchResults) => {
                    console.log("Fetch data from API");
                    const results = searchResults.results;

                    var coverRows = [];

                    results.forEach( (movie) => {
                        movie.poster_src = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
                        const movieRow = <CoversRow key={movie.id} movie={movie} />
                        coverRows.push(movieRow);
                    });

                    this.setState({ rows: coverRows }); //element (rows) for the "render"
                },
                error: (xhr, status, err) => {
                    console.error("Failed to try fetching API data");
                }
            });
        }catch(e){
            console.log(e);
        }

    }



    render(){
        return(
            <div>
                <h2>Página Novidades - FAZER CSS!!</h2>
                {this.state.rows}
            </div>
        );
    }

}

export default Novidades;
