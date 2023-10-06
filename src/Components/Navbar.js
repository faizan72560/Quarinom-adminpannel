import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'


const Navbar = () => {
  const navigate = useNavigate()

  const logouthandler = async () => {

    const config = {
      headers: {
        'Content-Type': 'application/json',
        //   'Content-Type': 'application/json',

      },
      withCredentials: true
    }
    console.log('hello')
    const { data } = await axios.get("http://localhost:5000/api/v1/logout", config)
    console.log(data.success)
    if (data.success == true) {
      // navigate('/login')
      localStorage.clear()
      window.location.reload()
    }
  }

  const { isAuthenticated, isLoading } = useSelector(state => state.user)
  console.log(isAuthenticated)
  return (
    <div>
      <nav className='bg-emerald-300 h-12 items-center flex justify-between '>
        <ul className='flex justi'>
          <li className='text-white text-2xl cursor-pointer ' onClick={() => { navigate('/') }}>
            Quarnium Solution Admin Pannel
          </li>

          {/* {isAuthenticated&&<li  className='text-white text-2xl cursor-pointer mx-6 ' onClick={()=>{navigate('/cart')}}>cart</li>}
                {isAuthenticated&&<li  className='text-white text-2xl cursor-pointer mx-4 ' onClick={()=>{navigate('/request')}}>Request For products</li>}
             */}
        </ul>

        <ul className=''>
          {/* <li className='float-right  ' onClick={logouthandler}> */}
          {isAuthenticated && <button className='text-white text-2xl cursor-pointer ' onClick={logouthandler} >Logout</button>}

          {/* </li> */}

        </ul>

      </nav>
    </div>
  )
}

export default Navbar