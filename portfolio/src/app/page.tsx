"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
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
      title: "Frontend Development with responsiveness and performance",
      description:
        "I build responsive frontend applications with a focus on user experience and performance.",
    },
    {
      title: "Backend Development with scalability and security",
      description:
        "I build scalable backend systems with a focus on security and performance.",
    },
    {
      title: "Team Collaboration and Management",
      description:
        "Effectively manage and collaborate with teams to deliver high-quality projects.",
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
    <div className="p-6 max-w-6xl mx-auto space-y-12">
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
          <Button onClick={toggleTheme} variant="ghost" size="icon">
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </Button>
        </div>
      </section>

      {/* About Me */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-center mb-4">About Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center">
          I&apos;m a Full Stack Computer Engineer based in Lagos, Nigeria. I
          have hands-on experience building modern, scalable web applications
          using technologies like React, TypeScript, Firebase, GraphQL, Node.js,
          and MongoDB. With a strong foundation in software engineering and a
          passion for clean, user-focused design, I thrive on developing
          intuitive UIs and robust backend systems. Whether it&apos;s
          architecting APIs, working with real-time data, or collaborating with
          teams to deliver seamless digital experiences, I bring both creativity
          and technical precision to every project.
        </p>
      </section>

      {/* What I Offer */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center mb-4">
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
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-center mb-4">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <li>React</li>
          <li>TypeScript</li>
          <li>GraphQL</li>
          <li>Firebase</li>
          <li>Tailwind CSS</li>
          <li>Figma</li>
          <li>SCSS</li>
          <li>VS Code</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center mb-4">
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
      <footer className="border-t-2 border-gray-200 dark:border-gray-800 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Let&apos;s Work Together 🤝
        </h2>
        <p>
          I&apos;m always open to new opportunities and collaborations. Whether
          you have a project in mind or just want to say hi, feel free to reach
          out!
        </p>
      </footer>
    </div>
  );
}
