import React from 'react';

const FAndQustion = () => {
    return (
        <div>
            <h1 className='text-center text-5xl'>Most Frequently Qustion</h1>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-primary   ">
                    When The Parour Open ?
                </div>
                <div className="collapse-content  text-primary  ">
                    <p>Its generally open 10 am</p>
                </div>

            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-primary">
                    Are you use the right product?
                </div>
                <div className="collapse-content  text-primary">
                    <p>Yes i always use the branded Product.</p>
                </div>
                

            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  text-primary">
                    Are you experinced?
                </div>
                <div className="collapse-content text-primary">
                    <p>Yes i am experinced with 5 year and i have 3 certification in make up</p>
                </div>
                

            </div>
        </div>
    );
};

export default FAndQustion;