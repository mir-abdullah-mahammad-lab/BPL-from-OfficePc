import React from 'react';

const MiddleSection = () => {
    return (
        <div className='w-[100em] h-[25em] bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex flex-col items-center justify-center space-x-7'>
            <div>
                        <h1 className='text-4xl text-white '>Ready to Transform Your Workflow?</h1>
                    <p className='text-base-300'>Join thousands of professionals who are already using Digitools to work smarter.<br></br> 
                    Start your free trial today.
                 </p>
            </div>
            <div className='flex gap-4 text-center'> 
                <button className="btn rounded-4xl bg-white "> <span className='bg-linear-to-r  from-[#4F39F6] to-[#9514FA] bg-clip-text'>Explore Products</span> </button>
                <button className="btn btn-info rounded-4xl">View Pricing</button>
            </div>
        </div>
    );
};

export default MiddleSection;