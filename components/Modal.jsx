import React, { useRef } from 'react'
import './modal.css'

const Modal = ({onClose}) => {
    const modalRef = useRef();

    const closeModal = (e) =>{
      if(modalRef.current === e.target){
        onClose()
      }
    }



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
            harekrishna@hari.com
            </div>
        </div>
        <div className="otpinputs">
          <input className='otpinput' maxLength={1} type="text" />
          <input className='otpinput' maxLength={1} type="text" />
          <input className='otpinput' maxLength={1} type="text" />
          <input className='otpinput' maxLength={1} type="text" />
          <input className='otpinput' maxLength={1} type="text" />
          <input className='otpinput' maxLength={1} type="text" />
        </div>

        <button className="verifycontinue">Verify & Continue</button>
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
