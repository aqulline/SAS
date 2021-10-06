import Header from './components/Header';
import Navbar from './components/NAvbar';
import Hero from './components/Hero';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Hero></Hero>
      <Navbar></Navbar>
      <Header></Header>
      <Table></Table>
    </div>
  )
}

export default App;
