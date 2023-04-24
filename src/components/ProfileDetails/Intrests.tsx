import { useEffect, useState } from 'react';
import styles from './interest.module.css'
import axios from 'axios';
import { URL } from '../../App';

export function Interest({ user }: any) {
    const [interests, setInterests] = useState([]);
    const [editabel, setEditable] = useState(false);

    useEffect(() => {
        if(user.interests){
            setInterests(user.interests);
        }
    }, [user])

    function editSaveClickHanlder(){
        setEditable(true)
    }

    function addInterest(intr: never){
        if(!interests.includes(intr)){
            setInterests(prv => [...prv, intr])
        }
    }

    function updateInterests(){

        if(interests){
            axios.patch(`${URL}/users/interests/${user._id}`, {interests})
            .then(res => {
                if(res.status === 200){
                    alert('Intrests Updated')
                }
            })
        }
        console.log('interest', interests)
    }

    return (
        <>
            <div className={styles.interestContainer}>
                <div className={styles.row}>
                    <h3>Interest</h3>
                    <button onClick={editSaveClickHanlder} className={styles.editSaveBtn}>
                        {editabel ? 'Save' : 'Edit'}
                    </button>
                </div>
                <div className={styles.interContainer}>
                    {interests?.map(intr => <span className={styles.intr}>{intr}</span>)}
                </div>
            </div>
            {editabel && <InterestModal interests={interests} updateInterests={updateInterests} addInterest={addInterest} setEditable={setEditable} />}
        </>
    );
}

function InterestModal({setEditable, addInterest, updateInterests, interests}: any) {
    
    return (
        <div className={styles.interestModalContainer}>
            <div className={styles.interestsModal}>
                <div className={styles.intererstContainer}>
                    <h3 className={interests.includes('App Development') ? styles.selected : ''} onClick={() => addInterest('App Development')}>App Development</h3>
                    <h3 className={interests.includes('Web Development') ? styles.selected : ''} onClick={() => addInterest('Web Development')}>Web Development</h3>
                    <h3 className={interests.includes('Game Development') ? styles.selected : ''} onClick={() => addInterest('Game Development')}>Game Development</h3>
                    <h3 className={interests.includes('Data Structures') ? styles.selected : ''} onClick={() => addInterest('Data Structures')}>Data Structures</h3>
                    <h3 className={interests.includes('Programming') ? styles.selected : ''} onClick={() => addInterest('Programming')}>Programming</h3>
                    <h3 className={interests.includes('Machine Learning') ? styles.selected : ''} onClick={() => addInterest('Machine Learning')}>Machine Learning</h3>
                    <h3 className={interests.includes('Data Science') ? styles.selected : ''} onClick={() => addInterest('Data Science')}>Data Science</h3>
                    <h3 className={interests.includes('Others') ? styles.selected : ''} onClick={() => addInterest('Others')}>Others</h3>
                </div>
                <div className={styles.btnContainer}>
                    <button onClick={() => setEditable(false)}>Cancel</button>
                    <button onClick={() => updateInterests()} className={styles.saveBtn}>Save</button>
                </div>
            </div>
        </div>
    )
}