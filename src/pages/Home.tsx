import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Code, Database, Cloud, Terminal, LayoutGrid, PenTool, GitBranch, Box, Zap, Award, BookOpen } from 'lucide-react';

// Variants for staggered animations
const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const skills = [
  { icon: <Code className="w-6 h-6" />, label: 'JavaScript, TypeScript & Python' },
  { icon: <Database className="w-6 h-6" />, label: 'MongoDB, PostgreSQL & MySQL' },
  { icon: <Cloud className="w-6 h-6" />, label: 'AWS, Azure & Cloud Management' },
  { icon: <Terminal className="w-6 h-6" />, label: 'Node.js, Express & Auth handling' },
  { icon: <LayoutGrid className="w-6 h-6" />, label: 'React, Tailwind & System Design' },
  { icon: <PenTool className="w-6 h-6" />, label: 'Clean, Documented & Witty Code' },
  { icon: <GitBranch className="w-6 h-6" />, label: 'Git, Github & Bitbucket Mastery' },
  { icon: <Box className="w-6 h-6" />, label: 'Docker, Kubernetes & Pro Error handling' },
  { icon: <Zap className="w-6 h-6" />, label: 'CI/CD, DevOps & GitHub Actions' },
  { icon: <BookOpen className="w-6 h-6" />, label: 'SSR, Next.js & much more!' },
];

const education = [
  {
    icon: <BookOpen className="w-6 h-6" />, 
    label: "M.S. in Computer Science, Ball State University, Indiana, US (2024 - 2027)"
  },
];

const credentials = [
  { icon: <Award className="w-6 h-6" />, label: "Frontend Dev Specialization, META" },
  { icon: <Award className="w-6 h-6" />, label: "Software Engineering, Ball State University" },
  { icon: <Award className="w-6 h-6" />, label: "Discrete Structures & Algos, Princeton" },
  { icon: <Award className="w-6 h-6" />, label: "Programming with Purpose, Princeton" },
];

const Home: React.FC = () => (
  <div className="min-h-screen bg-gray-900 m-3 text-gray-100 flex flex-col">
    {/* Hero Section */}
    <section className="relative flex-1 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center p-8 mx-4"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Hey there, I'm <span className="text-teal-400">Jai</span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-xl md:text-2xl mb-6 italic max-w-2xl mx-auto"
        >
          your friendly <span className="font-semibold">Code Whisperer</span>, turning caffeine into
          bug-free brilliance.
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="inline-block bg-teal-500 hover:bg-teal-600 text-gray-900 font-semibold py-3 px-7 rounded-full shadow-lg"
        >
          Build Epic Stuff
        </motion.a>
      </motion.div>
      <div className="absolute -top-20 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-indigo-500 opacity-30 rotate-3"></div>
    </section>

    {/* Skills Section */}
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="py-12 px-6 bg-gray-850"
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold text-center mb-8"
      >
        Skills That Make Me Dangerously Awesome
      </motion.h2>
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-gray-800 p-5 rounded-2xl flex flex-col items-center text-center shadow-md"
          >
            {skill.icon}
            <span className="mt-3 font-medium text-sm">{skill.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>

    {/* Education Section */}
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-12 px-6 bg-gray-850 flex justify-center items-center"
    >
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Education: Where I Learned to Survive
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 justify-center gap-6"
        >
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ rotate: 1, scale: 1.03 }}
              className="bg-gray-800 p-6 rounded-2xl flex flex-col items-center text-center border-2 border-transparent hover:border-teal-400"
            >
              {edu.icon}
              <span className="mt-3 font-medium text-sm">{edu.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>

    {/* Credentials Section */}
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="py-12 px-6 bg-gray-800"
    >
      <motion.h2
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-3xl font-bold text-center mb-8"
      >
        Credentials That Won’t Let You Down
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
      >
        {credentials.map((cred, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ rotate: 1, scale: 1.03 }}
            className="bg-gray-700 p-6 rounded-2xl flex flex-col items-center text-center border-2 border-transparent hover:border-teal-400"
          >
            {cred.icon}
            <span className="mt-3 font-medium text-sm">{cred.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>

    {/* Quick Navigation CTA */}
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="py-12 px-6 bg-gray-850"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Ready for the Full Experience?
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg md:text-xl italic text-indigo-200 mb-6">
          Don’t just skim. Dive headfirst into the About page, drop me a line on Contact, or marvel at my Certifications.
        </motion.p>
        <div className="flex flex-wrap justify-center gap-4">
          {['/about','/contact','/certifications'].map((href, i) => (
            <motion.a
              key={i}
              href={href}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="inline-block bg-teal-500 hover:bg-teal-600 text-gray-900 font-semibold py-3 px-6 rounded-full shadow-lg"
            >
              {href.replace('/', '').charAt(0).toUpperCase() + href.slice(2)}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.section>

    {/* Contact CTA */}
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.6 }}
      className="py-12 px-6 text-center bg-gray-900"
    >
      <motion.h4
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-2xl font-bold mb-4"
      >
        Got a wild idea? Let’s chat.
      </motion.h4>
      <motion.a
        href="mailto:jaikhatri1110@gmail.com"
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.9 }}
        className="inline-block border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 font-semibold py-3 px-8 rounded-full transition-all"
      >
        Say Hello!
      </motion.a>
    </motion.section>

    {/* Footer */}
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="py-4 text-center text-sm text-gray-500"
    >
      © {new Date().getFullYear()} Jai Khatri. All bold statements reserved.
    </motion.footer>
  </div>
);

export default Home;