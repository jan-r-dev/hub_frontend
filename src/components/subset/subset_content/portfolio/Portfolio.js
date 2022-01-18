import { React, useEffect, useState } from 'react';
import styles from './Portfolio.module.css';
import Card from '../card/Card';
import axios from 'axios';
import Loader from '../../technicals/loader/Loader'
import { Fragment } from 'react/cjs/react.production.min';
import PageCount from '../pageCount/PageCount';

const itemsPerPage = 3

const Portfolio = () => {
    const [currCards, setCurrCards] = useState();
    const [cachedCards, setCachedCards] = useState([]);
    const [oldestCard, setOldestCard] = useState(Math.trunc((Date.now() / 1000)));
    const [projectCount, setProjectCount] = useState();
    const [page, setPage] = useState(1)

    async function fetchData() {
        try {
            const data = await axios.get(`http://localhost:8080/projects/${oldestCard}`);

            setCurrCards(createCardsFromNewData(data.data));
        } catch (err) {
            if (err instanceof TypeError) {
                alert('Bottom reached');
            };
        };
    };

    async function fetchProjectCount() {
        try {
            const data = await axios.get('http://localhost:8080/projects');

            setProjectCount(data.data);
        } catch (err) {
            alert(err);
        };
    };

    function createCardsFromNewData(data) {
        const currCards = data.map((el, i) => {
            const convertedTimestamp = Math.trunc((Date.parse(el.created_on) / 1000))

            if (i === (data.length - 1)) {
                setOldestCard(convertedTimestamp);
            };

            const generatedCard = <Card key={convertedTimestamp} timestamp={convertedTimestamp} title={el.title} summary={el.summary} stack={el.stack} link={el.link} />

            return generatedCard;
        });

        setCachedCards(cachedCards.concat(currCards))
        if (currCards.length < 3) fillInEmptyDivs(currCards)
        return currCards;
    };

    function fetchCardsFromCache(indexCurrOldest) {
        const cardsFromCache = [];

        for (let i = 1; i <= 3; i++) {
            if (cachedCards[i + indexCurrOldest] === undefined) {
                break;
            } else {
                cardsFromCache.push(cachedCards[i + indexCurrOldest]);
            };
        };

        setOldestCard(cardsFromCache[cardsFromCache.length - 1].props.timestamp);
        if (cardsFromCache.length < 3) fillInEmptyDivs(cardsFromCache)
        setCurrCards(cardsFromCache);
    };

    const pageUp = () => {
        const cacheIndex = cachedCards.findIndex(el => el.key === currCards[0].key);
        if (cacheIndex === 0) return alert('Top reached');

        const cardsFromCache = [];

        let counter = cacheIndex - 3;
        while (counter !== cacheIndex) {
            cardsFromCache.push(cachedCards[counter]);
            counter++;
        };

        setCurrCards(cardsFromCache);
        setOldestCard(cardsFromCache[cardsFromCache.length - 1].props.timestamp);
        setPage(() => page - 1)
    };

    const pageDown = () => {
        const indexCurrOldest = cachedCards.findIndex(el => el.props.timestamp === oldestCard);

        if (indexCurrOldest + 1 === cachedCards.length) {
            fetchData();
        } else {
            fetchCardsFromCache(indexCurrOldest);
        };

        setPage(() => page + 1)
    };

    const fillInEmptyDivs = (cards) => {
        let key = 10
        while (cards.length < 3) {
            cards.push(<div key={key + cards.length}></div>);
        };

        return cards;
    };

    useEffect(() => {
        fetchData()
        fetchProjectCount()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const isReady = () => {
        if (currCards === undefined || projectCount === undefined) {
            return (
                <div className={styles.loaderContainer}>
                    <Loader />
                </div>
            )
        } else {
            return (
                <Fragment>
                    <div className={styles.portfolio}>
                        <button className={styles.pageButton} onClick={pageUp}>❮</button>
                        {currCards}
                        <button className={styles.pageButton} onClick={pageDown}>❯</button>
                    </div>
                    <PageCount itemCount={projectCount} itemsPerPage={itemsPerPage} itemActive={page} />
                </Fragment>
            );
        };
    };

    return (
        isReady()
    );
}

export default Portfolio;