import {React} from 'react';
import styles from './Article.module.css';

const Article = (props) => {

    function processData(data) {
        data.text.forEach(el => {
            console.log(el);
        });

        return processedData;
    };

    async function fetchData() {
        try {
            const data = await axios.get(`http://localhost:8080/articles/${props.article_id}`);
            const processedData = processData(data.data);

            return processedData
        } catch (err) {
            console.log(err);
        };
    };
    
    return ( 
        <div className={styles.Article}>
            {props.content}
        </div>
     );
};
 
export default Article;