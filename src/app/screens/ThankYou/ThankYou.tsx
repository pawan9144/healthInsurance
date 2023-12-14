import Container from "@/app/container/Container";
import Image from "next/image";
import React from "react";

const ThankYou = () => {
  return (
    <div className="py-[100px]">
      <Container>
        <div className="flex flex-col items-center">
          <div className="flex justify-center">
            <Image
              src="/assets/thank-you.png"
              width={400}
              height={400}
              alt="Thank You"
              className="w-[600px] h-[200px] object-cover"
            />
          </div>
          <div className="text-center mt-5">
            <h2 className="font-[600] text-2xl text-secondary">
              Your payment is successfully done!
            </h2>
            <p className="text-quaternary">
              Your policy will be send to your email or mobile phone as soon as
              possible.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ThankYou;
