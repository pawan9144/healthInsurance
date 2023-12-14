import Container from "@/app/container/Container";
import Image from "next/image";
import React from "react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Companies = () => {
  const data = [
    {
      img: "/assets/insurance-companies/tata.png",
      price: "50",
      relationId: 1,
    },
    {
      img: "/assets/insurance-companies/tata.png",
      price: "50",
      relationId: 2,
    },
    {
      img: "/assets/insurance-companies/tata.png",
      price: "50",
      relationId: 3,
    },
    {
      img: "/assets/insurance-companies/tata.png",
      price: "50",
      relationId: 4,
    },
    {
      img: "/assets/insurance-companies/tata.png",
      price: "50",
      relationId: 5,
    },
    {
      img: "/assets/insurance-companies/tata.png",
      price: "50",
      relationId: 6,
    },
    {
      img: "/assets/insurance-companies/tata.png",
      price: "50",
      relationId: 7,
    },
    {
      img: "/assets/insurance-companies/tata.png",
      price: "50",
      relationId: 8,
    },
    {
      img: "/assets/insurance-companies/tata.png",
      price: "50",
      relationId: 9,
    },
    {
      img: "/assets/insurance-companies/tata.png",
      price: "50",
      relationId: 10,
    },
    {
      img: "/assets/insurance-companies/tata.png",
      price: "50",
      relationId: 11,
    },
    {
      img: "/assets/insurance-companies/tata.png",
      price: "50",
      relationId: 12,
    },
  ];

  return (
    <div className="mt-10 mobile:hidden">
      <Container>
        <div className="shadow-md bg-white rounded-[10px] overflow-x-auto w-full flex justify-between">
          <Swiper
            modules={[Autoplay, Navigation, Scrollbar]}
            scrollbar={{ draggable: true }}
            autoplay={{ pauseOnMouseEnter: true }}
            breakpoints={{
              228: {
                slidesPerView: 3,
              },
              348: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 7,
              },
              1024: {
                slidesPerView: 10,
              },
            }}
          >
            {data?.map((item: any, i: number) => (
              <SwiperSlide key={i}>
                <div className="text-center w-[200px] flex justify-center">
                  <div className="w-[100px] py-7">
                    <Image
                      src={item.img}
                      width={100}
                      height={100}
                      className="object-contain w-[100px] h-[100px]"
                      alt="Companies"
                    />
                    <div className="bg-[#F1F1F1] h-[2px] w-full mb-3" />
                    <span>Rs. {item.price}/-</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Companies;
