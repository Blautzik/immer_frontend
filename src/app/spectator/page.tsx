import TrendingEventsCard from "../components/trendingCard";

type TrendingEventsProps = {
  id: string;
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
    id: "8gh",
  },
  {
    day: 31,
    month: "december",
    title: "Cooking Live with Sheryl Green",
    subTitle: "11:30 AM, Sofi Stadium Concourse, Inglewood, CA",
    price: 45,
    id: "8gh",
  },
  {
    day: 10,
    month: "august",
    title: "Cooking Live with Sheryl Green",
    subTitle: "11:30 AM, Sofi Stadium Concourse, Inglewood, CA",
    price: 45,
    id: "8gh",
  },
  {
    day: 10,
    month: "JUNE",
    title: "Cooking Live with Sheryl Green",
    subTitle: "11:30 AM, Sofi Stadium Concourse, Inglewood, CA",
    price: 45,
    id: "8gh",
  },
  {
    day: 10,
    month: "JUNE",
    title: "Cooking Live with Sheryl Green",
    subTitle: "11:30 AM, Sofi Stadium Concourse, Inglewood, CA",
    price: 45,
    id: "8gh",
  },
];

//async function getTrendingEventsData(): Promise<TrendingEventsProps> {
//
//};

export default async function Spectator() {
  const trendingEventsData = initialEvents;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
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
          <div className="flex flex-nowrap gap-5 overflow-x-scroll scrolling-touch items-start mb-8 w-full">
            {trendingEventsData.map((myevent) => (
              <TrendingEventsCard
                id={myevent.id}
                day={myevent.day}
                month={myevent.month}
                title={myevent.title}
                subTitle={myevent.subTitle}
                price={myevent.price}
                key={myevent.id}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
