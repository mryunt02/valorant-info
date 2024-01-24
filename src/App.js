import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Agents from "./components/Agents";
import Weapons from "./components/Weapons";
import Maps from './components/Maps';
import Homepage from './components/Homepage';
import Jett from './Agentcomponents/Jett';
import Breach from './Agentcomponents/Breach';
import Fade from './Agentcomponents/Fade';
import './index.css'

function App() {
  const [data, setData] = useState([]);
  const [weapons, setWeapons] = useState([]);
  useEffect(() => {
    const getData = () => {
      fetch('https://valorant-api.com/v1/agents')
        .then(response => response.json())
        .then(data => setData(data.data))
        .catch(error => console.log(error))
    }
    getData()
  }, [])

  useEffect(() => {
    const getWeapons = () => {
      fetch('https://valorant-api.com/v1/weapons')
        .then(response => response.json())
        .then(weapons => setWeapons(weapons.data))
        .catch(error => console.log(error))
    }
    getWeapons();
  }, [])

  return (
    <div className="App">
      <Header />





      <Routes>
        <Route element={<Header />} />
        <Route path='/' element={<Homepage data={data} />} />
        <Route path='/weapons' element={<Weapons weapons={weapons} />} />
        <Route path='/agents' element={<Agents data={data} value="Gekko" />} />
        <Route path='/jett' element={<Jett data={data} value="Jett" />} />
        <Route path='/fade' element={<Fade data={data} value="Fade" />} />
        <Route path='/breach' element={<Breach data={data} value="Breach" />} />
        <Route path='/dlock' element={<Agents data={data} value="Deadlock" />} />






      </Routes>





    </div>
  );
}

export default App;
