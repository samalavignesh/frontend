import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Validation from './LoginValidation';
function Login() {
    const [values,setValues] = useState({
      email:'',
      password:''
    })
    const [errors,setErrors]=useState({});
const handleInput=(event)=>{
    setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
}
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation(values));
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <form action="" onSubmit={handleSubmit}>
                <h2>
                    Log-In
                </h2>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Enter email' name='email'
                    onChange={handleInput} className='form-control rounded-0'/>
                  { errors.email && <span className='text-danger'> {errors.email} </span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter password' name='password'
                    onChange={handleInput} className='form-control rounded' />
                    { errors.password && <span className='text-danger'> {errors.password} </span>}
                </div>
           
            <button type='submit' className='btn btn-success w-100' >login</button>
            <p>
                Happy coding MuWa!!
            </p>
            <Link to="/signup" className='btn btn-default border w-100 bg-light text-decoration-none' >Create account</Link>
            </form>
        </div>
    </div>
  )
}

export default Login