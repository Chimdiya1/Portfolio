import React from 'react';
import './App.css';
import Contact from './components/contact/contact.component';
import Header from './components/header/header.component'
import Home from './components/home/home.component';
import Projects from './components/projects/projects.component';
import Resume from './components/Resume/resume.component';
import Footer from './components/footer/footer.component';
import Cursor from './components/cursor/cursor.component'

function App() {
  return (
    <div className="App">
      <Cursor/>
      <Header />
      <Home />
      <Projects />
      <Resume />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
