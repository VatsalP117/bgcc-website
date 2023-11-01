export default function ServiceCard({ title, description, imgUrl }) {
  return (
    <div className="mx-6  max-w-[1200px] font-poppins bg-[#343434] bg-opacity-[50%] rounded-lg shadow-2xl md:flex md:flex-row-reverse">
      <img
        src={imgUrl}
        alt="Boat"
        className="rounded-t-lg 
 md:w-1/3 md:rounded-l-lg md:rounded-t-none"
      />{" "}
      <div className="p-6 flex flex-col justify-center">
        <h2 className="font-bold text-xl md:text-3xl text-color-bgcc-yellow">
          {title}
        </h2>
        <p className="text-white text-md md:text-lg mt-4 lg:mt-6 text-justify lg:text-left">
          {description}
        </p>
      </div>
    </div>
  );
}
