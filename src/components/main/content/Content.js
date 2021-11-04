import React from 'react';
import styles from './Content.module.css';
import {Route} from 'react-router-dom';

import Links from '../../subset/subset_content/links/Links';
import AboutMe from '../../subset/subset_content/aboutme/AboutMe';
import Portfolio from '../../subset/subset_content/portfolio/Portfolio';

const Content = () => {

    return ( 
        <main className={styles.content}>
            <Route path="/" exact>
                <Portfolio />
            </Route>

            <Route path="/portfolio" exact>
                <Portfolio />
            </Route>

            <Route path="/about-me" exact>
                <AboutMe />
            </Route>
            
            <Route path="/links" exact>
                <Links />
            </Route>
        </main>
     );
}
 
export default Content;