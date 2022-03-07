// import './Home.css'
import React from 'react';
import { useState, useEffect } from "react";
// import FavList from '../FavList/FavList'
import Navbar from '../Navbar/Navbar'
import MovieList from '../MovieList/MovieList'
// import ModalMovie from '../ModalMovie/ModalMovie'
// import Movie from '../Movie/Movie'

export default function Home(){

    const [listmovies, setListMovies] = useState([]);
  
    async function getData(){
        let response = await fetch(`${process.env.REACT_APP_API_URL}/trending`);
        let data = await response.json();

        setListMovies(data);
    };

    useEffect(() => {
        getData();
        
    },[]);
    
  

return(
 
<>
<Navbar/>
{listmovies && <MovieList data={listmovies}/>}

</>
)


};





