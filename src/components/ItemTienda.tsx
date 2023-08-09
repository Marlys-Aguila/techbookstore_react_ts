import { Card, Button } from 'react-bootstrap'
import { BiPlus, BiMinus } from 'react-icons/bi'
import { RxCross1 } from 'react-icons/rx'
import { formatCurrency } from '../utils/formatCurrency'
import { truncateText } from '../utils/truncateText'
import { useCarrito } from '../context/CarritoContext'
import styles from './ItemTienda.module.css'

type ItemStoreProps = {
  id: number
  titulo: string
  autor: string
  descripcion: string
  precio: number
  imgUrl: string
}

export function ItemTienda({
  id,
  titulo,
  autor,
  descripcion,
  precio,
  imgUrl
}: ItemStoreProps) {
  const {
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  } = useCarrito()

  const cantidad = getItemQuantity(id)

  return (
    <Card className={`mb-4 ${styles.card}`}>
      <Card.Img
        variant='top'
        src={imgUrl}
        height={400}
        style={{ objectFit: 'cover', objectPosition: 'top' }}
      />
      <Card.Body
        style={{ height: '200px' }}
        className='d-flex flex-column justify-content-between'
      >
        <Card.Title>{truncateText(titulo)}</Card.Title>
        <Card.Text className='d-flex flex-column justify-content-between'>
          <small className='text-right flex-grow-1'>
            Autor: <em>{autor}</em>
          </small>
          <div className='mt-2'>{descripcion}</div>
          <div className='mt-2 text-center flex-grow-1'>
            {formatCurrency(precio)}
          </div>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className='mt-auto'>
          {cantidad === 0 ? (
            <Button className='w-100' onClick={() => increaseQuantity(id)}>
              Agregar al carrito
            </Button>
          ) : (
            <div
              className='d-flex align-items-center flex-column'
              style={{ gap: '0.5rem' }}
            >
              <div
                className='d-flex align-items-center justify-content-center'
                style={{ gap: '0.5rem' }}
              >
                <Button
                  className='rounded-circle btn-sm'
                  onClick={() => decreaseQuantity(id)}
                >
                  <BiMinus size={20} />
                </Button>
                <div>
                  <span className='fs-5 me-1'>{cantidad}</span>
                  en el carrito
                </div>
                <Button
                  className='rounded-circle btn-sm'
                  onClick={() => increaseQuantity(id)}
                >
                  <BiPlus size={20} />
                </Button>
              </div>
              <Button
                variant='btn btn-outline-danger btn-sm'
                onClick={() => removeFromCart(id)}
              >
                <RxCross1 size={20} className='pe-1' />
                Eliminar
              </Button>
            </div>
          )}
        </div>
      </Card.Footer>
    </Card>
  )
}
