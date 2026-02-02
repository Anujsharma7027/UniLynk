"use client"

import React from 'react'
import "./Sidebar.css"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from "react";
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import SignOutModal from './SignOutModal';

const Sidebar = () => {
  const [settings, setSettings] = useState(true);
  const [showSignOutModal, setSignoutModal] = useState(false)
  const pathname = usePathname();

  const isActive = (path) => pathname === path;



  return (

    <div>
      {settings ? (
        <>
          <div>
            <header>
              <div className="menu">
                <div className="menuhead">
                  <div className="logo">
                    <img src="/ULynk.svg" alt="ULynk Logo" />
                  </div>

                  <div className="settings" onClick={() => setSettings(false)}>
                    <img src="/dashboard/Settings.svg" alt="settings" />
                  </div>
                </div>
                <div className="dashboard">

                  <Link href='/dashboard'>
                    <button className={`dashbutton ${isActive("/dashboard") ? "active" : ""}`} >
                      <img src="/dashboard/Home.svg" alt="Home icon" />
                      Home
                    </button>
                  </Link>

                  <Link href='/dashboard/my-clubs'>
                    <button className={`dashbutton ${isActive("/dashboard/my-clubs") ? "active" : ""}`}>
                      <img src="/dashboard/MyClubs.svg" alt="My Clubs icon" />
                      My Clubs
                    </button>
                  </Link>
                  <Link className='eventlink' href='/dashboard/events'>
                    <button className={`dashbutton ${isActive("/dashboard/events") ? "active" : ""}`}>
                      <img src="/dashboard/Events.svg" alt="Events icon" />
                      Events
                    </button>
                  </Link>

                  <Link href='/dashboard/gethelp' >
                    <button className={`dashbutton gethelp ${isActive("/dashboard/gethelp") ? "active" : ""}`}>
                      <img src="/dashboard/GetHelp.svg" alt="Get Help icon" />
                      Get Help
                    </button>
                  </Link>

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
        </>
      ) : (
        <>
          <div>
            <header>
              <div className="menu">
                <div className="menuhead">
                  <div className="logo">
                    <img src="/ULynk.svg" alt="ULynk Logo" />
                  </div>

                  <div className="settings2" onClick={() => setSettings(true)}>
                    <img src="/myclubs/arrow.svg" alt="settings" />
                  </div>
                </div>
                <div className="dashboardsettings">
                  <div className="options">

                  </div>



                  <div className="signout">
                    <button className="signoutb" onClick={() => setSignoutModal(true)} >Sign out<Image src="/Logout/logout.svg" alt="Sign Out" width={20} height={25} ></Image></button>
                    {showSignOutModal && <SignOutModal onClose={() => setSignoutModal(false)}/>}
                  </div>

                </div>
              </div>
            </header>
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar
