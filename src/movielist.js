import React, { useEffect, useState} from "react";
import Moviecomponent from './movie';

const api_link = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=671c65d6f23f559b0145e972992af135";
const img_api = "https://image.tmdb.org/t/p/w1280";
const search_api = "https://api.themoviedb.org/3/search/movie?api_key=671c65d6f23f559b0145e972992af135&query="


const Movielist = () => {
    const [movies, setMovies ] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    

    const getMovies = (API) => {
        fetch(API)
            .then( res => res.json())
            .then(data => {
                console.log(data.results);
                setMovies(data.results);
            });
    }
    
    const handleOnSubmit= (e) =>{
        e.preventDefault();
        
        if (searchTerm){
            getMovies(search_api+searchTerm)
            setSearchTerm("");
        }
    }


    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }

    useEffect (() =>{
        getMovies(api_link);
    }, []);

    return (
    <>
        <form id="searchform" onSubmit={handleOnSubmit}>
                <input type="search" onChange={handleOnChange} placeholder ="Search" value={searchTerm}></input>
        </form>
        <div id="movielistdiv">
            { movies.length > 0 && movies.map(movie => 
                <Moviecomponent key ={movie.id} {...movie} />
            )}
        </div>
    </>
    )


}

export default Movielist; 