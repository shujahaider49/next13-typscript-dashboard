import Link from "next/link";
import React, { ReactNode } from "react";
import { RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { useRouter } from "next/router";
// import Image from "next/image";
// import logo from '../public/images/logo.png'
import { FaUser } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { MdOutlineDashboard } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { PiUserListFill } from "react-icons/pi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";




interface NavigationItem {
  href: string;
  title: string;
  icon: React.ElementType;
}

interface SidebarProps {
  children: ReactNode;
}

const navigationItems: NavigationItem[] = [
  { href: "/", title: "Dashboard", icon: RxDashboard },
  { href: "/customer", title: "Customer", icon: RxPerson },
  { href: "/testimonial", title: "Testimonials", icon: VscPreview },
  { href: "/add-user", title: "Add User", icon: IoMdPersonAdd },
  { href: "/users", title: "Users", icon: PiUserListFill },
  { href: "/create-product", title: "Create Products", icon: IoCreateOutline },
  { href: "/product", title: "All Products", icon: MdProductionQuantityLimits },
  //   { href: "/orders", title: "Orders", icon: HiOutlineShoppingBag },
  //   { href: "/settings", title: "Settings", icon: FiSettings },
  //   { href: "/user", title: "Users", icon: FaUser  },
];

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const router = useRouter();
  return (
    <div className="flex">
      <div className="bg-cyan-950">
        <div className="flex flex-col h-screen p-3 shadow sm:w-52 md:w-60">
          <div className="space-y-3 fixed">
            <div className="flex items-center cursor-pointer text-center">
              <MdOutlineDashboard size={70} className="text-white" />
              <h2 className="ml-2 md:text-xl  text-white">
                E-Store <br /> Dashboard
              </h2>
            </div>
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex-1">
              <ul className="pt-2 p-4 pb-4 space-y-2 text-white text-sm">
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>
                      <p
                        className={`flex items-center p-2 px-6 space-x-3 rounded-full ${
                          router.pathname === item.href
                            ? "bg-white text-cyan-950 duration-500 scale-110"
                            : ""
                        }`}
                      >
                        {React.createElement(item.icon, { size: 20 })}
                        <span>{item.title}</span>
                      </p>
                    </Link>
                    {item.title === "Testimonials" && <hr className="my-4 border-t border-neutral-100 opacity-100 dark:opacity-50" />}
                    {item.title === "Users" && <hr className="my-4 border-t border-neutral-100 opacity-100 dark:opacity-50" />}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <main className="w-full bg-gray-100">{children}</main>
    </div>
  );
};

export default Sidebar;
