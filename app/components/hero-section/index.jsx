// @flow strict
import { userData } from "@/data/user-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { FaPython, FaAws, FaDocker, FaInstagramSquare,  FaSteam } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'; 
import { SiDjango, SiFastapi, SiFlask, SiMysql, SiPostgresql, SiGithubactions, SiJfrogpipelines, SiDocker, SiHubspot, SiDiscord } from 'react-icons/si';

function HeroSection({ profile }) {
  const professionalSummary = `Passionate Python Developer with ${userData.experience} in building scalable web applications and RESTful APIs. Specialized in Django, FastAPI, and AWS cloud services with a strong focus on code quality and performance optimization.`;

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <div className="w-full max-w-5xl px-4">
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-1/3 bg-primary-bg rounded-xl p-6 border border-[#1b2c68a0]">
            <Image
              src={profile.avatar_url}
              width={200} 
              height={200}
              alt={profile.name}
              className="rounded-xl w-full transition-all duration-300 hover:scale-105" 
            />
          </div>

          <div className="md:w-2/3 bg-primary-bg rounded-xl p-6 border border-[#1b2c68a0]">
            <h1 className="text-2xl font-bold text-primary-title mb-2">{profile.name}</h1> 
            <h2 className="text-xl text-primary-text mb-2">Python Developer @{profile.company}</h2> 
            <p className="text-primary-text">{profile.location}</p> 
            <p className="text-primary-text mt-4">{professionalSummary}</p>
          </div>
        </div>

        {/* Expertise section with responsive fixes */}
        <div className="bg-primary-bg rounded-xl p-6 mb-8 border border-[#1b2c68a0]">
          <h2 className="text-xl font-semibold text-primary-title mb-4 text-center">EXPERTISE</h2>
          
          {/* Changed from flex-row to grid for better mobile responsiveness */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First expertise item */}
            <div className="flex flex-col items-center text-center gap-3 text-primary-text">
              <div className="flex gap-2 flex-wrap justify-center">
                <SiDjango className="text-2xl" /> 
                <SiFastapi className="text-2xl" />
                <SiFlask className="text-2xl" />
                <SiMysql className="text-2xl" />
                <SiPostgresql className="text-2xl" />
              </div>
              <span className="text-sm">Django, FastAPI, Flask, MySQL, PostgreSQL</span>
            </div>

            {/* Second expertise item */}
            <div className="flex flex-col items-center text-center gap-3 text-primary-text">
              <div className="flex gap-2 flex-wrap justify-center">
                <FaPython className="text-2xl" /> 
                <FaSteam className="text-2xl" />
                <SiDiscord className="text-2xl" />
                <SiHubspot className="text-2xl" />
              </div>
              <span className="text-sm">Web Apps & APIs</span>
            </div>

            {/* Third expertise item */}
            <div className="flex flex-col items-center text-center gap-3 text-primary-text">
              <div className="flex gap-2 flex-wrap justify-center">
                <FaAws className="text-2xl" />
                <FaDocker className="text-2xl" />
                <SiJfrogpipelines className="text-2xl" />
                <SiGithubactions className="text-2xl" />
              </div>
              <span className="text-sm">AWS, Docker, CI/CD, Github Actions</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-1/2 bg-primary-bg rounded-xl p-6 border border-[#1b2c68a0]">
            <h2 className="text-xl font-semibold text-primary-title mb-4">Experience</h2>
            <div className="flex flex-col gap-2">
              <p className="text-primary-text">{userData.experience}</p>
              <p className="text-primary-text">Public Repos: {profile.public_repos}</p>
              <p className="text-primary-text">Open to Work: {profile.hireable ? "Yes" : "No"}</p>
            </div>
          </div>

          <div className="md:w-1/2 bg-primary-bg rounded-xl p-6 border border-[#1b2c68a0]">
            <h2 className="text-xl font-semibold text-primary-title mb-4">Connect</h2>
            <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
              <Link
                href={userData.github} 
                target='_blank' 
                className="transition-all text-primary-icon hover:scale-110 duration-300"
                aria-label="GitHub Profile" 
              >
                <BsGithub size={28} />
              </Link>
              <Link
                href={userData.linkedIn} 
                target='_blank' 
                className="transition-all text-primary-icon hover:scale-110 duration-300"
                aria-label="LinkedIn Profile"
              >
                <BsLinkedin size={28} />
              </Link>
              <Link
                href={`mailto:${userData.email}`}
                className="transition-all text-primary-icon hover:scale-110 duration-300"
                aria-label="Email Contact"
              >
                <MdEmail size={28} />
              </Link>
              <Link
                href={userData.instagram}
                target='_blank'
                className="transition-all text-primary-icon hover:scale-110 duration-300"
                aria-label="Instagram Profile"
              >
                <FaInstagramSquare size={28} />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link 
            href={userData.resume}
            target="_blank"
            className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
          >
            <button className="px-6 py-3 bg-primary-bg rounded-full text-white font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300">
              <span>GET RESUME</span>
              <MdDownload size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;