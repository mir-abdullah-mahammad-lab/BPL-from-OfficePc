
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Players from './HomePage/Players/Players'

const fetchPlayer = async() => {
  const res =  fetch('/data.json').then(res => res.json())
  return res
}


function App() {
  const playerPromise = fetchPlayer()
  console.log(playerPromise)


  return (
   <>
    <Navbar ></Navbar>
    <Banner></Banner>
    <Suspense fallback="Spinning take form daisyUI later">
      <Players playerPromise={playerPromise}></Players>  
    </Suspense>
    </>
   
    
  )
}

export default App
