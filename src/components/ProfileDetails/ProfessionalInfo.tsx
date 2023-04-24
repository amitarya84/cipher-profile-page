import { useState, useEffect } from 'react';
import styles from './ProfessionalInfo.module.css'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { MdModeEdit } from 'react-icons/md';
import { Dropdown } from './Dropdown';
import axios from 'axios';
import { URL } from '../../App';

export function ProfessionalInfo({ user }: any) {
    const [editable, setEditable] = useState(false);
    const [highestEducation, setHighesEducation] = useState('')
    const [currentDesignation, setCurrentDesignation] = useState('')

    function saveProfessionalInfo(){
        // let profInfo = [];
        
        if(editable){
            axios.patch(`${URL}/users/profInfo/${user?._id}`, {
                profInfo: {
                    highest_education: highestEducation,
                    current_designation: currentDesignation
                }
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }

        setEditable(prv => !prv)
    }

    useEffect(() => {
        if(user?.professional_info){
            setHighesEducation(user?.professional_info.highest_education);
            setCurrentDesignation(user?.professional_info.current_designation);
        }
    }, [user])

    return (
        <div className={styles.ProfessionalInfo}>
            <div className={styles.row}>
                <h3>Professional Information</h3>
                <button style={{ marginLeft: 'auto' }} onClick={saveProfessionalInfo} className={styles.editSaveBtn}>
                    {editable ? 'Save' : 'Edit' }
                </button>
            </div>

            <div className={styles.row}>
                <div>
                    <h4>Highest education</h4>
                    <Dropdown title={'Graduation'} editable={editable} selectState={highestEducation} setOption={setHighesEducation}
                        options={[
                            { name: 'Primary', value: 'Primary' },
                            { name: 'Secondary', value: 'Secondary' },
                            { name: 'Higher Secondary', value: 'Higher Secondary' },
                            { name: 'Graduation', value: 'Graduation' },
                            { name: 'Post Graduation', value: 'Post Graduation' },
                        ]} />
                </div>
                <div>
                    <h4>What do you do currently?</h4>
                    <Dropdown title={'Teaching'} editable={editable} selectState={currentDesignation} setOption={setCurrentDesignation}
                        options={[
                            { name: 'Schooling', value: 'Schooling' },
                            { name: 'College Student', value: 'College Student' },
                            { name: 'Teaching', value: 'Teaching' },
                            { name: 'Job', value: 'Job' },
                            { name: 'Freelancing', value: 'Freelancing' },
                        ]} />
                </div>
            </div>
        </div>
    );
}
