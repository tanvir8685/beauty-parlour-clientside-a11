import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assests/images/login.svg'

const SignUp = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img src={img} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">SignUp now!</h1>

                    <form onSubmit="" className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control mt-6">
                            
                            <button className="btn btn-primary">SignUp</button>

                        </div>
                    </form>
                    <p className='text-center p-4'>Already Have Account <Link className='text-orange-600 font-bold ' to='/login'>LogIn</Link> </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SignUp;