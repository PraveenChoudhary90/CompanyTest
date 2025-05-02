
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import Skkils from './Pages/Skkils'
import About from './Pages/About'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='skills' element={<Skkils/>}/>
      
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
