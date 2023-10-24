import { Card, CardBody } from "@nextui-org/react";
export default function StratCard({ no, title, description }) {
  return (
    <div className="flex flex-row max-w-[389px] min-w-[240px]">
      <Card>
        <CardBody className="flex flex-col gap-2">
          <h2 className="font-bold text-xl md:text-3xl text-color-bgcc-yellow">
            {no}
          </h2>
          <h2 className="font-bold text-xl md:text-3xl text-color-bgcc-yellow">
            {title}
          </h2>
          <p className="text-white">{description}</p>
        </CardBody>
      </Card>
    </div>
  );
}
