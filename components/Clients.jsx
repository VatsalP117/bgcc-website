import SeeAll from "./SeeAll";

export default function Clients() {
  return (
    <div className="flex flex-col gap-3 lg:gap-5">
      <div className="flex flex-col-reverse lg:flex-row p-6 md:p-12 lg:p-16 xl:p-20 gap-8 md:gap-16 lg:gap-20">
        <div className="flex flex-col basis-1/2 gap-1 justify-center">
          <h2 className="text-4xl font-bold">Partners In Success</h2>
          <h2 className="text-4xl font-bold text-color-bgcc-yellow">
            For Our Clientele
          </h2>
          <h6 className="text-md">
            Top <span className="text-color-bgcc-yellow">companies</span> we
            have worked with
          </h6>
          <p className="text-md mt-6">
            We have a{" "}
            <span className="text-color-bgcc-yellow">
              stellar client roster
            </span>{" "}
            from multiple industries ranging from AgriTech to FinTech and
            Ed-Tech, with many of them coming back for repeat projects.
          </p>
        </div>
        <div className="basis-1/2">
          <img
            className="w-full md:w-2/3 m-auto"
            src="https://i.imgur.com/M3ZPp27.png"
            alt="Image"
          ></img>
        </div>
      </div>
      <div className="flex flex-col p-6 md:p-12 lg:p-16 xl:p-20 gap-8 md:gap-16 lg:gap-20">
        <SeeAll />
      </div>
    </div>
  );
}
