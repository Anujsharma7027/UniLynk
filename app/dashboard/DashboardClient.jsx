"use client"

import React, { useState } from 'react';
import './dashboard.css';
import { Search } from 'lucide-react';
import PostFAB from '../../components/PostFAB';
import Post from '../../components/Post';
import { EllipsisVertical } from 'lucide-react';


export default function DashboardClient() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [ispost, setIspost] = useState(false)

  const user = {
    avatar: 'https://akm-img-a-in.tosshub.com/sites/dailyo/story/embed/201809/painting_of_lord_kri_090118090030.jpg',
    name: 'Pawan Kumar'
  };

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



            {/*================== One Card of user post ====================*/}
            <div className="userpost">
              <div className="post-left">
                <div className="profilepic">
                  <img className='profileimg' src={user.avatar} alt={user.name} />
                </div>
              </div>
              <div className="post-right">
                <div className="posth">
                  <div className="posth-left">
                    <div className="user-name">{user.name}</div>
                    <div className="post-time"><ul><li className='post-timeli'>2h</li></ul></div>
                  </div>
                  <div className="posth-right"><button className='posth-right-btn'><EllipsisVertical /></button></div>
                </div>

                <div className="post-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam aspernatur nihil id deleniti sed hic, odio adipisci saepe nostrum sequi! Eaque, qui tempore pariatur aperiam omnis adipisci voluptatem vel facere, nisi sapiente aut harum quaerat. Esse, sunt accusamus consequatur, blanditiis beatae provident nesciunt ullam doloribus optio sapiente eius qui doloremque tempora vitae totam quasi inventore? Voluptate eius quos saepe dolores omnis assumenda odit obcaecati, ipsam reprehenderit atque sit ut ex sint placeat dolorum laboriosam? Unde est porro minima maxime repellendus alias corrupti commodi sed velit tempora quam illum natus, fugiat assumenda voluptatibus reiciendis asperiores cum pariatur. Culpa, delectus nisi! Tempore!</div>

              </div>

            </div>

            {/*======================== Post card end here======================== */}

            <div className="userpost">
              <div className="post-left">
                <div className="profilepic">
                  <img className='profileimg' src={user.avatar} alt={user.name} />
                </div>
              </div>
              <div className="post-right">
                <div className="posth">
                  <div className="posth-left">
                    <div className="user-name">{user.name}</div>
                    <div className="post-time"><ul><li className='post-timeli'>2h</li></ul></div>
                  </div>
                  <div className="posth-right"><button className='posth-right-btn'><EllipsisVertical /></button></div>
                </div>

                <div className="post-content">
                  hey i am pawan
                  <div className="image-post">
                    <div className="image-grid count-1">
                      <img src="Background.jpg" alt="" />
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <div className="userpost">
              <div className="post-left">
                <div className="profilepic">
                  <img className='profileimg' src={user.avatar} alt={user.name} />
                </div>
              </div>
              <div className="post-right">
                <div className="posth">
                  <div className="posth-left">
                    <div className="user-name">{user.name}</div>
                    <div className="post-time"><ul><li className='post-timeli'>2h</li></ul></div>
                  </div>
                  <div className="posth-right"><button className='posth-right-btn'><EllipsisVertical /></button></div>
                </div>

                <div className="post-content">
                  <div className="image-grid count-3">
                    <img src="Background.jpg" />
                    <img src="Background.jpg" />
                    <img src="Background.jpg" />
                    
                  </div>
                </div>

              </div>

            </div><div className="userpost">
              <div className="post-left">
                <div className="profilepic">
                  <img className='profileimg' src={user.avatar} alt={user.name} />
                </div>
              </div>
              <div className="post-right">
                <div className="posth">
                  <div className="posth-left">
                    <div className="user-name">{user.name}</div>
                    <div className="post-time"><ul><li className='post-timeli'>2h</li></ul></div>
                  </div>
                  <div className="posth-right"><button className='posth-right-btn'><EllipsisVertical /></button></div>
                </div>

                <div className="post-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam aspernatur nihil id deleniti sed hic, odio adipisci saepe nostrum sequi! Eaque, qui tempore pariatur aperiam omnis adipisci voluptatem vel facere, nisi sapiente aut harum quaerat. Esse, sunt accusamus consequatur, blanditiis beatae provident nesciunt ullam doloribus optio sapiente eius qui doloremque tempora vitae totam quasi inventore? Voluptate eius quos saepe dolores omnis assumenda odit obcaecati, ipsam reprehenderit atque sit ut ex sint placeat dolorum laboriosam? Unde est porro minima maxime repellendus alias corrupti commodi sed velit tempora quam illum natus, fugiat assumenda voluptatibus reiciendis asperiores cum pariatur. Culpa, delectus nisi! Tempore!</div>

              </div>

            </div><div className="userpost">
              <div className="post-left">
                <div className="profilepic">
                  <img className='profileimg' src={user.avatar} alt={user.name} />
                </div>
              </div>
              <div className="post-right">
                <div className="posth">
                  <div className="posth-left">
                    <div className="user-name">{user.name}</div>
                    <div className="post-time"><ul><li className='post-timeli'>2h</li></ul></div>
                  </div>
                  <div className="posth-right"><button className='posth-right-btn'><EllipsisVertical /></button></div>
                </div>

                <div className="post-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam aspernatur nihil id deleniti sed hic, odio adipisci saepe nostrum sequi! Eaque, qui tempore pariatur aperiam omnis adipisci voluptatem vel facere, nisi sapiente aut harum quaerat. Esse, sunt accusamus consequatur, blanditiis beatae provident nesciunt ullam doloribus optio sapiente eius qui doloremque tempora vitae totam quasi inventore? Voluptate eius quos saepe dolores omnis assumenda odit obcaecati, ipsam reprehenderit atque sit ut ex sint placeat dolorum laboriosam? Unde est porro minima maxime repellendus alias corrupti commodi sed velit tempora quam illum natus, fugiat assumenda voluptatibus reiciendis asperiores cum pariatur. Culpa, delectus nisi! Tempore!</div>

              </div>

            </div><div className="userpost">
              <div className="post-left">
                <div className="profilepic">
                  <img className='profileimg' src={user.avatar} alt={user.name} />
                </div>
              </div>
              <div className="post-right">
                <div className="posth">
                  <div className="posth-left">
                    <div className="user-name">{user.name}</div>
                    <div className="post-time"><ul><li className='post-timeli'>2h</li></ul></div>
                  </div>
                  <div className="posth-right"><button className='posth-right-btn'><EllipsisVertical /></button></div>
                </div>

                <div className="post-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam aspernatur nihil id deleniti sed hic, odio adipisci saepe nostrum sequi! Eaque, qui tempore pariatur aperiam omnis adipisci voluptatem vel facere, nisi sapiente aut harum quaerat. Esse, sunt accusamus consequatur, blanditiis beatae provident nesciunt ullam doloribus optio sapiente eius qui doloremque tempora vitae totam quasi inventore? Voluptate eius quos saepe dolores omnis assumenda odit obcaecati, ipsam reprehenderit atque sit ut ex sint placeat dolorum laboriosam? Unde est porro minima maxime repellendus alias corrupti commodi sed velit tempora quam illum natus, fugiat assumenda voluptatibus reiciendis asperiores cum pariatur. Culpa, delectus nisi! Tempore!</div>

              </div>

            </div>





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
