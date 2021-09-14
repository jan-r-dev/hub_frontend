import React from 'react';
import styles from './Portfolio.module.css'
import Card from '../card/Card'

const Portfolio = () => {
    // For each item returned by an API call create one instance of card
    // Put all cards inside array and return them

    const placeTitle = 'Cups to SQL interface'
    const placeDesc = 'This interface was designed to provide a link between a Postgres database and a CUPS printer server.'
    const placeStack = ['MongoDB', 'Golang', 'React']
    
    return ( 
        <div className={styles.portfolio}>
            <Card title={placeTitle} shortDesc={placeDesc} stack={placeStack}/>
            <Card title={placeTitle} shortDesc={placeDesc} stack={placeStack}/>
            <Card title={placeTitle} shortDesc={placeDesc} stack={placeStack}/>
        </div>
     );
}
 
export default Portfolio;