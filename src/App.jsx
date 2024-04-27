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
import Overview from "./dashboard/Overview";
import Allevent from "./dashboard/Allevent";

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
        <Route>
          <Route path="dashboard" element={<AdminLayout />} />
          <Route path="/overview" element={<Overview/>}/>
          <Route path="/allevent" element={<Allevent/>}/>

          <Route
            path="*"
            element={
              <>
                <h1>Page not Found</h1>
                <Link to={"/"}>Back to home</Link>
              </>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
