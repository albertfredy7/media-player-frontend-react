import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, getAVideo, getAllCategory, updateCategory } from '../services/allAPI';
import { Col, Row } from 'react-bootstrap';
import VideoCard from './VideoCard';

function Category() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [getCategory, setGetCategory] = useState([]);
  const [categoryName, setCategoryName] = useState('');

  // function to add category
  const categoryUpload = async () => {
    if (categoryName) {
      let body = {
        categoryName,
        allVideos: [],
      };

      // Make API calls
      const response = await addCategory(body);
      console.log(response);

      if (response.status >= 200 && response.status <= 300) {
        toast.success('Category successfully uploaded');
        handleClose();
      }
    }
  };

  // function to get all category
  const allCategory = async () => {
    const { data } = await getAllCategory();
    setGetCategory(data);
  };




  // dragover event listener
  const dragover = (e)=>{
    // this will prevent reload so that data that we send from video card.jsx  wont be lost
    e.preventDefault()
    console.log('insider dragover');
  }


  const videoDrop = async(e,categoryID)=>{
    console.log(`dropped inside the categoryId ${categoryID}`);

    // to get the video id send from the video card component
    const videoId = e.dataTransfer.getData("VideoID")
    console.log(videoId);

    // api to grt thr paticularr video that is dragged

    const {data} = await getAVideo(videoId)
    console.log(data);

    // to find a particular category with the specfied id

    let selectedCategory = getCategory?.find((item)=>item.id===categoryID)
    console.log(selectedCategory);
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);


    // to update the category with the selected video to the category
    await updateCategory(categoryID,selectedCategory)
    getAllCategory()



  }



  
  

  console.log(getCategory);

  useEffect(() => {
    allCategory();
  }, []);

  return (
    <>
      <div className="d-grid ms-3">
        <button onClick={handleShow} className="btn btn-warning">
          Add New Category
        </button>
      </div>

      { getCategory?.length>0?
       getCategory?.map((item)=>(<div className='m-5 border border-secondary rounded p-3' droppable onDragOver={(e)=>dragover(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
          <div className='d-flex justify-content-between align-items-center'></div>
          <h6>{item.categoryName}</h6>
          <button  className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button>

          <div>
            <Row>
              <Col sm={12}>
                {
                  item.allVideos?.length>0?
                  item.allVideos.map((card)=>(<VideoCard displayVideo={card} />))
                  :<p>Nothing to display</p>
                }

              </Col>
            </Row>
          </div>
        </div>))
        : <p>Nothing to display</p>
        }

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add new category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="border border-secondary rounded p-2">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Category Name"
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={categoryUpload}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={5000}
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
  );
}

export default Category;
