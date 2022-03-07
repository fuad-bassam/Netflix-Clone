
import {Card} from 'react-bootstrap'
// import {Button} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import ModalMovie from '../ModalMovie/ModalMovie'
import { useState } from 'react'
import './Movie.css'
export default function Movie({movie}){

  const [show, setShow] = useState(false);

  const [isFav, setFav] = useState("mv1")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function addToFav(movie) {
    setFav(movie)

handleShow() }

return(


<>
    <Card  border="outline-danger"  key={movie.id} className='cardstyle' >
    <Card.Img variant="top" style={{ width: '240px', height:"190px"  }} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
    <Card.Body>
      <Card.Title>movie:- {movie.title}</Card.Title>
      <Card.Text>
        `details
         ${movie.overview.slice(0,150)} `
      </Card.Text>
      <Card.Footer>
      <Button variant="outline-danger"  onClick={() => addToFav(movie)}>Add to favorite</Button>
      </Card.Footer>
    </Card.Body>
  </Card>

  {isFav && <ModalMovie data={isFav} show={show} close={handleClose}/>}

    </>
)
};
