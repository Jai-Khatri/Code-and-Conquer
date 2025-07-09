import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code,
  Database,
  Cloud,
  Terminal,
  LayoutGrid,
  PenTool,
  GitBranch,
  Box,
  Zap,
  Award,
  BookOpen,
  Server,
  Github,
  Package,
  Shield,
  Cpu,
  Smartphone,
  Globe,
  ZapOff,
  Monitor,
  Book,
  Layers,
  Puzzle,
  Activity,
  HelpCircle
} from 'lucide-react';

// Animation variants
const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};
const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120 } },
  hover: { scale: 1.05, rotateZ: 2, transition: { duration: 0.3 } }
};

// Comprehensive skill list
const skillItems = [
  { icon: <Code className="w-6 h-6 text-teal-400" />, label: 'React & Redux' },
  { icon: <Terminal className="w-6 h-6 text-teal-400" />, label: 'Node.js & Express' },
  { icon: <Database className="w-6 h-6 text-teal-400" />, label: 'MongoDB, PostgreSQL & MySQL' },
  { icon: <LayoutGrid className="w-6 h-6 text-teal-400" />, label: 'Tailwind CSS & CSS3' },
  { icon: <Cloud className="w-6 h-6 text-teal-400" />, label: 'AWS & Azure' },
  { icon: <PenTool className="w-6 h-6 text-teal-400" />, label: 'TypeScript & ES6+' },
  { icon: <GitBranch className="w-6 h-6 text-teal-400" />, label: 'Git & Bitbucket' },
  { icon: <Box className="w-6 h-6 text-teal-400" />, label: 'Docker & Kubernetes' },
  { icon: <Zap className="w-6 h-6 text-teal-400" />, label: 'CI/CD & GitHub Actions' },
  { icon: <BookOpen className="w-6 h-6 text-teal-400" />, label: 'Next.js & SSR' },
  { icon: <Server className="w-6 h-6 text-teal-400" />, label: 'Serverless Functions' },
  { icon: <Shield className="w-6 h-6 text-teal-400" />, label: 'Web Security Practices' },
  { icon: <Cpu className="w-6 h-6 text-teal-400" />, label: 'Performance Optimization' },
  { icon: <Package className="w-6 h-6 text-teal-400" />, label: 'NPM & Yarn' },
  { icon: <Github className="w-6 h-6 text-teal-400" />, label: 'Open Source Contribution' },
  { icon: <Smartphone className="w-6 h-6 text-teal-400" />, label: 'Responsive & Mobile-First Design' },
  { icon: <Globe className="w-6 h-6 text-teal-400" />, label: 'Internationalization (i18n)' },
  { icon: <Monitor className="w-6 h-6 text-teal-400" />, label: 'Responsive Layouts' },
  { icon: <ZapOff className="w-6 h-6 text-teal-400" />, label: 'Debugging & Testing' },
  { icon: <Award className="w-6 h-6 text-teal-400" />, label: 'UI/UX Principles' },
  { icon: <Box className="w-6 h-6 text-teal-400" />, label: 'State Management (Redux, Context)' },
  { icon: <Database className="w-6 h-6 text-teal-400" />, label: 'GraphQL & REST APIs' },
  { icon: <LayoutGrid className="w-6 h-6 text-teal-400" />, label: 'Design Systems & Component Libraries' },
  { icon: <Cloud className="w-6 h-6 text-teal-400" />, label: 'PaaS & IaaS Platforms' },
  { icon: <Book className="w-6 h-6 text-teal-400" />, label: 'Algorithms & Complexity' },
  { icon: <Layers className="w-6 h-6 text-teal-400" />, label: 'Data Structures & Optimization' },
  { icon: <Activity className="w-6 h-6 text-teal-400" />, label: 'System Architecture & Microservices' },
  { icon: <Puzzle className="w-6 h-6 text-teal-400" />, label: 'Object-Oriented Design & Patterns' },
  { icon: <HelpCircle className="w-6 h-6 text-teal-400" />, label: 'CS Fundamentals' },
  { icon: <BookOpen className="w-6 h-6 text-teal-400" />, label: 'Testing: Jest & Cypress' },
  { icon: <Cpu className="w-6 h-6 text-teal-400" />, label: 'Distributed Systems Concepts' },
  { icon: <Award className="w-6 h-6 text-teal-400" />, label: 'Accessibility (a11y)' },
  { icon: <Zap className="w-6 h-6 text-teal-400" />, label: 'WebSockets & Real-Time Apps' },
  { icon: <Database className="w-6 h-6 text-teal-400" />, label: 'Database Indexing & Caching' },
  { icon: <Server className="w-6 h-6 text-teal-400" />, label: 'Infrastructure as Code (Terraform)' },
  { icon: <Activity className="w-6 h-6 text-teal-400" />, label: 'Concurrency & Parallelism' },
  { icon: <Cpu className="w-6 h-6 text-teal-400" />, label: 'Operating Systems Concepts' },
  { icon: <Code className="w-6 h-6 text-teal-400" />, label: 'Compiler Design Basics' },
  { icon: <Globe className="w-6 h-6 text-teal-400" />, label: 'Networking & Protocols' }
];

 const factItems = [
  { icon: <Zap className="w-6 h-6 text-teal-400" />, fact: 'Started coding at age 12 with game jams' },
  { icon: <Activity className="w-6 h-6 text-teal-400" />, fact: 'Got offered a 50K dev job at a US company at just 18' },
  { icon: <Globe className="w-6 h-6 text-teal-400" />, fact: 'Transitioned to web development 3 years ago' },
  { icon: <Github className="w-6 h-6 text-teal-400" />, fact: 'Built and deployed 10+ personal projects on GitHub' },
  { icon: <Package className="w-6 h-6 text-teal-400" />, fact: 'Paused my CS degree to gain real-world experience' },
  { icon: <BookOpen className="w-6 h-6 text-teal-400" />, fact: 'Lifelong learner: I never stop coding new challenges' }
];

