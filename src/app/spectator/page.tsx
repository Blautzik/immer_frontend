import TrendingEventList from "../components/TrendingEventList";

type TrendingEventsProps = {
  id: string;
  status: boolean;
  day: number;
  month: string;
  title: string;
  subTitle: string;
  price: number;
}[];

const initialEvents: TrendingEventsProps = [
  {
    day: 15,
    month: "JUNE",
    title: "Cooking Live with Sheryl Green",
    subTitle: "11:30 AM, Sofi Stadium Concourse, Inglewood, CA",
    price: 45,
    status: true,
    id: "8gh",
  },
  {
    day: 31,
    month: "july",
    title: "Cooking Live with Sheryl Green",
    subTitle: "11:30 AM, Sofi Stadium Concourse, Inglewood, CA",
    price: 45,
    status: false,
    id: "8gh",
  },
  {
    day: 10,
    month: "august",
    title: "Cooking Live with Sheryl Green",
    subTitle: "11:30 AM, Sofi Stadium Concourse, Inglewood, CA",
    price: 45,
    status: true,
    id: "8777gh",
  },
  {
    day: 10,
    month: "JUNE",
    title: "Cooking Live with Sheryl Green",
    subTitle: "11:30 AM, Sofi Stadium Concourse, Inglewood, CA",
    price: 45,
    status: false,
    id: "5555",
  },
  {
    day: 10,
    month: "JUNE",
    title: "Cooking Live with Sheryl Green",
    subTitle: "11:30 AM, Sofi Stadium Concourse, Inglewood, CA",
    price: 45,
    status: false,
    id: "8gh",
  },
];

//async function getTrendingEventsData(): Promise<TrendingEventsProps> {
//
//};

export default async function Spectator() {
  const trendingEventsData = initialEvents;

  const filteredEvents = trendingEventsData.filter(
    (trending) => trending.status === true
  );
  
  return (
    <main className="min-h-screen items-center justify-center bg-white">
      <header className="flex flex-row w-full justify-between items-center p-4 pl-8 pr-8 bg-primary">
        <div className=" text-center p-1">
          <h1>Back</h1>
        </div>
        <div className="text-center p-1">
          <h1>Location</h1>
        </div>
        <div className=" text-center p-1">
          <h1>Alert</h1>
        </div>
      </header>
      <div className="pt-8 pl-8 pb-8">
        <h1 className="text-black text-base font-style-normal font-bold mb-3">
          Trending Events near you
        </h1>
        <div className="items-center justify-center md:pr-8 w-full">
          <TrendingEventList filteredEvents={filteredEvents} />
        </div>
      </div>
    </main>
  );
}
