import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
 const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d)=>{
    return new Promise((resolve , reject)=>{
      setTimeout(()=>{
        resolve()
      },d*1000);
    })
  }

  const onSubmit = async(data) => {
    let r = await fetch("http://localhost:3000/")
    let res = await r.text()
    
    // await delay(2)
    console.log(data)
    // if(data.username !== "Subham"){
    //   setError("myform", {message : "Your Form is not in goos order"})
    // }
    // if(data.username === "rohan"){
    //   setError("blocked", {message : "This is blocked User"})
    // }
  }
  return (
    <>
     <div className="container">
      {isSubmitting && <div>Loading...</div>}
    

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Username' {...register("username", {required : {value: true, message: "This field is required"}, minLength: {value : 3, message : "min value is 3"} , maxLength : {value : 8, message : "max value is 8"}})} type="text"  />
        {errors.username && <div className='red'>{errors.username.message}</div>}
        <input placeholder='Password' {...register("password", {minLength: {value: 7, message: "Min length is 7"}})} type="password"  />
        {errors.password && <div>{errors.password.message}</div>}
        <input disabled={isSubmitting} type="submit" value="Submit" />
        {errors.myform && <div>{errors.myform.message}</div>}

        {errors.blocked && <div>{errors.blocked.message}</div>}

      </form>
      
     </div>
      
    </>
  )
}

export default App
