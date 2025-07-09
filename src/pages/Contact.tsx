import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare } from 'lucide-react';

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } }),
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { yoyo: Infinity, duration: 0.3 } }
};

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with real API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-gray-800 rounded-2xl shadow-xl p-8"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-extrabold text-teal-400 text-center mb-4"
        >
          Let’s Brew Some Code!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-300 italic text-center mb-6"
        >
          Got a wild idea? Drop me a line. No caffeine required (but appreciated!).
        </motion.p>
        <form onSubmit={handleSubmit} className="space-y-5">
          {submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center text-green-400 font-semibold"
            >
              Message sent! 🚀
            </motion.div>
          )}
          <motion.div custom={0} variants={inputVariants} initial="hidden" animate="visible">
            <label className="flex items-center text-gray-300 mb-1">
              <User className="mr-2" />
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-teal-400 outline-none"
            />
          </motion.div>
          <motion.div custom={1} variants={inputVariants} initial="hidden" animate="visible">
            <label className="flex items-center text-gray-300 mb-1">
              <Mail className="mr-2" />
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-teal-400 outline-none"
            />
          </motion.div>
          <motion.div custom={2} variants={inputVariants} initial="hidden" animate="visible">
            <label className="flex items-center text-gray-300 mb-1">
              <MessageSquare className="mr-2" />
              Message
            </label>
            <textarea
              name="message"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full p-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-teal-400 outline-none"
            />
          </motion.div>
          <motion.div custom={3} variants={inputVariants} initial="hidden" animate="visible" className="text-center">
            <motion.button
              type="submit"
              variants={buttonVariants}
              whileHover="hover"
              className="px-6 py-2 bg-teal-400 text-gray-900 font-semibold rounded-full shadow-lg focus:outline-none"
            >
              Send It!
            </motion.button>
            <p className="mt-5 text-sm text-gray-400 italic">
              Psst… This button’s a front-end prop, but I do know backend.
            </p>
            <p className="mt-1 text-sm text-gray-300 italic">
              Source: Trust me :)
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-4 text-center text-teal-300 italic"
            >
              If you’re really serious. Let’s skip the form and connect on{' '}
              <a
                href="https://linkedin.com/in/jai-khatri-153908249"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                LinkedIn
              </a>
              . Because great code deserves great connections.
            </motion.p>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
