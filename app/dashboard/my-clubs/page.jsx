"use client"

import React from 'react'
import "./my-clubs.css"

const MyClubsPage = () => {
  return (
      <div className='my-clubsbody'>
        <div className="clubhead">
          <div className="clubstextcont">
            <h1 className="myclubstext">My Clubs</h1>
            <div className="clubnum">You are in 2 Clubs</div>
          </div>

          <div className="clubsearchcont">
            <img src="/dashboard/Search.svg" alt="Search icon" />
            <input type="text" className='searchclub' placeholder="Search clubs..." />
          </div>
        </div>

        <div className="clublist">
          <div className="clubinfo">
            
          </div>
        </div>


      </div>
  )
}

export default MyClubsPage
