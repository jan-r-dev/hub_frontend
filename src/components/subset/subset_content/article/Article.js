import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from './Article.module.css';
import ReactEmbedGist from 'react-embed-gist';

const Article = () => {
    const [article, setArticle] = useState([]);

    const params = useParams();

    // Fetch data from the Article endpoint with the link provided by useParams

    async function fetchData() {
        try {
            const data = await axios.get(`http://localhost:8080/articles/${params.articleId}`);

            processData(data)
        } catch (err) {
            console.log(err);
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
                {article}
            </div>
        </div>
     );
};
 
export default Article;

/* Notes on continuation

0) Thoroughly test current routing and potentially relocate it all to the root component.
1) Modify Portfolio for NavLinks instead of Link for styling
2) Register new dynamic route in /portfolio for portfolio/:articleLink
3) Extract route parameter :articleLink in the Article component using useParams
4) Modify the article endpoint in backend to accept :articleLink instead of the Mongo ObjectID
5) Add Links to the portfolio cards
6) Verify that Portfolio routing works and is exact
7) Create a fallback 404 route as a last resort match


Result of the useLocation hook: Object { pathname: "/quotes", search: "?sort=asc", hash: "", state: undefined, key: "g5z6oc" }



import React from 'react';
import styles from './AboutMe.module.css'
import ReactEmbedGist from 'react-embed-gist';

const AboutMe = () => {
    return ( 
        <div className={styles.aboutme}>
            AboutMe is green
            <div>
                <h1> Test gist </h1>
                <ReactEmbedGist gist="jan-r-dev/ffcfb73d84dc9380fabf628a598cf116"/>
                <script type="text/jsx" src="https://gist.github.com/jan-r-dev/ffcfb73d84dc9380fabf628a598cf116.js"></script>
            </div>
        </div>
     );
}
 
export default AboutMe;

*/