import {useEffect, useState} from 'react';
import './App.css'
import Header from './components/ProfileDetails/Header'
import { LoginSignup } from './components/Log_in/login_signup'
import Nav from './components/Nav/Nav'
import { CipherMap } from './components/ProfileDetails/CipherMap/CipherMap'
import { OnTheWeb } from './components/ProfileDetails/OnTheWeb'
import { ProfessionalInfo } from './components/ProfileDetails/ProfessionalInfo'
import { ProfileDetailsContainer } from './components/ProfileDetails/ProfileDetailsContainer'
import { HRL } from './components/utils/HRL'
import axios from 'axios';
import PassAndSecurity from './components/ProfileDetails/PassAndSecurity';
import { Interest } from './components/ProfileDetails/Intrests';
import { FollowersDetailsPage } from './components/FollowersDetails/FollowersDetails';

export const URL = 'http://localhost:5000';

function App() {

  const [page, setPage] = useState('login');
  const [user, setUser] = useState([]);

  useEffect(() => {
    // axios.get(`${URL}/users/644570af76903db8c005a885`).then(res => {
    //   console.log('user', res.data)
    //   setUser(res.data)
    // })
  }, []);

  return (
    <div className='App'>
      <Nav />
      <Header user={user} setPage={setPage} />
      <ProfileDetailsContainer user={user} />
      <HRL />
      <CipherMap user={user}  />
      <HRL />
      <OnTheWeb user={user} />
      <HRL />
      <ProfessionalInfo user={user} />
      <HRL />
      <PassAndSecurity user={user} />
      <HRL />
      <Interest user={user} />

      {page === 'followersDetails' && <FollowersDetailsPage setPage={setPage} />}

      {page === 'login' && <LoginSignup setUser={setUser} setPage={setPage} />}
    </div>
  )
}

export default App
