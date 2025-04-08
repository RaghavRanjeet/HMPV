import React from "react";
import { FaLinkedin } from "react-icons/fa";

const guide = {
  name: "Dr. Ravindra Kumar",
  role: "Assisant Professer BSED, NITC",
  image: "/team/guide.jpeg",
  linkedin: "https://www.linkedin.com/in/ravindra-kumar-phd-nitc/",
};

const members = [
  {
    index: 1,
    name: "Ranjeet Singh Raghav",
    image: "/team/ranjeet.jpg",
    linkedin: "https://www.linkedin.com/in/ranjeet-singh-raghav-4875b7258",
  },
  {
    index: 2,
    name: "Anwin Jospeh",
    image: "/team/anwin.jpeg",
    linkedin: "https://www.linkedin.com/in/anwin-joseph-joy-529442257",
  },
  {
    index: 3,
    name: "Maniraj",
    image: "/team/mainraj.jpeg",
    linkedin: "#",
  },
];

export default function AboutPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto text-white">
      {/* Website Info */}
      <h1 className="text-3xl font-bold text-blue-300 border-b pb-2 mb-4">
        About This Website
      </h1>
      <p className="text-gray-300 mb-6">
        This website is dedicated to raising awareness about Human
        Metapneumovirus (HMPV). We aim to provide reliable, clear, and updated
        information regarding its symptoms, prevention, and impact on health.
        Whether you're a curious student, parent, or health-conscious citizen,
        this platform helps you stay informed and protected.
      </p>

      {/* Guide Section */}
   
      <h2 className="text-xl font-semibold text-blue-300 border-b pb-2 mb-4">
        Meet the Guide
      </h2>
      <div className="flex justify-center mb-12">
        <div className="bg-gray-800 shadow-md rounded-2xl overflow-hidden text-center">
          <img
            src={guide.image}
            alt={guide.name}
            className="w-[250px] h-[190px] object-fit" // increased height + proper Tailwind class
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white">{guide.name}</h3>
            <p className="text-sm text-gray-400">{guide.role}</p>
            <a
              href={guide.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-blue-400 hover:text-blue-300"
            >
              <FaLinkedin size={18} />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* About Team */}
      <h2 className="text-xl font-semibold text-blue-300 border-b pb-2 mb-4">
        Meet the Team
      </h2>
      <p className="text-gray-300 mb-8">
        We’re a group of developers and designers passionate about health and
        tech. Each of us brought our skills together to build this site for the
        greater good.
      </p>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center itemsx-center">
        {members.map((member) => (
          <div
            key={member.index}
            className="bg-gray-800 shadow-md rounded-2xl w-64 overflow-hidden text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-[250px] h-[190px] object-cover object-top"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">
                {member.name}
              </h3>
            
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-blue-400 hover:text-blue-300"
              >
                <FaLinkedin size={18} />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Credits */}
      <div className="mt-12 text-sm text-gray-500 text-center">
        <p>Made with ❤️ by the PathoVerse Team.</p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </div>
  );
}
