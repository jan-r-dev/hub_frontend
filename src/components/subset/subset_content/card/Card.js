import React from 'react';
import styles from './Card.module.css'

const Card = (props) => {

    const stack = props.stack.map(el => {
        return <h4 className={styles.card__h4}>{el}</h4>
      })

    return ( 
        <div className={styles.card}>
            <h3 className={styles.card__h3}>{props.title}</h3>
            <p className={styles.card__description}>{props.summary}</p>
            <h4 className={styles.card__h3}>Stack</h4>
            <div className={styles.card__stack}>
                {stack}
            </div>

        </div>
     );
}
 
export default Card;