import styles from './Nav.module.css'
import logo from '../../assets/logo.png'
import BrowseCourse from './BrowseCourse'
import SearchBar from './SearchBar'
import Notifications from './Notifications'
import Profile from './Profile'
import CipherPoints from './CipherPoints'

type Props = {}

export default function Nav({ }: Props) {
    return (
        <div className={styles.navContainer}>
            <div>
                <div className={styles.logo}>
                    <img src={logo} />
                    <span className={styles.logoName}>CipherSchools</span>
                </div>
                <div className={styles.browseCourseSelect}>
                    <BrowseCourse />
                </div>
            </div>
            <div className={styles.navBox2}>
                <SearchBar />
                <Notifications />
                <Profile />
                <CipherPoints />
            </div>

        </div>
    )
}