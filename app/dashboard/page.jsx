"use client"

import React, { useState } from 'react';
import './dashboard.css';
import { Search } from 'lucide-react';
import PostFAB from '../../components/PostFAB';
import Post from '../../components/Post';


export default function Dashboard() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [ispost, setIspost] = useState(false)

  return (
    <div className="homebody">








      <main className='dashmain'>

        <div className="fhead">

          <div className="pricing-toggle">
            <div className={`toggle-track ${!isAnnual ? "right" : ""}`}>
              <div className="toggle-bg"></div>
              <button
                className={`toggle-btn ${isAnnual ? "active" : ""}`}
                onClick={() => setIsAnnual(true)}
              >
                For You
              </button>
              <button
                className={`toggle-btn ${!isAnnual ? "active" : ""}`}
                onClick={() => setIsAnnual(false)}
              >
                Clubs
              </button>
            </div>
          </div>
        </div>
        <div className="feed">






          <div className="userposts">
            <div className="userpost"></div>
            <div className="userpost"></div>
            <div className="userpost"></div>
            <div className="userpost"></div>
            <div className="userpost"></div>
            <div className="userpost"></div>
            <div className="userpost"></div>
            <div className="userpost"></div>
            <div className="userpost"></div>
            <div className="userpost"></div>
            <div className="userpost"></div>

          </div>

















          {ispost ? (<Post setIspost={setIspost} />) : (
            <PostFAB setIspost={setIspost} />)}

        </div>

      </main>
      <div className="msgsidebar">
        <div className="msgsidebarmain">
          <div className="msgsearchbar">
            <Search className="searchicon" size={16} />
            <input
              className="searchinput"
              placeholder="Search"
              type="text"
            />
          </div>
          <hr className="mt-4" />
          <div className="msgbuttons">
            <button className="msgbutton">
              <img src="/Chat/Recent.svg" alt="Recent icon" />
              Recent
            </button>
            <button className="msgbutton">
              <img src="/Chat/Chats.svg" alt="Chats icon" />
              Chats
            </button>
            <button className="msgbutton">
              <img src="/Chat/Clubs.svg" alt="Clubs icon" />
              Clubs
            </button>
          </div>
          <hr className="mt-4 mb-4" />

          <div className="chat">
            <div className="chatheader">
              <div className="clublogo">
                <img src="/NITLOGO.webp" alt="NIT Logo" />
              </div>
              <div className="clubname">Innovation Cell</div>
            </div>




            <div className="allchats">
              <div className="msges">

                <div className="msgbar">
                  <input type="text" placeholder='Message' />
                  <button>
                    <img className='arrow-up' src="./Chat/Arrow-up.svg" alt="" />
                  </button>
                </div>
              </div>

            </div>



          </div>
        </div>
      </div>
    </div>
  );
}
