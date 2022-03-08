

import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


import { useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert';




export default function ModalMovie({ data, show, close }) {

    const [valComment, setVal] = useState("");

    function addToFav(e) {
        e.preventDefault();
        //  var x=  e.target.comment.value;
        var x = e.target.value;
        setVal(x)
       
    }
    // https://movie-fuad-app.herokuapp.com/addMovie
    // 
    async function addData(x) {
        const url = `${process.env.REACT_APP_API_URL}/addMovie`
    const data2 = {
      title : x.title,
      release_date : x.release_date,
      poster_path : x.poster_path,
      overview  : x.overview , 
      user_comment : valComment
      
    }
   await fetch(url, {
      method: 'POST', 
      headers: {
        // 'Content-Type': 'application/json'
        'Content-Type': 'application/json',
        // 'Accept': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data2) 
    });
    swal("Favorite Movie", `You added a ${x.title}`, "success");
    close();
    // await  axios.post(url,data2 )
    // .then(res =>{
    //        console.log(res.data);
    //        console.log(data2);
    // }
     
    // ).catch(err =>{

    //     console.log(err);
    // })
    // console.log(valComment);/
    // console.log(data2);
// console.log(data.title);
    }

    return (
        <Modal show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Title :{data.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Release Date : {data.release_date}</Modal.Body>
            <Modal.Footer >
                {/* <label>comment:</label><input type="text" name="comment" /> */}
                <label>comment:</label><input type="text" onChange={addToFav} />
                <Button variant="secondary" onClick={close}> Close </Button>
                <Button variant="primary" onClick={()=>addData(data)}>add To favarit</Button>
            </Modal.Footer>
        </Modal>
    )
};
