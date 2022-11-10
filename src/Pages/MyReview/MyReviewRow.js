import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewRow = ({mr,handleDelete,handleUpdate}) => {
    const{service_title,comment,_id}=mr;
    
    
    return (
        <div>
            <div className="card w-96 bg-neutral text-neutral-content my-10 mx-6">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service_title}</h2>
                    <p>{comment}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
                        <button onClick={()=>handleUpdate(_id)} className="btn btn-primary"><Link to='/updateReview'>Update</Link>  </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyReviewRow;