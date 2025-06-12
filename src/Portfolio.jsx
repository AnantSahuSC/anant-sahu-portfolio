// A slick, glossy, dark-themed React portfolio based on user resume with all required animations, toggles and features.

//import { useState } from "react";
//import React, { useState, useEffect } from 'react';
import { useState, useEffect } from "react"

//import { Button } from "@/components/ui/button";
import { Button } from "./components/ui/button";
import { Moon, Sun, Mail, Phone, Linkedin, CreditCard, Repeat, FileText } from "lucide-react";
import { motion } from "framer-motion";

const resumeLink = "/AnantSahu_Resume.pdf";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  //new lines
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  //new lines end here
  const [hoveredIcon, setHoveredIcon] = useState("ccp");

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const tabAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    //<div className={`min-h-screen px-6 py-10 ${darkMode ? "bg-[#25272a] text-white" : "bg-white text-black"}`}>
    //<div className="min-h-screen px-6 py-10 bg-white text-black dark:bg-[#25272a] dark:text-white transition-all duration-300">
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "bg-[#25272a] text-white" : "bg-white text-black"}`}>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold dark:text-white text-black">Anant Sahu</h1>
        <div className="flex gap-6 items-center">
          <div className="relative flex gap-3">
            <div
              onMouseEnter={() => setHoveredIcon("email")}
              onMouseLeave={() => setHoveredIcon("ccp")}
              className="cursor-pointer hover:text-blue-500 transition-colors relative"
            >
              <Mail />
              {hoveredIcon === "email" && (
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-2 rounded shadow-lg border border-blue-600 text-xs">
                  anantsahuofficial@gmail.com
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => setHoveredIcon("phone")}
              onMouseLeave={() => setHoveredIcon("ccp")}
              className="cursor-pointer hover:text-blue-500 transition-colors relative"
            >
              <Phone />
              {hoveredIcon === "phone" && (
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-2 rounded shadow-lg border border-blue-600 text-xs">
                  +91-7205411134
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => setHoveredIcon("linkedin")}
              onMouseLeave={() => setHoveredIcon("ccp")}
              className="cursor-pointer hover:text-blue-500 transition-colors relative"
            >
              <Linkedin />
              {hoveredIcon === "linkedin" && (
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-2 rounded shadow-lg border border-blue-600 text-xs">
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://www.linkedin.com/in/anant-sahu-7026111a3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/anant-sahu-7026111a3
                  </a>
                </div>
              )}
            </div>
          </div>
          <a href={resumeLink} download>
            <Button
              variant="outline"
              className={`${darkMode ? 'text-black bg-white border-white hover:bg-gray-200' : 'hover:bg-gray-100'}`}
            >
              Download Resume
            </Button>
          </a>
          <Button onClick={toggleDarkMode} variant="ghost">
            {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-black" />}
          </Button>
        </div>
      </div>

      <div className="space-y-12">
        <section id="about">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <motion.div initial="hidden" animate="visible" variants={tabAnim}>
          <p className="text-lg">
              Results-driven Automation Engineer with 6.8 years of experience in software testing and automation using Python, Selenium,
              and UFT. Skilled in robust framework implementation, defect analysis, and delivering quality across web, mobile,
              and client/server systems.
            </p>
          </motion.div>
        </section>

        <section id="skills">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <motion.div initial="hidden" animate="visible" variants={tabAnim} className="flex flex-wrap gap-2">
            {[
              "Python", "Visual Basic", "SAP ABAP", "SQL", "Mainframe", "Pycharm", "Selenium", "CITS", "UFT",
              "ALM", "GIT", "XRAY", "Odyssey", "Hybrid", "Agile"
            ].map(skill => (
              //<span key={skill} className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-3 py-1 rounded-full text-sm">{skill}</span>
              <span key={skill} className="bg-blue-600 hover:bg-blue-700 transition-colors text-white dark:text-white px-3 py-1 rounded-full text-sm">{skill}</span>
            ))}
          </motion.div>
        </section>

        <section id="experience">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <motion.div initial="hidden" animate="visible" variants={tabAnim} className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Cognizant Technology Solutions, Pune (March 2018 – Nov 2024)</h3>
              <ul className="list-disc list-inside">
                <li>Lead automation and testing across projects using Python, UFT, and Pytest</li>
                <li>Performed end-to-end testing, collaborated with dev teams, and conducted SDLC processes</li>
                <li>Handled incident management, root cause analysis, defect tracking, and stakeholder communication</li>
              </ul>
            </div>
          </motion.div>
        </section>

        <section id="projects">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <motion.div initial="hidden" animate="visible" variants={tabAnim}>
            <div className="flex flex-wrap gap-4 border-b border-gray-600 mb-6">
              <button aria-label="View CCP project" onClick={() => setHoveredIcon('ccp')} className={`flex items-center gap-2 px-4 py-2 rounded-t ${hoveredIcon === 'ccp' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-blue-700'}`}><CreditCard size={16} /> CCP</button>
              <button aria-label="View BFA project" onClick={() => setHoveredIcon('bfa')} className={`flex items-center gap-2 px-4 py-2 rounded-t ${hoveredIcon === 'bfa' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-blue-700'}`}><Repeat size={16} /> BFA</button>
              <button aria-label="View TSB project" onClick={() => setHoveredIcon('tsb')} className={`flex items-center gap-2 px-4 py-2 rounded-t ${hoveredIcon === 'tsb' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-blue-700'}`}><FileText size={16} /> TSB</button>
            </div>
            <motion.div key={hoveredIcon} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className={`${darkMode ? 'bg-[#1f1f1f] text-white' : 'bg-gray-100 text-black'} p-6 rounded-lg shadow-lg`}>
              {hoveredIcon === 'ccp' && (
  <div>
    <h3 className="font-bold text-lg hover:text-blue-500">Cash & Card Products (CCP) – Credit Suisse Universal Bank</h3>
    <p><strong>Duration:</strong> April 2019 – September 2023</p>
    <p><strong>Objective:</strong> Activities for Cash and Cards within Credit Suisse Corporate and Investment Banking.</p>
    <p><strong>Technologies:</strong> Pycharm, UFT</p>
    <p><strong>CI/CD:</strong> Git, Jenkins</p>
    <p><strong>Testing:</strong> Python, Pytest</p>
    <p><strong>Tools:</strong> Pycharm, UFT, ALM, Odyssey</p>
    <ul className="list-disc list-inside mt-2">
      <li>Migration from manual to scalable automation testing architecture.</li>
      <li>Analyzed requirements to estimate testing efforts.</li>
      <li>Bug triage, defect analysis, and fixing.</li>
      <li>Full SDLC involvement from design to production release.</li>
      <li>Developed formal test plans and walkthroughs.</li>
      <li>Designed test suites/scripts/data for web, client/server environments using UFT and Pycharm.</li>
      <li>Worked closely with developers to resolve complex issues.</li>
      <li>Improved infrastructure of test automation and reporting tools.</li>
      <li>Unit/integration testing to verify communication between modules.</li>
      <li>Synchronized test/production environments and monitored incidents.</li>
      <li>Root cause analysis and test documentation.</li>
      <li>Single offshore point of contact for testing.</li>
      <li>Coordinated test plans and executions with business and dev teams.</li>
    </ul>
  </div>
)}

{hoveredIcon === 'bfa' && (
  <div>
    <h3 className="font-bold text-lg hover:text-blue-500">Business Flow Automation (BFA) – Credit Suisse</h3>
    <p><strong>Duration:</strong> April 2018 – March 2019</p>
    <p><strong>Objective:</strong> End-to-end business testing platform that simplifies testing for users without technical background.</p>
    <p><strong>Technologies & Tools:</strong> Oracle, Mainframe, UFT, SQL, Tortoise SVN</p>
    <ul className="list-disc list-inside mt-2">
      <li>Focused on complete perspective-based automation testing.</li>
      <li>Built and maintained test scripts for web, client/server, and mainframe using UFT.</li>
      <li>Collaborated with QA leads on designing test assets.</li>
      <li>Executed and managed tests on client servers and databases.</li>
      <li>Resolved issues with development teams.</li>
      <li>Ensured synced test/production environments and resolved incidents.</li>
      <li>Performed RCA and defect classification.</li>
      <li>Created comprehensive defect and test reports.</li>
      <li>Sole automation script developer for project.</li>
      <li>Worked with stakeholders to create and execute test plans and data.</li>
    </ul>
  </div>
)}

{hoveredIcon === 'tsb' && (
  <div>
    <h3 className="font-bold text-lg hover:text-blue-500">Digital Automation (Retail & Business) – TSB Bank</h3>
    <p><strong>Duration:</strong> October 2023 – November 2024</p>
    <p><strong>Objective:</strong> Automation for retail and business apps at TSB Corporate and Investment Banking.</p>
    <p><strong>Technologies:</strong> Pycharm, CITS</p>
    <p><strong>CI/CD:</strong> Git, Jenkins</p>
    <p><strong>Testing:</strong> Python, Pytest</p>
    <p><strong>Tools:</strong> Pycharm, CITS, Jira, X-ray</p>
    <ul className="list-disc list-inside mt-2">
      <li>Estimated test timelines and collaborated with teams.</li>
      <li>Developed and enhanced automation scripts and infrastructure for web/mobile.</li>
      <li>Maintained sanity test cases across business/retail apps.</li>
      <li>Resolved issues collaboratively with developers.</li>
      <li>Continually improved automation infrastructure.</li>
    </ul>
  </div>
)}
            </motion.div>
          </motion.div>
        </section>

        <section id="education">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <motion.div initial="hidden" animate="visible" variants={tabAnim}>
            <p>B.Com. (Finance), 2017 — Prananath Autonomous College, Khurdha, Odisha</p>
          </motion.div>
        </section>

        <section id="achievements">
          <h2 className="text-2xl font-bold mb-4">Achievements</h2>
          <motion.div initial="hidden" animate="visible" variants={tabAnim} className="space-y-3">
            <p><strong>Sapphire Award</strong> – H1 2022, Cognizant</p>
            <p><strong>Client Appreciation</strong> – Quarterly for Cash & Cards</p>
            <p><strong>Thank You Letter</strong> – From BFA Team Lead</p>
            <p><strong>Cultural Involvement</strong> – Softball winner, Outreach Member, BFS football team, Fun Fridays</p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
