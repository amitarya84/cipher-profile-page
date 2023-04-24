import { useState, SyntheticEvent } from 'react'
import { BiCross } from 'react-icons/bi';
import styles from './UpdateProfile.module.css'
import { RxCross1 } from 'react-icons/rx';
import axios from 'axios';
import { URL } from '../../../App';

export default function UpdateProfile({ user, setShowEditProfile }: any) {
    const [firstName, setFirstName] = useState(user?.first_name);
    const [lastName, setLastName] = useState(user?.last_name);
    const [email, setEmail] = useState(user?.email);
    const [phone, setPhone] = useState(user?.phone);
    
    function updateProfile(e: SyntheticEvent) {
        e.preventDefault()
        console.log(e.target)

        console.log(firstName,lastName,phone,email)
        axios.patch(URL + '/users/'+user?._id, {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
        }).then(res => {
            console.log(res.data)
        })
    }

    return (
        <div className={styles.updateProfile}>
            <div className={styles.profileUpdateModal}>
                <div className={styles.row}>
                    <h3 style={{ fontWeight: 'bold' }}>Profile Update</h3>
                    <div onClick={() => setShowEditProfile(false)}>
                        <RxCross1 />
                    </div>
                </div>
                <div className={styles.row}>
                    <form onSubmit={updateProfile} className={styles.updateProfileForm}>
                        <div>
                            <p>First Name</p>
                            <input onChange={e => setFirstName(e.target.value)} value={firstName} type='text' placeholder='First Name' />
                        </div>
                        <div>
                            <p>Last Name</p>
                            <input onChange={e => setLastName(e.target.value)} value={lastName} type='text' placeholder='Last Name' />
                        </div>
                        <div>
                            <p>Email</p>
                            <input onChange={e => setEmail(e.target.value)} value={email} type='email' placeholder='Email' />
                        </div>
                        <div>
                            <p>Phone</p>
                            <input onChange={e => setPhone(e.target.value)} value={phone} type='text' placeholder='Phone' />
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <button onClick={() => setShowEditProfile(false)} type='button' className={styles.cancelBtn}>Cancel</button>
                            <button type='submit' className={styles.saveBtn}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
