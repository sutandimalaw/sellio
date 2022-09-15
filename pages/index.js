import styles from '../styles/Home.module.css'
import Header from './components/Header'
import Category from './components/Category'

export default function Index() {
  return (
    <div className={styles.container}>
      <Header/>
      <Category/>
    </div>
  )
}
