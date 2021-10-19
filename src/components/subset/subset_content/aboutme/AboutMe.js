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