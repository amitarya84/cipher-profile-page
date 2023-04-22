import { AboutMe } from './AboutMe';
import styles from './ProfileDetailsContainer.module.css'

export interface IProfileDetailsContainerProps {
}

export function ProfileDetailsContainer (props: IProfileDetailsContainerProps) {
  return (
    <main className={styles.ProfileDetailsContainer}>
      <AboutMe />
    </main>
  );
}
