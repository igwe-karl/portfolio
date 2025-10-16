"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Image from "next/image";

const Portfolio = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const projects = [
    {
      title: "Debt Tracker",
      description: "A debt tracker app",
      stack: ["React", "Node", "Postgres"],
      live: "https://debt-tracker.vercel.app",
      image: "/assets/debt.png",
    },
    {
      title: "vascan",
      description: "An art gallery website",
      stack: ["React", "Node", "MongoDB"],
      live: "https://vascan.io",
      image: "/assets/vascan.png",
    },
    {
      title: "Terminal Africa",
      description: "A task manager app",
      stack: ["React", "Node", "MongoDB"],
      live: "https://terminal-africa.com",
      image: "/assets/terminal.png",
    },
  ];

  const offers = [
    {
      title: "Frontend Engineering",
      description:
        "Expert in crafting intuitive, responsive, and high-performance UIs using React, TypeScript, and modern styling frameworks like Tailwind CSS and SCSS. I focus on seamless user experience and accessibility across devices.",
    },
    {
      title: "Backend Development & System Architecture",
      description:
        "Experienced in building secure, scalable backend systems with Node.js, Express, and MongoDB. I architect APIs, manage data flows, and integrate services like Firebase, GraphQL, and real-time communication APIs.",
    },
    {
      title: "Real-time & Cloud Integrations",
      description:
        "Proficient in using Firebase Realtime Database and cloud infrastructure to build features such as live location sharing, OTP-based authentication, and logistics tracking systems.",
    },
    {
      title: "Documentation & Process Optimization",
      description:
        "Skilled in writing Standard Operating Procedures (SOPs) and API documentation for team alignment and system optimization — ensuring smooth collaboration and knowledge transfer.",
    },
    {
      title: "Team Collaboration & Leadership",
      description:
        "A dependable and organized engineer who enjoys mentoring, managing feature rollouts, and collaborating across teams to deliver impactful digital solutions.",
    },
  ];

  const handleDownload = () => {
    window.open("/resume.pdf", "_blank");
  };

  const myContact = [
    {
      title: "Email",
      link: "mailto:kali4478@gmail.com",
      // icon: <Mail />,
    },
    {
      title: "GitHub",
      link: "https://github.com/igwe-karl",
      // icon: <Github />,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/calistus-chigozie-igwe/",
      // icon: <Linkedin />,
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          Hi, I&apos;m Igwe Chigozie Calistus 👋
        </motion.div>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A Full Stack Engineer passionate about building seamless user
          experiences.
        </p>
        <Button onClick={handleDownload}>Download Resume</Button>

        <div>
          <Button onClick={toggleTheme} variant="ghost" size="sm">
            {theme === "light" ? <p>Dark mode</p> : <p>Light mode</p>}
          </Button>
        </div>
      </section>

      {/* About Me */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-center mb-4">About Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center">
          I&apos;m <strong>Chigozie Calistus Igwe</strong>, a Computer Engineer
          based in Lagos, Nigeria, with a National Diploma in Electrical
          Engineering and a Bachelor&apos;s in Computer Engineering. Over the
          years, I’ve built and optimized modern digital systems — from
          logistics platforms and OTP verification APIs to real-time group and
          location-sharing apps.
          <br />
          <br />I specialize in building scalable frontends with{" "}
          <strong>React, TypeScript, and React Query</strong>, and robust
          backends using{" "}
          <strong>Node.js, Express, MongoDB, and Firebase</strong>. I enjoy
          turning complex problems into elegant software solutions that are
          maintainable, efficient, and user-focused. My work thrives at the
          intersection of design, performance, and functionality.
        </p>
      </section>

      {/* What I Offer */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center mb-8">
          What I Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <Card className="p-8" key={idx}>
              <CardContent>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {offer.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  {offer.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
          <li>React</li>
          <li>TypeScript</li>
          <li>Next.js</li>
          <li>React Query</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Firebase</li>
          <li>GraphQL</li>
          <li>Tailwind CSS</li>
          <li>SCSS</li>
          <li>Material UI</li>
          <li>Bootstrap</li>
          <li>Figma</li>
          <li>VS Code</li>
          <li>API Integration</li>
        </ul>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Top Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <Card className="p-6" key={idx}>
              <CardContent className="space-y-2 text-center">
                <h3 className="text-xl font-semibold mb-2 capitalize">
                  {proj.title}
                </h3>
                <p className="mb-2">{proj.description}</p>
                <p className="mb-2">
                  <strong>Stack:</strong> {proj.stack.join(", ")}
                </p>
                <p>
                  <a
                    className="text-orange-500"
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                </p>
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={300}
                  height={300}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-center mb-4">Contact</h2>
        <p>Feel free to reach out via email or connect on social media!</p>
        <div className="flex justify-center gap-4 cursor-pointer">
          {myContact.map((contact, idx) => (
            <Button
              className="cursor-pointer"
              variant="outline"
              key={idx}
              onClick={() => window.open(contact.link, "_blank")}
            >
              {contact.title}
            </Button>
          ))}
        </div>
      </section>
      <footer className="border-t-2 border-black dark:border-gray-700 p-6 bg-black dark:bg-gray-800 text-center rounded-xl">
        <h2 className="text-2xl font-semibold mb-4 text-white dark:text-gray-200">
          Let&apos;s Work Together 🤝
        </h2>
        <p className="text-gray-200 dark:text-gray-400">
          I’m always open to new opportunities and collaborations — from
          startups to enterprise systems. If you have a project in mind or want
          to discuss how I can add value to your team, feel free to reach out!
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;