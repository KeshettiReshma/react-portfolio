import React from 'react';
import styles from './Education.module.css';

 export const Education = () => {
  return (
    <section className={styles.container} id="Education">
      <h2 className={styles.title}>EDUCATION</h2>
      <div className={styles.educationItems}>
        <div className={styles.educationItem}>
          <div className={styles.content}>
            <div>
              <h3>Bachelor of Technology in Computer Science</h3>
              <p>Vaagdevi  Engineering  College</p>
            </div>
            <div className={styles.educationYear}>
            <p>2021  - 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;