// HomePage.js

import EventCard from "./card/EventCard";

const events = [
  {
    id: 1,
    title: "Event 1",
    date: "April 28, 2024",
    location: "Location 1",
    description: "Description for Event 1",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Event 2",
    date: "April 29, 2024",
    location: "Location 2",
    description: "Description for Event 2",
    image: "https://via.placeholder.com/300",
  },
  // Add more events as needed
];

const Event = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Event;
