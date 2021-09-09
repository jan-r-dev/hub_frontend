import React from 'react';
import styles from './Navcard.module.css'
import { Link } from 'react-router-dom';

const Navcard = (props) => {
    return ( 
        <Link to={`/${props.title.toLowerCase()}`} className={styles.navcard}>
            {props.title.replace('-', ' ')}
        </Link>  
     );
}
 
export default Navcard;