import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
      <Row className='mt-5 mb-5 d-flex justify-content-center align-items-center '>
        <Col></Col>
        <Col lg={5}>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}} className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sed ullam rem deleniti possimus explicabo iusto soluta accusantium, dignissimos voluptas atque corrupti voluptatem, minima veritatis. Similique ex ratione repellendus officia.</p>
          <button onClick={()=>navigateByUrl('/home')} className='btn btn-warning mt-5'>Get Staarted <i class="fa-solid fa-arrow-right ms-2"></i></button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no-image" />
        </Col>
      </Row>
      <div className="container d-flex justify-content-center align-items-center w-100 flex-column">
        <h3>Features</h3>
        <div className="cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100">
        <Card className='p-4' style={{ width: '22rem' }}>
            <Card.Img variant="top" style={{width:
            '300px',height:'300px'}} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
        </Card>
        <Card className='p-4' style={{ width: '22rem' }}>
            <Card.Img variant="top" style={{width:
            '300px',height:'300px'}} src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title>Categoorized Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
        </Card>
        <Card className='p-4' style={{ width: '22rem' }}>
            <Card.Img variant="top" style={{width:
            '300px',height:'300px'}} src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
        </Card>
        
        </div>
      
      </div>
      <div className="container border border-2 border-secondary rounded w-100 mt-5 mb-5 d-flex align-items-center justify-content-between">
              <Row>
                <Col lg={5} className='p-3 ms-3'>
                  <h3 className='text-warning mb-5'> Simple fast and Powerful</h3>
                  <h6 className='mb-3'>
                    <span className='fw-bolder fs-5'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolore temporibus dolorem ab? Libero blanditiis reprehenderit, explicabo odio temporibus qui quo saepe fugit omnis aliquid, repellendus in vitae molestiae quisquam!
                  </h6>
                  <h6 className='mb-3'>
                    <span className='fw-bolder fs-5'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolore temporibus dolorem ab? Libero blanditiis reprehenderit, explicabo odio temporibus qui quo saepe fugit omnis aliquid, repellendus in vitae molestiae quisquam!
                  </h6>
                  <h6 className='mb-3'>
                    <span className='fw-bolder fs-5'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolore temporibus dolorem ab? Libero blanditiis reprehenderit, explicabo odio temporibus qui quo saepe fugit omnis aliquid, repellendus in vitae molestiae quisquam!
                  </h6>
                  
                </Col>
                <Col></Col>
                <Col lg={6}>
                    <iframe width="100%" height="430" src="https://www.youtube.com/embed/WWr9086eWtY" title="LEO - Ordinary Person Lyric | Thalapathy Vijay, Anirudh Ravichander, Lokesh Kanagaraj, NikhitaGandhi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='d-flex align-items-center justify-content-center p-5'></iframe>
                </Col>
              </Row>
      </div>
    </>
    
  )
}

export default LandingPage