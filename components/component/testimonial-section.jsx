/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/CC5LpUWFI8M
 */
import Link from "next/link";
import landingPageTestimonial from "@/utils/testimonials";
export function TestimonialSection() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-24 xl:py-32 bg-gray-800">
      <div className="container px-2 sm:px-4 md:px-6 text-white">
        <div className="grid items-center gap-4 sm:gap-6 lg:grid-cols-[1fr_500px] lg:gap-8 xl:grid-cols-[1fr_550px] xl:gap-12">
          <div className="flex flex-col space-y-2 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Testimonials
            </h2>
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {landingPageTestimonial.others.map((imgUrl, index) => (
                <img
                  key={index}
                  alt={`Person ${index + 1}`}
                  className="rounded-full"
                  height="80"
                  src={imgUrl}
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="80"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-2 sm:space-y-4">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <img
                alt={landingPageTestimonial.primary.name}
                className="rounded-full"
                height="80"
                src={landingPageTestimonial.primary.imgUrl}
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="80"
              />
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                {landingPageTestimonial.primary.name}
              </h3>
              <p className="max-w-[400px] sm:max-w-[500px] md:max-w-[600px] text-gray-300 text-sm sm:text-md md:text-lg lg:text-xl/relaxed xl:text-xl/relaxed">
                {landingPageTestimonial.primary.content}
              </p>
              <Link
                className="inline-flex h-8 sm:h-10 items-center justify-center rounded-md bg-gray-700 px-6 sm:px-8 text-xs sm:text-sm font-medium text-white shadow transition-colors hover:bg-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                View All Testimonials
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
