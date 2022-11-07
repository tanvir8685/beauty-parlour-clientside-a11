import React from 'react';

const FAndQustion = () => {
    return (
        <div>
            <h1 className='text-center'>Most Frequently Qustion</h1>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-primary   ">
                    Click me to show/hide content
                </div>
                <div className="collapse-content  text-primary  ">
                    <p>hello</p>
                </div>

            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Click me to show/hide content
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>hello</p>
                </div>
                

            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Click me to show/hide content
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>hello</p>
                </div>
                

            </div>
        </div>
    );
};

export default FAndQustion;