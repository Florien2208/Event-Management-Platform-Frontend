//contact us

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
// contact
const Input = ({
  type = "text",
  name = "",
  id = "",
  placeholder,
  icon,
  onChange = () => {},
  ...other
}) => {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
        {placeholder}
      </label>
      <div className="flex items-center border border-gray-300 rounded">
        {icon && (
          <span className="px-3 py-2 text-gray-500">
            <FontAwesomeIcon icon={icon} />
          </span>
        )}
        <input
          type={type}
          name={name}
          id={id}
          className={`flex-1 px-4 py-2 focus:outline-none`}
          placeholder={placeholder}
          onChange={onChange}
          {...other}
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.object,
  onChange: PropTypes.func,
};

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <Input
            icon={faEnvelope}
            name="name"
            id="name"
            placeholder="Your Name"
            type="text"
            required
          />
          <Input
            icon={faEnvelope}
            name="email"
            id="email"
            placeholder="Your Email"
            type="email"
            required
          />
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
