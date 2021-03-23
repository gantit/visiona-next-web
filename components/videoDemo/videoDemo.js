import styles from './videoDemo.module.scss'

const videoDemo = () => (
  <div className={styles.container}>
    <div className={styles.video}>
      <video controls={false} autoplay="autoplay" loop="loop" muted>
        <source src="https://marketing.seguridad.prosegur.es/hubfs/Landing/Termo%20Vigilancia/Secuencia_01.mp4" type="video/mp4" />
      </video>
    </div>
    <div className={styles.description}>
      <h4>Soluciones innovadoras de la mano de profesionales experimentados</h4>
      <p>Ponemos a tu disposición a nuestro equipo de profesionales para ofrecerte soluciones innovadoras que minimicen el impacto en tu negocio.</p>
    </div>
  </div>
)

export default videoDemo
