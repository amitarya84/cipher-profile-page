import styles from './FollowersDetails.module.css'
import { FollowerCard } from './FollowerCard';
import { IoMdArrowBack } from 'react-icons/io'

export interface IFollowersDetailsPageProps {
}

const followers = [
    {
        name: 'Amit Arya',
        current_designation: 'College Student',
        followerCount: 5,
    },
    {
        name: 'Karan Arya',
        current_designation: 'College Student',
        followerCount: 10,
    }
]

export function FollowersDetailsPage({ setPage }: any) {
    return (
        <div className={styles.followerPageMainContainer}>
            <div className={styles.headingContainer}>
                <h3>Users Following You</h3>
                <div onClick={() => setPage('')}>
                    <IoMdArrowBack size={26} color={'#fff'} />
                </div>
            </div>
            <div className={styles.followersCardContainer}>
                {followers.map(flwr => <FollowerCard follower={flwr} />)}
            </div>
        </div>
    );
}
