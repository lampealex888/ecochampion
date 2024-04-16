"use client";

import { useEffect, useState, useRef } from 'react';
import { getJson } from "serpapi";
import eventsData from './SerpApiEventsData.json';

export default function Events() {
  
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    async function fetchEvents() {

      setEvents(eventsData.events_results); // Update the events state with the events_results data

      var clientLocation;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {

      //  const response = getJson({
      //    engine: "google",
      //    api_key: process.env.NEXT_PUBLIC_SERP_API_KEY,
      //    q: "recycling events near me",
      //    location: position.coords.latitude + "," + position.coords.longitude,
      //  });
      //  console.log(response);


        }, function (error) { console.error('Error getting location:' + error)}
      );
      }
    }

    fetchEvents();
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Events Nearby:</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <h2> <a href={event.link} style={{ color: 'blue', textDecoration: 'underline' }}> {event.title} </a></h2>
            <p>Start Date: {event.date.start_date}</p>
            <p>When: {event.date.when}</p>
            <p>Address: {event.address.join(', ')}</p>
            <img src={event.thumbnail} alt={event.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}