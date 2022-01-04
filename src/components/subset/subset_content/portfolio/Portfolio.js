import {React, useEffect, useState} from 'react';
import styles from './Portfolio.module.css';
import Card from '../card/Card';
import axios from 'axios';

const Portfolio = () => {
    const [cards, setCards] = useState([]);
    const [oldestCard, setOldestCard] = useState(Math.trunc((Date.now() / 1000)));

    async function fetchData () {
        try {
            const data = await axios.get(`http://localhost:8080/projects/${oldestCard}`);

            setCards(generateCards(data.data));
        } catch (err) {
            console.log(err);
        };
    };

    function generateCards (data) {
        const cards = data.map((el, i) => {
            if (i === (data.length - 1)) {
                setOldestCard(Math.trunc((Date.parse(el.created_on) / 1000)));
            };

            return <Card key={el.created_on} title={el.title} summary={el.summary} stack={el.stack} link={el.link}/>;
        });

        return cards;
    };

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return ( 
        <div className={styles.portfolio}>
            {cards}
        </div>
     );
}
 
export default Portfolio;