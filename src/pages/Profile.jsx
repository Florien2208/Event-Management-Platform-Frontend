import { useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    address: "123 Main St, City, Country",
    bookedEvents: [
      {
        id: 1,
        title: "Tech Conference 2024",
        date: "2024-07-15",
        location: "Convention Center, City",
        tickets: 2,
      },
      {
        id: 2,
        title: "Music Festival 2024",
        date: "2024-08-20",
        location: "Outdoor Venue, City",
        tickets: 3,
      },
    ],
  });

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center mb-4">
            <img
              src="user-avatar.jpg" // Replace with the URL of the user's photo
              alt="User Avatar"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold">{`${userData.firstName} ${userData.lastName}`}</h2>
              <p className="text-gray-600">{userData.email}</p>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <p className="text-gray-600">
              <span className="font-semibold">Phone:</span>{" "}
              {userData.phoneNumber}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Address:</span> {userData.address}
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Booked Events</h2>
          {userData.bookedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white p-4 rounded-lg shadow-md mb-4"
            >
              <p className="font-semibold">{event.title}</p>
              <p className="text-gray-600">{event.date}</p>
              <p className="text-gray-600">{event.location}</p>
              <p className="text-gray-600">Tickets booked: {event.tickets}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
