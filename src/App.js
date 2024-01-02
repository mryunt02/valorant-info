import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Agents from "./components/Agents";
import Weapons from "./components/Weapons";
import Maps from './components/Maps';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = () => {
      fetch('https://valorant-api.com/v1/agents')
        .then(response => response.json())
        .then(data => setData(data.data))
        .catch(error => console.log(error))
    }
    getData()
  }, [])

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' />
          <Route path='/agents' element={<Agents data={data} />} />
          <Route path='/weapons' element={<Weapons />} />
          <Route path='/maps' element={<Maps />} />
        </Routes>
      </BrowserRouter>




    </div>
  );
}

export default App;
