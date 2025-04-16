'use client'

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export function TerminalDemo() {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const sectionRef = useRef(null); // Ref for the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animations when section is visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef} // Attach the ref to the section
      className="flex flex-col items-center justify-center w-full min-h-screen px-6 py-12"
    >
      <div className="flex justify-center mb-8">
          <Image
            src="/images/skills-logo.png"
            alt="skills"
            className="w-65"
          />
        </div>
      <Terminal>
        {isVisible && ( // Render animations only when the section is visible
          <>
            <TypingAnimation className="text-xs"> 
              &gt; Initializing skillset component...
            </TypingAnimation>
            <TypingAnimation className="text-xs">
              &gt; Loading modules...
            </TypingAnimation>
            <AnimatedSpan delay={1500} className="text-green-500 text-xs"> {/* Add text-sm */}
              <span>
                ✔ Design tools detected:{" "}
                <span className="font-bold text-black">Figma </span>(where the
                wireframes come alive 🧙‍♂️)
              </span>
            </AnimatedSpan>
            <AnimatedSpan delay={2000} className="text-green-500 text-xs">
              <span>
                ✔ Frontend stack booted:{" "}
                <span className="font-bold text-black">
                  HTML, CSS, JavaScript
                </span>{" "}
                (a classic trio—like the Avengers, but with more bugs 🔥)
              </span>
            </AnimatedSpan>
            <AnimatedSpan delay={2500} className="text-green-500 text-xs">
              <span>
                ✔ Backend magic:{" "}
                <span className="font-bold text-black">PHP + Laravel</span>{" "}
                (artisan-ing like a boss 🪄)
              </span>
            </AnimatedSpan>
            <AnimatedSpan delay={3000} className="text-green-500 text-xs">
              <span>
                ✔ Database summoned:{" "}
                <span className="font-bold text-black">MySQL</span> (aka "WHERE
                the data lives 🗃️")
              </span>
            </AnimatedSpan>
            <AnimatedSpan delay={3500} className="text-green-500 text-xs">
              <span>
                ✔ Styling wizardry:{" "}
                <span className="font-bold text-black">Tailwind CSS</span>
                (because writing your own CSS is sooo 2015)
              </span>
            </AnimatedSpan>
            <AnimatedSpan delay={4000} className="text-green-500 text-xs">
              <span>
                ✔ Framework fusion:{" "}
                <span className="font-bold text-black">React</span> (component
                life is the best life ⚛️)
              </span>
            </AnimatedSpan>
            <AnimatedSpan delay={4500} className="text-green-500 text-xs">
              <span>
                ✔ Full-stack mode:{" "}
                <span className="font-bold text-black">Next.js</span> (SSR? CSR?
                IDK, but it works 😎)
              </span>
            </AnimatedSpan>
            <AnimatedSpan delay={5000} className="text-green-500 text-xs">
              <span>
                ✔ Local dev powered by:{" "}
                <span className="font-bold text-black">Laragon</span> (XAMPP was
                left on read 📵)
              </span>
            </AnimatedSpan>
            <AnimatedSpan delay={5500} className="text-green-500 text-xs">
              <span>
                ✔ Version control online:{" "}
                <span className="font-bold text-black">GitHub</span> (pushing
                bugs since forever 🐞)
              </span>
            </AnimatedSpan>
            <AnimatedSpan delay={6000} className="text-green-500 text-xs">
              <span>
                ✔ CMS installed:{" "}
                <span className="font-bold text-black">WordPress</span> (because
                clients love buttons 🖱️)
              </span>
            </AnimatedSpan>
            <TypingAnimation delay={6500} className="text-muted-foreground text-xs">
              Skillset component successfully mounted.
            </TypingAnimation>
            <TypingAnimation delay={7000} className="text-muted-foreground text-xs">
              Warning: Developer has reached dangerously awesome levels of
              versatility 🚀
            </TypingAnimation>
          </>
        )}
      </Terminal>
    </section>
  );
}
