import React from 'react'
import LoginPage from '../app/login/page'
import HomePage from './contacts/page'
import RegistrationPage from './register/page'

const MainPage = () => {
  return (
    <div className='text-9xl text-red-900'>
      <LoginPage />
    </div>
  )
}

export default MainPage