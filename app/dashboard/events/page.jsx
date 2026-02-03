"use client"

import React from 'react'
import "./events.css"
import { useState } from 'react'
// import { Formhome } from '@/app/forms/Home'

//---------------------------- Form import

import {
  Plus,
  FileText,
  Eye,
  Trash2,
  Copy,
} from "lucide-react";
import Link from "next/link";
import { useEffect} from "react";


const Eventspage = () => {
    const [isEvent, setIsEvent] = useState(true);














const [forms, setForms] = useState([]);

  useEffect(() => {
    const savedForms = localStorage.getItem("unilynk-forms");
    if (savedForms) {
      setForms(JSON.parse(savedForms));
    }
  }, []);

  const createNewForm = () => {
    const newForm = {
      id: Date.now().toString(),
      title: "Untitled Form",
      description: "",
      createdAt: new Date().toISOString(),
      questions: 0,
    };

    const updatedForms = [newForm, ...forms];
    setForms(updatedForms);
    localStorage.setItem(
      "unilynk-forms",
      JSON.stringify(updatedForms),
    );
  };

  const deleteForm = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    const updatedForms = forms.filter((form) => form.id !== id);
    setForms(updatedForms);
    localStorage.setItem(
      "unilynk-forms",
      JSON.stringify(updatedForms),
    );
    localStorage.removeItem(`unilynk-form-${id}`);
  };

  const duplicateForm = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    const formToDuplicate = forms.find(
      (form) => form.id === id,
    );
    if (formToDuplicate) {
      const newForm = {
        ...formToDuplicate,
        id: Date.now().toString(),
        title: `${formToDuplicate.title} (Copy)`,
        createdAt: new Date().toISOString(),
      };
      const updatedForms = [newForm, ...forms];
      setForms(updatedForms);
      localStorage.setItem(
        "unilynk-forms",
        JSON.stringify(updatedForms),
      );

      // Duplicate form data
      const formData = localStorage.getItem(
        `unilynk-form-${id}`,
      );
      if (formData) {
        localStorage.setItem(
          `unilynk-form-${newForm.id}`,
          formData,
        );
      }
    }
  };

















  return (
    <div>
      <div className='my-eventsbody'>
        <div className="eventshead">
          <div className="eventstextcont">
            <h1 className="myeventstext">Events</h1>
            <div className="eventsnum">6 upcoming Events</div>
          </div>



          <div className="events-toggle">
            <div className={`event-track ${!isEvent ? "right" : ""}`}>
              <div className="event-bg"></div>
              <button
                className={`event-btn ${isEvent ? "active" : ""}`}
                onClick={() => setIsEvent(true)}
              >
                Events
              </button>
              <button
                className={`event-btn ${!isEvent ? "active" : ""}`}
                onClick={() => setIsEvent(false)}
              >
                Your Forms
              </button>
            </div>
          </div>


          <div className="search-filter">

            
              {isEvent?(
                <button className="filterevent">
              <img src="/eventsicons/filter.svg" alt="filter" />
              Filter
              </button>):(<button className="filterevent" onClick={createNewForm} >New Form</button>)}
            

            <div className="eventssearchcont">
              <img src="/dashboard/Search.svg" alt="Search icon" />
              <input type="text" className='searchevents' placeholder="Search clubs..." />
            </div>
          </div>
        </div>

        <div className="eventscontainercont">
           {isEvent?(<div className="eventscontainer">

            {/*-------------------------- Event card------------------------------- */}
            <div className="event">



              <div className="eventimginfo">
                <div className="eventpic">
                  <img src="/dashboard/events.svg" alt="" />
                </div>
                <div className="eventdef">
                  <div className="genre">Exhibition</div>
                  <p className='eventname'>Annual Photography Exhibition</p>
                  <p className='clubname'>Photography Club</p>
                </div>
              </div>

              <ul className='eventinfo'>
                <li className="date">
                  <img src="/eventsicons/Events.svg" alt="" />Jan 25, 2026</li>

                <li className="time">
                  <img src="/eventsicons/Clock.svg" alt="" />2:00PM - 6:00PM</li>

                <li className="venue">
                  <img src="/eventsicons/Location.svg" alt="" />OAT</li>
              </ul>
              <hr />
              <div className="applyevent">
                <button className='viewdetails'>View Details</button>
                <button className='apply'>Apply</button>
              </div>

            </div>


            {/*--------------------------------------------------------------------------- */}

            <div className="event">



              <div className="eventimginfo">
                <div className="eventpic">
                  <img src="/dashboard/events.svg" alt="" />
                </div>
                <div className="eventdef">
                  <div className="genre">Exhibition</div>
                  <p className='eventname'>Annual Photography Exhibition</p>
                  <p className='clubname'>Photography Club</p>
                </div>
              </div>

              <ul className='eventinfo'>
                <li className="date">
                  <img src="/eventsicons/Events.svg" alt="" />Jan 25, 2026</li>

                <li className="time">
                  <img src="/eventsicons/Clock.svg" alt="" />2:00PM - 6:00PM</li>

                <li className="venue">
                  <img src="/eventsicons/Location.svg" alt="" />OAT</li>
              </ul>
              <hr />
              <div className="applyevent">
                <button className='viewdetails'>View Details</button>
                <button className='apply'>Apply</button>
              </div>

            </div>

            <div className="event">



              <div className="eventimginfo">
                <div className="eventpic">
                  <img src="/dashboard/events.svg" alt="" />
                </div>
                <div className="eventdef">
                  <div className="genre">Exhibition</div>
                  <p className='eventname'>Annual Photography Exhibition</p>
                  <p className='clubname'>Photography Club</p>
                </div>
              </div>

              <ul className='eventinfo'>
                <li className="date">
                  <img src="/eventsicons/Events.svg" alt="" />Jan 25, 2026</li>

                <li className="time">
                  <img src="/eventsicons/Clock.svg" alt="" />2:00PM - 6:00PM</li>

                <li className="venue">
                  <img src="/eventsicons/Location.svg" alt="" />OAT</li>
              </ul>
              <hr />
              <div className="applyevent">
                <button className='viewdetails'>View Details</button>
                <button className='apply'>Apply</button>
              </div>

            </div>

            <div className="event">



              <div className="eventimginfo">
                <div className="eventpic">
                  <img src="/dashboard/events.svg" alt="" />
                </div>
                <div className="eventdef">
                  <div className="genre">Exhibition</div>
                  <p className='eventname'>Annual Photography Exhibition</p>
                  <p className='clubname'>Photography Club</p>
                </div>
              </div>

              <ul className='eventinfo'>
                <li className="date">
                  <img src="/eventsicons/Events.svg" alt="" />Jan 25, 2026</li>

                <li className="time">
                  <img src="/eventsicons/Clock.svg" alt="" />2:00PM - 6:00PM</li>

                <li className="venue">
                  <img src="/eventsicons/Location.svg" alt="" />OAT</li>
              </ul>
              <hr />
              <div className="applyevent">
                <button className='viewdetails'>View Details</button>
                <button className='apply'>Apply</button>
              </div>

            </div>

            <div className="event">



              <div className="eventimginfo">
                <div className="eventpic">
                  <img src="/dashboard/events.svg" alt="" />
                </div>
                <div className="eventdef">
                  <div className="genre">Exhibition</div>
                  <p className='eventname'>Annual Photography Exhibition</p>
                  <p className='clubname'>Photography Club</p>
                </div>
              </div>

              <ul className='eventinfo'>
                <li className="date">
                  <img src="/eventsicons/Events.svg" alt="" />Jan 25, 2026</li>

                <li className="time">
                  <img src="/eventsicons/Clock.svg" alt="" />2:00PM - 6:00PM</li>

                <li className="venue">
                  <img src="/eventsicons/Location.svg" alt="" />OAT</li>
              </ul>
              <hr />
              <div className="applyevent">
                <button className='viewdetails'>View Details</button>
                <button className='apply'>Apply</button>
              </div>

            </div>

            <div className="event">



              <div className="eventimginfo">
                <div className="eventpic">
                  <img src="/dashboard/events.svg" alt="" />
                </div>
                <div className="eventdef">
                  <div className="genre">Exhibition</div>
                  <p className='eventname'>Annual Photography Exhibition</p>
                  <div className='clubname'>Photography Club</div>
                </div>
              </div>

              <ul className='eventinfo'>
                <li className="date">
                  <img src="/eventsicons/Events.svg" alt="" />Jan 25, 2026</li>

                <li className="time">
                  <img src="/eventsicons/Clock.svg" alt="" />2:00PM - 6:00PM</li>

                <li className="venue">
                  <img src="/eventsicons/Location.svg" alt="" />OAT</li>
              </ul>
              <hr />
              <div className="applyevent">
                <button className='viewdetails'>View Details</button>
                <button className='apply'>Apply</button>
              </div>

            </div>




          </div>):(
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
           <div className="home-container">
      {/* Main Content */}
      <main className="home-main">
        {forms.length === 0 ? (
          <div className="home-empty-state">
            <div className="home-empty-icon">
              <FileText />
            </div>
            <h2 className="home-empty-title">No forms yet</h2>
            <p className="home-empty-text">
              Create your first form to get started
            </p>
            <button
              onClick={createNewForm}
              className="btn-new-form"
            >
              <Plus />
              Create Form
            </button>
          </div>
        ) : (
          <div>
            <h2 className="home-section-title">Recent Forms</h2>
            <div className="forms-grid">
              {forms.map((form) => (
                <div
                  key={form.id}
                  className="form-card"
                >
                  <div className="form-card-header">
                    <div className="form-card-icon">
                      <FileText />
                    </div>
                    <div className="form-card-actions">
                      <button
                        onClick={(e) =>
                          duplicateForm(form.id, e)
                        }
                        className="btn-icon"
                        title="Duplicate"
                      >
                        <Copy />
                      </button>
                      <button
                        onClick={(e) => deleteForm(form.id, e)}
                        className="btn-icon"
                        title="Delete"
                      >
                        <Trash2 />
                      </button>
                    </div>
                  </div>
                  <h3 className="form-card-title">
                    {form.title}
                  </h3>
                  <p className="form-card-description">
                    {form.description || "No description"}
                  </p>
                  <div className="form-card-meta">
                    <span>{form.questions} questions</span>
                    <span>
                      {new Date(
                        form.createdAt,
                      ).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="form-card-footer">
                    <Link
                      // href={`/builder/${form.id}`}
                      href={`/FormBuilder/${form.id}`}
                      className="btn-edit"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FileText />
                      Edit
                    </Link>
                    <Link
                      // href={`/preview/${form.id}`}
                      href={`/FormPreview/${form.id}`}
                      className="btn-preview"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Eye />
                      Preview
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            )}

        </div>
      </div>
    </div>
  )
}

export default Eventspage
