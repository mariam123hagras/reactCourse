import {Route, Routes} from 'react-router'
import './App.css'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <>
    <Routes>
    <Route index element={<HomePage/>}/>
    <Route path='checkouts' element={<h1>Checkouts</h1>}/>
    </Routes>
   
    </>
  )
}

export default App
