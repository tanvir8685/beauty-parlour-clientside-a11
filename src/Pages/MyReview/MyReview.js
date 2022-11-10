import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    const [myReview, setMyreview] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://beauty-parlour-server-nine.vercel.app/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyreview(data))
    }, [user?.email])


    const handleDelete=_id=>{
        const processed=window.confirm("are you sure")
        if (processed){
            fetch(`https://beauty-parlour-server-nine.vercel.app/review/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    const remaining=myReview.filter(rv=>rv._id !== _id);
                    setMyreview(remaining);
                }
            })
        }

    }
    return (
        <div>
            {
                myReview.length>0?
            
                <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
            {
                myReview.map(mr=><MyReviewRow
                key={mr.id}
                mr={mr}
                handleDelete={handleDelete}></MyReviewRow>)
            }
            </div>
            </>:
            <p>You have no review</p>
}
        </div>
    );
};

export default MyReview;