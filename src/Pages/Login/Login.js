import React from 'react';
import { Link } from 'react-router-dom';
import img from './../../assests/images/login.svg';

const Login = () => {
    const handleLogIn = event => {
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)}
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img src={img} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>

                    <form onSubmit={handleLogIn}className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            
                            <button className="btn btn-primary">LogIn</button>

                            <button className="btn btn-primary my-3">LogInWithGoogle</button>
                            <button  className="btn btn-primary my-3">LogInWithGitHub</button>

                        </div>
                    </form>
                    
                    
                    <p className='text-center p-4'>New to Genious Car <Link className='text-orange-600 font-bold ' to='/signup'>Sign Up</Link> </p>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Login;