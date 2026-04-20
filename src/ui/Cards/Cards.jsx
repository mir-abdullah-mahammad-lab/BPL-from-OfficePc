import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const Cards = ({data, setCoins, coins, selectedPlayers, setSelectedPlayers}) => {
    console.log('Cards-DATA', data)
    const [isSelected, setIsSelected] = useState(false)

   
    

    return (
        <div >

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
            data.map((d) => { 
                // console.log(d)
                return (<div key={d.playerName} className="card bg-base-100  shadow-sm">
                <figure>
                    <img
                    src={d.playerImg}
                    alt="Player" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"> <FaUser></FaUser> {d.playerName}</h2>

                    <div className='flex gap-2 items-center justify-between'>
                       <div className='flex gap-2 items-center'>
                         <FaFlag></FaFlag>
                       <p>{d.playerCountry}</p>
                       </div>
                       <button className='btn btn-ghost'>All-rounder</button>
                    </div>
                    <div className="divider"></div>
                    <h2>Rating: {d.rating}</h2>
                    <div className='flex justify-between items-center'>
                        <p>{d.battingStyle} </p>
                        <p className='text-right'>Left Hand Bowl</p>
                    </div>
                    
                    
                    <div className="card-actions justify-between items-center">
                        <p>Price: {d.price}</p>
                        
                    <button 
                    onClick={() =>{setIsSelected(true) 

                          if(newCoin >=0){
                            setCoins(coins - d.price)
                        }else{alert('not enough money')}

                        alert(`${d.playerName} is SOLD`)
                        let newCoin = coins - d.price
                        return
                        
                        }}
                    disabled ={ isSelected ? true : false}
                    className="btn btn-primary"> { isSelected ? "selected" : "Choose Player"}
                    </button>
                    </div>
                </div>
            </div>)
            })
        }
        </div>



            
        </div>
    );
};

export default Cards;