import React from "react";
import { Container, CardGroup, Card } from "react-bootstrap";
import "./events.css";

export default function EventCard(props) {
  let event = props.event;
  return (
    <Card className="card-event">
      <div className="date">
        <p>{event.Month}</p>
        <p>{event.Day}</p>
      </div>
      <Card.Body>
        <Card.Title>{event.Title}</Card.Title>
        <Card.Text>{event.Content}</Card.Text>
      </Card.Body>
    </Card>
  );
}
