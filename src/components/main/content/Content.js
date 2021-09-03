import React from 'react';
import styles from './Content.module.css'

import Links from '../../subset/subset_content/links/Links'
import AboutMe from '../../subset/subset_content/aboutme/AboutMe'
import Portfolio from '../../subset/subset_content/portfolio/Portfolio';

/*
Content paths prop:

const contentPaths = {
    showPortfolio: showPortfolio,
    showAboutMe: showAboutMe,
    showLinks: showLinks
};

*/

const Content = (props) => {
    let content;

    if (props.contentPaths.showPortfolio === true) {
        content = <Links/>;
    } else if (props.contentPaths.showAboutMe === true) {
        content = <Portfolio/>;
    } else if (props.contentPaths.showLinks === true) {
        content = <AboutMe/>;
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