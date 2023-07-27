"use client";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";

export default function EventBookingHeader() {
  return (
    <header className="flex flex-row w-full h-12 backdrop-blur-sm fixed z-20 top-0 left-0  justify-between items-center p-5 pt-8 mt-0">
      <div className="text-center text-white">
        <IoIosArrowBack className="h-7 w-7" />
      </div>
      <Image
        className="bg-gray-400 bg-opacity-75 h-8 w-8 rounded-2xl p-1 border-solid border-2 border-primary"
        src="/vector-fire.svg"
        width={24}
        height={24}
        alt="vector-fire"
        priority
      />
    </header>
  );
}
