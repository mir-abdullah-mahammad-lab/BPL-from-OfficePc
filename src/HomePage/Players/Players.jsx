import { use, React } from 'react'

const Players = ({playerPromise}) => {
    // console.log(playerPromise)
    const data = use (playerPromise)
    console.log('DATA', data)
    return (
        <div>
            Players
        </div>
    );
};

export default Players;