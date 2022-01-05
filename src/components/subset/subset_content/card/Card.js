import React from 'react';
import styles from './Card.module.css'
import { NavLink } from 'react-router-dom';

const Card = (props) => {

    const stack = props.stack.map(el => {
        return <h4 key={el} className={styles.card__h4}>{el}</h4>
      })

    // Here the button must trigger opening of the article

    return ( 
        <div className={styles.card}>
            <h3 className={styles.card__h3}>{props.title}</h3>
            <p className={styles.card__description}>{props.summary}</p>
            <h4 className={styles.card__h3}>Stack</h4>
            <div className={styles.card__stack}>
                {stack}
            </div>
            <NavLink to={`/portfolio/articles/${props.link}`} className={styles.card__exploreBtn}>
                Read article
            </NavLink>
        </div>
     );
};
 
export default Card;