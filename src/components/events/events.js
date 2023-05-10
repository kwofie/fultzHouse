import { Container, CardGroup, Card } from "react-bootstrap";
import "./events.css";
import allEvents from "./event-data.json";
import EventMonthCards from "./EventMonthCards";

function EventsPage() {
  return (
    <Container className="main">
      <div className="events-header">
        <h1>Upcoming Events</h1>
      </div>
      <EventMonthCards
        Month="May"
        Events={allEvents.events.filter((e) => e.Month === "May")}
      />
      <EventMonthCards
        Month="June"
        Events={allEvents.events.filter((e) => e.Month === "June")}
      />
      <EventMonthCards
        Month="July"
        Events={allEvents.events.filter((e) => e.Month === "July")}
      />
    </Container>
  );
}

export default EventsPage;
