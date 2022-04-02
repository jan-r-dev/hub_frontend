import React from 'react';
import styles from './Card.module.css'
import { NavLink } from 'react-router-dom';

const Card = (props) => {

    const stack = props.stack.map(el => {
        return <h4 key={el} className={styles.card__h4}>{el}</h4>
      })

    return ( 
        <div className={styles.card}>
            <h3 className={styles.card__h3}>{props.title}</h3>
            <p className={styles.card__description}>{props.summary}</p>
            <time datetime={props.created_on}>{props.created_on.split('T')[0]}</time>
            <h4 className={styles.card__h3}>Stack</h4>
            <div className={styles.card__stack}>
                {stack}
            </div>
            <NavLink to={`/my-work/articles/${props.article_url}`} className={styles.card__exploreBtn}>
                Read article
            </NavLink>
        </div>
     );
};
 
export default Card;