import { useState } from 'react'
import cpImg from '../../assets/WatchPoints.svg'
import styles from './CipherPoints.module.css'

type Props = {}

export default function CipherPoints({ }: Props) {
    const [cipherPoint, setCipherPoint] = useState(0);

    return (
        <div className={styles.cipherPoints}>
            <img src={cpImg} alt="CipherPoints" />
            <span className={styles.cipherPointCount}>
                {cipherPoint}
            </span>
        </div>
    )
}