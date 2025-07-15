import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
export const About = () => {
    return ( 
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop"
        className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" /> 
        <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>I have a strong interest in creating responsive and user-friendly interfaces using HTML, CSS, JavaScript, and React
            </p>
        </div>
        </li>
        <li className={styles.aboutItem}>
        <img src={getImageUrl("about/serverIcon.png")} alt="server icon" /> 
        <div className={styles.aboutItemText}>
            <h3>Backend developer</h3>
            <p>
            I'm exploring how the back-end powers web applications, focusing on building logic, handling data, and supporting the front-end effectively
            </p>
        </div>
        </li>
         </ul>
        </div>
    </section>
    );
};