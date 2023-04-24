import { useState, SyntheticEvent } from 'react';
import styles from './login_signup.module.css'
import { RxCross2 } from 'react-icons/rx'
import logo from '../../assets/logo.png'
import { BiShow } from 'react-icons/bi'
import { BiHide } from 'react-icons/bi'
import axios from 'axios'
import { URL } from '../../App';


export function LoginSignup({ setPage, setUser }: any) {

    const [showSignupModal, setShowSignupModal] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(true)

    return (
        <div className={styles.container}>
            {showSignupModal && <SignUpModal setPage={setPage} setShowSignupModal={setShowSignupModal} setShowLoginModal={setShowLoginModal} />}
            {showLoginModal && <LoginModal setUser={setUser} setPage={setPage} setShowLoginModal={setShowLoginModal} setShowSignupModal={setShowSignupModal} />}
        </div>
    );
}

function LoginModal({ setShowLoginModal, setShowSignupModal, setPage, setUser }: any) {

    const [showPass, setShowpass] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function loginHandler(e:SyntheticEvent){
        e.preventDefault()

        if(email && password){
            axios.post(`${URL}/users/login`, {email, password})
            .then(res => {
                if(res.status === 200 && res.data){
                    setUser(res.data);
                    setPage('')
                }
            })
        }
    }

    return (
        <div className={styles.modal}>
            <div className={styles.header}>
                <h2>Signin</h2>
                <div onClick={() => setPage('profile')}>
                    <RxCross2 color={'#fff'} />
                </div>
            </div>
            <div className={styles.siteLogo}>
                <img src={logo} alt="" />
                <h2>CipherSchools</h2>
            </div>
            <div style={{ textAlign: 'center', margin: '10px 0' }}>
                <h3>Hey, Welcome!</h3>
                <p>Please provide your email and password to signin</p>
            </div>

            <form onSubmit={loginHandler} className={styles.signUpForm}>
                <div>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email Address' />
                </div>
                <div>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type={showPass ? 'text' : 'password'} placeholder='Password' />
                    <button onClick={() => { setShowpass(prv => !prv) }}
                        type='button' style={{ marginRight: '10px', backgroundColor: 'transparent', border: 'none' }}>
                        {showPass && <BiShow color='#aaa' />}
                        {!showPass && <BiHide color='#aaa' />}
                    </button>
                </div>
                <button className={styles.signupSubmitBtn}>Sign in</button>
            </form>

            <p className={styles.switchModalText}>New Here? <span onClick={() => {
                setShowSignupModal(true)
                setShowLoginModal(false)
            }}>Signup Now</span></p>
        </div>
    )
}
function SignUpModal({ setShowSignupModal, setShowLoginModal, setPage }: any) {

    const [showPass, setShowpass] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signupFormSubmit(e: SyntheticEvent) {
        e.preventDefault()
        if (firstName && lastName && email && password) {
            axios.post(`${URL}/users/register`, {
                first_name: firstName,
                last_name: lastName,
                phone: phone,
                email: email,
                password: password,
            })
        } else {
            alert('Please fill all inputs!')
        }
    }

    return (
        <div className={styles.modal}>
            <div className={styles.header}>
                <h2>Signup</h2>
                <div onClick={() => setPage('profile')}>
                    <RxCross2 color={'#fff'} />
                </div>
            </div>
            <div className={styles.siteLogo}>
                <img src={logo} alt="" />
                <h2>CipherSchools</h2>
            </div>
            <div style={{ textAlign: 'center', margin: '10px 0' }}>
                <h3>Create New Account</h3>
                <p>Please provide your valid informations to signup</p>
            </div>

            <form onSubmit={signupFormSubmit} className={styles.signUpForm}>
                <div key={1}>
                    <input onChange={e => setFirstName(e.target.value)} value={firstName} type="text" placeholder='First Name' />
                </div>
                <div key={2}>
                    <input onChange={e => setLastName(e.target.value)} value={lastName} type="text" placeholder='Last Name' />
                </div>
                <div key={3}>
                    <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder='Email Address' />
                </div>
                <div key={4}>
                    <input onChange={e => setPhone(e.target.value)} value={phone} type="text" placeholder='Phone(optional)' />
                </div>
                <div key={5}>
                    <input onChange={e => setPassword(e.target.value)} value={password} type={showPass ? 'text' : 'password'} placeholder='Password' />
                    <button onClick={() => { setShowpass(prv => !prv) }} type='button'
                        style={{ marginRight: '10px', backgroundColor: 'transparent', border: 'none' }}>
                        {showPass && <BiShow color='#aaa' />}
                        {!showPass && <BiHide color='#aaa' />}
                    </button>
                </div>
                <button className={styles.signupSubmitBtn}>Create Account</button>
            </form>

            <p className={styles.switchModalText}>Already have an account? <span onClick={() => {
                setShowSignupModal(false)
                setShowLoginModal(true)
            }}>Signin Now</span></p>
        </div>
    )
}