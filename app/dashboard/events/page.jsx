import React from 'react'
import "./events.css"

const Eventspage = () => {
  return (
    <div>
      <div className='my-eventsbody'>
        <div className="eventshead">
          <div className="eventstextcont">
            <h1 className="myeventstext">Events</h1>
            <div className="eventsnum">6 upcoming Events</div>
          </div>


          <div className="search-filter">
            <div className="filterevent">
              <img src="/eventsicons/filter.svg" alt="filter" />
              Filter
            </div>

            <div className="eventssearchcont">
              <img src="/dashboard/Search.svg" alt="Search icon" />
              <input type="text" className='searchevents' placeholder="Search clubs..." />
            </div>
          </div>
        </div>


        <div className="eventscontainer">

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

          


        </div>


      </div>
    </div>
  )
}

export default Eventspage
