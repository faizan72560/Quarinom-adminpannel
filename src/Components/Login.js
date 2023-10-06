import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginuser } from './action/useraction'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import ErrorAlert from './ErrorAlert'


const Login = () => {
  const { isAuthenticated, isLoading, error } = useSelector(state => state.user)
  console.log(isAuthenticated, isLoading, error)

  const navigate = useNavigate()

  const [alert, setalert] = useState(false)

  useEffect(() => {

    if (isAuthenticated) {
      navigate('/')

    }
    else {
      setalert(true)
      setTimeout(() => {
        setalert(false)


      }, 2000)

    }

  }, [isAuthenticated, error])


  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const dispatch = useDispatch()

  const loginhandler = () => {



    dispatch(loginuser(email, password))



  }

  return (
    <>

      {
        alert && <ErrorAlert />
      }

      <div className='flex h-screen justify-center items-center '>

        <div className=' h-80 w-72 border-2 p-1 rounded-md'>
          <div className='flex justify-center'>
            <h1 className='text-4xl my-3 '>Log in</h1>
          </div>

          <div className='flex flex-col my-1'>
            <label>Email</label>
            <input className='border-2 h-8' type="email" placeholder='Email' value={email} onChange={(e) => { setemail(e.target.value) }} />
          </div>

          <div className='flex flex-col my-1'>
            <label>Password</label>
            <input className='border-2 h-8' type="password" placeholder='Password' value={password} onChange={(e) => { setpassword(e.target.value) }} />
          </div>

          <div className='flex flex-col my-2'>
            <button className='bg-blue-500 hover:bg-blue-600 text-white rounded-md h-7' onClick={loginhandler}>Login</button>


          </div>

          <div className=' my-2'>
            Go to Register /<button onClick={() => { navigate('/') }}>Register</button>

          </div>



        </div>

      </div>
    </>
  )
}

export default Login