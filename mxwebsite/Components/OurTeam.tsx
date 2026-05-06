import React, { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ordiv Maverick Cagne",
    role: "Founder & Lead Software Developer",
    bio: "Passionate about creating intuitive digital experiences. Focused on usability, accessibility, and design systems.",
    imageUrl:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Maryann Ebert III",
    role: "UI Designer",
    bio: "Driven by visual storytelling and strong identity systems. Focused on brand, aesthetics, and emotionally engaging digital experiences.",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Gordon Jacobson",
    role: "UX Researcher",
    bio: "Focused on understanding users and translating insights into clear product decisions. Works at the intersection of UX and business strategy.",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
  },
];

const OurTeam: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#000029] min-h-screen py-20 px-6 sm:px-10 lg:px-16 font-sans flex items-center justify-center">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-stretch">
        <div className="flex-1 flex flex-col justify-center w-full lg:max-w-md">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#DCDEE2] tracking-tight leading-[1.1]">
            Meet the people behind our product
          </h2>
          <p className="mt-6 text-[#BABABA] text-base md:text-lg leading-relaxed">
            Our team drives innovation and makes ideas real, turning concepts
            into meaningful solutions.
          </p>
        </div>

        <div className="hidden md:flex gap-4 h-[450px] lg:h-[550px] w-full lg:w-auto flex-1 justify-start lg:justify-end">
          {teamMembers.map((member, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={member.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative overflow-hidden rounded-[32px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer shadow-xl border border-white/5 flex flex-col group bg-[#000051] ${
                  isActive
                    ? "w-[300px] lg:w-[340px]"
                    : "w-[100px] lg:w-[120px] hover:border-[#173DED]/40"
                }`}
              >
                <div
                  className={`relative w-full transition-all duration-700 ${isActive ? "h-[50%]" : "h-full"}`}
                >
                  <div
                    className={`absolute inset-0 bg-black/20 z-10 transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-100 group-hover:opacity-0"}`}
                  ></div>
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={`absolute bottom-0 left-0 w-full bg-[#000051] transition-all duration-700 flex flex-col justify-between ${
                    isActive
                      ? "h-[50%] opacity-100"
                      : "h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="p-6 md:p-8 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-[#DCDEE2] leading-tight">
                          {member.name}
                        </h3>
                        <p className="text-sm font-semibold text-[#173DED] mt-1 tracking-wide uppercase">
                          {member.role}
                        </p>
                      </div>

                      <div className="flex gap-3 text-[#BABABA]">
                        <span className="font-bold text-lg hover:text-[#173DED] cursor-pointer transition-colors">
                          𝕏
                        </span>
                        <span className="font-bold text-lg hover:text-[#173DED] cursor-pointer transition-colors">
                          in
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-[#BABABA] leading-relaxed mt-auto pb-1 line-clamp-4">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Stacked Cards (Mobile Only) */}
        <div className="flex md:hidden flex-col gap-8 w-full mt-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="rounded-[32px] overflow-hidden shadow-2xl flex flex-col border border-white/10 bg-[#000051]"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#DCDEE2] leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#173DED] mt-1 tracking-wide uppercase">
                      {member.role}
                    </p>
                  </div>
                  <div className="flex gap-4 text-[#BABABA]">
                    <span className="font-bold text-xl hover:text-[#173DED] transition-colors">
                      𝕏
                    </span>
                    <span className="font-bold text-xl hover:text-[#173DED] transition-colors">
                      in
                    </span>
                  </div>
                </div>
                <p className="text-base text-[#BABABA] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
