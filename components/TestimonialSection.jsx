/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/CC5LpUWFI8M
 */
import Link from "next/link";
import { landingPageTestimonial } from "@/utils/testimonials";
import SeeAll from "@/components/SeeAll";

import PrimaryTestimonialCard from "@/components/PrimaryTestimonail";
export default function TestimonialSection() {
  return (
    <div className="flex flex-col gap-3 lg:gap-5">
      <div className="flex flex-col lg:flex-row p-6 md:p-12 lg:p-16 xl:p-20 gap-8 md:gap-16 lg:gap-20 text-center">
        <div className="flex flex-col basis-1/2 gap-1 text-center lg:text-left justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold">
            Track Record Of Success
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-color-bgcc-yellow">
            By <span className="text-color-bgcc-yellow">Our Testimonials</span>
          </h2>
          <h6 className="text-md md:text-lg lg:text-xl my-6 md:my-8 ">
            Consultancy Solutions Tailored to
            <span className="text-color-bgcc-yellow">
              {" "}
              Empower Your Business
            </span>{" "}
            Growth and Excellence
          </h6>
          <SeeAll toPage="/testimonials" />
        </div>
        <div className="basis-1/2">
          <PrimaryTestimonialCard
            imgUrl={landingPageTestimonial.primary.imgUrl}
            name={landingPageTestimonial.primary.name}
            title={landingPageTestimonial.primary.title}
            content={landingPageTestimonial.primary.content}
          />
        </div>
      </div>
    </div>
  );
}
