import { useContext } from 'react';
import logo from '../assets/suspicious_6109365.png';
import { AuthContext } from '../Providers/Authprovider';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext) || {}; 

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
      <div className="flex-1">
        <Link to="/" className="flex gap-2 items-center">
          <img className="w-auto h-7" src={logo} alt="Website Logo" />
          <span className="font-bold text-lg">Lost & Found</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lost-items">Lost Items</Link>
          </li>
          <li>
            <Link to="/found-items">Found Items</Link>
          </li>
          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/add-lost-item" className="justify-between">
                  Add Lost Item
                </Link>
              </li>
              <li>
                <Link to="/add-found-item">Add Found Item</Link>
              </li>
              <li>
                <Link to="/manage-my-items">Manage My Items</Link>
              </li>
              <li className="mt-2">
                <button
                  onClick={handleLogout}
                  className="bg-gray-200 block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
