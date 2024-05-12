
// export default MidSection;



"use client";
import Lottie from "lottie-react";
import React from "react";
import animation from "../../../public/Animation - 1715172469577.json";
import paymentAnimation from "../../../public/Animation - 1715251969845.json";

const MidSection = () => {
  return (
    <div className="flex flex-col justify-between items-center mt-10  p-6 bg-gray-900 " style={{ wordSpacing: '0.5em' }}>

      <h1 className="text-white text-4xl mb-10 border  border-green-400 px-5 py-3 ">Payment Modes</h1>
      <div className="gap-10 p-4">
        <div className="grid grid-cols-2 mb-20">
          <h4 className="text-lg text-gray-400 leading-relaxed  ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            inventore maiores tempora dignissimos con quia error est sed
            voluptatem expedita. Qui, optio. Nostrum voluptate esse sint est,
            facilis, odit reiciendis natus quam debitis alias dolore impedit
            fugiat itaque eius amet praesentium dolorum, non qui molestiae
            deleniti quaerat temporibus voluptatum obcaecati accusantium!
            Laudantium a repudiandae 
          </h4>

          <Lottie animationData={paymentAnimation} className="h-[250px]" />
        </div>

        <div className="grid grid-cols-2 mt-20">
          <Lottie animationData={paymentAnimation} className="h-[250px] " />

          <h4 className="text-lg text-gray-400 leading-relaxed ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            inventore maiores tempora dignissimos con quia error est sed
            voluptatem expedita. Qui, optio. Nostrum voluptate esse sint est,
            facilis, odit reiciendis natus quam debitis alias dolore impedit
            fugiat itaque eius amet praesentium dolorum, non qui molestiae
            deleniti quaerat temporibus voluptatum obcaecati accusantium!
            Laudantium a repudiandae
          </h4>
        </div>
      </div>
    </div>
  );
};

export default MidSection;

