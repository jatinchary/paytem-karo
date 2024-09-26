// import React from 'react'
import { Route ,  Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Dashboard from './components/Dashboard'
// import SendMoney from './components/SendMoney'

const App = () => {
  return (
    <div  className= "'h-screen w-screen bg-black text-violet-50'">


        <Routes>
        <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
           <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/send" element={<SendMoney />} /> */}
        </Routes>
      
    

    </div>
  
  )
}

export default App