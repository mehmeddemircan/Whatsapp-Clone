import React, { Fragment } from 'react'
import Sidebar from '../components/sidebar/Sidebar'

const MainLayout = ({children}) => {
  return (
    <Fragment>
        <Sidebar />
        <div className='flex  h-screen w-full'>
        {children}
        </div>
        
        </Fragment>
  )
}

export default MainLayout