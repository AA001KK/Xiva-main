import React from "react";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Team from "./Team/Team";
import Testimonials from "./Testimonials/Testimonials";
import Video from "./Video/Video";
import Contact from "./Contact/Contact";
import Features from "./Features/Features";
import HotelBookingCalendar2 from "../../components/Hotel/Hotel";

const Home = () => {
  return (
    <div className="">
      <div className="px-[10px]   md:flex justify-center  lg:px-0 my-8 md:my-0">
        <HotelBookingCalendar2 link={"/hotels"} />
      </div>
      <Banner />
      <About />
      <Team />
      <Features />
      <Testimonials />
      <Video />
      <Contact />
    </div>
  );
};

export default Home;
