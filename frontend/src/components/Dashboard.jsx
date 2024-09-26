// import React from 'react'
import Appbar from './Appbar'
import Balance from './Balance'
import Users from './Users'

const Dashboard = () => {
  return (
    <div>
        <Appbar />
         <Balance value={1000} />
        <Users />  
    </div>
  )
}

export default Dashboard