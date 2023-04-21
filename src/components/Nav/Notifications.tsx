import { useState } from 'react';
import styles from './Notifications.module.css';
import { IoMdNotificationsOutline } from 'react-icons/io';

type Props = {}

export default function Notifications({ }: Props) {
    const [notifCount, setNotifCount] = useState(0);
    
    return (
        <div className={styles.notifications}>
            <span className={styles.notifCount}>{notifCount}</span>
            <IoMdNotificationsOutline color='#fff' size={'20px'} />
        </div>
    )
}