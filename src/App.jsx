import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
// import LoginPage from "./pages/Login"
import Login from "./auth/Login"; 
import Signup from "./auth/Signup";
import ContactUs from "./pages/Contactus";
import AboutUs from "./pages/AboutUs";
import ProfilePage from "./pages/Profile";
import AdminLayout from "./layout/AdminLayout";
import Allevent from "./dashboard/Allevent";
import AllUsers from "./dashboard/AllUsers";
import Bookings from "./dashboard/Bookings";
import Overview from "./dashboard/Overview";
// app.tsx
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>       
          <Route path="dashboard" element={<AdminLayout />} >
          <Route index element={<Overview/>}/>
          <Route path="allEvent" element={<Allevent/>}/>
          <Route path="AllUsers" element={<AllUsers/>}/>
          <Route path="bookings" element={<Bookings/>}/>
          <Route
            path="*"
            element={
              <>
                <h1>Page not Found</h1>
                <h2>your do not have access to this page</h2>
                <Link to={"/"}>Back to home</Link>
              </>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
