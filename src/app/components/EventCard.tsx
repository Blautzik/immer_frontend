import Link from "next/link";
type EventsCardProps = {
  id: string;
  status: boolean;
  day: number;
  month: string;
  title: string;
  subTitle: string;
  price: number;
};

import Image from "next/image";

export default function EventCard({
  id,
  day,
  month,
  title,
  subTitle,
  price,
  status,
}: EventsCardProps) {
  return (
    <div
      key={id}
      className="flex-none w-[47%] md:w-1/3  bg-[url('/pic.jpg')] bg-no-repeat bg-cover  rounded-2xl mb-2 h-44 shadow-sm"
    >
      <Link href={`/spectator/${id}`}>
        <div className="flex flex-col  w-full rounded-2xl  ">
          <div className="flex flex-row h-32 justify-between pl-3 pr-3 pt-4">
            <div
              id="date-item"
              className="flex flex-col justify-center items-center h-12 w-12 p-3 bg-white bg-opacity-80 rounded-xl"
            >
              <p className="text-md text-primary  uppercase font-normal text-center ">
                {day}
              </p>
              <p className="text-xs text-primary uppercase font-bold text-center ">
                {month}
              </p>
            </div>
            {status && (
              <div
                id="icon-item"
                className="bg-gray-700 bg-opacity-75 h-7 w-7 rounded-2xl p-1 border-solid border-2 border-primary"
              >
                <Image
                  src="/vector-fire.svg"
                  width={18}
                  height={18}
                  alt="vector-fire"
                />
              </div>
            )}
          </div>
          <div
            className="flex flex-row h-16 bg-white w-full justify-between pl-3 pr-3 pt-3 inset-y-0 shadow-sm"
            style={{
              borderRadius: "0px 0px 15px 15px",
            }}
          >
            <div className="flex flex-col h-12 w-11/12 max-w-xs overflow-hidden">
              <p
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontSize: "12px",
                  lineHeight: "16px",
                  fontStyle: "normal",
                }}
                className="text-black font-semibold mt-1"
              >
                {title}
              </p>
              <p
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontSize: "10px",
                  fontWeight: "500",
                  lineHeight: "16px",
                  color: "#8F8F8F",
                }}
                className="text-trending_subtext  font-semibold"
              >
                {subTitle}
              </p>
            </div>
            <div className="pr-1 pl-2  h-12 justify-end">
              <p className="text-primary mt-5 text-end font-semibold text-xs md:text-lg">
                ${price}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
