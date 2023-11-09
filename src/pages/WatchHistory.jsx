 import React, { useEffect, useState } from 'react'
 import { Link } from 'react-router-dom'
 import { getAllHistory } from '../services/allAPI'

 import { deleteHistory } from '../services/allAPI'

 
 function WatchHistory() {

  const [history,setHistory] = useState([])

  const getHistory = async() =>{
    const {data}= await getAllHistory()
    // console.log(data);
    setHistory(data)
  }
  console.log(history);




  // to delete the history

  const handleDelete = async(id)=>{
    await deleteHistory(id)
    getHistory()

  }

  useEffect(()=>{
    getHistory()
    
  },[])

   return (
     <>
        <div className='container mt-5 d-flex justify-content-between'>
            <h3>Watch History</h3>
            <Link to={'/home'} style={{textDecoration:'none',color:'white',fontSize:'28px'}}><i class="fa-solid fa-arrow-left"></i> Back to home</Link>
        </div>
          <table className="table mt-5 mb-5 container">
            <thead>
              <tr>
                <th>#</th>
                <th>Caption</th>
                <th>URL</th>
                <th>Time Stamp</th>
                <th>Action</th>
              </tr>
            </thead>
            <tBody>
              {
                history.length>0?
                
                history.map((item)=>(<tr>
                  <td>{item.id}</td>
                  <td>{item.caption}</td>
                  <td><a href={item.embedLink} target='blank'>{item.embedLink}</a></td>
                  <td>{item.timestamp}</td>
                  <td><button className="btn btn-danger" onClick={()=>handleDelete(item?.id)}>
                      <i class="fa-solid fa-trash-can"></i>
                      </button>
                  </td>
                </tr>))
                
                :
                <p className=''>Noting to display</p>
              }
            </tBody>
          </table>
          
          
        
     </>
   )
 }
 
 export default WatchHistory