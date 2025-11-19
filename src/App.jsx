
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
import Choose from './Components/Choose'
import Reviews from './Components/Reviews'
import News from './Components/News'

import React, { useEffect, useState } from "react";
import Loaders from "./Components/Loaders";
function App() {
  const [count, setCount] = useState(0)
 // Loading code
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
     {loading ? (
        <Loaders />
      ) : (
      <div>
        <Base />
        <About />
        <Productbanner />
        <Productscroll/>
        <Choose/>
        <Reviews/>
        <Faq/>
        <News/>
        <Contact/>
        <Footer />
        
      </div>
       )} 
    </>
  )
}

export default App
