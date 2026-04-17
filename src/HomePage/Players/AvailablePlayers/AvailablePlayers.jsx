import React from 'react';
import Cards from '../../../ui/Cards/Cards';


const AvailablePlayers = ({data, setCoins, coins, selectedPlayers, setSelectedPlayers}) => {
    console.log('availablePlayer',data)
    return (
    <Cards data={data} setCoins={setCoins} coins={coins} selectedPlayers={selectedPlayers}
    setSelectedPlayers={setSelectedPlayers}>

    </Cards>)
};

export default AvailablePlayers;