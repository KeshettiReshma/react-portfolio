import React from "react";

import styles from  "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Contact Me On</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
                    <a href="mailto:keshettireshma612@gmail.com">keshettireshma612@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon"/>
                    <a href="https://www.linkedin.com/in/keshetti-reshma-653061307">LinkedIn.com/Keshetti Reshma</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/>
                    <a href="https://github.com/KeshettiReshma">Github.com/Keshetti Reshma</a>
                </li>
            </ul>
        </footer>
    );
};
