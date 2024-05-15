{
  /* home paga */
}

import AboutUs from "./AboutUs";
import Event from "./Event";

const Home = () => {
  return (
    <>
      <div
        className="h-80 items-center content-center"
        style={{
          backgroundImage: `url('bgt.jpg')`,
          backgroundSize: "cover",
        }}
      >
        <p className="text-center font-extrabold text-3xl text-white">
          WELCOME EVENT MANAGEMENT PLATFORM{" "}
        </p>
      </div>
      <Event />
      <AboutUs />
    </>
  );
};

export default Home;
