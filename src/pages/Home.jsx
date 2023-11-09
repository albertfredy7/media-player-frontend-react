import React, { useEffect, useState } from 'react';
import Add from '../components/Add';
import { Link } from 'react-router-dom';
import View from '../components/View';
import Category from '../components/Category';
import { getAllCategory } from '../services/allAPI';

function Home() {
  const [uploadVideoStatus, setUploadVideoStatus] = useState({});
  const [category, setCategory] = useState([]);

  const fetchCategories = async () => {
    const response = await getAllCategory(); // Changed the function name to match your import
    const { data } = response;
    setCategory(data);
  }

  useEffect(() => {
    fetchCategories(); // Use the renamed function here
  }, []);

  console.log(category);

  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
        <div className="add-videos">
          <Add setUploadVideoStatus={setUploadVideoStatus} />
        </div>
        <Link to={'/watchhistory'} style={{ textDecoration: 'none', color: 'white', fontSize: '30px' }}>
          Watch History
        </Link>
      </div>
      <div className="container w-100 mt-5 mb-5 d-flex justify-content-between">
        <div className="all-videos col-lg-9">
          <h4 className="mb-5">All Videos</h4>
          <View uploadVideoStatus={uploadVideoStatus} />
        </div>
        <div className="category col-lg-3">
          <Category />
        </div>
      </div>
    </>
  );
}

export default Home;
