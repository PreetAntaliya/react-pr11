import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Add from './pages/Add'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import View from './pages/View'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/add' element={<Add/>} />
          <Route path='/' element={<View/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
