import React from 'react';
import styles from './Navbar.module.css'

import Navcard from '../../subset/subset_navbar/navcard/Navcard'

const Navbar = (props) => {

  const navcards = [];

  props.navOptions.forEach(el => {
    navcards.push(
      <Navcard title={el.replace('_', ' ')} action={() => props.navigate(el)} />
    )
  })

    return ( 
        <div className={styles.navbar}>
          {navcards}
        </div>
     );
}
 
export default Navbar;