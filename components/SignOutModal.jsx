"use client";

import React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { signOut } from "next-auth/react";
import Image from "next/image";
import "./SignOutModal.css";

const SignOutModal = ({ onClose }) => {
  if (typeof window === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="signout-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center"
        onClick={onClose}
      >
        <div
          className="Signoutmodal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ 
                duration: 0.4, 
                ease: [0.16, 1, 0.3, 1],
                opacity: { duration: 0.3 }
              }}
            >


              
          <div className="signoutmodalcard">
            <button className="Close-modal" aria-label="Close modal" onClick={onClose}><Image src="/Postimg/cross.svg" alt="Cross" width={18} height={18}></Image></button>
            <div className="logoutlogo"><Image src="/Logout/logout.svg" alt="logout logo" height={30} width={30}></Image></div>
            <div className="unilynk">UNILYNK</div>
            <hr className="dash"/>
            <div className="Signouttxt">Sign Out?</div>
            <p className="signoutpara">Your session will end and you'll need to sign back in to access your Unilynk account.</p>
            <div className="signoutbtns">
              <button className="signoutbtn signoutclick" onClick={() => signOut({callbackUrl: "/"})} >Yes, Sign me Out</button>
              <button className="signoutbtn cancel" onClick={onClose}>Cancel</button>
            </div>
          </div>




          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default SignOutModal;
