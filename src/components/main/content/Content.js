import React from 'react';
import styles from './Content.module.css';
import {Route, Switch} from 'react-router-dom';

import AboutMe from '../../subset/subset_content/aboutme/AboutMe';
import Portfolio from '../../subset/subset_content/portfolio/Portfolio';
import Article from '../../subset/subset_content/article/Article'
import NotFound from '../../subset/technicals/notfound/NotFound'

const Content = () => {

    return ( 
        <main className={styles.content}>
            <Switch>
                <Route path="/" exact>
                    <Portfolio />
                </Route>
                <Route path="/my-work" exact>
                    <Portfolio />
                </Route>
                <Route path="/about-me" exact>
                    <AboutMe />
                </Route>
                <Route path='/my-work/articles/:article_url'>
                    <Article/>
                </Route>
                <Route path='*'>
                    <NotFound details='You have entered my page using an unrouted link. Use the navbar to navigate to available content.'/>
                </Route>
            </Switch>
        </main>
     );
}



export default Content;