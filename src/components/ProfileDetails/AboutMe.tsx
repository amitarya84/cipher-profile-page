import { useState, useEffect } from 'react';
import styles from './AboutMe.module.css'
import axios from 'axios';
import { URL } from '../../App';

export function AboutMe({ user }: any) {

  const [aboutMeEditMode, setAboutMeEditMode] = useState(false);
  const [aboutme, setAboutMe] = useState(user.about)

  useEffect(() => {
    let aboutInput = document.querySelector('#aboutInput') as HTMLInputElement;
    aboutInput?.focus();
  }, [aboutMeEditMode])

  useEffect(() => {
    setAboutMe(user.about)
  }, [user])

  function editSaveClickHanlder() {
    if (aboutMeEditMode) {
      axios.patch(URL + '/users/about/'+user?._id, {
        about: aboutme,
      }).then(res => {
        console.log(res.data)
      })
    }

    setAboutMeEditMode(prv => !prv)
  }

  return (
    <div className={styles.aboutMe}>
      <div className={styles.ameContainer}>
        <h3>About Me</h3>
        <button onClick={editSaveClickHanlder} className={styles.editAboutMeBtn}>
          {aboutMeEditMode ? 'Save' : 'Edit'}
        </button>
      </div>
      <textarea value={aboutme} onChange={e => setAboutMe(e.target.value)} id='aboutInput' 
      disabled={!aboutMeEditMode} 
      className={styles.editAboutInput} placeholder='Add something about you.' ></textarea>
    </div>
  );
}
