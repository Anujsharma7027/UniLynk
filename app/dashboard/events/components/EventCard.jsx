import React, { memo } from "react";
import Link from "next/link";
import { format } from "date-fns";

const EventCard = ({ event, isApplied }) => (
  <div className="event" key={event._id}>
    <div className="eventimginfo">
      <div className="eventpic">
        <img src="/dashboard/Events.svg" alt="" />
      </div>

      <div className="eventdef">
        <div className="genre">{event.genre || "Other"}</div>

        <p className="eventname">{event.title || "Untitled Event"}</p>

        <p className="clubname">{event.club || "Club not specified"}</p>

        <p className="event-description">{event.description || "No description available"}</p>
      </div>
    </div>

    <ul className="eventinfo">
      <li className="date">
        <img src="/eventsicons/Events.svg" alt="" />
        {event.date ? format(new Date(event.date), "MMM dd, yyyy") : "Date TBA"}
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
      <button className="viewdetails">View Details</button>

      {isApplied ? (
        <button className="apply applied-btn" disabled>
          Applied
        </button>
      ) : (
        <Link href={`/FormPreview/${event._id}`}>
          <button className="apply">Apply</button>
        </Link>
      )}
    </div>
  </div>
);

export default memo(EventCard);