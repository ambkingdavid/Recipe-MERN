import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './pages/Test';
import Layout from './layouts/Layout';
import Home from './pages/Home';

import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path='/signup' element={<Register />} />
          <Route path='/signin' element={<Login />} /> */}
        </Route>
        <Route path='/test' element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
