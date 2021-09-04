import React from 'react';
import styles from './Content.module.css'

import Links from '../../subset/subset_content/links/Links'
import AboutMe from '../../subset/subset_content/aboutme/AboutMe'
import Portfolio from '../../subset/subset_content/portfolio/Portfolio';

/*
Content paths prop:

  const contentPaths = {
    portfolio,
    aboutMe,
    links,
  };

*/

const Content = (props) => {
    let content;

    if (props.contentPaths.portfolio === true) {
        content = <Portfolio/>
    } else if (props.contentPaths.aboutMe === true) {
        content = <AboutMe/>
    } else if (props.contentPaths.links === true) {
        content = <Links/>;
    } else {
        // Placeholder
        // May change in the future to a dedicated Intro component
        content = <Portfolio/>;
    };

    return ( 
        <main className={styles.content}>
            {content}
        </main>
     );
}
 
export default Content;