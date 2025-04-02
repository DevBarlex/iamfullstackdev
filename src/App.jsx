import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home.jsx'
import InputCreate from "./components/InputCreate.jsx";
import ItemDetailPage from "./ItemDetailPage.jsx";


const App = () => {
  const [data, setData] = useState(null)
  const urlApi = 'http://localhost:3000'

const fetchData = async () => {
  try {
    const response = await fetch(urlApi)
    const resData = await response.json()
    setData(resData)
  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  fetchData()
}, [])

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/create">Crear Tarea</Link>
          
     
        </nav>
        {data === null 
        ? (<div>cargando...</div>) 
        : 
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/create" element={<InputCreate />} />
        </Routes>
        }
        
      </div>
    </Router>
  )
};

export default App;
