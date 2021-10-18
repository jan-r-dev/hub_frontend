import {React} from 'react';
import styles from './Article.module.css';

const Article = (props) => {
    
    return ( 
        <div className={styles.Article}>
            {props.content}
        </div>
     );
};
 
export default Article;