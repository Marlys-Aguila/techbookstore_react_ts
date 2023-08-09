import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

export function Home() {
  const navigate = useNavigate()

  return (
    <main
      className={`d-flex flex-column align-items-center justify-content-center mt-5 ${styles.mainAnimation}`}
    >
      <h1>
        Bienvenido a{' '}
        <strong>
          {' '}
          <em>TechBookStore</em>
        </strong>
      </h1>
      <h4 className='mt-3'>La tienda virtual donde el futuro de la programación se encuentra a tan solo un clic de distancia</h4>

      <button className={styles.pulse} onClick={() => navigate('/tienda')}>
        Haz click AQUÍ para ir a la tienda
      </button>
    </main>
  )
}
