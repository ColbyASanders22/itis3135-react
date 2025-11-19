import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><>
     <Header />
     <Home />
     <Footer />
    </></>
  )
}

export default App
