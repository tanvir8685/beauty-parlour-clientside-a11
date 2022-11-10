import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ReviewSection = ({ rev }) => {
  const { name, comment, photo } = rev;
  return (
    <div className="flex items-center">
      <PhotoProvider>
        <PhotoView src={photo}>
          <img className='mask mask-squircle w-12 h-12' alt='' src={photo} />
        </PhotoView>
      </PhotoProvider>

      <div>
        <strong>Name : {name}</strong>
        <p>Comment : {comment}</p>
      </div>
    </div>
  );
};

export default ReviewSection;