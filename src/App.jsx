import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className='full-container'>
        <div className='content'>
          <Intro />
          <Education />
          <Projects />
          <Skills />
        </div>
        <Footer />
      </div>
      
    </>
  )
}

export default App
