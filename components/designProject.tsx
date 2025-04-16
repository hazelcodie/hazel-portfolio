import { CalendarIcon } from "@radix-ui/react-icons";
import { PiScanSmileyThin } from "react-icons/pi";
import { BsCartDash } from "react-icons/bs";
import { BsChatSquareText } from "react-icons/bs";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
  {
    Icon: BsCartDash,
    name: "BuyCycle Mobile App",
    description: "An app that connects users to buy and sell brand-new and second-hand bicycles effortlessly",
    href: "https://www.figma.com/design/xJm9qS87AVyj8c3sRQRfFM/BuyCycle?node-id=266-401&t=p0ny5g8AVMmUAE9F-1",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <video
        src="/videos/buycycle-preview.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />
    ),
  },
  {
    Icon: PiScanSmileyThin,
    name: "Skin Sense",
    description: "A mobile app that scans your skin type and gives personalized skincare recommendations.",
    href: "https://www.figma.com/design/uxLf61q0h8UJmSpyT9P8At/SkinSense--Thesis-UI-DESIGN?node-id=250-453&t=DSnIGbGyejuF8I6Q-1",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img  
      src="/images/skinsense.png"
      className="absolute inset-0 w-full h-full object-cover"
      />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Event Management System",
    description: "A website that helps schools manage, organize, and track events efficiently.",
    href: "https://www.figma.com/design/CamCwrRT8jxqFlMv4SrVsD/event-wireframe?node-id=398-2&t=jE06eqhmE45lb9il-1",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img
        src="/images/event.png"
        className="absolute inset-0 w-full h-full object-cover"
      />
    ),
  },
  {
    Icon: BsChatSquareText,
    name: "HAZE AI Assistant",
    description: "An AI assistant that generates accurate and reliable reports.",
    href: "https://www.figma.com/design/9xvlcX25pyMmtDAwQMYi5V/HAZE-AI-assistant?node-id=44-305&t=hmNlD7HZhVVFE53F-1",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <video
        src="/videos/haze-preview.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />
    ),
  },
];

export const DesignProject = () => {
  return (
    <section id="design-project" className="py-12 px-18 bg-[#faf4f4]">
      <div className="flex justify-center mb-8">
          <img
            src="/images/designproject-logo.png"
            alt="designProjects"
            className="w-65"
          />
        </div>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
};
