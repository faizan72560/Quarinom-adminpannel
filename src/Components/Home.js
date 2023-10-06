import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: '',
    description: '',
    image: null,
  });
  const [alert, setAlert] = useState(false);

  const submithandler = async () => {
    try {
      const formData = new FormData();
      formData.append('title', blog.title);
      formData.append('description', blog.description);
      formData.append('image', blog.image);

      const { data } = await axios.post('http://localhost:5000/api/v1/blog', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });

      if (data.success === true) {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 2000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64Image = e.target.result;
        setBlog({ ...blog, image: base64Image });
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className='flex justify-center'>
        <h1 className="text-3xl mb-4">Welcome To Quarnium Solution</h1>
      </div>

      {alert && (
        <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mb-4" role="alert">
          <div className="flex items-center">
            <div className="py-1">
              <svg
                className="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold">Your Blog has been added successfully</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center">
        <div className="shadow-xl p-8 w-96">
          <h1 className="text-2xl mb-4">Add Blog</h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full h-10 rounded-lg p-2"
              value={blog.title}
              onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Disease"
              className="w-full h-10 rounded-lg p-2"
              value={blog.description}
              onChange={(e) => setBlog({ ...blog, description: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <input
              type="file"
              accept="image/*"
              className="w-full h-10 rounded-lg p-2"
              onChange={handleImageChange}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-72 h-10 bg-green-400 rounded-lg text-white"
              onClick={submithandler}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
