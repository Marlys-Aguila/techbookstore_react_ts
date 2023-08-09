import { useSpring, animated, config } from '@react-spring/web'

type ConfigValue = {
  readonly tension: number
  readonly friction: number
}

type SpringInputProps = {
  from: {
    opacity: number
    marginTop: number
  }
  to: {
    opacity: number
    marginTop: number
  }
  delay: number
  config: ConfigValue
}

export function About() {
  const props1 = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
    delay: 200,
    config: config.slow
  } as SpringInputProps)

  const props2 = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
    delay: 1400,
    config: config.slow
  } as SpringInputProps)

  const props3 = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
    delay: 2900,
    config: config.slow
  } as SpringInputProps)

  return (
    <>
      <animated.section style={props1}>
        <h2>¿Quiénes somos?</h2>
        <p className='lead ms-4 mt-3'>
          Fundada en 2023,{' '}
          <strong>
            <em>TechBookStore</em>
          </strong>{' '}
          es el sueño hecho realidad de un grupo de apasionados desarrolladores
          y amantes de la literatura tecnológica. Observamos el rápido avance
          del mundo digital y comprendimos la creciente necesidad de
          proporcionar fuentes de conocimiento actualizadas y relevantes a
          aquellos que buscan entrar o avanzar en el mundo de la programación.
        </p>
      </animated.section>
      <br />
      <animated.section style={props2}>
        <h4>Nuestra Misión</h4>
        <p className='lead ms-4 mt-3'>
          Creemos que el conocimiento es la herramienta más valiosa en la era
          digital. Es por ello que nuestra misión es facilitar el acceso a los
          recursos educativos más actuales y avanzados en el campo de la
          tecnología y programación.
        </p>
      </animated.section>
      <br />
      <animated.section style={props3}>
        <h4>Compromiso Sostenible:</h4>
        <p className='lead ms-4 mt-3'>
          La tecnología puede ser verde. Estamos comprometidos con el medio
          ambiente y, por ello, incentivamos el uso de eBooks y colaboramos con
          proyectos de reforestación a nivel global.
        </p>
        <p className='lead ms-4'>
          Al elegir a{' '}
          <strong>
            <em>TechBookStore</em>
          </strong>
          , no solo estás adquiriendo un libro; estás invirtiendo en tu futuro y
          en el de nuestro planeta.
        </p>
        <p className='lead ms-4'>
          Únete a nosotros en esta emocionante aventura de código y aprendizaje.
          ¡Esperamos ser tu aliado en este viaje hacia la excelencia en
          programación!
        </p>
      </animated.section>
    </>
  )
}
