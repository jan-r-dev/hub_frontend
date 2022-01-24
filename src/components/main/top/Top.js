import styles from './Top.module.css'
import Header from './header/Header'
import Navbar from './navbar/Navbar'

const Top = () => {

    return (
        <div className={styles.container}>
            <Navbar />
            <Header />
        </div>
    )
}

export default Top