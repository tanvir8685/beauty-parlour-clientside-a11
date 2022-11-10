import { fromJSON } from 'postcss';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assests/images/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    useTitle('register')
    const {createUser,updateUserProfile}=useContext(AuthContext)
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img=form.img.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password,img)
        createUser(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            handleUpdateUserProfile(name,img);
            form.reset();
            
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }


    const handleUpdateUserProfile =(name,img)=>{
        const profile={
            displayName:name,
            photoURL:img
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img src={img} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">SignUp now!</h1>

                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name='img' placeholder="image_url" className="input input-bordered" required />
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