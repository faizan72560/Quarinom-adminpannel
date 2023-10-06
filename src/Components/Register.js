import React from 'react'
// import Googlepic from './google-logo.png'
// import Facebookpic from './facebook-new.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from './action/useraction'


const Register = () => {

  const [email, setemail] = useState('')
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [image, setimage] = useState()


  const dispatch=useDispatch()

  

  const navigate=useNavigate()
  
  
  
  const registerhandler=async(e)=>{
    e.preventDefault()
    console.log(image)
    const formdata=new FormData()
    formdata.append('name',username)
    formdata.append('email',email)
    formdata.append('password',password)
    // formdata.append('image',image)
    for (var pair of formdata.entries()) {
      console.log(pair[0]+ ' - ' + pair[1]); 
    }
   
    console.log(username,email,password)
    
     await dispatch(register(formdata))

    //  navigate('/home')

    
    
    

  }


  


  
  return (
    <>
     {/* <nav className='flex bg-blue-400 h-14 md:text-2xl text-white items-center'>
            <ul><li className='cursor-pointer' onClick={()=>{navigate('/')}}>
                Social Media

            </li>
            </ul>
        </nav> */}
    <div className='flex h-screen justify-center items-center '>

      <div className=' md:h-[350px] h-4/6  w-72 border-2 p-2 rounded-md'>
        <form >
        <div className='flex justify-center'>
        <h1 className='text-4xl my-3 '>Register</h1>
        </div>
        <div className='flex flex-col my-1'>
        <label>Username</label>
          <input className='border-2 h-8' type="text" placeholder='Username' value={username} onChange={(e)=>{setusername(e.target.value)}}/>


        </div>

        
        <div className='flex flex-col my-1'>
          <label>Email</label>
          <input  className='border-2 h-8' type="email" placeholder='Email' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
        </div>

        <div className='flex flex-col my-1'>
          <label>Password</label>
          <input className='border-2 h-8' type="password" placeholder='Password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
        </div>
        <div className='flex flex-col my-2'>
          <button className='bg-blue-500 hover:bg-blue-600 text-white rounded-md h-7'onClick={registerhandler}>Register</button>

        </div>

        <div className=' my-2'>
          Already have an account? /<button onClick={()=>{navigate('/login')}}>Login</button>

        </div>
    
        </form>

      </div>

    </div>
    </>
  )
}

export default Register