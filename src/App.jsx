
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Players from './HomePage/Players/Players'
import MiddleSection from './Components/MiddleSection/MiddleSection'
import ThirdSection from './ui/ThirdSection/ThirdSection'

const fetchPlayer = async() => {
  const res =  await fetch('/data.json').then(res => res.json())
  return res
}


function App() {
  const playerPromise = fetchPlayer()
  console.log(playerPromise)

  const [coins, setCoins] = useState(50000)
  console.log('apps', coins)

  return (
   <>
    <Navbar coins={coins}></Navbar>
    <Banner></Banner>
    <Suspense fallback="Spinning take form daisyUI later">
      <Players playerPromise={playerPromise} setCoins={setCoins} coins={coins}></Players>  
    </Suspense>

    <MiddleSection></MiddleSection>
    <ThirdSection ></ThirdSection>
    </>
   
    
  )
}

export default App
