import React from 'react';

const ReviewSection = ({rev}) => {
    const {name,comment,photo}=rev;
    return (
        <div className="flex items-center">
  <img className='mask mask-squircle w-12 h-12' alt='' src={photo}/>
  <div>
    <strong>Name : {name}</strong>
    <p>Comment : {comment}</p>
  </div>
</div>
    );
};

export default ReviewSection;