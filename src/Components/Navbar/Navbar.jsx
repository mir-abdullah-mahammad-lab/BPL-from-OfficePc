import React from 'react';
import dollar1 from '../../assets/dollar1.png'
import logo from '../../assets/logo.png'


const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100 shadow-sm flex justify-between">
                <div>
                    <img src={logo} alt="" />
                
                </div>
                <div className="flex-none">
                    <button className="flex gap-2 item-centre font-bold">
                        <p>0 coins</p>
                        <img src={dollar1} alt="Dollar" />
                    </button>
                    

                </div>
            </div>
        </div>
    );
};

export default Navbar;