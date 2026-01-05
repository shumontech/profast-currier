import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router';
import UseAuth from '../../../../../hooks/useAuth';
import SocialLogin from '../../sociallogin/SocialLogin';

const Login = () => {
    const {signIn} = UseAuth()
    const { register,  handleSubmit, formState: {errors} } = useForm();

    const onSubmit = data => {
        console.log(data);
        signIn(data.email, data.password)

    }
    return (
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl font-bold items-center text-center">Please Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-base-100 shadow-xl rounded-lg">
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" {...register('email')} className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" {...register('password', { required: true, minLength: 6 })} className="input" placeholder="Password" />
                    {
                        /* Error handling can be added here */
                        errors.password?.type=== 'minLength' && <p className="text-red-500">Password must be at least 6 characters long</p>
                    }

                    <div><a className="link link-hover">Forgot password?</a></div>
                    
                   
                </fieldset>
                
                <button className="btn btn-primary mt-4">Login</button>
            </form>
            <SocialLogin></SocialLogin>


        </div>
        </div>
    );
};

export default Login;