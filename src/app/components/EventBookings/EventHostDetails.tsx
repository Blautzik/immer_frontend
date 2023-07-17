"use client";
import Image from "next/image";
import Link from "next/link";

type EventBookingProps = {
  id: string;
  hostName: string;
  hostImage: string;
  datePosted: string;
};

export default function EventHostDetails({
  id,
  hostName,
  hostImage,
  datePosted,
}: EventBookingProps) {
  return (
    <section
      id="host-section"
      className="flex flex-row justify-between items-center mt-2"
    >
      <div id={id} className="w-1/6">
        <Image
          className="rounded-full border-solid border-2 border-primary"
          src={hostImage}
          width={50}
          height={50}
          alt="host-img"
          priority
        />
      </div>
      <div id="host-data" className="flex flex-col w-2/4 pl-2">
        <div className="flex flex-row">
          <p className="text-sm text-left font-bold not-italic text-gray-600">
            {hostName}
          </p>
          <Image
            className="ml-1"
            src="/assets/eventBookings/tick.svg"
            width={9}
            height={9}
            alt="tick-img"
            priority
          />
        </div>
        <p className="text-xs text-gray-400 font-semibold not-italic">
          Posted on {datePosted}
        </p>
      </div>
      <div id="buttons" className="flex flex-row w-4/12 pl-4 gap-3">
        <Link
          className="p-2 text-white w-10 h-10 text-center rounded-xl bg-primary"
          href="/spectatorEventBooking"
        >
          <Image
            src="/assets/eventBookings/more-icon.svg"
            width={22}
            height={20}
            alt="more-icon"
            priority
          />
        </Link>
        <Link
          className="pl-2.5 pt-3 text-white w-10 h-10 text-center items-center content-center rounded-xl bg-primary"
          href="/spectatorEventBooking"
        >
          <Image
            src="/assets/eventBookings/email-icon.svg"
            width={20}
            height={13}
            alt="email-icon"
            priority
          />
        </Link>
      </div>
    </section>
  );
}
