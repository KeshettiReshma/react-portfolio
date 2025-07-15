import React from "react";
import styles from "../../components/Hero/Hero.module.css";

import { getImageUrl } from "../../utils";
export const Hero = () => {
    return(
     <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Keshetti Reshma</h1>
            <p className={styles.description}> I'm a fresher full-stack developer with a growing skill set in both front-end and back-end development. I enjoy building responsive interfaces as well as working with server-side logic to create full web solutions
</p>
<a href="mailto:keshettireshma612@gmail.com" className={styles.contactBtn}>contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur} />
              <div className={styles.bottomBlur} />
    </section>
    );
};