export default function Services() {
  return (
    <div className="flex flex-col items-center p-[60px]">
      {/* Section 1 */}
      <div className="flex justify-between mb-[150px]">
        <div className="flex flex-col items-start justify-center w-1/2 mr-3">
          <div className="text-5xl text-white w-6/7 font-bold mb-4">
            Unleashing{" "}
            <span className="text-[#E5CF5F]">Strategic Insights</span> for
            Business Success
          </div>
          <div className="text-md text-gray-400 tracking-wider font-semibold mb-8">
            Data-Driven Strategies &{" "}
            <span className="text-[#E5CF5F]">Visionary Thinking</span> to Propel
            Your Company to New Heights
          </div>
          <div className="text-2xl text-white w-4/5 tracking-wide font-semibold">
            We are a passionate group of 50+ like minded students from BITS
            Pilani, Goa Campus. Our vision is to delve into the world of{" "}
            <span className="text-[#E5CF5F]">consulting</span>, working closely
            with clients and gaining hands-on experience in various industries.
          </div>
          <div></div>
        </div>
        <div className="w-1/2">
          <img
            className="w-2/3 m-auto mr-0"
            src="https://i.imgur.com/fWoybek.png"
          ></img>
        </div>
      </div>
    </div>
  );
}
