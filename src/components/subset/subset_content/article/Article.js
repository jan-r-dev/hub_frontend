import {React} from 'react';
import styles from './Article.module.css';

const Article = (props) => {

    // Process text list from API in accordance with the diagram
    function processData(data) {
        data.text.forEach(el => {
            console.log(el);
        });

        return processedData;
    };

    // Fetch data from the Article endpoint with the article_id provided by the prop
    async function fetchData() {
        try {
            const data = await axios.get(`http://localhost:8080/articles/${props.article_id}`);
            const processedData = processData(data.data);

            return processedData
        } catch (err) {
            console.log(err);
        };
    };
    
    // Return article
    return ( 
        <div className={styles.Article}>
            {props.content}
        </div>
     );
};
 
export default Article;

/* Notes on continuation

1) Modify Portfolio for NavLinks instead of Link for styling
2) Register new dynamic route in /portfolio for portfolio/:articleLink
3) Extract route parameter :articleLink in the Article component using useParams
4) Modify the article endpoint in backend to accept :articleLink instead of the Mongo ObjectID
5) Add Links to the portfolio cards
6) Verify that Portfolio routing works and is exact

*/