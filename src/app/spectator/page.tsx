import CategoryList from "../components/CategoryList";
import EventBrowserHeader from "../components/EventBrowserHeader";
import EventList from "../components/EventList";
import TrendingEventList from "../components/TrendingEventList";


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

type EventCategoriesProps = {
  id: string;
  img: string;
  title: string;
}[];

const EventCategories: EventCategoriesProps = [
  {id: '1',
  img: '/assets/categories/1.jpeg',
  title: 'Music'
  },
  {id:'2',
  img: '/assets/categories/2.jpeg',
  title: 'Comedy',
  },
  {id:'3',
  img: '/assets/categories/3.jpeg',
  title: 'Sports',
  },
  {id:'4',
  img: '/assets/categories/4.jpeg',
  title: 'Jazz',
  },
  {id:'5',
  img: '/assets/categories/5.jpeg',
  title: 'Food',
  },
]

const initialEvents: TrendingEventsProps = [
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
    subTitle: "11:30 AM, Sofi Stadium Concourse, Inglewood, CA",
    price: 45,
    status: true,
    id: "5555",
    img: "/assets/events-card-img/event-4.jpg",
  },
];

//async function getTrendingEventsData(): Promise<TrendingEventsProps> {
//
//};

export default async function Spectator() {
  const trendingEventsData = initialEvents;
  const categories =  EventCategories

  const filteredEvents = trendingEventsData.filter(
    (trending) => trending.status === true
  );

  return (
    <main className="min-h-screen items-center justify-center text-black bg-white">
       
        <EventBrowserHeader />
      
      <div className="p-5">
        <h1 className="text-black font-bold text-md">
          Trending Events near you
        </h1>
        <div className="items-center justify-center md:pr-8 w-full">
          <TrendingEventList filteredEvents={filteredEvents} />
        </div>
        <h2 className="text-black font-bold text-md mt-0 pb-2">
          Category
        </h2>
        <div className="items-center justify-center md:pr-8 w-full">
          <CategoryList categories={categories} />
        </div>
        <h2 className="text-black font-bold text-md pt-4 pb-2">
          Upcoming Events
        </h2>
        <div className="items-center justify-center md:pr-8 w-full">
          <EventList events={initialEvents} /> 
        </div>

      </div>
    </main>
  );
}
