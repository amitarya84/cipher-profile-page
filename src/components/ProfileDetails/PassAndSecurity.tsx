import { useState } from 'react';
import styles from './PassAndSecurity.module.css'
import axios from 'axios';
import { URL } from '../../App';

export default function PassAndSecurity({ user }: any) {
    const [passEditMode, setPassEditMode] = useState(false);

    function editSaveClickHanlder() {

        setPassEditMode(prv => !prv)
    }


    return (
        <div>
            <div className={styles.passwordNSecurity}>
                <div className={styles.passNsecContainer}>
                    <h3>Password and Security</h3>
                    <button onClick={editSaveClickHanlder} className={styles.editSaveBtn}>
                        {passEditMode ? 'Save' : 'Edit'}
                    </button>
                </div>
                <input type='password' value={'..............'} id='aboutInput'
                    disabled={!passEditMode}
                    className={styles.editPassInput} />
            </div>
            {passEditMode && <UpdatePassModal user={user} setPassEditMode={setPassEditMode} />}
        </div>
    );
}

function UpdatePassModal({ setPassEditMode, user }: any) {
    const [currentPass, setCurrentPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    function updatePassword() {

        if (confirmPass === newPass) {
            if (user?._id && newPass && currentPass) {
                axios.post(`${URL}/users/changePassword`, {
                    userId: user._id,
                    currentPass: currentPass,
                    newPass: newPass
                }).then(res => {
                    if (res.status === 200) {
                        alert('Password Updated!')
                        setPassEditMode(false)

                    }
                })
                    .catch(err => {
                        alert('something went wrong!')
                        console.log(err)
                    })
            } else {
                console.log('user or newpassowrd or current password is not defined')
            }
        } else {
            alert('New Password and confirm password did not matched')
        }

    }
    return (
        <div className={styles.updatePassModalContainer}>
            <div className={styles.modal}>
                <h3 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>Change Password</h3>
                <div className={styles.inputContainer}>
                    <div>
                        <input value={currentPass} onChange={e => setCurrentPass(e.target.value)} type="text" placeholder='Current Password' />
                    </div>
                    <div>
                        <input value={newPass} onChange={e => setNewPass(e.target.value)} type="text" placeholder='New Password' />
                    </div>
                    <div>
                        <input value={confirmPass} onChange={e => setConfirmPass(e.target.value)} type="text" placeholder='Confirm Password' />
                    </div>
                </div>
                <div>
                    <button onClick={() => setPassEditMode(false)} className={styles.cancelBtn}>Cancel</button>
                    <button onClick={updatePassword} className={styles.saveBtn}>Save</button>
                </div>
            </div>
        </div>
    )
}