// EventCard.js
// import React from "react";
import PropTypes from "prop-types";

const EventCard = ({ event }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={event.image}
            alt={event.title}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {event.date}
          </div>
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
            {event.title}
          </h2>
          <p className="mt-2 text-gray-500">{event.location}</p>
          <p className="mt-2 text-gray-600">{event.description}</p>
          <button className="mt-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

// Prop type validation
EventCard.propTypes = {
  event: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventCard;
