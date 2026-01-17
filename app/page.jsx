"use client"
import { useState } from 'react';
import Link from "next/link";
import "./home.css"

export default function Home() {
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  const handleCheckboxChange = (e) => {
  setIsTermsChecked(e.target.checked);
};

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="logo"><img id="LOGO" src="ULynk.svg" alt="" /></div>

          <ul className="navlinks">
            <Link href="./chat"><li className="feature navlink"> Feature</li></Link>
            <li className="about navlink">About</li>
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
          <div className="card">
            {isSignIn ? (
              // Sign In Form
              <>
                <h1>Welcome Back</h1>
                <div className="subtitle">Sign in to continue</div>

                {/* Google Button */}
                <button className="social-btn">
                  <svg width="20" height="20" viewBox="0 0 48 48">
                    <path fill="#FFC107"
                      d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.2-.4-3.5z" />
                    <path fill="#FF3D00"
                      d="M6.3 14.7l6.6 4.8C14.7 16.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" />
                    <path fill="#4CAF50"
                      d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2C29.5 35.4 26.9 36 24 36c-5.3 0-9.8-3.3-11.4-7.9l-6.5 5C9.3 39.6 16.1 44 24 44z" />
                    <path fill="#1976D2"
                      d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.3 5.5-6.1 7.1l6.2 5.2C38.8 37.1 44 31.5 44 24c0-1.3-.1-2.2-.4-3.5z" />
                  </svg>
                  <span>Sign in with Google</span>
                </button>

                {/* Facebook Button */}
                <button className="social-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#1877F2"
                      d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6 4.4 11 10.1 11.9v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.6-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.3h3.4l-.5 3.5h-2.9V24C19.6 23.1 24 18.1 24 12.1z" />
                  </svg>
                  <span>Sign in with Facebook</span>
                </button>

                <div className="divider">OR</div>

                <label>Email Address</label>

                <div className="input-icon">
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 6h16v12H4z" fill="none" />
                    <path d="M4 6l8 7 8-7" fill="none" />
                    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" stroke="currentColor" fill="none" />
                    <polyline points="3,7 12,13 21,7" stroke="currentColor" fill="none" />
                  </svg>
                  <input htmlFor="email" id="signin-email" type="email" placeholder="Enter your email" required />
                </div>


                <label>Password</label>
                <div className="input-icon">
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" fill="none" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" fill="none" />
                  </svg>
                  <input htmlFor="password" id="signin-password" type="password" placeholder="Enter your password" required />
                </div>

                <div className="remember-forgot">
                  <div className="remember-me">
                    <input type="checkbox" id="remember" />
                    <span>Remember me</span>
                  </div>
                  <a href="#" className="forgot-password">Forgot password?</a>
                </div>

                <button className="submit-btn active">
                  Sign In
                </button>

                <div className="footer">
                  Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); setIsSignIn(false); }}>Sign up</a>
                </div>
              </>
            ) : (
              // Create Account Form
              <>
                <h1>Create Account</h1>
                <div className="subtitle">Join us today and get started</div>

                {/* Google Button */}
                <button className="social-btn">
                  <svg width="20" height="20" viewBox="0 0 48 48">
                    <path fill="#FFC107"
                      d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.2-.4-3.5z" />
                    <path fill="#FF3D00"
                      d="M6.3 14.7l6.6 4.8C14.7 16.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" />
                    <path fill="#4CAF50"
                      d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2C29.5 35.4 26.9 36 24 36c-5.3 0-9.8-3.3-11.4-7.9l-6.5 5C9.3 39.6 16.1 44 24 44z" />
                    <path fill="#1976D2"
                      d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.3 5.5-6.1 7.1l6.2 5.2C38.8 37.1 44 31.5 44 24c0-1.3-.1-2.2-.4-3.5z" />
                  </svg>
                  <span>Sign in with Google</span>
                </button>

                {/* Facebook Button */}
                <button className="social-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#1877F2"
                      d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6 4.4 11 10.1 11.9v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.6-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.3h3.4l-.5 3.5h-2.9V24C19.6 23.1 24 18.1 24 12.1z" />
                  </svg>
                  <span>Sign in with Facebook</span>
                </button>

                <div className="divider">OR</div>

                <label>Email Address</label>

                <div className="input-icon">
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 6h16v12H4z" fill="none" />
                    <path d="M4 6l8 7 8-7" fill="none" />
                    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" stroke="currentColor" fill="none" />
                    <polyline points="3,7 12,13 21,7" stroke="currentColor" fill="none" />
                  </svg>
                  <input htmlFor="email" id="email" type="email" placeholder="Enter your email" required />
                </div>


                <label>Password</label>
                <div className="input-icon">
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" fill="none" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" fill="none" />
                  </svg>
                  <input htmlFor="password" id="password" type="password" placeholder="Create a password" required />
                </div>


                <div className="terms">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    checked={isTermsChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span>I agree to the <a href="#">Terms</a> & <a href="#">Privacy Policy</a></span>
                </div>

                <button 
                  className={`submit-btn ${isTermsChecked ? 'active' : ''}`}
                  id="createBtn" 
                  disabled={!isTermsChecked}
                >
                  Create Account
                </button>

                <div className="footer">
                  Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); setIsSignIn(true); }}>Sign in</a>
                </div>
              </>
            )}
          </div>
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