import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Add from './pages/Add'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Add/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
