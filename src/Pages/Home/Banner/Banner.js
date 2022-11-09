import React from 'react';

const Banner = () => {
    return (
        <div className='mb-10'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://media.istockphoto.com/id/496584963/vector/beauty-salon-worker-with-brush.jpg?s=612x612&w=0&k=20&c=obToHREpaj7nQ8-_qOS45LDl5VWy0bsq1-8pDZMR2UQ=")` }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there is Rhadik's Beauty Parlour</h1>
                        <p className="mb-5 text-xl font-bold ">I am housewife but my passion is for beauty .I get certification as a make up artist</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;