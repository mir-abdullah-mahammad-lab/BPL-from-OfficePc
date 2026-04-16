import { use, React } from 'react'
import AvailablePlayers from '../../Components/AvailablePlayers/AvailablePlayers';

const Players = ({playerPromise}) => {
    // console.log(playerPromise)
    const data = use (playerPromise)
    // console.log('DATA', data)
    return (
        <div className='container mx-auto'>
            {data.length}        
            <AvailablePlayers data={data}></AvailablePlayers>
        </div>
    );
};

export default Players;