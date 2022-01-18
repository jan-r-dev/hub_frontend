import React from 'react';
import styles from './Navbar.module.css'

import Navcard from '../../subset/subset_navbar/navcard/Navcard'

const Navbar = () => {

  const navOptions = ['My-work', 'About-me'];

  const navcards = navOptions.map(el => {
    return <Navcard title={el} key={el}/>
  })

    return ( 
        <div className={styles.navbar}>
          {navcards}
        </div>
     );
}
 
export default Navbar;