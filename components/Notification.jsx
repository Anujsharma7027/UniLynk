"use client";

import {  useState } from "react";
import Image from "next/image";
import "./Notification.css";

const Notification = ({ onClose }) => {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
        setTimeout(onClose, 400); // match CSS duration
    };

    return (
        <div className="overlay" onClick={handleClose}>
            <div
                className={`notifycard ${open ? "open" : ""}`}
                onClick={(e) => e.stopPropagation()}
            >

                <div className="notifyhead">
                    <div className="notification"><Image src="/Chat/bell.svg" alt="bell" width={15} height={15} />Notificatons</div>
                    <button className="clearall">Clear all</button>
                </div>
                <div className="notifybody">


                    <div className="nonewnotify">No new notificatoins</div>


                </div>

            </div>
        </div>
    );
};

export default Notification;
