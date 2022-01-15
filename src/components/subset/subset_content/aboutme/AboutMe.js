import React from 'react';
import styles from './AboutMe.module.css'

const AboutMe = () => {
    return ( 
        <div className={styles.aboutme}>
            <div className={styles.articleContent}>            
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis convallis convallis tellus id interdum velit laoreet id donec. Diam in arcu cursus euismod quis. Convallis a cras semper auctor neque vitae.
                </p>

                <p>
                Odio morbi quis commodo odio aenean sed adipiscing. Scelerisque eleifend donec pretium vulputate. In vitae turpis massa sed elementum. Vitae congue mauris rhoncus aenean vel. Elementum eu facilisis sed odio morbi. Faucibus nisl tincidunt eget nullam non nisi est sit. Viverra suspendisse potenti nullam ac tortor vitae. Fermentum iaculis eu non diam phasellus vestibulum lorem. Ornare arcu dui vivamus arcu. Porttitor rhoncus dolor purus non. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.
                </p>

                <p>
                Viverra suspendisse potenti nullam ac tortor vitae. Fermentum iaculis eu non diam phasellus vestibulum lorem. Ornare arcu dui vivamus arcu. Porttitor rhoncus dolor purus non. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.
                </p>

                <p className={styles.haiku}>
                From the top,
                to the very down,
                we may jump
                </p>
            </div>
        </div>
     );
}
 
export default AboutMe;