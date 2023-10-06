import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import SuccessAlert from './SuccessAlert'

const Request = () => {
    const [product, setproduct] = useState('')
    const [alert, setalert] = useState(false)

    const submithandler=async(e)=>{
        e.preventDefault()   
        const config={
            headers:{
            //   'Content-Type': 'multipart/form-data',
              'Content-Type': 'application/json',
      
            },
            withCredentials:true
          }
               
        const res=await axios.post("http://localhost:5000/api/v1//addrequest",{product},config)
        console.log(res)

        if(res.status===200){
            setalert(true)
            setTimeout(()=>{
            setalert(false)


            },2000)
        }
        

    }
  return (
    <div>
        {
            alert&&<SuccessAlert/>
        }
        <div className='flex h-screen justify-center items-center '>

<div className=' md:h-[250px] h-4/6  w-72 border-2 p-2 rounded-md'>
  <form >
  <div className='flex justify-center'>
  <h1 className='text-4xl my-3 '>Add Request </h1>
  </div>
  <div className='flex flex-col my-1'>
  <label>products</label>
    <input className='border-2 h-8' type="text" placeholder='Products' value={product} onChange={(e)=>{setproduct(e.target.value)}}/>


  </div>

  

  <div className='flex flex-col my-2'>
    <button className='bg-blue-500 hover:bg-blue-600 text-white rounded-md h-7'onClick={submithandler}>Submit</button>

  </div>


  </form>

</div>

</div>

    </div>
  )
}

export default Request