import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../../../hooks/useAuth';
import { Link } from 'react-router';

const Register = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {createUser} = UseAuth();

    const onSubmit = data => {
        console.log(data);
       createUser (data.email,data.password)
       .then(result=>{
        console.log(result.user);
       })
       .catch(error=>{
        console.log(error);
       })
    };
    return (
       
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl font-bold text-center">Create Account!</h1>
       
       <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register('email')} className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password"{...register('password',{ required: true, minLength: 6 })} className="input" placeholder="Password" />
          {
            /* Error handling can be added here */  
            errors.password?.type=== 'minLength' && <p className="text-red-500">Password must be at least 6 characters long</p>

          }

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-primary mt-4">Register</button>
        </fieldset>
        <p><small>Already have an account<Link className='btn btn-link' to="/login">Login</Link></small></p>
       </form>
        
      </div>
    </div>
  </div>

    );
};

export default Register;