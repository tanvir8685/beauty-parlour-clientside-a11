import React from 'react';

const UpdateReview = () => {
    return (
        <div>
            <form >
                <div className='form-control'>
                    <label className="input-group input-group-md">
                        <input type="text" name="update" id="" placeholder='write your comment' />
                        <button > Update</button>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default UpdateReview;