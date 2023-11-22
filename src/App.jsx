import { useState } from 'react'
import './app.scss'
import Navbar from './Components/Navbar/Navbar'
import Priyanshu from './Components/Priyanshu/Priyanshu'
import Parallax from './Components/Parallax/Parallax'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Cursor from './Components/Cursor/Cursor'
import Testimonial from './Components/Testimonials/Testimonial'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Cursor />
      <section id='Homepage'>
        <Navbar />
        <Priyanshu />
      </section>
      <section id='Skills'><Parallax type="skills" /></section>
      <section><Skills /></section>
      <section id='Projects'><Parallax type="projects" /></section>
      <Projects />
      <section id='Testimonials'><Testimonial /></section>
      <section id='Contact'>
        <Contact />
      </section>
    </>
  )
}

export default App
