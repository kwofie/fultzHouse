import React from "react";
import EventCard from "./EventCard";
import { Container, CardGroup, Card } from "react-bootstrap";
import "./events.css";

export default function EventMonthCards(props) {
  let month = props.Month;
  let events = props.Events;
  return (
    <section className="month">
      <div className="month-header">
        <h2>{month}</h2>
      </div>
      <CardGroup>
        {events.map((event) => (
          <EventCard event={event} />
        ))}
      </CardGroup>
    </section>
  );
}
