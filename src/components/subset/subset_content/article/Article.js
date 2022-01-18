import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from './Article.module.css';
import ReactEmbedGist from 'react-embed-gist';

import NotFound from '../../technicals/notfound/NotFound'
import Loader from '../../technicals/loader/Loader'

const Article = () => {
    const [article, setArticle] = useState();

    const params = useParams();

    // Fetch data from the Article endpoint with the link provided by useParams

    async function fetchData() {
        try {
            const data = await axios.get(`http://localhost:8080/articles/${params.articleId}`);
            
            processData(data);
            
        } catch (err) {
            setArticle(<NotFound details='This article does not exist. Use the navbar to navigate to available content.'/>
            )
        };
    };

    // Process text according to the API pattern

    function processData(data) {
        const processedArticle = [];

        data.data.text.forEach((el, index) => {
            const articleIndex = parseInt(el.split('-')[1], 10)

            if (el.startsWith('@@img-')) {
                processedArticle.push(<img className={styles.articleImage} alt='placeholder' src={data.data.images[articleIndex]} />);
            } else if (el.startsWith('@@code-')) {
                processedArticle.push(<ReactEmbedGist
                    wrapperClass={styles.articleGist}
                    titleClass={styles.articleGistHeading}
                    gist={data.data.snippets[articleIndex]} />
                );
            } else if (el.startsWith('@@link-')){
                processedArticle.push(<a className={styles.articleLink} href={data.data.sources[articleIndex]}>{data.data.sources[articleIndex]}</a>);
            } else {
                processedArticle.push(<p className={styles.articleText}>{data.data.text[index]}</p>);
            };
        });

        processedArticle.unshift(<h2 className={styles.articleHeading}>{data.data.title}</h2>)
        setArticle(processedArticle)
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.articleId])
    
    return ( 
        <div className={styles.Article}>

            <div className={styles.articleContent}>
                {article === undefined ? <Loader /> : article}
            </div>
        </div>
     );
};
 
export default Article;