import { AboutMe } from './AboutMe';
import styles from './ProfileDetailsContainer.module.css'

export function ProfileDetailsContainer ({user}: any) {
  return (
    <main className={styles.ProfileDetailsContainer}>
      <AboutMe user={user} />
    </main>
  );
}
