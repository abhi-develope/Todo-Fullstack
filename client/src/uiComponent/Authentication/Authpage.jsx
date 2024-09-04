import React from 'react'
import Login from './Login'
import Signup from './Signup'

const Authpage = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('./../../assets/bg1.png')` }}>
    <div className="relative flex flex-col items-center justify-center w-full max-w-md p-8 space-y-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg border border-opacity-30 border-white">
        {/* <Login /> */}
        <Signup  />
    </div>
  </div>
  )
}

export default Authpage
