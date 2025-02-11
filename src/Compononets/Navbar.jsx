import { useContext } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faList, faCogs, faComments, faInfoCircle, faMoon, faSun, faUser } from "@fortawesome/free-solid-svg-icons"; // Add faMoon here
import logo from "../assets/suspicious_6109365.png";
import { AuthContext } from "../Providers/Authprovider";

const Navbar = ({ darkMode, setDarkMode }) => {
  const { user, logOut } = useContext(AuthContext) || {};

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div
      className={`sticky shadow-xl top-0 z-20 ${darkMode ? "bg-gradient-to-r from-gray-900 to-gray-800" : "bg-gradient-to-r from-red-100 to-orange-200"}`}
    >
      <div className="navbar container p-6 px-4">
        <div className="flex justify-between">
          <NavLink to="/" className="flex gap-2 items-center">
            <img className="w-auto h-7" src={logo} alt="Website Logo" />
            <span className={`font-bold lg:block hidden lg:text-2xl ${darkMode ? "text-white" : "text-yellow-900"}`}>
              Lost & Found
            </span>
          </NavLink>
        </div>

        {/* Center Navigation Links */}
        <div className="flex-1 flex justify-center">
          <ul className="flex items-center space-x-6">
            <li className="flex flex-col items-center">
              <NavLink
                to="/"
                end  // Use `end` instead of `exact`
                className={({ isActive }) =>
                  `font-bold rounded-lg ${darkMode ? "text-white" : "text-black"} transition duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-yellow-600 to-orange-500  p-2"
                      : "hover:bg-gradient-to-r hover:from-yellow-600 hover:to-orange-500 hover:p-2"
                  }`
                }
              >
                <FontAwesomeIcon icon={faHome} className="text-xl" />
                <span className={`${darkMode ? "text-white" : "text-black"} mt-1`}>Home</span>
              </NavLink>
            </li>
            <li className="flex flex-col items-center">
              <NavLink
                to="/AllItemsPage"
                end  // Use `end` instead of `exact`
                className={({ isActive }) =>
                  `font-bold rounded-lg ${darkMode ? "text-white" : "text-black"} transition duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-yellow-600 to-orange-500  p-2"
                      : "hover:bg-gradient-to-r hover:from-yellow-600 hover:to-orange-500 hover:p-2"
                  }`
                }
              >
                <FontAwesomeIcon icon={faList} className="text-xl" />
                <span className={`${darkMode ? "text-white" : "text-black"} mt-1`}>All Items</span>
              </NavLink>
            </li>

            {/* Hide these links on small devices */}
            <li className="hidden md:flex flex-col items-center">
              <NavLink
                to="/services"
                end  // Use `end` instead of `exact`
                className={({ isActive }) =>
                  `font-bold rounded-lg ${darkMode ? "text-white" : "text-black"} transition duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-yellow-600 to-orange-500  p-2"
                      : "hover:bg-gradient-to-r hover:from-yellow-600 hover:to-orange-500 hover:p-2"
                  }`
                }
              >
                <FontAwesomeIcon icon={faCogs} className="text-xl" />
                <span className={`${darkMode ? "text-white" : "text-black"} mt-1`}>Services</span>
              </NavLink>
            </li>
            <li className="hidden md:flex flex-col items-center">
              <NavLink
                to="/feedback"
                end  // Use `end` instead of `exact`
                className={({ isActive }) =>
                  `font-bold rounded-lg ${darkMode ? "text-white" : "text-black"} transition duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-yellow-600 to-orange-500  p-2"
                      : "hover:bg-gradient-to-r hover:from-yellow-600 hover:to-orange-500 hover:p-2"
                  }`
                }
              >
                <FontAwesomeIcon icon={faComments} className="text-xl" />
                <span className={`${darkMode ? "text-white" : "text-black"} mt-1`}>Feedback</span>
              </NavLink>
            </li>
            <li className="hidden md:flex flex-col items-center">
              <NavLink
                to="/about-us"
                end  // Use `end` instead of `exact`
                className={({ isActive }) =>
                  `font-bold rounded-lg ${darkMode ? "text-white" : "text-black"} transition duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-yellow-600 to-orange-500 text-white p-2"
                      : "hover:bg-gradient-to-r hover:from-yellow-600 hover:to-orange-500 hover:p-2"
                  }`
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} className="text-xl" />
                <span className={`${darkMode ? "text-white" : "text-black"} mt-1`}>About Us</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 mx-4 rounded-full bg-gray-300 dark:bg-gray-700"
        >
          <FontAwesomeIcon
            icon={darkMode ? faSun : faMoon}
            className="text-xl text-gray-800 dark:text-yellow-400"
          />
        </button>

        {/* User Dropdown */}
        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <img
                title={user?.displayName}
                className="w-14 rounded-full"
                src={user?.photoURL}
                alt="User Profile"
              />
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 ${
                darkMode ? "bg-gray-800 text-white" : "bg-base-100 text-black"
              }`}
            >
              <li>
                <NavLink
                  to="/add-lost-item"
                  className={`border-b-2 bg-gradient-to-r ${
                    darkMode
                      ? "from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white"
                      : "from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-black"
                  } font-bold rounded-lg border`}
                >
                  Add Lost / Find Item
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/All-Recovered-Items"
                  className={`border-b-2 bg-gradient-to-r mt-2 ${
                    darkMode
                      ? "from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white"
                      : "from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-black"
                  } font-bold rounded-lg border`}
                >
                  All Recovered Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/manage-my-items"
                  className={`border-b-2 bg-gradient-to-r mt-2 ${
                    darkMode
                      ? "from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white"
                      : "from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-black"
                  } font-bold rounded-lg border`}
                >
                  Manage My Items
                </NavLink>
              </li>
              <li className="mt-2">
                <button
                  onClick={handleLogout}
                  className={`border-b-2 bg-gradient-to-r mt-2 ${
                    darkMode
                      ? "from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white"
                      : "from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-black"
                  } font-bold rounded-lg border`}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <NavLink
              to="/login"
              className={`font-bold rounded-lg ${darkMode ? "text-white" : "text-black"}`}
            >
              <FontAwesomeIcon icon={faUser} className="text-xl" />
              <span className={`${darkMode ? "text-white" : "text-black"} ml-2`}>Login</span>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
