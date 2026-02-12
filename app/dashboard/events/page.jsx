"use client";

import React, { useEffect, useMemo, useState } from "react";
import "./events.css";
import { useSearchParams } from "next/navigation";

import EventCard from "./components/EventCard";
import PaginationControls from "./components/PaginationControls";
import {
  ITEMS_PER_PAGE,
  filterEvents,
  paginateItems,
} from "./eventFilters";

const SAMPLE_EVENTS = [
  {
    _id: "sample-1",
    title: "Frontend Workshop",
    description: "Hands-on React patterns for production apps.",
    genre: "Workshop",
    club: "Tech Club",
    date: "2026-03-20",
    time: "18:30",
    location: "Lab 2",
  },
  {
    _id: "sample-2",
    title: "Campus Innovation Meetup",
    description: "Meet peers and discuss student startup ideas.",
    genre: "Meetup",
    club: "Anuj Club",
    date: "2026-03-21",
    time: "19:00",
    location: "Main Hall",
  },
  {
    _id: "sample-3",
    title: "Cultural Showcase Seminar",
    description: "Panel on organizing inclusive campus events.",
    genre: "Seminar",
    club: "Cultural Club",
    date: "2026-03-23",
    time: "16:00",
    location: "Auditorium",
  },
];

const Eventspage = () => {
  const searchParams = useSearchParams();
  const [events, setEvents] = useState([]);
  const [appliedEvents, setAppliedEvents] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const activeFilters = useMemo(
    () => ({
      club: searchParams.get("club") || "",
      category: searchParams.get("category") || "",
    }),
    [searchParams]
  );

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/forms/publics");
        if (!res.ok) throw new Error("Failed to fetch events");

        const data = await res.json();
        const eventsData = Array.isArray(data) ? data : [];
        setEvents(eventsData);

        const appliedMap = {};
        await Promise.all(
          eventsData.map(async (event) => {
            try {
              const applyRes = await fetch(`/api/forms/check-applied?formId=${event._id}`);
              const result = await applyRes.json();
              appliedMap[event._id] = Boolean(result.applied);
            } catch {
              appliedMap[event._id] = false;
            }
          })
        );

        setAppliedEvents(appliedMap);
      } catch (error) {
        console.error(error);
        setEvents(SAMPLE_EVENTS);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = useMemo(() => filterEvents(events, activeFilters), [events, activeFilters]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilters]);

  const totalPages = Math.max(1, Math.ceil(filteredEvents.length / ITEMS_PER_PAGE));

  const paginatedEvents = useMemo(
    () => paginateItems(filteredEvents, currentPage),
    [currentPage, filteredEvents]
  );

  return (
    <div className="my-eventsbody">
      {filteredEvents.length === 0 && (
        <div className="empty-state">
          <div className="empty-illustration">
            <div className="circle-bg">
              <div className="icon-center">
                <img src="/myclubs/calender.svg" alt="" />
              </div>
            </div>
          </div>

          <h2>No matching events</h2>
          <p>No events match the selected club and category filters.</p>
        </div>
      )}

      {filteredEvents.length > 0 && (
        <div className="eventscontainercont">
          <div className="eventscontainer">
            {paginatedEvents.map((event) => (
              <EventCard key={event._id} event={event} isApplied={appliedEvents[event._id]} />
            ))}
          </div>
        </div>
      )}

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        onNext={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        onPageSelect={setCurrentPage}
      />
    </div>
  );
};

export default Eventspage;
