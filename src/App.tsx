import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Tienda } from './pages/Tienda'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'
import { CarritoProvider } from './context/CarritoContext'
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <CarritoProvider>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tienda' element={<Tienda />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </CarritoProvider>
  )
}

export default App
