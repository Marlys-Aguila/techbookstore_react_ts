import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className='text-center'>
      <h2>Página no encontrada</h2>
      <p>La página que estás buscando no existe.</p>
      <Link to='/tienda'>Volver a la página de inicio</Link>
    </div>
  )
}
