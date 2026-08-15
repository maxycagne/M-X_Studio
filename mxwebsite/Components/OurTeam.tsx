import { useState } from "react";
import mav_pic from "../src/assets/mav.png";
import SectionHeading from "./ui/SectionHeading";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ordiv Maverick Cagne",
    role: "Founder & Lead Software Developer",
    bio: "Focused on usable systems, accessibility, and engineering clarity across product and platform work.",
    imageUrl: mav_pic,
    socialLinks: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Ordiv Maverick Cagne",
    role: "Founder & Lead Software Developer",
    bio: "Builds precise interfaces and durable architectures for teams that need production-ready software.",
    imageUrl: mav_pic,
    socialLinks: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Ordiv Maverick Cagne",
    role: "Founder & Lead Software Developer",
    bio: "Connects design systems and delivery practice so product quality stays consistent after launch.",
    imageUrl: mav_pic,
    socialLinks: {
      twitter: "#",
      linkedin: "#",
    },
  },
];

const OurTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <SectionHeading
            eyebrow="Team"
            title={
              <>
                People behind the <span className="text-primary">product</span>
              </>
            }
            lead="A compact engineering team focused on turning concepts into dependable systems."
          />

          <div className="hidden gap-3 md:flex md:h-[480px]">
            {teamMembers.map((member, index) => {
              const isActive = activeIndex === index;
              return (
                <article
                  key={member.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  tabIndex={0}
                  className={`relative overflow-hidden border border-border bg-background transition-all duration-500 focus-visible:outline-none ${
                    isActive ? "flex-[2.2]" : "flex-1"
                  }`}
                >
                  <img
                    src={member.imageUrl}
                    alt={`${member.name} — ${member.role}`}
                    className="h-full w-full object-cover"
                  />
                  <div
                    className={`absolute inset-x-0 bottom-0 bg-card/95 p-5 backdrop-blur-sm transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h3 className="font-display text-lg font-extrabold">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                      {member.role}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="grid gap-0 border-t border-border md:hidden">
            {teamMembers.map((member) => (
              <article
                key={member.id}
                className="grid gap-4 border-b border-border py-6 sm:grid-cols-[8rem_1fr] sm:items-center"
              >
                <img
                  src={member.imageUrl}
                  alt={`${member.name} — ${member.role}`}
                  className="h-40 w-full object-cover sm:h-28 sm:w-32"
                />
                <div>
                  <h3 className="font-display text-xl font-extrabold">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
