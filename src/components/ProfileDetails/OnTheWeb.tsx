import styles from './OnTheWeb.module.css'
// import {BsLinkedin} from 'react-icons/bs'
import { SiWebmoney } from 'react-icons/si'
import { MdModeEdit }from 'react-icons/md'
import { FaGithubSquare, FaLinkedin, FaInstagramSquare, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa'
import { useState } from 'react';

export interface IOnTheWebProps {
}

export function OnTheWeb(props: IOnTheWebProps) {

    const [editable, setEditable] = useState(true);

    return (
        <div className={styles.onTheWeb}>
            <div className={styles.row}>
                <h3>ON THE WEB</h3>
                <button style={{marginLeft: 'auto'}} onClick={() => setEditable(prv => !prv)} className={styles.editSaveBtn}>
                    {editable ? 'Edit' : 'Save'}
                </button>
            </div>
            <div className={styles.row}>
                <div>
                    <h4>Linkedin</h4>
                    <div className={styles.inputWithIcon}>
                        <FaLinkedin size={25} />
                        <input disabled={editable} type="text" placeholder='Linkedin' />
                        {!editable && <MdModeEdit style={{marginLeft: 'auto'}} />}
                    </div>
                </div>
                <div>
                    <h4>Github</h4>
                    <div className={styles.inputWithIcon}>
                        <FaGithubSquare size={25} />
                        <input disabled={editable} type="text" placeholder='GitHub' />
                        {!editable && <MdModeEdit style={{marginLeft: 'auto'}} />}
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <div>
                    <h4>Facebook</h4>
                    <div className={styles.inputWithIcon}>
                        <FaFacebookSquare size={25} />
                        <input disabled={editable} type="text" placeholder='Facebook' />
                        {!editable && <MdModeEdit style={{marginLeft: 'auto'}} />}
                    </div>
                </div>
                <div>
                    <h4>Twitter</h4>
                    <div className={styles.inputWithIcon}>
                        <FaTwitterSquare size={25} />
                        <input disabled={editable} type="text" placeholder='Twitter' />
                        {!editable && <MdModeEdit style={{marginLeft: 'auto'}} />}
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <div>
                    <h4>Instagram</h4>
                    <div className={styles.inputWithIcon}>
                        <FaInstagramSquare size={25} />
                        <input disabled={editable} type="text" placeholder='Instagram' />
                        {!editable && <MdModeEdit style={{marginLeft: 'auto'}} />}
                    </div>
                </div>
                <div>
                    <h4>Website</h4>
                    <div className={styles.inputWithIcon}>
                        <SiWebmoney size={25} />
                        <input disabled={editable} type="text" placeholder='Website' />
                        {!editable && <MdModeEdit style={{marginLeft: 'auto'}} />}
                    </div>
                </div>
            </div>
        </div>
    );
}
