import React, { useRef } from 'react'
import './modal.css'
import { useEffect } from 'react';
import { useState } from 'react';

const Modal = ({ onClose }) => {
  const modalRef = useRef(null);
  const inputRefs = useRef([]);
  const [isOtpComplete, setIsOtpComplete] = useState(false);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);


  const verifyOtp = async () => {
  const otp = inputRefs.current.map(input => input.value).join("");
  const email = "animemerch90@gmail.com";

  console.log("OTP:", otp, typeof otp);     // must be string
  console.log("Email:", email, typeof email); // must be string

  const res = await fetch("/api/auth/verify-otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, otp }), // ✅ SAFE
  });

  const data = await res.json();
  localStorage.setItem("token", data.token);
};



  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose()
    }
  }

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Allow only digits
    if (!/^[0-9]?$/.test(value)) return;

    // Move forward
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Check if all inputs are filled
    const allFilled = inputRefs.current.every(
      (input) => input && input.value.length === 1
    );

    setIsOtpComplete(allFilled);
  };


  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    setTimeout(() => {
    const allFilled = inputRefs.current.every(
      (input) => input && input.value.length === 1
    );
    setIsOtpComplete(allFilled);
  }, 0);
  };


  const handlePaste = (e) => {
    const data = e.clipboardData.getData('text').slice(0, 6);
    data.split('').forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
    inputRefs.current[data.length - 1]?.focus();
  };





  return (
    <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center z-50 justify-center">
      <div className="otpcard">
        <div className="unilynk">
          <img src="ULynk.svg" alt="ULynk" />
          UniLynk
        </div>
        <div className="modaltext">
          <div className="emailverification">Email Verification</div>
          <p>Please enter the 6-digit code we sent to</p>
        </div>
        <div className="usermailcont">

          <div className="usermail">
            <img src="/Modal/mail.svg" alt="" />
            animemerch90@gmail.com
          </div>
        </div>

        <div className="otpinputs" onPaste={handlePaste}>
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="otpinput"
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>


        <button
  className={`verifycontinue ${isOtpComplete ? 'active' : ''}`}
  disabled={!isOtpComplete}
  onClick={verifyOtp}
>
  Verify & Continue
</button>

        <hr />

        <div className="resendcont">
          <div className="didntrcv">Didn't receive the code?</div>
          <div className="resend">Resend Code</div>
        </div>
        <hr />
        <div className="secureverify">Secure verification powered by ULynk</div>




      </div>
    </div>
  )
}


export default Modal
