import styles from './Hero.module.css'

const Header = () => {
  return (
    <div className={styles.hero}>
      <img src="./poshivak.png" alt="poshivak" />
      <div className={styles.maininfo}>
        <h1>Пошивак Микола Володимирович - <br />найкращий викладач інформатики</h1>
        <h3>від студента, група К-11</h3>
      </div>
    </div>
  )
}

export default Header