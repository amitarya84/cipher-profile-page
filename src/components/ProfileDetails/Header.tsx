import { useState } from 'react';
import styles from './Header.module.css';
import { MdModeEdit } from 'react-icons/md'
import profilBackground from '../../assets/ProfileCover.png'
import UpdateProfile  from './profileUpdate/UpdateProfile';


export default function Header({user, setPage}: any) {
  const [followers, setFollowers] = useState([]);
  const [showEditProfile, setShowEditProfile] = useState(false);

  function profileEditClickHanlder(){
    setShowEditProfile(prv => !prv)
  }

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
          <div onClick={profileEditClickHanlder} className={styles.editProfile}>
            <MdModeEdit size='12px' color={'var(--text-color)'} />
          </div>
        </div>
        <div className={styles.profileNameEmail}>
          <h2 className={styles.greeting}>Hello,</h2>
          <h2 className={styles.userName}>{`${user?.first_name} ${user?.last_name}`}</h2>
          <h2 className={styles.userEmail}>{user?.email}</h2>
        </div>
      </div>
      <div onClick={() => setPage('followersDetails')} className={styles.followersBox}>
        <h2>{followers?.length} Followers</h2>
      </div>

      {showEditProfile && <UpdateProfile setShowEditProfile={setShowEditProfile} user={user} />}
    </div>
  )
}