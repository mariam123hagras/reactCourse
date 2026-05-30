import {Route, Routes} from 'react-router'
import './App.css'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import { NotFound } from './pages/NotFound'


function App() {
  return (
    <>
    <Routes>
    <Route index element={<HomePage/>}/>
    <Route path='checkouts' element={<CheckoutPage/>}/>
    <Route path='orders' element={<OrdersPage/>}/>
    <Route path='tracking' element={<TrackingPage/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
   
    </>
  )
}

export default App
