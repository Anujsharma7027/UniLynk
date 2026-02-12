"use client";

import { Plus } from "lucide-react";
import React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { createNewForm } from "@/lib/createNewForm";
import { getEventFilterOptions } from "@/app/dashboard/events/eventFilters";
import EventFilters from "@/app/dashboard/events/components/EventFilters";
import "./eventsheader.css";

const Eventsheader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isEvent = pathname === "/dashboard/events";

  const handleCreate = () => {
    const newForm = createNewForm();
    router.push(`/FormBuilder/${newForm.id}`);
  };

  const updateQueryParams = (paramsToUpdate = {}) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(paramsToUpdate).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  };

  return (
    <div className="eventshead">
      <div className="eventstextcont">
        <h1 className="myeventstext">Events</h1>
        <div className="eventsnum">Discover upcoming events</div>
      </div>

      <div className="events-toggle">
        <div className={`event-track ${!isEvent ? "right" : ""}`}>
          <div className="event-bg"></div>

          <button
            className={`event-btn ${isEvent ? "active" : ""}`}
            onClick={() => router.push("/dashboard/events")}
          >
            Events
          </button>

          <button
            className={`event-btn ${!isEvent ? "active" : ""}`}
            onClick={() => router.push("/dashboard/events/yourform")}
          >
            Your Forms
          </button>
        </div>
      </div>

      <div className="search-filter">
        {isEvent ? (
          <EventFilters
            filters={{
              club: searchParams.get("club") || "",
              category: searchParams.get("category") || "",
            }}
            options={getEventFilterOptions()}
            onFiltersChange={(nextFilters) =>
              updateQueryParams({
                club: nextFilters.club,
                category: nextFilters.category,
              })
            }
          />
        ) : (
          <button className="filterevent" onClick={handleCreate}>
            <Plus /> Form
          </button>
        )}
      </div>
    </div>
  );
};

export default Eventsheader;
