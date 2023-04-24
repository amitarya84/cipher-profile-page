import {} from 'react';
import styles from './FollowerCard.module.css'
import {FaUserCircle} from 'react-icons/fa'

export interface IFollowerCardProps {
}

export function FollowerCard ({follower}: any) {
  return (
    <div className={styles.card}>
      <div className={styles.profile}>
        <FaUserCircle color={"#fff"} size={50} />
      </div>
      <h3>{follower.name}</h3>
      <h4>{follower.current_designation}</h4>
      <h4>{follower.followerCount} followers</h4>

      <button className={styles.followBtn}>Follow</button>
    </div>
  );
}
