import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadAllVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoStatus}) {
  

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [video,setVideo] = useState({
      id:"",
      caption:"",
      url:"",
      embedLink:""
    })
    // console.log(video);

    const embedVideoLink = (e)=>{
      // console.log(e.target.value);
      const {value} = e.target
      console.log(value.slice(-11));
      const link = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedLink:link})
    }

    console.log(video);

     const handleUpload = async ()=>{
        const{id,caption,url,embedLink}= video
        if(!id || !caption || !url || !embedLink){
          toast.warning('Please fill the form completely')
        }
        else{
           const response = await uploadAllVideo(video)
           console.log(response);
           if(response.status>=200 && response.status<=300){
            toast.success(`${response.data.caption} is successfully uploaded`)

            //to change the value of uploadVideoStatus
            setUploadVideoStatus(response.data)
            //making the state value none
            setVideo({
              id:"",
              caption:"",
              url:"",
              embedLink:""

            })
            handleClose()

            
           }
           else{
            console.log(response);
            toast.error("something went wrong. Try again later")
           }
        }
     }
    

  return (
    <>
        <div className="d-flex align-items-center">
            <h5>Upload New Video</h5>
            <button onClick={handleShow} className='btn'><i class="fa-solid fa-cloud-arrow-up fs-5"></i></button>
        </div>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film text-warning"></i> Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <form className="border border-secondary rounded p-2">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Video Image url" onChange={(e)=>setVideo({...video,url:e.target.value})}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Youtube Video link" onChange={embedVideoLink}/>
                </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default Add

