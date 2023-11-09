import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addHistory, deleteVideo } from '../services/allAPI';

function VideoCard({displayVideo,setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true)
    const {caption, embedLink} =displayVideo
    const today = new Date
    // console.log(today); 

    let timestamp = new Intl.DateTimeFormat('en-US', {
      year:'numeric',
      month:'2-digit',
      day:'2-digit',
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit'
    }).format(today)
    console.log(timestamp);

    let videoDetails = {
      caption,
      embedLink,
      timestamp
    }
    await addHistory(videoDetails)

  }

  const removeVideo = async(id)=>{
    const response = await deleteVideo(id)
    console.log(response);
    setDeleteVideoStatus(true)
    
  }

  const dragStarted = (e,id)=>{
    console.log(`card no : ${id} started dragging`);
    // for data transfer
    e.dataTransfer.setData("VideoID",id)
  }
  


  

  

  return (
    <>
        <Card style={{ width: '13rem', height:'300px' }} draggable onDragStart={(e)=>dragStarted(e,displayVideo.id)}>
      <Card.Img variant="top" src={displayVideo.url} height={'200px'}  onClick={handleShow}  />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
            <h6 className='me-3'>{displayVideo.caption}</h6>
            <button className="btn btn-danger" onClick={()=>removeVideo(displayVideo?.id)}>
                <i class="fa-solid fa-trash-can"></i>
            </button>

        </Card.Title>
        
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="534" src={`${displayVideo.embedLink}?autoplay=1`} title={displayVideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard