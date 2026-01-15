import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/navigationBar'
import PromoInput from './components/promoInput'
import PromoSuccess from './components/promoSuccess'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<PromoInput />} />
          <Route path="activated" element={<PromoSuccess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
