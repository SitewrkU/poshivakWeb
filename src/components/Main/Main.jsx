import styles from './Main.module.css'
const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1>Шановний Микола Володимирович!</h1>
        <p className={styles.contentText}>
          Хотів сказати дякую за семестр. 
          На ваших парах усе пояснюється так, що справді розумієш, 
          про що йдеться. Завжди все чітко, професійно і з можливістю перездати чи уточнити.</p>  
        <p className={styles.contentText}>Я старався весь семестр, робив усе, що було в силах. 
          І був б дуже вдячний якщо ви знайдете часу поставити мені <span className={styles.br}>залік.</span></p> 
        <p className={styles.contentText}>Цей маленький сайт — просто невелике нагадування</p>
        <p className={styles.contentText}>З повагою, Іван</p>
      </div>
      
      <h1 className={styles.PLS}>Залік буде? 	◕_◕</h1>
    </div>
  )
}

export default Main