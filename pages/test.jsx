import { Input, Button } from "@nextui-org/react";
export default function Newsletter() {
  return (
    <div className="felx flex-col font-poppins">
      {/* section-01 => title */}
      <div className="flex flex-col">
        <h2 className="font-bold text-5xl">
          Subscribe To Our Quarterly{" "}
          <span className="text-color-bgcc-yellow">Newsletter BizBeat</span>
        </h2>
        <h6>
          Stay updated about latest happenings in{" "}
          <span className="text-color-bgcc-yellow">
            economy, business and ventures
          </span>
        </h6>
        <div className="flex flex-row items-center">
          <Input type="email" label="Email" placeholder="Enter your email" />
          <Button className="color-bgcc-yellow text-black font-bold -ml-28">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
