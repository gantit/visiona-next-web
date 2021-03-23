import styles from './temperatureDetail.module.scss'

import Check from 'assets/icons/check'


const temperatureDetail = ({ children, icon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.maxWidth}>
        <div className={styles.detail}>
          <h3>Soluciones Integrales para la medición de temperaturas</h3>
          <p>Realizamos un estudio de tu caso y acompañamos la tecnología con soluciones de vigilancia y control de accesos que garanticen la correcta detección e implantación de protocolos de seguridad.</p>
          <ul>
            <li><Check />Servicios de vigilancia</li>
            <li><Check />Instalación de cámaras de seguridad</li>
            <li><Check />Conexión al Centro de control</li>
            <li><Check />Tecnologías adicionales de control de accesos</li>
          </ul>
        </div>
        <div className={styles.images}>
          <img
            src="https://marketing.seguridad.prosegur.es/hubfs/Landing/Termo%20Vigilancia/image001@2x.jpg" alt="temperatura de personas"
          />
        </div>
      </div>
    </div>
  )
}

export default temperatureDetail
