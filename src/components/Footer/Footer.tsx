import Container from "@/app/container/Container";
import Link from "next/link";
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTelegram,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";

const Footer = () => {
  const quickLinks = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About Us",
      route: "/#about-us",
    },
    {
      name: "Insurance Offerings",
      route: "/#insurance-offerings",
    },
    {
      name: "Get a Quote",
      route: "/#get-a-quote",
    },
  ];

  const others = [
    {
      name: "Contact Us",
      route: "/#contact-us",
    },
    {
      name: "Privacy Policy",
      route: "/#privacy-policy",
    },
    {
      name: "Terms of Service",
      route: "/#terms-of-service",
    },
  ];

  return (
    <div className="bg-[#f1f1f1]">
      <Container>
        <div className="py-5">
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-wrap flex-col gap-10">
              <h1 className="text-5xl text-secondary">LOGO</h1>
              <div className="flex flex-wrap flex-col gap-10 w-[250px] mobile:w-full">
                <span className="text-quaternary text-xs">
                  Reliable Solutions simplifies insurance & financial products
                  and makes them accessible for its customers through our
                  digitally enabled advisors.
                </span>
              </div>
            </div>

            <div className="flex flex-wrap flex-col">
              <h3 className="mb-10 text-xl mobile:mt-10  font-[600]">
                Contact Information
              </h3>
              <div className="flex flex-wrap flex-col gap-3">
                <span>{`+91 1234 676563`}</span>
                <span>{`info@email.com`}</span>
                <span>{`ST. Washing Ton DC, New York, America`}</span>
              </div>
            </div>
            <div>
              <h3 className="mb-10 text-xl mobile:mt-10 font-[600]">
                Quick Links
              </h3>
              <div className="flex flex-wrap flex-col gap-3">
                {quickLinks?.map((item, i) => (
                  <div key={i}>
                    <Link href={item.route}>{item.name}</Link>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-10 text-xl mobile:mt-10 font-[600]">Others</h3>
              <div className="flex flex-wrap flex-col gap-3">
                {others?.map((item, i) => (
                  <div key={i}>
                    <Link href={item.route}>{item.name}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex mt-10 flex-wrap mobile:justify-center items-center gap-[170px] mobile:gap-10">
            <div className="flex flex-wrap gap-7">
              <BsInstagram color="rgb(108,0,85)" size={25} />
              <BsTwitter color="rgb(0,145,228)" size={25} />
              <BsTelegram color="rgb(0,145,228)" size={25} />
              <BsFacebook color="rgb(10,34,95)" size={25} />
              <BsWhatsapp color="rgb(57,153,0)" size={25} />
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <button className="rounded-[10px] text-secondary font-[600] border border-secondary px-5 py-1">
                Call Now
              </button>
              <button className="bg-secondary rounded-[10px] border border-secondary text-white px-5 py-1 font-[600]">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </Container>
      <div>
        <div className="pt-10 pb-5">
          <div className="h-[2px] w-full bg-secondary" />
        </div>
        <div className="text-center pb-5">
          {`© 2023 Reliable Solutions All rights reserved. | Privacy & Policy
          Statements`}
        </div>
      </div>
    </div>
  );
};

export default Footer;
