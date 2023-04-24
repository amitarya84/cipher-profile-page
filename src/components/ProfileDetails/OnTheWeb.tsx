import styles from './OnTheWeb.module.css'
// import {BsLinkedin} from 'react-icons/bs'
import { SiWebmoney } from 'react-icons/si'
import { MdModeEdit } from 'react-icons/md'
import { FaGithubSquare, FaLinkedin, FaInstagramSquare, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa'
import { useState, useEffect, SyntheticEvent } from 'react';
import axios from 'axios';
import { URL } from '../../App';


export function OnTheWeb({ user }: any) {

    const [editable, setEditable] = useState(true);
    const [linkedIn, setLinkedin] = useState<string>('');
    const [github, setGithub] = useState<string>('');
    const [facebook, setFacebook] = useState<string>('');
    const [twitter, setTwitter] = useState<string>('');
    const [instagram, setInstagram] = useState<string>('');
    const [website, setWebsite] = useState<string>('');

    useEffect(() => {
        user?.web_presense?.forEach((item: { name: string, value: string }) => {
            if (item?.name === 'linkedin') {
                setLinkedin(item.value)
            }
            if (item?.name === 'github') {
                setGithub(item.value)
            }
            if (item?.name === 'facebook') {
                setFacebook(item.value)
            }
            if (item?.name === 'twitter') {
                setTwitter(item.value)
            }
            if (item?.name === 'instagram') {
                setInstagram(item.value)
            }
            if (item?.name === 'website') {
                setWebsite(item.value)
            }
        });
    }, [user])

    function editSaveClickHanlder(e: SyntheticEvent) {

        let onpr = [];

        if (linkedIn) {
            onpr.push({
                name: 'linkedin',
                value: linkedIn
            })
        }
        if (github) {
            onpr.push({
                name: 'github',
                value: github
            })
        }
        if (facebook) {
            onpr.push({
                name: 'facebook',
                value: facebook
            })
        }
        if (twitter) {
            onpr.push({
                name: 'twitter',
                value: twitter
            })
        }
        if (instagram) {
            onpr.push({
                name: 'instagram',
                value: instagram
            })
        }
        if (website) {
            onpr.push({
                name: 'website',
                value: website
            })
        }
        axios.patch(`${URL}/users/web_presense/${user?._id}`, { web_presense: onpr })
            .then(res => console.log(res))
            .catch(err => console.log('Err web_presense', err))

        setEditable(prv => !prv)
    }

    return (
        <div className={styles.onTheWeb}>
            <div className={styles.row}>
                <h3>ON THE WEB</h3>
                <button style={{ marginLeft: 'auto' }} onClick={editSaveClickHanlder} className={styles.editSaveBtn}>
                    {editable ? 'Edit' : 'Save'}
                </button>
            </div>
            <div className={styles.row}>
                <div>
                    <h4>Linkedin</h4>
                    <div className={styles.inputWithIcon}>
                        <FaLinkedin size={25} />
                        <input onChange={e => setLinkedin(e.target.value)} value={linkedIn} disabled={editable} type="text" placeholder='Linkedin' />
                        {!editable && <MdModeEdit style={{ marginLeft: 'auto' }} />}
                    </div>
                </div>
                <div>
                    <h4>Github</h4>
                    <div className={styles.inputWithIcon}>
                        <FaGithubSquare size={25} />
                        <input onChange={e => setGithub(e.target.value)} value={github} disabled={editable} type="text" placeholder='GitHub' />
                        {!editable && <MdModeEdit style={{ marginLeft: 'auto' }} />}
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <div>
                    <h4>Facebook</h4>
                    <div className={styles.inputWithIcon}>
                        <FaFacebookSquare size={25} />
                        <input onChange={e => setFacebook(e.target.value)} value={facebook} disabled={editable} type="text" placeholder='Facebook' />
                        {!editable && <MdModeEdit style={{ marginLeft: 'auto' }} />}
                    </div>
                </div>
                <div>
                    <h4>Twitter</h4>
                    <div className={styles.inputWithIcon}>
                        <FaTwitterSquare size={25} />
                        <input onChange={e => setTwitter(e.target.value)} value={twitter} disabled={editable} type="text" placeholder='Twitter' />
                        {!editable && <MdModeEdit style={{ marginLeft: 'auto' }} />}
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <div>
                    <h4>Instagram</h4>
                    <div className={styles.inputWithIcon}>
                        <FaInstagramSquare size={25} />
                        <input onChange={e => setInstagram(e.target.value)} value={instagram} disabled={editable} type="text" placeholder='Instagram' />
                        {!editable && <MdModeEdit style={{ marginLeft: 'auto' }} />}
                    </div>
                </div>
                <div>
                    <h4>Website</h4>
                    <div className={styles.inputWithIcon}>
                        <SiWebmoney size={25} />
                        <input onChange={e => setWebsite(e.target.value)} value={website} disabled={editable} type="text" placeholder='Website' />
                        {!editable && <MdModeEdit style={{ marginLeft: 'auto' }} />}
                    </div>
                </div>
            </div>
        </div>
    );
}
