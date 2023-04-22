import './App.css'
import Header from './components/Header'
import Nav from './components/Nav/Nav'
import { OnTheWeb } from './components/ProfileDetails/OnTheWeb'
import { ProfessionalInfo } from './components/ProfileDetails/ProfessionalInfo'
import { ProfileDetailsContainer } from './components/ProfileDetails/ProfileDetailsContainer'
import { HRL } from './components/utils/HRL'

function App() {

  return (
    <div className='App'>  
      <Nav />
      <Header />
      <ProfileDetailsContainer />
      <HRL />
      <OnTheWeb />
      <HRL />
      <ProfessionalInfo />
    </div>
  )
}

export default App
