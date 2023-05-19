import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  // const user =  localStorage.getItem("user")

  return (
    <Fragment>
        <div className='w-1/4 border-r '>
            <div  className='bg-gray-200 h-16'>
                {/* <img className='w-10 rounded-full' src={user?.photoURL} alt="User Profile photo"  /> */}
                <div>
                <i class="fa-regular fa-comment"></i>
                </div>
              
            </div>

        </div>

    </Fragment>
  )
}

export default Sidebar