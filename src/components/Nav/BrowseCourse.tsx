import { RiCompass3Line, RiArrowDropDownLine } from 'react-icons/ri';
import styles from './BrowseCourse.module.css'
import { useState } from 'react';

type Props = {}

type Option = {
    name: String
}

const options: Option[] = [
    {name: 'App Developemnet'},
    {name: 'Web Developemnet'},
    {name: 'Game Developemnet'},
    {name: 'Data Structures'},
    {name: 'Programming'},
    {name: 'Machine Learning'},
    {name: 'Data Science'},
    {name: 'Others'},
]


export default function BrowseCourse({ }: Props) {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className={styles.BrowseCourse}>
            <RiCompass3Line color='#fff' size={'20px'} />
            <div onClick={e => setShowOptions(prv => !prv)} className={styles.selectBox}>
                <span className={styles.browseTitle}>Browse</span>
                <RiArrowDropDownLine color='#fff' size={'28px'} style={{marginTop: '2px'}} />
            </div>

           {showOptions && <ul className={styles.courseOptionsBox}>
                {options.map((opt) => <li>{opt.name}</li>)}
            </ul>}
        </div>
    )
}