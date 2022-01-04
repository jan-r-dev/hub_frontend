import axios from 'axios';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styles from './Article.module.css';

const Article = () => {

    const params = useParams();

    function processData(data) {
        data.data.text.forEach(el => {
            if (el.startsWith('@@img-')) {
                console.log('Image' + el)
            } else if (el.startsWith('@@code-')) {
                console.log('Code' + el)
            } else if (el.startsWith('@@link-')){
                console.log('Link' + el)
            } else {
                console.log('Text' + el)
            }
        });

        return
    };

    // Fetch data from the Article endpoint with the article_id provided by the prop

    async function fetchData() {
        try {
            const data = await axios.get(`http://localhost:8080/articles/${params.articleId}`);

            processData(data)
        } catch (err) {
            console.log(err);
        };
    };



    useEffect(() => {
        fetchData();
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.articleId])
    
    return ( 
        <div className={styles.Article}>
            <p>{params.articleId}</p>
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

*/