import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";

const MobileNavbar = ({ links }: { links: any }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    if (!toggleMenu) {
      return document.body.removeEventListener("click", () =>
        setToggleMenu(false)
      );
    }
    document.body.addEventListener("click", () => setToggleMenu(false));
  }, [toggleMenu]);

  return (
    <div className="desktop:hidden">
      <div className="flex text-secondary gap-7">
        <div
          className={`fixed top-0 desktop:hidden right-0 w-[60%] h-[100vh] bg-secondary transform ${
            toggleMenu ? "translate-x-0" : "translate-x-full"
          } transition duration-300 ease-in-out z-40`}
        >
          <div className="p-5">
            {links?.map((item: any, i: number) => (
              <div
                key={i}
                className="p-4 hover:bg-white text-white hover:text-black"
              >
                {!item.route ? (
                  <span className="flex cursor-pointer items-center">
                    {item.title} {item.icon}
                  </span>
                ) : (
                  <Link href={`${item.route}`}>{item.title}</Link>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center text-xs gap-5">
          <button className="rounded-[10px] text-secondary font-[600] border border-secondary px-5 py-1">
            Call Now
          </button>
          <button className="bg-secondary rounded-[10px] border border-secondary text-white px-5 py-1 font-[600]">
            Book Now
          </button>
        </div>
        <IoMdMenu
          onClick={() => setToggleMenu(!toggleMenu)}
          className="h-6 w-6 fill-current"
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
