"use client"

//  1.it will add no. of user in github
//  2.it will print username and useremail in console
//  3.added only github oauth

import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"
import "./Logincard.css"
import Modal from './Modal';
import { useRef } from 'react';



const Loginbtn = () => {
  const { data: session } = useSession()
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [showModal, setShowModal] = useState(false)


  const [user, Setuser] = useState({
    email: "",
    password: "",
  });

  const emailRef = useRef(null);




  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    Setuser({
      ...user,
      [name]: value,
    })

  }


 const handleLogin = async () => {
  await signIn("credentials", {
    email: user.email,
    password: user.password,
    callbackUrl: "/redirect-handler",
  });
};



  const handleCheckboxChange = (e) => {
    setIsTermsChecked(e.target.checked);
  };

  useEffect(() => {
    if (session?.user?.email) {
      console.log(`Signed in as ${session.user.email}`);
      console.log(`Signed in as ${session.user.name}`)
    }
  }, [session]);






const handleCreateAccount = async () => {
  // store password TEMPORARILY (safe enough for OTP flow)
  localStorage.setItem("signup_password", user.password);

  const res = await fetch("/api/auth/send-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: user.email,
      purpose: "register",
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    alert(data.error);
    return;
  }

  setShowModal(true); // ✅ OPEN MODAL
};





  return (
    <div className="card">
      {isSignIn ? (
        // Sign In Form
        <>
          <h1>Welcome Back</h1>
          <div className="subtitle">Sign in to continue</div>

          {/* Google Button */}
          <button className="social-btn"  onClick={() => { signIn("google") }} >
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

          {/* GitHub Button */}
          <button className="social-btn" onClick={() => { signIn("github") }} >
            <svg className='signgithub' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="github">
              <path fill="#00020c" fillRule="evenodd" d="m60,12c0-4.42-3.58-8-8-8H12c-4.42,0-8,3.58-8,8v40c0,4.42,3.58,8,8,8h40c4.42,0,8-3.58,8-8V12h0Z"></path>
              <path fill="#fff" fillRule="evenodd" d="m26.73,47.67c0,1.1-.01,2.3-.01,3.4,0,.26-.13.51-.34.67-.21.16-.49.2-.74.13-8.4-2.7-14.49-10.58-14.49-19.87,0-11.51,9.34-20.85,20.85-20.85s20.85,9.34,20.85,20.85c0,9.28-6.08,17.15-14.46,19.85-.25.08-.53.03-.74-.13-.21-.16-.34-.4-.34-.67-.02-2.45-.03-5.34-.03-6.65s-1.28-2.39-1.28-2.39c0,0,9.45-1.16,9.45-9.34,0-5.19-2.06-6.94-2.06-6.94.44-1.86.38-3.63-.1-5.31-.07-.24-.31-.4-.56-.38-2.01.18-3.85.91-5.52,2.24,0,0-2.95-.81-5.2-.81h0c-2.25,0-5.2.81-5.2.81-1.67-1.32-3.52-2.06-5.52-2.24-.25-.02-.49.14-.56.38-.48,1.68-.54,3.45-.11,5.31,0,0-2.05,1.75-2.05,6.94,0,8.18,9.45,9.34,9.45,9.34,0,0-1.28,1.08-1.28,2.39v.3c-.72.26-1.7.5-2.8.43-2.99-.2-3.39-3.42-4.62-3.94-.9-.38-1.78-.43-2.45-.37-.2.02-.36.16-.41.35-.05.19.02.39.18.51.81.55,1.89,1.33,2.19,1.9.81,1.52,2.06,3.93,3.67,4.19,1.96.32,3.36.13,4.25-.12h0Z"></path>
            </svg>
            <span>Sign in with GitHub</span>
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
            <input
              name='email'
              id="signin-email"
              type="email"
              placeholder="Enter your email"
              required
              value={user.email}
              onChange={handleInput} />
          </div>


          <label>Password</label>
          <div className="input-icon">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" fill="none" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" fill="none" />
            </svg>
            <input
              name='password'
              id="signin-password"
              type="password"
              placeholder="Enter your password"
              required
              autoComplete='off'
              value={user.password}
              onChange={handleInput} />
          </div>

          <div className="remember-forgot">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <span>Remember me</span>
            </div>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>
          <button type='button' className="submit-btn active" onClick={handleLogin}>
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
          <button className="social-btn" onClick={() => signIn("google", { callbackUrl: "/redirect-handler" })} >
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

          {/* GitHub Button */}
          <button className="social-btn" onClick={() => signIn("github", { callbackUrl: "/redirect-handler" })} >
            <svg className='signgithub' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="github">
              <path fill="#00020c" fillRule="evenodd" d="m60,12c0-4.42-3.58-8-8-8H12c-4.42,0-8,3.58-8,8v40c0,4.42,3.58,8,8,8h40c4.42,0,8-3.58,8-8V12h0Z"></path>
              <path fill="#fff" fillRule="evenodd" d="m26.73,47.67c0,1.1-.01,2.3-.01,3.4,0,.26-.13.51-.34.67-.21.16-.49.2-.74.13-8.4-2.7-14.49-10.58-14.49-19.87,0-11.51,9.34-20.85,20.85-20.85s20.85,9.34,20.85,20.85c0,9.28-6.08,17.15-14.46,19.85-.25.08-.53.03-.74-.13-.21-.16-.34-.4-.34-.67-.02-2.45-.03-5.34-.03-6.65s-1.28-2.39-1.28-2.39c0,0,9.45-1.16,9.45-9.34,0-5.19-2.06-6.94-2.06-6.94.44-1.86.38-3.63-.1-5.31-.07-.24-.31-.4-.56-.38-2.01.18-3.85.91-5.52,2.24,0,0-2.95-.81-5.2-.81h0c-2.25,0-5.2.81-5.2.81-1.67-1.32-3.52-2.06-5.52-2.24-.25-.02-.49.14-.56.38-.48,1.68-.54,3.45-.11,5.31,0,0-2.05,1.75-2.05,6.94,0,8.18,9.45,9.34,9.45,9.34,0,0-1.28,1.08-1.28,2.39v.3c-.72.26-1.7.5-2.8.43-2.99-.2-3.39-3.42-4.62-3.94-.9-.38-1.78-.43-2.45-.37-.2.02-.36.16-.41.35-.05.19.02.39.18.51.81.55,1.89,1.33,2.19,1.9.81,1.52,2.06,3.93,3.67,4.19,1.96.32,3.36.13,4.25-.12h0Z"></path>
            </svg>
            <span>Sign in with GitHub</span>
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
            <input
              name='email'
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              value={user.email}
              ref={emailRef}
              onChange={handleInput} />
          </div>


          <label>Password</label>
          <div className="input-icon">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" fill="none" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" fill="none" />
            </svg>
            <input
              name='password'
              id="password"
              type="password"
              placeholder="Create a password"
              required
              autoComplete='off'
              value={user.password}
              onChange={handleInput} />
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
            type='button'
            className={`submit-btn ${isTermsChecked ? 'active' : ''}`}
            id="createBtn"
            disabled={!isTermsChecked}








            onClick={handleCreateAccount}//setShowModal(true);  handleLogin(); add before sendOtp()
            
          >
            Create Account
          </button>
          {showModal && <Modal email={user.email} onClose={() => setShowModal(false)}/>}

          <div className="footer">
            Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); setIsSignIn(true); }}>Sign in</a>
          </div>
        </>
      )}
    </div>
  )


}

export default Loginbtn
