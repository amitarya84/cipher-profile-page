import { useState } from 'react';
import styles from './Header.module.css';
import { MdModeEdit } from 'react-icons/md'
// import { FiEdit } from 'react-icons/fi'
import profilBackground from '../assets/ProfileCover.png'

type Props = {}

type User = {
  name: String,
  email: String
}

const user: User = {
  name: 'Amit Arya',
  email: 'amitaryawrk@gmail.com'
}

export default function Header({ }: Props) {
  const [followersCount, setFollowersCount] = useState(0);

  return (
    <div className={styles.headerContainer}
      style={{
        backgroundImage: `linear-gradient(to right, #262c35, #fff0, #262c35), 
                          url(${profilBackground}), 
                          linear-gradient(to right, #262c35, var(--profile-cover), #262c35)`
      }}>
      <div>
        <div className={styles.profileBox}>
          <div className={styles.profile}>A</div>
          <div className={styles.editProfile}>
            <MdModeEdit size='12px' color={'var(--text-color)'} />
            {/* <FiEdit size='12px' color={'var(--text-color)'} /> */}
          </div>
        </div>
        <div className={styles.profileNameEmail}>
          <h2 className={styles.greeting}>Hello,</h2>
          <h2 className={styles.userName}>{user.name}</h2>
          <h2 className={styles.userEmail}>{user.email}</h2>
        </div>
      </div>
      <div className={styles.followersBox}>
        <h2>{followersCount} Followers</h2>
      </div>
    </div>
  )
}