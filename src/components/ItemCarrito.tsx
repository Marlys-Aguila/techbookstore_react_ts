import { Button, Stack } from 'react-bootstrap'
import { useCarrito } from '../context/CarritoContext'
import storeItems from '../data/items.json'
import { formatCurrency } from '../utils/formatCurrency'

type ItemCarritoProps = {
  id: number
  quantity: number
}

export function ItemCarrito({ id, quantity }: ItemCarritoProps) {
  const { removeFromCart } = useCarrito()
  const item = storeItems.find((i) => i.id === id)
  if (!item) return null
  return (
    <Stack direction='horizontal' gap={2}>
      <img
        src={item.imgUrl}
        alt={item.titulo}
        style={{
          width: '75px',
          height: '125px',
          objectFit: 'cover',
          objectPosition: 'top'
        }}
      />

      <div className='d-flex justify-content-between' style={{ width: '300px' }}>
        <div>
          {item.titulo}
          {quantity >= 1 && (
            <span className='text-muted ms-1' style={{ fontSize: '0.7rem' }}>
              x{quantity}
            </span>
          )}

          <div className='text-muted' style={{ fontSize: '0.85rem' }}>
            {formatCurrency(item.precio)}
          </div>
        </div>

        <div className='d-flex justify-content-between align-items-center'>
          <div>{formatCurrency(item.precio * quantity)}</div>

          <Button
            variant='outline-danger'
            size='sm'
            onClick={() => removeFromCart(item.id)}
            className='align-self-center ms-2'
          >
            &times;
          </Button>
        </div>
      </div>
    </Stack>
  )
}
