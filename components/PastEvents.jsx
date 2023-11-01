import NukaCarousel from "nuka-carousel";
import EventCard from "@/components/EventCard";
import upcomingEvents from "@/utils/upcomingEvents";

export default function PastEvents() {
  return (
    <NukaCarousel
      defaultControlsConfig={{
        pagingDotsStyle: {
          fill: "white",
        },
      }}
      cellAlign="start"
      renderCenterLeftControls={() => null}
      renderCenterRightControls={() => null}
    >
      {upcomingEvents.map((event) => (
        <div className="flex flex-row w-full" key={event.id}>
          <EventCard
            title={event.title}
            description={event.description}
            imgUrl={event.imgUrl}
          />
        </div>
      ))}
    </NukaCarousel>
  );
}
