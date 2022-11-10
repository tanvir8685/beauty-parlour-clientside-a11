
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewSection from '../ReviewSection/ReviewSection';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceFullDetail = () => {
    const service = useLoaderData();
    const { _id, title, detail, price, img } = service;
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/review?service=${_id}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])



    const handlereview = (event) => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        console.log(review)

        const reviewFordb = {
            service: _id,
            service_title: title,
            name: user.displayName,
            photo: user.photoURL,
            comment: review,
            email: user.email

        }
        console.log(reviewFordb)
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewFordb)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                }
                console.log(data)
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <h1>This is service full details</h1>
            <div className="card w-96 bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <figure><img src={img} alt="Shoes" /></figure>
                    </PhotoView>
                </PhotoProvider>

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
            <h2>There have  {review.length} reviews</h2>
            {
                review.map(rev => <ReviewSection
                    key={rev._id}
                    rev={rev}></ReviewSection>)
            }
            <form onSubmit={handlereview}>
                <div className="form-control">
                    <label className="input-group input-group-md">
                        <span>MD</span>
                        <input type="text" name='review' placeholder="Type here" className="input input-bordered input-md" />

                        {
                            user?.uid ? <button>Submit</button> : <p>To comment you have to login </p>
                        }


                    </label>
                </div>
            </form>
        </div>
    );
};

export default ServiceFullDetail;