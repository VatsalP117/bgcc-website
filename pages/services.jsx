import ServiceCard from "@/components/ServiceCard";
import Newsletter from "@/components/Newsletter";
//[img]https://i.imgur.com/4pyrOGr.png
export default function ServicesPage() {
  const servicesList = [
    {
      title: "Go To Market Strategy",
      description: `Our consulting club empowers companies with an effective Go-To-Market
          (GTM) strategy, optimizing their product launch and market
          penetration. Our team crafts tailored GTM plans, encompassing
          positioning, pricing, distribution, and marketing tactics to maximize
          reach and sales. We offer guidance on customer segmentation, channel
          selection, and messaging, ensuring a compelling value proposition.
          Leveraging our expertise, we enable businesses to accelerate growth,
          boost brand visibility, and achieve sustainable success in today's
          dynamic market landscape.`,
      imgUrl: "https://i.imgur.com/4pyrOGr.png",
    },
    {
      title: "Competitor Heatmapping",
      description: `BGCC specializes in competitor heatmapping to empower companies with a competitive advantage. We meticulously analyze the competitive landscape, mapping key rivals based on their strengths, weaknesses, and market positioning. Through in-depth research, we identify gaps and opportunities to help our clients outperform their competitors. With our expertise, companies gain a clear picture of the market dynamics, fortify their market position, and stay ahead in the race to success.
`,
      imgUrl: "https://i.imgur.com/2sM6OrN.png",
    },
    {
      title: "Marketing Strategy",
      description: `We craft comprehensive digital marketing strategies tailored to each client's unique goals and target audience. Through SEO optimization, content marketing, and social media management, we enhance online visibility and engagement. Our team utilizes data-driven analytics to measure campaign effectiveness and make data-backed improvements. We harness the power of digital advertising to reach the right audience at the right time, maximizing ROI. By staying ahead of digital trends and leveraging cutting-edge tools, we help businesses thrive in the competitive digital landscape.`,
      imgUrl: "https://i.imgur.com/LVaXUkS.png",
    },
  ];
  const serviceElements = servicesList.map((ele) => (
    <ServiceCard
      title={ele.title}
      description={ele.description}
      imgUrl={ele.imgUrl}
    />
  ));
  return (
    <div className="flex flex-col gap-12 h-full">
      <div className="flex flex-col h-screen bg-services-image bg-cover bg-opacity-[10%] bg-no-repeat items-center justify-center">
        <h1 className="font-bold brightness-200 text-5xl md:text-7xl tracking-wider mb-2 ">
          Services
        </h1>
        <h2 className="font-poppins bg-[#343434] bg-opacity-[50%] brightness-200 text-3xl md:text-3xl text-color-bgcc-yellow tracking-widest ">
          Tailored Solutions
        </h2>
      </div>
      <div className="flex flex-col p-6 md:p-12 lg:p-16 xl:p-20 gap-8 lg:gap-16">
        <div className="flex flex-col font-poppins gap-2">
          <h2 className="text-5xl font-bold">Our Offerings</h2>

          <h4 className="text-md ">
            Supporting your{" "}
            <span className="text-color-bgcc-yellow">growth</span>, partnering
            in <span className="text-color-bgcc-yellow">success</span>
          </h4>
        </div>
        <div className="flex flex-col  gap-8 lg:gap-10 py-6">
          {serviceElements}
        </div>
        <Newsletter />
      </div>
    </div>
  );
}
