import React from 'react'
import { Route , Router } from 'react-router-dom'


const App = () => {
  return (
    <div  className= "'h-screen w-screen bg-black text-violet-50'">


        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      
    

    </div>
  
  )
}

export default App