// Highlighted projects
const projectItems = [
  {
    icon: <Github className="w-6 h-6 text-teal-400" />,
    name: 'Sweat Smart',
    description: 'Gym management system with user & admin accounts. Live: https://sweat-smart.onrender.com/'
  },
  {
    icon: <Github className="w-6 h-6 text-teal-400" />,
    name: 'Rupees and Sense',
    description: 'Advanced expense tracker with visualized data. Live: https://rupees-and-sense.onrender.com/'
  },
  {
    icon: <Github className="w-6 h-6 text-teal-400" />,
    name: 'Gas Up Now',
    description: 'Gas agency site with user & admin account handling. Live: https://gas-up-now.onrender.com/'
  },
  {
    icon: <Github className="w-6 h-6 text-teal-400" />,
    name: 'The Resume Forge',
    description: 'Interactive resume maker with AI-powered, ATS-friendly summaries. Live: https://the-resume-forge.onrender.com/'
  },
  {
    icon: <Github className="w-6 h-6 text-teal-400" />,
    name: 'Account-Based Advanced Interactive Map',
    description: 'Secure, account-based interactive map interface. Live: https://interactive-map-o42p.onrender.com/login'
  },
  {
    icon: <Github className="w-6 h-6 text-teal-400" />,
    name: 'Chatfinity',
    description: 'Full-stack chat application with real-time messaging. Live: https://chatfinity-fullstack.onrender.com/'
  }
];

// Education & certifications
const educationItems = [
  {
    icon: <BookOpen className="w-6 h-6 text-teal-400" />,
    title: 'Online CS Degree, Ball State University',
    subtitle: 'Coursera (Paused due to financial constraints)'
  },
  {
    icon: <Book className="w-6 h-6 text-teal-400" />,
    title: 'Data Structures & Algorithms Courses',
    subtitle: 'Multiple online certifications and hands-on practice'
  },
  {
    icon: <Award className="w-6 h-6 text-teal-400" />,
    title: 'Advanced JavaScript & System Design',
    subtitle: 'Completed specialized courses to deepen core skills'
  },
  {
    icon: <Github className="w-6 h-6 text-teal-400" />,
    title: 'Programming with Purpose, Princeton',
    subtitle: 'Completed this course with all the assessments with all the conditions approved'
  }
];

