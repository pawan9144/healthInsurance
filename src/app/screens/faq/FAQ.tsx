import Container from "@/app/container/Container";
import Image from "next/image";
import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      qns: "Does my health insurance cover covid-19?",
      ans: "Coronavirus protection shield provides coverage for 5 family members including self, spouse, parents, siblings or children. For more than 5 members",
    },
    {
      qns: "Does my health insurance cover covid-19?",
      ans: "Coronavirus protection shield provides coverage for 5 family members including self, spouse, parents, siblings or children. For more than 5 members",
    },
    {
      qns: "Does my health insurance cover covid-19?",
      ans: "Coronavirus protection shield provides coverage for 5 family members including self, spouse, parents, siblings or children. For more than 5 members",
    },
    {
      qns: "Does my health insurance cover covid-19?",
      ans: "Coronavirus protection shield provides coverage for 5 family members including self, spouse, parents, siblings or children. For more than 5 members",
    },
  ];

  const [toggleFaq, setToggleFaq] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<number>();

  return (
    <div className="py-10">
      <Container>
        <div className="flex justify-center">
          <Image
            src="/assets/faq.png"
            height={700}
            width={700}
            className="w-[400px] h-[400px] object-cover"
            alt="FAQ"
          />
        </div>
        <div>
          <h1 className="text-4xl text-center text-secondary font-[600]">
            Frequently Ask Questions
          </h1>
          <div className="flex justify-center">
            <div className="mt-10 flex flex-col gap-5">
              {faqs?.map((item, i) => (
                <div
                  key={i}
                  className="border-2 border-quaternary w-[600px] mobile:w-full justify-between flex items-center px-3 py-2"
                >
                  {!toggleFaq && (
                    <div>
                      <span className="font-[600]">{item.qns}</span>
                    </div>
                  )}

                  {selectedFaq !== i && toggleFaq && (
                    <div>
                      <span className="font-[600]">{item.qns}</span>
                    </div>
                  )}
                  {toggleFaq && selectedFaq === i ? (
                    <div className="flex justify-between gap-10 items-center">
                      <span>{item.ans}</span>
                      <span
                        onClick={() => setToggleFaq(false)}
                        className="text-white cursor-pointer text-2xl bg-secondary p-3"
                      >
                        -
                      </span>
                    </div>
                  ) : (
                    <span
                      onClick={() => {
                        setToggleFaq(true);
                        setSelectedFaq(i);
                      }}
                      className="text-white cursor-pointer text-2xl bg-secondary p-3"
                    >
                      +
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
