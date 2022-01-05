import React from 'react';
import styles from './Navcard.module.css'
import { NavLink } from 'react-router-dom';

const Navcard = (props) => {
    return ( 
        <NavLink to={`/${props.title.toLowerCase()}`} className={styles.navcard} activeClassName={styles.active}>
            {props.title.replace('-', ' ')}
        </NavLink>  
     );
}
 
export default Navcard;

/*

<NavLink
  to="/faq"
  className={isActive => "nav-link" + (!isActive ? " unselected" : "")
  }
>
  FAQs
</NavLink>

*/