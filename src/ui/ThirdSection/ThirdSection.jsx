import React from 'react';

const ThirdSection = () => {
    return (
        <div className='w-full max-w-[100em] h-[8em] bg-linear-to-r  from-[#4F39F6] to-[#9514FA] mt-10'>
            <div className='flex flex-col item-centre md:flex md:flex-row items-center justify-center '>
                <div className='mt-15 mr-20'>
                    <h1 className=' text-xl md:text-4xl text-white'>500+</h1>
                    <p className='text-[10px] text-gray-300 text-center'>Active Users</p>
                </div>

                <div className='mt-15 mr-20'>
                    <h1 className=' text-xl md:text-4xl text-white'>200+</h1>
                    <p className='text-[10px] text-gray-300 text-center'>Premium Tolls</p>
                </div>

                <div className='mt-15 sm:mr-20'>
                    <h1 className='text-xl md:text-4xl text-white'>4.9</h1>
                    <p className='text-[10px] text-gray-300 text-center'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;