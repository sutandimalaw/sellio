import styles from '../styles/Home.module.css'
import Header from './components/Header/Header'
import Category from './components/Category'
import List from './components/List'

export default function Index() {
  return (
    <div className={styles.container}>
      <Header/>
      <Category/>
      <List />
    </div>
  )
}
