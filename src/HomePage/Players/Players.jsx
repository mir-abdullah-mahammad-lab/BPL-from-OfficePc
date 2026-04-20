import { use, React, useState } from 'react'
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';


const Players = ({playerPromise, setCoins, coins}) => {
    console.log('players-promise',playerPromise)
    const data = use (playerPromise)
    
    
    const [selectedType, setSelectedType] = useState('available')
    // console.log('akjdalhfaslkdjkls',selectedType)

    const [selectedPlayers, setSelectedPlayers] = useState([])
    return (
        <div className='container mx-auto my-15'>
            <div className='flex justify-between mb-10'>
                {selectedType === 'available'? <p className='font-bold text-3xl'>Available Players</p> :
                 <p className='font-bold text-3xl'>selected(0)</p>}
                <div className='flex gap-1'>
                    <button onClick={()=>{ setSelectedType("available")}}
                    className={`btn ${selectedType === 'available'? "bg-[#E7FE29]" : "bg-red-500"}  rounded-r-none rounded-2xl`}>Available</button>
                    <button onClick={()=>{setSelectedType('selected')}}
                    className={`btn ${selectedType === 'selected'? "bg-[#E7FE29]" : "bg-red-500"}  rounded-l-none rounded-2xl`}>Selceted(0)</button>
                </div>
            </div>       
            { selectedType === 'available'? (<AvailablePlayers 
            data={data} 
            setCoins={setCoins} 
            coins={coins} 
            setSelectedPlayers={setSelectedPlayers}
            selectedPlayers={selectedPlayers}
            ></AvailablePlayers>) :
            (<SelectedPlayers selectedPlayers={selectedPlayers}></SelectedPlayers>) }
        </div>
    );
};

export default Players;