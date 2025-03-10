import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Instagram, Disc as Discord } from 'lucide-react';
import { GradientText } from '../components/GradientText';
import { GradientButton } from '../components/GradientButton';

function Home() {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0118] text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-violet-900/20" />
      <motion.div
        className="fixed inset-0"
        animate={{
          background: [
            'radial-gradient(600px circle at 0% 0%, rgba(129, 140, 248, 0.1), transparent 80%)',
            'radial-gradient(600px circle at 100% 100%, rgba(167, 139, 250, 0.1), transparent 80%)',
            'radial-gradient(600px circle at 100% 0%, rgba(139, 92, 246, 0.1), transparent 80%)',
            'radial-gradient(600px circle at 0% 100%, rgba(167, 139, 250, 0.1), transparent 80%)',
          ],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "linear"
        }}
      />
      
      <div className="relative">
        <div className="min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.h1 
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text"
            >
              LearnNeural
            </motion.h1>

            <GradientText className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 block">
              Hackathon 2025
            </GradientText>

            <motion.p 
              className="text-lg sm:text-xl md:text-2xl mb-8 text-violet-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Showcase your frontend skills and win amazing prizes!
            </motion.p>

            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSf1yPxEXNhw6jkClfpN_3KbtCsR19h1fE2Fg58V2hrxG77wXg/viewform?usp=dialog">
              <GradientButton>
                Register Now →
              </GradientButton>
            </Link>
          </motion.div>
        </div>

        <div className="py-16 px-4">
          <GradientText className="text-3xl sm:text-4xl font-bold mb-8 text-center block">
            How It Works
          </GradientText>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-violet-500/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <GradientText className="text-xl sm:text-2xl font-semibold mb-4 block">
                Round 1
              </GradientText>
              <p className="text-violet-200">
                Teams submit their initial projects on 30/3/2025 . Only the top 10 teams will advance to the final round based on creativity, code quality, and design.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-indigo-500/20"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <GradientText className="text-xl sm:text-2xl font-semibold mb-4 block">
                Round 2 (Finals)
              </GradientText>
              <p className="text-violet-200">
                The top 10 teams compete in  final round on 10/4/2025. Only 3 teams will emerge as winners and receive special recognition.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="py-16 px-4">
          <GradientText className="text-3xl sm:text-4xl font-bold mb-8 text-center block">
            Who Can Participate?
          </GradientText>
          
          <motion.div 
            className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-violet-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-violet-200 text-lg">
              This is a frontend-focused hackathon open to developers with:
            </p>
            <ul className="list-disc list-inside mt-4 text-violet-200 space-y-2">
              <li>Basic knowledge of HTML, CSS, and JavaScript</li>
              <li>Passion for creating beautiful user interfaces</li>
              <li>Interest in modern frontend frameworks</li>
              <li>Ability to work in a team</li>
            </ul>
          </motion.div>
        </div>

        <div className="py-16 px-4">
          <GradientText className="text-3xl sm:text-4xl font-bold mb-8 text-center block">
            Prize Pool
          </GradientText>
          
          <motion.div 
            className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-violet-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-violet-200 text-lg text-center">
              Winners will be featured on:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-6">
              <motion.a 
                href="https://instagram.com/learnneural" 
                className="flex items-center justify-center gap-2 text-violet-400 hover:text-violet-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={24} />
                <span>@learnneural</span>
              </motion.a>
              <motion.a 
                href="https://discord.gg/learnneural" 
                className="flex items-center justify-center gap-2 text-indigo-400 hover:text-indigo-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Discord size={24} />
                <span>Discord</span>
              </motion.a>
            </div>
            <p className="text-violet-200 mt-6 text-center">
              Winners will receive a special role in our Discord community!
            </p>
          </motion.div>
        </div>

        <footer className="py-8 text-center">
          <GradientText className="text-xl sm:text-2xl font-bold">
            LearnNeural
          </GradientText>
          <div className="flex justify-center gap-4 mt-4">
            {[
              { href: "https://github.com/learnneural", icon: Github },
              { href: "https://instagram.com/learnneural", icon: Instagram },
              { href: "https://discord.gg/learnneural", icon: Discord }
            ].map((social, index) => (
              <motion.a
                key={social.href}
                href={social.href}
                className="text-violet-400 hover:text-violet-300 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;