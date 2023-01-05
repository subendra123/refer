import React from 'react'

const Header = () => {
  return (
    <>
    <header>
    <div className="grid_2 header_style">
    <div className="flex_container">
        <div className="logo">
        <i className="ri-folder-2-fill"></i>
            <h3>TuteDude</h3>
        </div>
        <div className="right_side_content flex">
            <div className="menu_style">
                <a href="" className="menu">My Assigment</a>
                <a href="" className="menu">Chat With Mentor</a>
            </div>
            <div className="profile">
                <div className="icon_profile flex">
                <i className="ri-user-fill user roundedbox"></i>
                    <h5>Profile Name</h5>
                    <i className="ri-arrow-down-s-line arrow" ></i>
                </div>
            </div>
           
        </div>
    </div>
    </div>
   </header>
    </>
  )
}

export default Header