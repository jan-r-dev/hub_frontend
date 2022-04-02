import { React, useEffect, useState } from 'react';
import styles from './Portfolio.module.css';
import Card from '../card/Card';
import axios from 'axios';
import Loader from '../../technicals/loader/Loader'

const Portfolio = () => {
    const [cards, setCards] = useState();

    async function fetchData() {
        try {
            const data = await axios.get(`http://localhost:8080/projects`);

            setCards(createCards(data.data));
        } catch (err) {
            alert(err)
        };
    };

    function createCards(data) {
        const cards = data.map(el => {

            const generatedCard = <Card
                key={el.pk}
                pk={el.pk}
                title={el.title}
                summary={el.summary}
                article_url={el.article_url}
                created_on={el.created_on}
                stack={el.stack}
            />

            return generatedCard;
        });

        return cards
    };

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const isReady = () => {
        if (cards === undefined) {
            return (
                <div className={styles.loaderContainer}>
                    <Loader />
                </div>
            )
        } else {
            return (
                <div className={styles.portfolio}>
                    {cards}
                </div>
            );
        };
    };

    return (
        isReady()
    );
}

export default Portfolio;