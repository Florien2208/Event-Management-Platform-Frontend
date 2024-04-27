
const AboutUs = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        About Us
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-8 md:flex items-center justify-between">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Our Mission
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            We are committed to revolutionizing event management by providing a
            seamless platform that empowers organizers, delights attendees, and
            simplifies administration.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            className="w-1/2 rounded-lg"
            src="/images2.jpg"
            alt="About Us"
          />
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-lg text-gray-800 leading-relaxed">
          Our team is dedicated to fostering collaboration, creativity, and
          innovation to deliver exceptional experiences for all stakeholders
          involved in the event ecosystem.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
