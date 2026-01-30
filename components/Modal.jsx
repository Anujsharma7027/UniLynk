"use client";

import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./modal.css";

const Modal = ({ onClose, email }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const modalRef = useRef(null);
  const inputRefs = useRef([]);
  const [isOtpComplete, setIsOtpComplete] = useState(false);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

const verifyOtp = async () => {
  const otp = inputRefs.current.map(i => i.value).join("");

  if (otp.length !== 6) {
    alert("Enter complete OTP");
    return;
  }

  setLoading(true);

  const res = await fetch("/api/auth/verify-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      otp,
      purpose: "register",
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    setLoading(false);
    alert(data.error);
    return;
  }

  // OTP VERIFIED → REGISTER USER
  await registerUser();
};



  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };


  const handleChange = (e, index) => {
    if (!/^[0-9]?$/.test(e.target.value)) return;

    if (e.target.value && index < 5) {
      inputRefs.current[index + 1].focus();
    }

    setIsOtpComplete(
      inputRefs.current.every(input => input?.value.length === 1)
    );
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    setTimeout(() => {
      setIsOtpComplete(
        inputRefs.current.every(input => input?.value.length === 1)
      );
    }, 0);
  };

  const handlePaste = (e) => {
    const data = e.clipboardData.getData("text").slice(0, 6);
    data.split("").forEach((char, i) => {
      if (inputRefs.current[i]) {
        inputRefs.current[i].value = char;
      }
    });
    inputRefs.current[data.length - 1]?.focus();
  };


const registerUser = async () => {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password: localStorage.getItem("signup_password"),
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    alert(data.error);
    return;
  }

  localStorage.removeItem("signup_password");
  router.push("/UserinfoForm");
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
            {email}
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
  disabled={!isOtpComplete || loading}
  onClick={verifyOtp}
>
  {loading ? "Verifying..." : "Verify & Continue"}
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
