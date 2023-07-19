import EventBookingHeader from "../components/EventBookings/EventBookingHeader";
import EventBookingShare from "../components/EventBookings/EventBookingShare";
import EventBookingDetailsCard from "../components/EventBookings/EventBookingsDetails";
import EventHostDetails from "../components/EventBookings/EventHostDetails";
import EventList from "../components/EventList";

type EventBookingProps = {
  id: string;
  eventBanner: string;
  hostImage: string;
  title: string;
  subtitle: string;
  eventDate: string;
  price: number;
  hostName: string;
  datePosted: string;
  aboutDetails: string;
}[];

type UsersGoingToEventProps = {
  id: string;
  img: string;
}[];

type NumberOfUsersGoingToEventProps = {
  totalNumber: number;
}[];

type RecommendedEventsProps = {
  id: string;
  status: boolean;
  day: number;
  month: string;
  title: string;
  subTitle: string;
  price: number;
  img: string;
}[];

const EventBooking: EventBookingProps = [
  {
    id: "10k",
    eventBanner: "/assets/eventBookings/booking-unsplash.png",
    hostImage: "/assets/eventBookings/booking-unsplash.png",
    title: "Wallace On Tour",
    subtitle: "10:30 PM, Signal Hill, CA",
    eventDate: "June 10th, 2024",
    price: 99,
    hostName: "Richard Wallace",
    datePosted: "30 Oct, 2023",
    aboutDetails:
      "Richard Wallace is an American comedian and actor. Originally known as a stand-up comedian.",
  },
];

const UsersGoing: UsersGoingToEventProps = [
  {
    id: "rv5",
    img: "/assets/eventBookings/user1.png",
  },
  {
    id: "rv5",
    img: "/assets/eventBookings/user3.png",
  },
  {
    id: "rv5",
    img: "/assets/eventBookings/user4.png",
  },
];

const TotalNumberOfUsers: NumberOfUsersGoingToEventProps = [
  {
    totalNumber: 2999,
  },
];

const recommendedEvents: RecommendedEventsProps = [
  {
    day: 15,
    month: "JUNE",
    title: "Cooking Live with Sheryl Green",
    subTitle: "11:30 AM, Sofi Stadium Concourse, Inglewood, CA",
    price: 45,
    status: true,
    id: "8k88",
    img: "/assets/events-card-img/event-1.jpg",
  },
  {
    day: 31,
    month: "july",
    title: "Cooking Live with Sheryl Green",
    subTitle: "11:30 AM, Sofi Stadium Concourse, Inglewood, CA",
    price: 45,
    status: false,
    id: "8gh78676",
    img: "/assets/events-card-img/event-2.jpg",
  },
  {
    day: 10,
    month: "aug",
    title: "Cooking Live with Sheryl Green",
    subTitle: "11:30 AM, Sofi Stadium Concourse, Inglewood, CA",
    price: 45,
    status: true,
    id: "8777gh",
    img: "/assets/events-card-img/event-3.jpg",
  },
  {
    day: 10,
    month: "JUNE",
    title: "Cooking Live with Sheryl Green",
    subTitle: "11:30 AM, sofi Stadium Concourse, Inglewood, CA",
    price: 45,
    status: true,
    id: "5555",
    img: "/assets/events-card-img/event-4.jpg",
  },
];

export default function SpectatorBookingPage() {
  const booking = EventBooking;
  const totalUsersGoing = TotalNumberOfUsers;
  const usersList = UsersGoing;
  const eventsRecommended = recommendedEvents;
  return (
    <div className="min-h-screen items-center justify-center w-full bg-white">
      <div
        className="w-full h-80 rounded-b-2xl "
        style={{
          backgroundImage: `url(${booking[0].eventBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "cover",
          backgroundSize: "100%",
        }}
      >
        <EventBookingHeader />
      </div>
      <EventBookingDetailsCard
        id={booking[0].id}
        title={booking[0].title}
        subtitle={booking[0].subtitle}
        eventDate={booking[0].eventDate}
        price={booking[0].price}
      />
      <section id="host-section" className="p-5">
        <p className="text-black text-base mt-2 font-bold not-italic">
          Event Presented By
        </p>
        <EventHostDetails
          id={booking[0].id}
          hostName={booking[0].hostName}
          hostImage={booking[0].hostImage}
          datePosted={booking[0].datePosted}
        />
        <p className="text-black text-sm font-bold not-italic mt-3">About</p>
        <p className="text-gray-600 text-xs font-normal not-italic mt-1">
          {booking[0].aboutDetails}
        </p>
      </section>
      <EventBookingShare
        user1img={usersList[0].img}
        user2img={usersList[1].img}
        user3img={usersList[2].img}
        totalNumber={totalUsersGoing[0].totalNumber}
      />
      <p className="text-black text-base font-bold not-italic mt-5 ml-5">
        Recommended Events
      </p>
      <section id="events recommended" className="p-5">
        <EventList events={eventsRecommended} />
      </section>
    </div>
  );
}
