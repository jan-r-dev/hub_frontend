import styles from './PageCount.module.css'

const PageCount = (props) => {

    const calculatePages = () => {
        const pages = [];

        let itemCount = props.itemCount;

        let counter = 1;
        while (itemCount > 0) {

            if (props.itemActive === counter) {
                pages.push(
                    <div className={styles.active} key={counter}>{counter}</div>
                );
            } else {
                pages.push(
                    <div key={counter}>{counter}</div>
                );
            }

            itemCount = itemCount - props.itemsPerPage;
            counter = counter + 1;
        };

        return pages;
    };



    return (
        <div className={styles.container}>
            {calculatePages()}
        </div>
    )
}

export default PageCount;