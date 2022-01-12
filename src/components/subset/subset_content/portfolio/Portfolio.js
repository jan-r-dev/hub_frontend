import {React, useEffect, useState} from 'react';
import styles from './Portfolio.module.css';
import Card from '../card/Card';
import axios from 'axios';
import Loader from '../../technicals/loader/Loader'
import { Fragment } from 'react/cjs/react.production.min';

const Portfolio = () => {
    const [currCards, setCurrCards] = useState();
    const [cachedCards, setCachedCards] = useState([]);
    const [oldestCard, setOldestCard] = useState(Math.trunc((Date.now() / 1000)));

    async function fetchData () {
        try {
            const data = await axios.get(`http://localhost:8080/projects/${oldestCard}`);

            setCurrCards(generatecurrCards(data.data));
        } catch (err) {
            alert(err);
        };
    };

    function generatecurrCards (data) {
        const currCards = data.map((el, i) => {
            if (i === (data.length - 1)) {
                setOldestCard(Math.trunc((Date.parse(el.created_on) / 1000)));
            };

            const generatedCard = <Card key={el.created_on} timestamp={el.created_on} title={el.title} summary={el.summary} stack={el.stack} link={el.link}/>

            return generatedCard;
        });

        setCachedCards(cachedCards.concat(currCards))
        return currCards;
    };

    const pageUp = () => {
        const cacheIndex = cachedCards.findIndex(el => el.key === currCards[0].key);
        const cardsFromCache = [];

        let counter = cacheIndex - 3;
        while (counter !== cacheIndex) {
            cardsFromCache.push(cachedCards[counter]);
            counter++;
        };

        setCurrCards(cardsFromCache);
        setOldestCard(Date.parse(cardsFromCache[cardsFromCache.length-1].props.timestamp) / 1000);
    };

    const pageDown = () => {
        const indexCurrOldest = cachedCards.findIndex(el => Math.trunc(Date.parse(el.props.timestamp) / 1000) === oldestCard)

        console.log(indexCurrOldest + 1 === cachedCards.length)
        /////// Continue from here
    }

    // const showState = () => {
    //     console.log(cachedCards)
    // }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return ( 
        <Fragment>
        <div className={styles.portfolio}>
            <button onClick={pageUp}>PageUp</button>
            {currCards === undefined ? <Loader /> : currCards}
            <button onClick={fetchData}>PageDown</button>
        </div>
        <button onClick={pageDown}>Expose state</button>
        </Fragment>
     );
}
 
export default Portfolio;