import { useState } from 'react';
import styles from './AboutMe.module.css'
export interface IAboutMeProps {
}

export function AboutMe(props: IAboutMeProps) {

  const [aboutMeEditMode, setAboutMeEditMode] = useState(false);

  return (
    <div className={styles.aboutMe}>
      <div className={styles.ameContainer}>
        <h3>About Me</h3>
        <button onClick={() => setAboutMeEditMode(prv => !prv)} className={styles.editAboutMeBtn}>
          {aboutMeEditMode ? 'Save': 'Edit' }
        </button>
      </div>
      <textarea disabled={!aboutMeEditMode} className={styles.editAboutInput} placeholder='Add something about you.' ></textarea>
    </div>
  );
}
