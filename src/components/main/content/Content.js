import React from 'react';
import styles from './Content.module.css'

import Links from '../../subset/subset_content/links/Links'
import AboutMe from '../../subset/subset_content/aboutme/AboutMe'
import Portfolio from '../../subset/subset_content/portfolio/Portfolio';

const Content = (props) => {
    let content;

    if (props.contentOption === 'Portfolio') {
        content = <Portfolio/>
    } else if (props.contentOption === 'About_me') {
        content = <AboutMe/>
    } else if (props.contentOption === 'Links') {
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