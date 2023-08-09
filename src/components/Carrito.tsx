import { Offcanvas, Stack } from 'react-bootstrap'
import { useCarrito } from '../context/CarritoContext'
import { ItemCarrito } from './ItemCarrito'
import { formatCurrency } from '../utils/formatCurrency'
import storeItems from '../data/items.json'

type CarritoProps = {
  isOpen: boolean
}

export function Carrito({ isOpen }: CarritoProps) {
  const { closeCart, cartItems } = useCarrito()

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrito</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {
            cartItems.map((item) => (
              <ItemCarrito key={item.id} {...item} />
            ))
          }

          <div className='ms-auto fw-bold fs-5'>
            Total { formatCurrency(cartItems.reduce( (total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id)
              return total + (item?.precio || 0) * cartItem.quantity
            }, 0 )) }
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
