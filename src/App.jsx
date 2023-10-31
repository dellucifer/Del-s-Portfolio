import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import './app.scss'
import Navbar from './Components/Navbar/Navbar'
import Priyanshu from './Components/Priyanshu/Priyanshu'
import Parallax from './Components/Parallax/Parallax'
import Skills from './Components/Skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id='Homepage'>
        <Navbar />
        <Priyanshu />
      </section>
      <section id='Skills'><Parallax type="skills" /></section>
      <section><Skills /></section>
      <section id='Projects'><Parallax type="projects" /></section>
      <section>Projects</section>
      <section id='Testimonials'>Testimonials</section>
      <section id='Contact'>Contact</section>
    </>
  )
}

export default App
