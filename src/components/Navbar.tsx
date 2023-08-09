import { Navbar as NavbarBs, Nav, Container, Button } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useCarrito } from '../context/CarritoContext'

export function Navbar() {
  const { openCart, cartQuantity } = useCarrito()

  return (
    <NavbarBs className='bg-dark shadow mb-3' sticky='top' data-bs-theme='dark'>
      <Container className='me-auto'>
        <Nav>
          <Nav.Link to='/' as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to='/tienda' as={NavLink}>
            Tienda
          </Nav.Link>
          <Nav.Link to='/about' as={NavLink}>
            About
          </Nav.Link>
        </Nav>

        <Button
          onClick={openCart}
          style={{ width: '3rem', height: '3rem', position: 'relative' }}
          variant='btn btn-light'
          className='rounded-circle'
        >
          <FaShoppingCart size={20} />

          {cartQuantity > 0 && (
            <div
              className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
              style={{
                color: 'white',
                width: '1.5rem',
                height: '1.5rem',
                position: 'absolute',
                bottom: 0,
                right: 0,
                transform: 'translate(25%, 25%)'
              }}
            >
              {cartQuantity}
            </div>
          )}
        </Button>
      </Container>
    </NavbarBs>
  )
}
