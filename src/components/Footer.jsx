import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Log from "../images/Logo-4x.png";
import Payment from "../images/comp.png";

const Footer = () => {
  return (
    <>
      <div className="footer bg-gray-800 text-white">
        <div className="container mx-auto px-8 py-16 flex flex-wrap justify-between">
          <div className="w-1/4">
            <img src={Log} className="footerpic" alt="Logo" />
            <div className="mt-4 flex">
              <input
                type="text"
                placeholder="Enter your Email"
                className=" border rounded-lg px-4 py-2"
              />
              <input
                type="submit"
                className=" ml-2 px-4 py-2 bg-yellow-500 text-gray-800 rounded-lg"
                value="Subscribe"
              />
            </div>
            <div className="mt-4">
              <p className="text-sm">
                Event management Planners sit amet consectetur adipisicing elit.
              </p>
              <p className="text-sm">
                Perferendis sapiente tenetur officiis explicabo fugit, sit
                mollitia eum atque excepturi quaerat autem.
              </p>
            </div>

            <div className="mt-4">
              <img src={Payment} className="pic" alt="Payment methods" />
            </div>
          </div>
          <div className="w-1/4">
            <h4 className="text-lg">Navigation</h4>
            <hr className="my-4 border-t border-white" />
            <ul className="textt2 list-disc pl-4">
              <li>Home</li>
              <li>About</li>
              <li>Destination</li>
              <li>Tour</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="w-1/4">
            <h4 className="text-lg">Need Help?</h4>
            <hr className="my-4 border-t border-white" />
            <div className="contohold">
              <div className="conto1">
                <p>Call Us</p>
                <p>+123 456 7890</p>
              </div>
              <div className="conto2">
                <p>Email for Us</p>
                <p>eventplanners@gmail.com</p>
              </div>
              <div className="conto3">
                <p>Location</p>
                <p>Main Street, Victoria 8007.</p>
              </div>
              <div className="conto4">
                <p>Follow Us</p>
                <p className="footsocial">
                  <FaFacebookF className="inline-block" />
                  <FaInstagram className="inline-block ml-2" />
                  <FaTwitter className="inline-block ml-2" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-8 mx-20 border-t border-white" />
        <div className="flex justify-between mx-20">
          <div>
            <h6 className="text-sm">
              Copyright © 2024 Geek Code Lab. All Rights Reserved.
            </h6>
          </div>
          <div>
            <h6 className="text-sm">
              Privacy Policy | Terms of Use | Cookie Policy
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
