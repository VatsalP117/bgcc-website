import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
export default function ClientCard() {
  return (
    <Card className="py-4 bg-[#343434] max-w-[325px] ">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://i.imgur.com/rRFilsZ.png"
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <small className="text-default-500 text-center">
          Rigi is a platform for creators, influencers and celebrities to grow,
          manage and monetise their community. It is aimed at both established
          and aspiring online creators who want to pursue their passion
        </small>
      </CardHeader>
    </Card>
  );
}
