import styles from './NotFound.module.css'

const NotFound = (props) => {

    return (
        <div className={styles.container}>
            <h2 className={styles.infoHeader}>Page not found</h2>
            <p className={styles.infoDetail}>{props.details}</p>
        </div>

     );
}
 
export default NotFound;