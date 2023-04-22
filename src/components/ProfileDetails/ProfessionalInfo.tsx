import { useState } from 'react';
import styles from './ProfessionalInfo.module.css'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { MdModeEdit } from 'react-icons/md';
import { Dropdown } from './Dropdown';

export interface IProfessionalInfoProps {
}

export function ProfessionalInfo(props: IProfessionalInfoProps) {
    const [editable, setEditable] = useState(true);

    return (
        <div className={styles.ProfessionalInfo}>
            <div className={styles.row}>
                <h3>Professional Information</h3>
                <button style={{ marginLeft: 'auto' }} onClick={() => setEditable(prv => !prv)} className={styles.editSaveBtn}>
                    {editable ? 'Edit' : 'Save'}
                </button>
            </div>

            <div className={styles.row}>
                <div>
                    <h4>Highest education</h4>
                    <Dropdown title={'Graduation'} options={[
                        {name: 'Primary', value: 'Primary'},
                        {name: 'Secondary', value: 'Secondary'},
                        {name: 'Higher Secondary', value: 'Higher Secondary'},
                        {name: 'Graduation', value: 'Graduation'},
                        {name: 'Post Graduation', value: 'Post Graduation'},
                    ]} />
                </div>
                <div>
                    <h4>What do you do currently?</h4>
                    <Dropdown title={'Teaching'} options={[
                        {name: 'Primary', value: 'Primary'},
                        {name: 'Secondary', value: 'Secondary'},
                        {name: 'Higher Secondary', value: 'Higher Secondary'},
                        {name: 'Graduation', value: 'Graduation'},
                        {name: 'Post Graduation', value: 'Post Graduation'},
                    ]} />
                </div>
            </div>
        </div>
    );
}
