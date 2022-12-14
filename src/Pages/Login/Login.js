import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import img from './../../assests/images/login.svg';

const Login = () => {
    useTitle('login')
    const{signIn,googleSignIn,providerLogin}=useContext(AuthContext);
    const handleLogIn = event => {
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            form.reset()
            
            })
            .catch((error) => {
                console.log(error)
              });
           
    
    
    
    }
        const googleLogIn=()=>{
            googleSignIn(provider)
              .then((result) => {
                
                const user = result.user;
                
                
              }).catch((error) => {
                console.log(error)
                
              });
    
        }
        const handleGitSignIn=()=>{
            providerLogin(githubProvider)
            .then(result=>{
                const user =result.user;
                console.log(user);
                // navigate(from,{replace:true});
            })
            .catch(error=>console.error(error));
    
        }
        const provider = new GoogleAuthProvider();
        const githubProvider= new GithubAuthProvider();

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
                                
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            
                            <button className="btn btn-primary">LogIn</button>

                            <button onClick={googleLogIn} className="btn btn-primary my-3">LogInWithGoogle</button>
                            <button onClick={handleGitSignIn}  className="btn btn-primary my-3">LogInWithGitHub</button>

                        </div>
                    </form>
                    
                    
                    <p className='text-center p-4'>New to Rhadika's Parlour <Link className='text-orange-600 font-bold ' to='/signup'>Sign Up</Link> </p>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Login;