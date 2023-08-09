import { Col, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import itemsTienda from '../data/items.json'
import { ItemTienda } from '../components/ItemTienda'
import styles from './Tienda.module.css'

export function Tienda() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Row className={loaded ? `${styles.fadeIn} ${styles.loaded}` : styles.fadeIn} xs={1} md={2} xl={3} xxl={4}>
      {itemsTienda.map((item) => (
        <Col key={item.id}>
          <ItemTienda {...item} />
        </Col>
      ))}
    </Row>
  )
}
