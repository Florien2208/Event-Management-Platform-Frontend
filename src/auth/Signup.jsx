import { useId } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Input = ({
  type = "text",
  name = "",
  id = "",
  className = "",
  placeholder,
  icon,
  icons,
  onChange = () => {},
  ...other
}) => {
  const inputId = useId();
  return (
    <label htmlFor={id ?? inputId} className="flex items-center gap-2 w-full">
      {icon && <span className="text-gray-500">{icon}</span>}
      <input
        type={type}
        name={name}
        id={id ?? inputId}
        className={`px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500 ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        {...other}
      />
      {icons && <span className="text-gray-500">{icons}</span>}
    </label>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.element,
  icons: PropTypes.element,
  onChange: PropTypes.func,
};

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    // Handle form submission
  };

  return (
    <>
      <div
        className="flex justify-center items-center h-screen "
        style={{
          backgroundImage: `url('images.jpg')`,
          backgroundSize: "cover",
        }}
      >
        <div
          className="bg-white p-8 rounded-lg shadow-lg"
          style={{ width: "400px" }}
        >
          <h1 className="text-2xl font-bold mb-8">Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              icon={<FontAwesomeIcon icon={faUser} className="faicon" />}
              name="username"
              placeholder="Username"
              type="text"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <p className="text-red-500 text-sm">Username is required</p>
            )}
            <Input
              icon={<FontAwesomeIcon icon={faEnvelope} className="faicon" />}
              name="email"
              placeholder="Email"
              type="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                Email is required and must be valid
              </p>
            )}
            <Input
              icon={<FontAwesomeIcon icon={faLock} className="faicon" />}
              name="password"
              placeholder="Password"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">Password is required</p>
            )}
            <div className="flex justify-between">
              <Link to="/login" className="text-blue-500">
                Already have an account? Login
              </Link>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
