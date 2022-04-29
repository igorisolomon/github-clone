import React from 'react'
import Navigation from '../common/navigation/Navigation'
import SecNav from '../common/secondNavigation/SecNav'
import Sidebar from '../common/sidebar/Sidebar'

const Profile = () => {
  return (
    <>
        <Navigation />
        <SecNav />
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-12">
                    <Sidebar />
                </div>
                <div className="col-lg-9 col-sm-12">
                    Main
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile