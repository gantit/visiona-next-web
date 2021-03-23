import styles from './widget.module.scss'

const widget = ({ children, icon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {icon}
      </div>
      {children}
    </div>
  )
}

export default widget
