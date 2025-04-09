import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export function TerminalDemo() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center w-full min-h-screen px-6 py-12"
    >
      <h1 className="text-4xl font-bold mb-6">Skills</h1>
      <Terminal>
        <TypingAnimation>&gt; Initializing skillset component...</TypingAnimation>
        <TypingAnimation>&gt; Loading modules...</TypingAnimation>
        <AnimatedSpan delay={1500} className="text-green-500">
          <span>
            ✔ Design tools detected:{" "}
            <span className="font-bold text-black">Figma </span>(where the
            wireframes come alive 🧙‍♂️)
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-green-500">
          <span>
            ✔ Frontend stack booted:{" "}
            <span className="font-bold text-black">HTML, CSS, JavaScript</span>{" "}
            (a classic trio—like the Avengers, but with more bugs 🔥)
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-green-500">
          <span>
            ✔ Backend magic:{" "}
            <span className="font-bold text-black">PHP + Laravel</span>{" "}
            (artisan-ing like a boss 🪄)
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="text-green-500">
          <span>
            ✔ Database summoned:{" "}
            <span className="font-bold text-black">MySQL</span> (aka "WHERE the
            data lives 🗃️")
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-green-500">
          <span>
            ✔ Styling wizardry:{" "}
            <span className="font-bold text-black">Tailwind CSS</span>(because
            writing your own CSS is sooo 2015)
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-green-500">
          <span>
            ✔ Framework fusion:{" "}
            <span className="font-bold text-black">React</span> (component life
            is the best life ⚛️)
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={4500} className="text-green-500">
          <span>
            ✔ Full-stack mode:{" "}
            <span className="font-bold text-black">Next.js</span> (SSR? CSR?
            IDK, but it works 😎)
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={5000} className="text-green-500">
          <span>
            ✔ Local dev powered by:{" "}
            <span className="font-bold text-black">Laragon</span> (XAMPP was
            left on read 📵)
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={5500} className="text-green-500">
          <span>
            ✔ Version control online:{" "}
            <span className="font-bold text-black">GitHub</span> (pushing bugs
            since forever 🐞)
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={6000} className="text-green-500">
          <span>
            ✔ CMS installed:{" "}
            <span className="font-bold text-black">WordPress</span> (because
            clients love buttons 🖱️)
          </span>
        </AnimatedSpan>

        <TypingAnimation delay={6500} className="text-muted-foreground">
          Skillset component successfully mounted.
        </TypingAnimation>

        <TypingAnimation delay={7000} className="text-muted-foreground">
          Warning: Developer has reached dangerously awesome levels of
          versatility 🚀
        </TypingAnimation>
      </Terminal>
    </section>
  );
}
