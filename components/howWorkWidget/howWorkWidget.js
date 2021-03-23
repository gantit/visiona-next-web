import Widget from 'components/widget'
import Police from 'assets/icons/policeMan'
import Tools from 'assets/icons/tools'
import TodoList from 'assets/icons/todoList'
import HandShield from 'assets/icons/handShield'
import styles from './howWorkWidget.module.scss'

const widget = ({ children }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}> ¿Cómo funciona? </h3>
      <div className={styles.widgets}>
        <Widget icon={<Police />}>
          <p>Controla los accesos midiendo la temperatura sin establecer contacto desde distancias de hasta 3 metros</p>
        </Widget>
        <Widget icon={<Tools />}>
          <p>El algoritmo IA incorporado permite la medición de múltiples personas en tiempo real, teniendo un control exhaustivo del flujo de personas</p>
        </Widget>
        <Widget icon={<HandShield />}>
          <p>Configura alertas inteligentes sobre temperaturas anormales con precisión de ±0.3°C</p>
        </Widget>
        <Widget icon={<TodoList />}>
          <p>Nos encargamos de la instalación y el mantenimiento de la tecnología para asegurarnos de su correcta calibración y fiabilidad de resultados</p>
        </Widget>
      </div>
    </div>
  )
}

export default widget
