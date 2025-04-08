import React from "react";
import { FaLinkedin } from "react-icons/fa";

const guide = {
  name: "Dr. Meera Sen",
  role: "Faculty Guide",
  image: "/team/guide.jpg",
  linkedin: "https://www.linkedin.com/in/dr-meera-sen",
};

const members = [
  {
    index: 1,
    name: "Nirmal Fageria",
    role: "Frontend Developer",
    image: "/team/nirmal.jpg",
    linkedin: "https://www.linkedin.com/in/nirmal-fageria",
  },
  {
    index: 2,
    name: "Ravi Sharma",
    role: "Backend Developer",
    image: "/team/ravi.jpg",
    linkedin: "https://www.linkedin.com/in/ravi-sharma",
  },
  {
    index: 3,
    name: "Ayesha Khan",
    role: "UI/UX Designer",
    image: "/team/ayesha.jpg",
    linkedin: "https://www.linkedin.com/in/ayesha-khan",
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
        <div className="bg-gray-800 shadow-md rounded-2xl p-4 flex flex-col items-center text-center w-64 mx-auto">
          <img
            src={guide.image}
            alt={guide.name}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h3 className="text-lg font-semibold text-white">{guide.name}</h3>
          <p className="text-sm text-gray-400">{guide.role}</p>
          <a
            href={guide.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-blue-400 hover:text-blue-300 flex items-center gap-1"
          >
            <FaLinkedin size={18} />
            <span className="text-sm">LinkedIn</span>
          </a>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {members.map((member) => (
          <div
            key={member.index}
            className="bg-gray-800 shadow-md rounded-2xl p-4 flex flex-col items-center text-center w-64 mx-auto"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-white">{member.name}</h3>
            <p className="text-sm text-gray-400">{member.role}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              <FaLinkedin size={18} />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        ))}
      </div>

      {/* Credits */}
      <div className="mt-12 text-sm text-gray-500 text-center">
        <p>Made with ❤️ by the HMPV Awareness Team.</p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </div>
  );
}