const About: React.FC = () => (
  <motion.div
    initial={{ backgroundPositionY: 0 }}
    animate={{ backgroundPositionY: [0, 20, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
    className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 bg-[length:100%_200%] py-12 px-6 lg:px-20 text-gray-100"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="max-w-5xl mx-auto bg-gray-800 rounded-2xl shadow-2xl p-8 lg:p-12"
    >
      {/* Intro */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-extrabold text-teal-400 mb-4 text-center"
      >
        Who’s Behind the Magic?
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg text-gray-300 mb-8 leading-relaxed text-center italic"
      >
       I started writing my first game at twelve (2019) and never looked back. Now I turn ideas into web reality. 
       From orchestrating Sweat Smart’s gym-management workflows to conjuring AI-powered resumes in The Resume Forge, 
       I blend rock-solid CS fundamentals with creative mischief. 
       Whether I’m spinning real-time chat magic in Chatfinity or charting expense epics in Rupees and Sense, my toolkit - React, Node.js,
        Socket.IO, Tailwind CSS. I never let a stray console.log slip by. 
        Always up for the next quest, I decode complexity into clean, maintainable code…with a sly grin.
      </motion.p>

    

{/* Fun Facts Section */}
<motion.h2
  initial={{ x: -20, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.5 }}
  className="text-3xl font-semibold text-teal-300 mb-4 text-center"
>
  Fun Facts
</motion.h2>
<motion.ul
  variants={containerVariants}
  initial="hidden"
  animate="show"
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
>
  {factItems.map((fact, i) => (
    <motion.li
      key={i}
      variants={itemVariants}
      whileHover="hover"
      className="flex items-center bg-gray-700 p-4 rounded-xl shadow-inner"
    >
      {fact.icon}
      <span className="ml-3 font-medium text-lg">{fact.fact}</span>
    </motion.li>
  ))}
</motion.ul>

      {/* Skills */}
      <motion.h2
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-3xl font-semibold text-teal-300 mb-4 text-center"
      >
        Core Technical Skills
      </motion.h2>
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        {skillItems.map((skill, i) => (
          <motion.li
            key={i}
            variants={itemVariants}
            whileHover="hover"
            className="flex items-center bg-gray-700 p-4 rounded-xl shadow-inner"
          >
            {skill.icon}
            <span className="ml-3 font-medium text-lg">{skill.label}</span>
          </motion.li>
        ))}
      </motion.ul>

      {/* Projects */}
      <motion.h2
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="text-3xl font-semibold text-teal-300 mb-4 text-center"
      >
        Highlighted Projects
      </motion.h2>
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-4 mb-12"
      >
        {projectItems.map((proj, i) => (
          <motion.li
            key={i}
            variants={itemVariants}
            whileHover="hover"
            className="flex items-start bg-gray-700 p-4 rounded-xl shadow-inner"
          >
            {proj.icon}
            <div className="ml-3">
              <h3 className="font-semibold text-lg text-gray-100">{proj.name}</h3>
              <p className="text-gray-400">{proj.description}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>

      {/* Education */}
      <motion.h2
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="text-3xl font-semibold text-teal-300 mb-4 text-center"
      >
        Education & Certifications
      </motion.h2>
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-4 mb-12"
      >
        {educationItems.map((edu, i) => (
          <motion.li
            key={i}
            variants={itemVariants}
            whileHover="hover"
            className="flex items-start bg-gray-700 p-4 rounded-xl shadow-inner"
          >
            {edu.icon}
            <div className="ml-3">
              <h3 className="font-semibold text-lg text-gray-100">{edu.title}</h3>
              <p className="text-gray-400">{edu.subtitle}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>

      {/* Call to action */}
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="text-gray-400 mb-4"
        >
          Ready to turn ideas into reality? Let’s craft the next big thing together.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link
            to="/contact"
            className="inline-block bg-teal-400 hover:bg-teal-500 text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-200"
          >
            Get In Touch
          </Link>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5 }}
          className="text-gray-500 mt-8 text-sm italic"
        >
          Or if you’re feeling extra bold, connect with me on{' '}
          <a
            href="https://linkedin.com/in/jai-khatri-153908249"
            className="text-teal-400 hover:underline"
          >
            LinkedIn
          </a>.
        </motion.p>
      </div>
    </motion.div>
  </motion.div>
);

export default About;
