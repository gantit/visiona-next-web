import styles from './titleText.module.scss'

const titleText = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default titleText
