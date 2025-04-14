import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
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
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified when something happens.",
    href: "https://www.figma.com/design/uxLf61q0h8UJmSpyT9P8At/SkinSense--Thesis-UI-DESIGN?node-id=250-453&t=DSnIGbGyejuF8I6Q-1",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <video
        src="/videos/skinsense-preview.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "https://www.figma.com/design/CamCwrRT8jxqFlMv4SrVsD/event-wireframe?node-id=398-2&t=jE06eqhmE45lb9il-1",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <video
        src="/videos/event-preview.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
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
    <section id="design-project" className="py-12 px-18 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-8">Design Projects</h2>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
};
