"use client"

import React from 'react'
import "./Sidebar.css"
import Link from 'next/link'
import { useState } from "react";

const Sidebar = () => {
  const [settings, setSettings] = useState(true);
  const [selected, setSelected] = useState("one");
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
                    <button className="dashbutton " type="radio" name="dashboardoption" value="one"
                      checked={selected === "one"}
                      onChange={() => setSelected("one")} >
                      <img src="/dashboard/Home.svg" alt="Home icon" />
                      Home
                    </button>
                  </Link>

                  <Link href='/dashboard/my-clubs'>
                    <button className="dashbutton" type="radio" name="dashboardoption"   value="two"
          checked={selected === "two"}
          onChange={() => setSelected("two")}>
                      <img src="/dashboard/MyClubs.svg" alt="My Clubs icon" />
                      My Clubs
                    </button>
                  </Link>
                  <Link href='/dashboard/events'>
                    <button className="dashbutton" type="radio" name="dashboardoption">
                      <img src="/dashboard/Events.svg" alt="Events icon" />
                      Events
                    </button>
                  </Link>

                  <Link href='/dashboard/gethelp' type="radio" name="dashboardoption">
                    <button className="dashbutton gethelp">
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
                      <h2 className="username">pawan Kumar</h2>
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
                    <img  src="/arrow.svg" alt="settings" />
                  </div>
                </div>
                <div className="dashboardsettings">
                  <div className="options">

                  </div>



                  <div className="signout">
                    <button className="signoutb" >Sign out</button>
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
