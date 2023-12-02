import { useState } from 'react'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'
import Skills from './Components/Skills'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Projects from './Components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
