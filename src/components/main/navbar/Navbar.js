import React from 'react';
import styles from './Navbar.module.css'

//import Navcard from '../../subset/subset_navbar/navcard/Navcard'

const Navbar = (props) => {
    return ( 
        <div className={styles.navbar}>
            <button className={styles.placeholder} onClick={props.navbarPaths.showPortfolio}> Portfolio </button>
            <button className={styles.placeholder} onClick={props.navbarPaths.showAboutMe}> AboutMe </button>
            <button className={styles.placeholder} onClick={props.navbarPaths.showLinks}> Links </button>
        </div>
     );
}
 
export default Navbar;

/*
const navbarPaths = {
  showPortfolio,
  showAboutMe,
  showLinks,
};
*/