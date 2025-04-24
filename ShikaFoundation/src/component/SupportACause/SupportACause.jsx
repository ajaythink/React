import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useRef } from "react";

const SupportACausePage = [
  {
    id: 1,
    title: "Health can't wait",
    img: "https://imgs.search.brave.com/NWvPnSW0vHEnY8ozeoV7m4Brs4B4g139jNH0cmRoTYM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bnB0cnVzdC5vcmcv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDcvTlBULUJsb2df/VGlwcy1mb3ItR2V0/dGluZy1PdGhlcnMt/dG8tU3VwcG9ydC1Z/b3VyLUNhdXNlXzg0/NXg2MjMuanBn", // WHY random image is not coming?
    description:
      "Health can't wait is a campaign that aims to provide healthcare to the underprivileged.",
    donate: "/donate-for-health",
    learnMore: "/donate-for-health",
  },
  {
    id: 2,
    title: "Tayari Kal Ki",
    img: "https://imgs.search.brave.com/inXudSGFXeNrcmg0GXdWQStdoG1MhVrezpzU903MAoU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2hhcml0eW5hdmln/YXRvci5vcmcvYWRv/YmUvZHluYW1pY21l/ZGlhL2RlbGl2ZXIv/ZG0tYWlkLS1mOWVj/YjFhYi0xNzVjLTQx/MTItYjhiOC1kMmE2/NjJhMjc0YmEvZ2V0/dHlpbWFnZXMtMTEz/OTc1OTkyMS0xNzA2/NjdhLnBuZy53ZWJw/P3ByZWZlcndlYnA9/dHJ1ZSZ3aWR0aD0z/MTk",
    description:
      "Tayari Kal Ki is a campaign that aims to provide education to the underprivileged.",
    donate: "/DonateForEducation",
    learnMore: "/DonateForEducation",
  },
  {
    id: 3,
    title: "SHIKSHA NA RUKE",
    img: "https://imgs.search.brave.com/vFd--tIj2rS11WhB0fCzB7bNHju9yCPKYju8o1ml9m0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2xvYmFsZ2l2aW5n/Lm9yZy9wZmlsLzMw/OTYzL3BpY3RfZmVh/dHVyZWQuanBn",
    description:
      "SHIKSHA NA RUKE is a campaign that aims to provide education to the underprivileged.",
    donate: "/donate-for-health",
    learnMore: "/donate-for-health",
  },
  {
    id: 4,
    title: "SHE CAN FLY",
    img: "https://imgs.search.brave.com/LVyBR0RN9otFv1Be-wbfPbBq9IdOBA30Rukw-Dcx5NA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2hhcml0eW5hdmln/YXRvci5vcmcvYWRv/YmUvZHluYW1pY21l/ZGlhL2RlbGl2ZXIv/ZG0tYWlkLS0xOWVh/MDkzNy0wODEzLTQ0/M2YtYjgwZi01NDIx/MGM0N2E3YWMvbGlz/dHMyLmpwZy53ZWJw/P3dpZHRoPTMxOSZw/cmVmZXJ3ZWJwPXRy/dWU",
    description:
      "SHE CAN FLY is a campaign that aims to provide education to the underprivileged.",
    donate: "/DonateForEducation",
    learnMore: "/DonateForEducation",
  },
];

function SupportACause() {
  const swiperRef = useRef(null);

  return (
    <div className="px-5 lg:px-20 py-5">
      <h1 className="text-4xl font-semibold text-center p-5">
        Support A Cause
      </h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay]}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {SupportACausePage.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="rounded-xl shadow">
              <a href={card.donate}>
                <img
                  src={card.img}
                  alt="Support A Cause"
                  className="rounded-xl w-full h-[300px] cursor-pointer brightness-50 hover:brightness-100 "
                />
              </a>

              <div className="p-3">
                <p className="text-xl md:text-2xl lg:text-3xl text-green-400 underline uppercase font-bold pb-5">
                  {card.title}
                </p>
                <p className="text-black/75 sm:text-xl">{card.description}</p>
                <div className="flex justify-between mt-5">
                  <a
                    href={card.donate}
                    className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 rounded-lg px-4 py-2 focus:outline-none"
                  >
                    Donate
                  </a>
                  <a
                    href={card.learnMore}
                    className="text-green-500 hover:bg-green-50 focus:ring-4 focus:ring-green-300 rounded-lg px-4 py-2 focus:outline-none"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SupportACause;
