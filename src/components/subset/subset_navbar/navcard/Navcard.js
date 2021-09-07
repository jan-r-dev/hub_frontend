import React from 'react';
import styles from './Navcard.module.css'

const Navcard = (props) => {
    return ( 
        <button className={styles.navcard} onClick={props.action}>
            {props.title}
        </button>
     );
}
 
export default Navcard;