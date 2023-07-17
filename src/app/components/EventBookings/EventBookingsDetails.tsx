"use client";

type EventBookingProps = {
  id: string;
  title: string;
  subtitle: string;
  eventDate: string;
  price: number;
};

export default function EventBookingDetailsCard({
  id,
  title,
  subtitle,
  eventDate,
  price,
}: EventBookingProps) {
  return (
    <div className="flex flex-row p-3 ml-5 mr-5 h-24 rounded-2xl bg-white shadow-lg z-10 -mt-12">
      <section
        id={id}
        style={{
          width: "54%",
        }}
        className=" overflow-hidden"
      >
        <p className="text-lg font-medium not-italic truncate">{title}</p>
        <p className="text-xs text-gray-500 ml-2 font-semibold not-italic truncate">
          {subtitle}
        </p>
        <div className="flex flex-row pt-1">
          <p className="ml-2 text-sm font-medium not-italic text-primary">
            ${price}
          </p>
          <p className="ml-2 text-sm font-semibold not-italic text-black truncate">
            {eventDate}
          </p>
        </div>
      </section>
      <section
        style={{
          width: "46%",
        }}
      >
        <div className="bg-green-500 mt-2 rounded-2xl w-full h-3/4"></div>
      </section>
    </div>
  );
}
