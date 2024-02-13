import React from "react";
import Image from "next/image";

export default function FirstSection() {
  return (
    <>
      <div className="text-white text-3xl sm:text-8xl flex items-center justify-center h-screen w-full">
        <div className="">
          <h4 className="">Drift Automobiles</h4>
          <h4 className="pt-8 sm:pt-40 uppercase text-[12px] sm:text-[20px] text-center">
            coming soon
          </h4>
        </div>
      </div>
      <div className="">
        <Image
          src={"/img/temp-footer.png"}
          height={500}
          width={2000}
          alt="footer"
        />
      </div>
    </>
  );
}
