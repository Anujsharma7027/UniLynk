"use client"

import React from 'react'
import "./my-clubs.css"
import { useState } from 'react'
import Notification from '@/components/Notification'

const MyClubsPage = () => {
const [isNotify, setIsNotify] = useState(false)


  return (
    <div className='my-clubsbody'>
      <div className="myclubshead">
        <div className="myclubsheader">
          <div className="campuscom">Campus Community</div>
          <div className="myclubs">My Clubs</div>
        </div>
        <div className="browsemorebtn">
          <button className='browsemore'>Browse more <img src="/myclubs/arrowright.svg" alt="" /></button>
        </div>
      </div>
      <div className="clubinfo">
        <div className="clubimg">
          <img src="/Defaultclublogo.svg" alt="" />
        </div>
        <div className="aboutclub">
          <div className="clubname">Innovation Cell
            <button onClick={() => setIsNotify(true)}>
            <div className="notify">
              <img src="/myclubs/bell.svg" alt="notification" />
              3
            </div>
            </button>
             {isNotify && <Notification onClose={() => setIsNotify(false)}/>}
          </div>
          <ul>
            <li className='clubgenre'>Arts & Media</li>
            <li>87 members</li>
            <li>Joined Sept 2025</li>
          </ul>
          <div className="post-time">
            <div className="userpostcapsule">Member</div>
            <img src="/myclubs/pulse.svg" alt="pulse" />
            <div className="lastpost">Last post 3h ago</div>
          </div>
          <div className="clubinfobtns">
            <button className='open' onClick={() => window.location.href= "/Club"}>Open</button>
            <button className='viewfeed'>View Feed</button>
            <button className='events'>Events</button>
          </div>
        </div>
      </div>

      <hr className='mb-8' />

      <div className="exploremore">Explore More</div>
      <div className="myclubsmorecont">



        <div className="myclubsmore">

          <div className="myclubsmorer">
            <div className="myclubsmoreimg myclubsmoreimgsearch">
              <img src="/myclubs/Search.svg" alt="Search" />
            </div>
            <div className="myclubsmoret">
              <div>Browse All Clubs</div>
              <p>Discover new communities</p>
            </div>
          </div>

          <div className="myclubsarrow">
            <img src="/myclubs/arrow.svg" alt="" />
          </div>
        </div>



        
        <div className="myclubsmore">

          <div className="myclubsmorer">
            <div className="myclubsmoreimg myclubsmoreimgtrending">
              <img src="/myclubs/trending.svg" alt="trending" />
            </div>
            <div className="myclubsmoret">
              <div>Trending Clubs</div>
              <p>See what's popular</p>
            </div>
          </div>

          <div className="myclubsarrow">
            <img src="/myclubs/arrow.svg" alt="" />
          </div>
        </div>



      </div>

    </div>
  )
}

export default MyClubsPage
