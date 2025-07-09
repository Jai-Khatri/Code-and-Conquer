import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  Award,
  ExternalLink,
  Box,
  BarChart2,
  Database,
  Terminal,
  MapPin,
  MessageCircle
} from 'lucide-react';

// Animation variants
const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

// In-depth certification descriptions
const certifications = [
  {
    title: 'Frontend Dev Specialization, META',
    description: `Completed an intensive curriculum covering React component architecture, hooks, context API, and Redux for state management. Built multiple responsive, accessible web applications, applied modern CSS-in-JS practices, and optimized performance through code-splitting and lazy loading.`
  },
  {
    title: 'Software Engineering, Ball State University',
    description: `Learned software development life cycle methodologies, including Agile and Scrum. Designed and implemented RESTful APIs in Node.js, applied SOLID principles and design patterns, and practiced unit and integration testing using Jest and Mocha to ensure code reliability.`
  },
  {
    title: 'Discrete Structures & Algorithms, Princeton',
    description: `Studied graph theory, combinatorics, and number theory to solve complex computational problems. Analyzed algorithmic time and space complexity, implemented classic algorithms (Dijkstra, Kruskal, dynamic programming) in real-world coding challenges.`
  },
  {
    title: 'Programming with Purpose, Princeton',
    description: `Explored software ethics, security fundamentals, and collaborative development workflows. Completed team-based projects emphasizing version control (Git), code reviews, and continuous integration to deliver maintainable, ethically responsible software.`
  },
  {
    title: 'CS 681: Applications of Computability',
    description: `Delved into formal language theory, Turing machines, and decidability. Explored reducibility techniques, the Halting problem, and complexity hierarchies, applying computability principles to classify and reason about algorithmic problems.`
  },
  {
    title: 'CS 621: Foundations of Data Analytics',
    description: `Mastered data preprocessing, exploratory analysis, and statistical inference. Built end-to-end analytics pipelines using Python (pandas, NumPy, scikit-learn), implemented supervised and unsupervised models, and visualized insights to drive data-informed decisions.`
  }
];

// Project showcase with live links
const projects = [
  {
    title: 'Sweat Smart',
    icon: <Box className="w-6 h-6 text-teal-400" />,  
    description: `A full-stack gym management system featuring secure authentication for users and admins, membership scheduling, workout tracking, and analytics dashboards. Implemented Node.js backend with MongoDB, integrated real-time metrics for instructors.`,
    link: 'https://sweat-smart.onrender.com/'
  },
  {
    title: 'Rupees and Sense',
    icon: <BarChart2 className="w-6 h-6 text-teal-400" />,  
    description: `An advanced expense tracker that visualizes spending data through interactive charts and category breakdowns. Built with React and Chart.js, featuring RESTful APIs for transaction management and secure user sessions.`,
    link: 'https://rupees-and-sense.onrender.com/'
  },
  {
    title: 'Gas Up Now',
    icon: <Database className="w-6 h-6 text-teal-400" />,  
    description: `A gas agency portal with role-based access for customers and administrators. Developed RESTful services for order placement, invoice generation, and inventory control. Ensured data integrity with PostgreSQL and Sequelize ORM.`,
    link: 'https://gas-up-now.onrender.com/'
  },
  {
    title: 'The Resume Forge',
    icon: <Terminal className="w-6 h-6 text-teal-400" />,  
    description: `An AI-powered resume builder that generates ATS-friendly summaries using NLP APIs. Users can customize layouts, preview results in real time, and export downloadable PDFs. Built with Next.js and integrated OpenAI endpoints.`,
    link: 'https://the-resume-forge.onrender.com/'
  },
  {
    title: 'Account Based Advanced Interactive Map',
    icon: <MapPin className="w-6 h-6 text-teal-400" />,  
    description: `A dynamic mapping application with user-based access control. Implemented login and profile management, layered map visualizations, and geospatial filtering. Leveraged Mapbox GL and a Node.js API for real-time location services.`,
    link: 'https://interactive-map-o42p.onrender.com/login'
  },
  {
    title: 'Chatfinity',
    icon: <MessageCircle className="w-6 h-6 text-teal-400" />,  
    description: `A full-stack chat platform supporting real-time messaging, group channels, and media sharing. Built with WebSocket for live communication, JWT authentication, and MongoDB for message persistence. Designed a responsive UI with React and Tailwind CSS.`,
    link: 'https://chatfinity-fullstack.onrender.com/'
  }
];

const CreationsAndCredentials: React.FC = () => (
  <div className="min-h-screen bg-gray-900 py-12 px-6 lg:px-20 text-gray-100">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto bg-gray-800 rounded-2xl shadow-2xl p-8 lg:p-12 space-y-12"
    >
      {/* Certifications Section */}
      <section>
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-teal-400 mb-6 text-center"
        >
          Certifications & Learning Journey
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-gray-700 p-6 rounded-xl shadow-inner flex"
            >
              <Award className="w-8 h-8 text-teal-400 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                <p className="mt-1 text-gray-300 leading-relaxed">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Note about age */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center text-gray-400 italic"
      >
        All the following projects were built when I was 16 or 17 years old.
      </motion.p>

      {/* Projects Section */}
      <section>
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl font-extrabold text-teal-400 mb-6 text-center"
        >
          Selected Creations
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-700 p-6 rounded-xl shadow-inner flex flex-col justify-between"
            >
              <div className="flex items-center mb-4">
                {proj.icon}
                <h3 className="ml-3 text-xl font-semibold text-white">{proj.title}</h3>
              </div>
              <p className="flex-grow text-gray-300 mb-4 leading-relaxed">{proj.description}</p>
              <div className="mt-auto">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-300 hover:underline font-medium"
                >
                  View Live
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* GitHub Link */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center text-gray-400 italic"
      >
        I keep getting better, so be sure to check out my GitHub account to see the most updated version of the coder in me:
        <a
          href="https://github.com/Jai-Khatri"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-teal-300 hover:underline font-semibold"
        >
          github.com/Jai-Khatri
        </a>
      </motion.p>
    </motion.div>
  </div>
);

export default CreationsAndCredentials;