import React from "react";

// import data
import { navigation } from "../data";
import { Link } from "react-scroll";
const NavMobile = () => {
  return (
    <nav className="bg-white shadow-2xl w-full h-full">
      <ul className="text-center h-full flex flex-col items-center justify-center gap-y-6">
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              {/* <a className='text-xl font-medium capitalize' href={item.href}>
                {item.name}
              </a> */}

              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                offset={-220}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
