import ClientCard from "@/components/clientCard";
import Newsletter from "@/components/Newsletter";
export default function EventsPage() {
  return (
    <div className="flex flex-col gap-12 h-full">
      <div className="flex flex-col h-screen bg-events-image bg-cover bg-no-repeat items-center justify-center">
        <h1 className="font-bold text-5xl md:text-7xl tracking-wider mb-2">
          Events
        </h1>
        <h2 className="font-poppins text-3xl md:text-3xl text-color-bgcc-yellow tracking-widest">
          Visionary Gatherings
        </h2>
      </div>
      <div className="flex flex-col p-6 md:p-12 lg:p-16 xl:p-20 gap-8 lg:gap-16">
        <div className="flex flex-col font-poppins">
          <h2 className="text-5xl font-bold mb-2">Upcoming Events</h2>

          <h4 className="text-md ">
            Enter whatever{" "}
            <span className="text-color-bgcc-yellow">you want!</span>
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap gap-8 lg:gap-10 py-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:justify-around w-full">
            <ClientCard />
            <ClientCard />
            <ClientCard />
          </div>
          <div className="flex flex-col lg:flex-row gap-8 justify-around w-full">
            <ClientCard />
            <ClientCard />
            <ClientCard />
          </div>
          <div className="flex flex-col lg:flex-row gap-8 justify-around w-full">
            <ClientCard />
            <ClientCard />
            <ClientCard />
          </div>
        </div>
        <Newsletter />
      </div>
    </div>
  );
}
