import {React, useEffect, useState} from 'react';
import styles from './Portfolio.module.css'
import Card from '../card/Card'
import axios from 'axios';

const dummyData = [
    {title: 'Webscraper Heureka', summary: 'This webscraper programmed in Python scouts a select range of products offered and rates the position of a given company\' s selection in opposition to competitors.', stack: ['Python', 'BeautifulSoup'], link: '\\heureka-scraper'},
    {title: 'Cups to SQL interface', summary: 'This interface was designed to provide a link between a Postgres database and a CUPS printer server.', stack: ['Golang', 'PostgreSQL', 'Linux CUPS'], link: '\\sql-to-cups-'},
    {title: 'ProjectIt', summary: 'An enhanced project sheet designed upon my own process. It allows comprehensive tracking of a project, including features, lessons learned, resources needed, and progress made.', stack: ['React', 'NodeJS', 'MongoDB'], link: '\\project-it'},

]

const Portfolio = () => {
    const [cards, setCards] = useState([]);

    function generateCards (dataArr) {
        const cards = dataArr.map(el => {
            return <Card key={el.title} title={el.title} summary={el.summary} stack={el.stack} link={el.link}/>
        });

        return cards;
    };

    async function requestData () {
        try {
            const data = await axios.get('https://dog.ceo/api/breeds/list/all')
            console.log('success', data)
        } catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        requestData();
        setCards(generateCards(dummyData));
    }, [])
    
    return ( 
        <div className={styles.portfolio}>
            {cards}
        </div>
     );
}
 
export default Portfolio;