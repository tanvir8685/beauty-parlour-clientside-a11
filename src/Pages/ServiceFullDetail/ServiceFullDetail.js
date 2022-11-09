import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServiceFullDetail = () => {
    const {user}=useContext(AuthContext);
    console.log(user.displayName);
    console.log(user.photoURL )
    const service = useLoaderData();
    const { _id, title, detail, price, img } = service;
    const handlereview=(event)=>{
        event.preventDefault();
        const form = event.target;
        const review=form.review.value;
        console.log(review)

        const reviewFordb={
            service:_id,
            name:user.displayName,
            photo:user.photoURL ,
            comment:review

        }
        fetch('http://localhost:5000/review',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(reviewFordb)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.error(err))
    }
    return (
        <div>
            <h1>This is service full details</h1>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{price}</p>
                    <p>{detail}</p>
                    <p></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>

                    </div>
                </div>
            </div>
            <form onSubmit={handlereview}>
            <div className="form-control">
                <label className="input-group input-group-md">
                    <span>MD</span>
                    <input type="text" name='review' placeholder="Type here" className="input input-bordered input-md" />
                    <button>Submit</button>
                </label>
            </div>
            </form>
        </div>
    );
};

export default ServiceFullDetail;