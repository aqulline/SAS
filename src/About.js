import Header from './components/Header';
import './App.css';
import Hero_about from './components/pages_components/Hero_about';
import './components/pages_components/Comp.css'
import Navbar from './components/NAvbar';
import Table_about from './components/pages_components/About_table';

function About() {
  return (
    <div className='container'>
      <Hero_about></Hero_about>
      <Navbar></Navbar>
      <Table_about></Table_about>
    </div>
  )
}

export default About;