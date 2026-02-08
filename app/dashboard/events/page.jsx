"use client";

import React, { useEffect, useState } from "react";
import "./events.css";
import Link from "next/link";
import { format } from "date-fns";

const Eventspage = () => {
  const [events, setEvents] = useState([]);
  const [appliedEvents, setAppliedEvents] = useState({});

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/forms/public");
        if (!res.ok) throw new Error("Failed to fetch events");

        const data = await res.json();
        setEvents(data);

        // ⭐ Check applied status
        const appliedMap = {};

        await Promise.all(
          data.map(async (event) => {
            try {
              const res = await fetch(`/api/forms/check-applied?formId=${event._id}`);
              const result = await res.json();
              appliedMap[event._id] = result.applied;
            } catch {
              appliedMap[event._id] = false;
            }
          })
        );

        setAppliedEvents(appliedMap);

      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="my-eventsbody">
      <div className="eventscontainercont">
        <div className="eventscontainer">

          {events.length === 0 && (
            <p>No Public Forms Available</p>
          )}

          {events.map((event) => (
            <div className="event" key={event._id}>

              <div className="eventimginfo">
                <div className="eventpic">
                  <img src="/dashboard/events.svg" alt="" />
                </div>

                <div className="eventdef">
                  <div className="genre">
                    {event.genre || "Exhibition"}
                  </div>

                  <p className="eventname">
                    {event.title || "Untitled Event"}
                  </p>

                  <p className="clubname">
                    {event.description || "No description available"}
                  </p>
                </div>
              </div>

              <ul className="eventinfo">

                <li className="date">
                  <img src="/eventsicons/Events.svg" alt="" />
                  {event.date
                    ? format(new Date(event.date), "MMM dd, yyyy")
                    : "Date TBA"}
                </li>

                <li className="time">
                  <img src="/eventsicons/Clock.svg" alt="" />
                  {event.time || "Time TBA"}
                </li>

                <li className="venue">
                  <img src="/eventsicons/Location.svg" alt="" />
                  {event.location || "Venue TBA"}
                </li>

              </ul>

              <hr />

              <div className="applyevent">

                
                  <button className="viewdetails">
                    View Details
                  </button>
              

                {appliedEvents[event._id] ? (

                  <button className="apply applied-btn" disabled>
                    Applied
                  </button>

                ) : (

                  <Link href={`/FormPreview/${event._id}`}>
                    <button className="apply">
                      Apply
                    </button>
                  </Link>

                )}

              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Eventspage;
