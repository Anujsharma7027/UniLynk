"use client"

import React from 'react'
import "./Sidebar.css"
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div>
      <header>
        <div className="menu">
          <div className="menuhead">
            <div className="logo">
              <img src="/ULynk.svg" alt="ULynk Logo" />
            </div>

            <div className="settings">
              <img src="/dashboard/Settings.svg" alt="settings" />
            </div>
          </div>
          <div className="dashboard">

            <Link href='/dashboard'>
              <button className="dashbutton" >
                <img src="/dashboard/Home.svg" alt="Home icon" />
                Home
              </button>
            </Link>

            <Link href='/dashboard/my-clubs'>
              <button className="dashbutton">
                <img src="/dashboard/MyClubs.svg" alt="My Clubs icon" />
                My Clubs
              </button>
            </Link>

            <button className="dashbutton">
              <img src="/dashboard/Events.svg" alt="Events icon" />
              Events
            </button>
            
            <button className="dashbutton gethelp">
              <img src="/dashboard/GetHelp.svg" alt="Get Help icon" />
              Get Help
            </button>
            
            <div className="profile">
              <div className="profback">
                <img src="/Background.jpg" alt="Profile background" />
              </div>
              <div className="profpic">
                <img src="/Profilepic.png" alt="Profile picture" />
              </div>
              <div className="profinfo">
                <h2 className="username">Pawan Kumar</h2>
                <div className="branch">Production and Industrial Engineering</div>
                <div className="year">1st Year</div>
              </div>
              <div className="post">
                <button>View Profile</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Sidebar
