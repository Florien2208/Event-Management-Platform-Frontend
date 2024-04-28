import { useState } from "react";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/signup",
        data
      );
      console.log("Signup successful:", response.data);
      
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
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
          <input
            type="text"
            name="name"
            placeholder="Username"
            {...register("name", { required: true })}
          />
          {errors.username && (
            <p className="text-red-500 text-sm">Username is required</p>
          )}
          <input
            name="email"
            type="email"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              Email is required and must be valid
            </p>
          )}
          <input
            name="password"
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">Password is required</p>
          )}
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-between">
          <Link to="/login" className="text-blue-500">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
