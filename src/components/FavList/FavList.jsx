import React from "react";
import { useState, useEffect } from "react";
import Navbar from '../Navbar/Navbar'
import './FavList.css'
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'


export default function FavList(){


    const [fMovies, setFMovies] = useState([]);

    async function getMovies() {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/getMovies`,{

        // headers :  {
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json'
        // }
      });
      const data = await response.json();
      setFMovies(data);
    }
  
    useEffect(() => {
      getMovies();
    }, []);
  
    console.log(fMovies);

    function deleteMovie({id}) {
        const url = `${process.env.REACT_APP_API_URL}/delete/${id}`;
     fetch(url, {
          method: "DELETE", headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }).then(() => {
         
          getMovies();
        });
      
    }

    return (
        <>
          <Navbar />
          
          <div className="fatherDiv">
{

    fMovies.map(movie =>{

return(

    <Card  border="outline-danger"  key={movie.id} className='cardstyle'  >
    <Card.Img variant="top" style={{ width: '240px', height:"190px"  }} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
    <Card.Body>
      <Card.Title>movie:- {movie.title}</Card.Title>
      <Card.Text>
        `details
         ${movie.overview.slice(0,150)} `
      </Card.Text>
      <Card.Footer>
      <Button variant="outline-danger"  onClick={deleteMovie}>Delete from favorite</Button>
      </Card.Footer>
    </Card.Body>
  </Card>




    )
   

    }



    ) 
   
}
 </div>

          </>
          )




};
