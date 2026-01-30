"use client"
import { useState } from 'react';
import Link from "next/link";
import "./home.css"
import Loginbtn from '../components/Logincard';


export default function Home() {
  

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="logo"><img id="LOGO" src="ULynk.svg" alt="" /></div>

          <ul className="navlinks">
            <Link href="./UserinfoForm"><li className="feature navlink"> Feature</li></Link>
            <Link href="./dashboard"><li className="about navlink">About</li></Link>
            <li className="support navlink">Support</li>
            <li className="contactus navlink">Contact Us</li>
          </ul>

          <ul className="navbuttons">
            <button id="login">Login</button>
            <button id="joinasclub">Join as Club</button>
          </ul>

        </div>
      </nav>

      {/* ------------------ Login Section ------------------ */}

      <div className="loginsec">
        <div className="aboutsec">

          <div className="collegelogo">
            <img src="NITLOGO.webp" alt="" />
            <div className="collegename">
              <div className="collegename1">National Institute of Technology</div> <div className="collegename2">Kurukshetra</div></div>
          </div>


          <div className="aboutcapsule">Welcome to the Future of Campus Life</div>
          <div className="abouthead">
            <h1 className="yourcampus">Your Campus</h1>
            <h1 className="reimagined">Reimagined</h1>
          </div>
          <p className="aboutpara">A sophisticated platform connecting students, clubs, and support systems in one seamless experience.</p>
        </div>



        <div className="logincardsec">

          <Loginbtn></Loginbtn>

         
        </div>
      </div>



      {/* -----------------------Everything you need box(features)--------------------------- */}


      <div className="everythingyouneedbox">
        <div className="fcapsulebox"><div className="featurecapsule">Features</div></div>
        <h1 className="everythingyouneed">Everything you need</h1>
        <p className="featurepara">A comprehensive suite of tools designed for the modern college experience</p>


        <div className="fboxes">
          <div className="fbox">
            <img className="fboximg" src="./features/SocialNetwork.svg" alt="" />
            <h3>Social Network</h3>
            <p>Connect with fellow students and build meaningful relationships across campus.</p>
          </div>
          <div className="fbox">
            <img className="fboximg" src="./features/ClubManagement.svg" alt="" />
            <h3>Club Management</h3>
            <p>Organize events, manage memberships, and coordinate activities effortlessly.</p>
          </div>
          <div className="fbox">
            <img className="fboximg" src="./features/AnonymousSupport.svg" alt="" />
            <h3>Anonymous Support</h3>
            <p>Access confidential help and resources whenever you need them, privately.</p>
          </div>
          <div className="fbox">
            <img className="fboximg" src="./features/Real-timeChat.svg" alt="" />
            <h3>Real-time Chat</h3>
            <p>Stay connected with instant messaging and group conversations.</p>
          </div>
          <div className="fbox">
            <img className="fboximg" src="./features/SmartNotifications.svg" alt="" />
            <h3>Smart Notifications</h3>
            <p>Get timely updates about events, announcements, and important activities.</p>
          </div>
          <div className="fbox">
            <img className="fboximg" src="./features/Recognition.svg" alt="" />
            <h3>Recognition</h3>
            <p>Earn achievements and showcase your campus involvement.</p>
          </div>
        </div>
      </div>


      {/* ----------------------------------About Unilynk---------------------------------- */}

      <div className="aboutunilynk">
        <div className="aboutunilynkcapsule">About Unilynk</div>
        <div className="unilynkhead">
          <h1 className="builtforstudents">Built for students,</h1>
          <h1 className="bystudents">by students</h1>
        </div>
        <p className="aboutunilynkpara">We understand the challenges of campus life. That's why we created a platform that brings everything together—social connections, club management, and support systems—in one elegant solution.</p>
        <div className="aboutboxes">
          <div className="aboutbox">
            <img src="./aboutunilynk/OurMission.svg" alt="" />
            <h3>Our Mission</h3>
            <p>To empower students with tools that enhance their college experience and foster meaningful connections.</p>
          </div>
          <div className="aboutbox">
            <img src="./aboutunilynk/OurVision.svg" alt="" />
            <h3>Our Vision</h3>
            <p>A world where every student has access to the resources and community they need to thrive.</p>
          </div>
          <div className="aboutbox">
            <img src="./aboutunilynk/OurValues.svg" alt="" />
            <h3>Our Values</h3>
            <p>Privacy, inclusivity, and student well-being are at the core of everything we build.</p>
          </div>
        </div>
      </div>


      {/* ------------------------------------Start your journey here-------------------------------- */}

      <div className="journeyboxcont">
        <div className="journeybox">
          <div className="journeyleft">
            <h3>Start your campus journey here</h3>
            <p>UniLynk helps students stay informed, involved, and connected — all from one dashboard.</p>
            <button>Get started</button>
          </div>


          <div className="journeyright">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl text-gray-600 font-bold mb-2">Clubs</div>
                <div className="text-gray-800/60 text-sm">activities & events</div></div>
              <div className="text-center">
                <div className="text-3xl text-gray-600 font-bold mb-2">Anonymous</div>
                <div className="text-gray-800/60 text-sm">private questions</div></div>
              <div className="text-center">
                <div className="text-3xl text-gray-600 font-bold mb-2">Verified</div>
                <div className="text-gray-800/60 text-sm">college-only</div></div>
              <div className="text-center">
                <div className="text-3xl text-gray-600 font-bold mb-2">Students</div>
                <div className="text-gray-800/60 text-sm">built for campus life</div></div>
            </div>
          </div>
        </div>
      </div>


      {/*------------------------------- Footer--------------------------------- */}
      <hr className="footerstart" />
      <footer>
        <div className="foot">
          <div className="footercont">
            <div className="footunilynk">
              <div className="footlogo"><img id="LOGO" src="ULynk.svg" alt="" />Unilynk</div>
              <p className="footpara">The premium platform for college social networking, club management, and student support.</p>
              <div className="social">
                <img src="./social/gmail.svg" alt="" />
                <img src="./social/instagram.svg" alt="" />
                <img src="./social/X.svg" alt="" />
                <img src="./social/github.svg" alt="" />
              </div>
            </div>
            <div className="product">
              <h2>Product</h2>
              <ul>
                <li>Features</li>
                <li>Sponsor</li>
                <li>Update</li>
                <li>GitHub</li>
              </ul>
            </div>
            <div className="company">
              <h2>Company</h2>
              <ul>
                <li>About</li>
                <li>Support</li>
                <li>Contact Us</li>
                <li>Complain</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="footerend" />
        <div className="copyright">
          <p>&copy; 2026 Unilynk. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}