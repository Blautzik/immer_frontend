import EventCard from "./EventCard";

type EventsProps = {
  id: string;
  status: boolean;
  day: number;
  month: string;
  title: string;
  subTitle: string;
  price: number;
  img: string;
}[];

type EventListProps = {
  events: EventsProps;
};

export default function EventList({ events }: EventListProps) {
  return (
    <div className="flex flex-row flex-wrap gap-2 justify-between w-full">
      {events.map((myevent) => (
        <EventCard
          status={myevent.status}
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
