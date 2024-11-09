import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Registration from './Components/Registration'
import Login from './Components/Login'
 

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
