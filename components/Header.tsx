import Link from "next/link";
import { useState, useRef } from "react";

interface NavigationItem {
  title: string;
  path: string;
}

interface ProfileDropDownProps {
  class: string;
}

const ProfileDropDown: React.FC<ProfileDropDownProps> = (props) => {
  const [state, setState] = useState(false);
  const profileRef = useRef<HTMLButtonElement>(null);

  const navigation: NavigationItem[] = [
    { title: "Dashboard", path: "/" },
    { title: "Settings", path: "/settings" },
    { title: "Log out", path: "/sign-in" },
  ];

  return (
    <div className={`relative ${props.class}`}>
      <div className="flex items-center">
        <button
          ref={profileRef}
          className="w-7 h-7 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
          onClick={() => setState(!state)}
        >
          <img
            src="https://randomuser.me/api/portraits/men/46.jpg"
            className="w-full h-full rounded-full"
            alt="User"
          />
        </button>
      </div>
      <ul
        className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? "" : "lg:hidden"
        }`}
      >
        {navigation.map((item, idx) => (
          <li key={idx}>
            <Link href={item.path}>
              <p className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5">
                {item.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const YourComponent: React.FC = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <nav className="bg-white border-b">
      <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
        <h1 className="font-bold">
          {/* {userName ? `Welcome, ${userName}` : "Hello"} */}
          Welcome
        </h1>

        <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
          <form className="flex items-center space-x-2 border rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 m-2 flex-none text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className="w-full p-1 outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
              type="text"
              placeholder="Search"
            />
          </form>
          <ProfileDropDown class="hidden lg:block" />
        </div>
      </div>
    </nav>
  );
};

export default YourComponent;
