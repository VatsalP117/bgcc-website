export default function Team() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <div className="flex flex-col lg:flex-row p-6 md:p-12 lg:p-16 xl:p-20 gap-8 md:gap-16 lg:gap-20">
        <h2 className="text-4xl font-bold">Leading The Front</h2>
        <h2 className="text-4xl font-bold text-color-bgcc-yellow">Our Team</h2>
        <h6 className="text-md">
          The people working on the frontier &{" "}
          <span className="text-color-bgcc-yellow">making it happen</span>
        </h6>
      </div>
    </div>
  );
}
