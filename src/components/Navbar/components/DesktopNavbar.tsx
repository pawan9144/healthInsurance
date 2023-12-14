import Link from "next/link";
import React from "react";

const DesktopNavbar = ({ links }: { links: any }) => {
  return (
    <div className="mobile:hidden">
      <div className="flex text-secondary gap-7">
        {links?.map((item: any, i: number) => (
          <div key={i}>
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
  );
};

export default DesktopNavbar;
