import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Base from './Components/Base'
import About from './Components/About'
import Footer from './Components/Footer'
import Productbanner from './Components/Productbanner'
import Productscroll from './Components/Productscroll'
import Contact from './Components/Contact'
import Faq from './Components/Faq'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Base />
        <About />
        <Productbanner />
        <Productscroll/>
        <Faq/>
        <Contact/>
        <Footer />
        
      </div>
      
    </>
  )
}

export default App
