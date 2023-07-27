"use client";
import Image from "next/image";
import Link from "next/link";

type usersListProps = {
  user1img: string;
  user2img: string;
  user3img: string;
  totalNumber: number;
};

export default function EventBookingShare({
  user1img,
  user2img,
  user3img,
  totalNumber,
}: usersListProps) {
  return (
    <section
      id="share-section"
      className="flex flex-row w-full mt-1 p-2 pl-5 pr-5 rounded-xl h-16 bg-gray-100"
    >
      <div className="w-4/5 flex justify-start items-start mt-2">
        <div
          style={{ backgroundImage: `url(${user1img})` }}
          className="w-9 h-9 rounded-full ml-0"
        />
        <div
          style={{ backgroundImage: `url(${user3img})` }}
          className="w-9 h-9 rounded-full -ml-4"
        />
        <div
          style={{ backgroundImage: `url(${user2img})` }}
          className="w-9 h-9 rounded-full -ml-5"
        />
        <div className="w-16 h-9 bg-gray-300 rounded-full -ml-6 p-2">
          <p className="text-xs font-bold not-italic text-gray-500 ml-2 mt-1">
            {totalNumber}+
          </p>
        </div>
        <p className="mt-3 ml-1 text-xs font-bold not-italic text-gray-500">
          Going
        </p>
      </div>
      <div className="flex w-1/5">
        <Link
          className="p-2 ml-6 mt-2 w-8 h-8 text-white rounded-md bg-primary"
          href="/spectatorEventBooking"
        >
          <Image
            src="/assets/eventBookings/share.svg"
            width={15}
            height={15}
            alt="share-icon"
            priority
          />
        </Link>
      </div>
    </section>
  );
}
