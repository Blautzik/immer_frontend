import TrendingEventCard from "./TrendingEventcard";

type TrendingEventsProps = {
  id: string;
  status: boolean;
  day: number;
  month: string;
  title: string;
  subTitle: string;
  price: number;
  img: string;
}[];

type TrendingEventListProps = {
  filteredEvents: TrendingEventsProps;
};

export default function TrendingEventList({
  filteredEvents,
}: TrendingEventListProps) {
  return (
    <div className="flex flex-nowrap gap-5 overflow-x-auto pt-2 pb-3 pl-1 items-start mb-6 pr-2 w-full">
      {filteredEvents.map((myevent) => (
        <TrendingEventCard
          id={myevent.id}
          day={myevent.day}
          month={myevent.month}
          title={myevent.title}
          subTitle={myevent.subTitle}
          price={myevent.price}
          img={myevent.img}
          key={myevent.id}
        />
      ))}
    </div>
  );
}
