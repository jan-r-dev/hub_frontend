import React from 'react';
import styles from './Content.module.css';
import {Route, Switch} from 'react-router-dom';

import Links from '../../subset/subset_content/links/Links';
import AboutMe from '../../subset/subset_content/aboutme/AboutMe';
import Portfolio from '../../subset/subset_content/portfolio/Portfolio';
import Article from '../../subset/subset_content/article/Article'

const Content = () => {

    return ( 
        <main className={styles.content}>
            <Switch>
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
                <Route path='/articles/:articleId'>
                    <Article/>
                </Route>
            </Switch>f
        </main>
     );
}
 
export default Content;