'use client';

import { ShinnyButton } from '@/components/common/shinny-cta-button';
import { MousePointer, MousePointer2, TextCursorIcon } from 'lucide-react';
import { motion, Variants } from 'motion/react';
import Image from 'next/image';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export function HeroSection() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="relative flex items-center justify-center pt-24 sm:pt-32 md:pt-44 lg:pt-44"
    >
      <div className="mx-auto px-4 md:px-10">
        <div className="flex flex-col items-center justify-center gap-y-12">
          <div className="relative mb-10 flex w-full flex-col items-center gap-y-3 lg:mb-0 lg:w-10/12">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.4,
                duration: 1.5,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className="absolute -top-40 right-0 h-[400px] w-1/2 rounded-full bg-gradient-to-br from-indigo-400/40 to-teal-400/40 opacity-20 blur-[170px]"
            />

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className="font-serif relative mb-4 text-center text-4xl font-bold leading-tight tracking-tighter text-gray-800 md:text-6xl lg:text-7xl"
            >
              Build, Plan, and Manage Your
              <span className="bg-gradient-to-tl from-indigo-500 to-teal-500 bg-clip-text text-transparent">
                {' '}
                Projects
              </span>{' '}
              with Ease
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.6,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className="font-sans-source relative mb-8 w-11/12 pl-3 text-center text-base font-semibold text-gray-500 sm:w-10/12 sm:text-lg md:w-4/5 md:text-xl"
            >
              Taskflow is an agile project management platform that helps teams
              collaborate, visualize work, and streamline complex projects.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.8,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className="relative flex flex-col space-y-3 pl-3 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
              <ShinnyButton
                href="/sign-up"
                className="h-12 bg-gradient-to-r from-indigo-600 to-teal-500 text-base font-semibold shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                Start For Free Today
              </ShinnyButton>
            </motion.div>
            <div className="mt-8 flex items-center space-x-4 pl-3">
              <motion.div
                variants={containerVariants}
                transition={{ delay: 1 }}
                className="flex -space-x-2"
              >
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    variants={itemVariants}
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-teal-200 to-indigo-200 text-xs font-medium transition-all duration-300 hover:cursor-pointer hover:from-gray-400 hover:to-teal-400 hover:text-white"
                  >
                    {i}
                  </motion.div>
                ))}
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.3,
                  ease: 'easeIn',
                }}
                viewport={{ once: true }}
                className="text-sm font-semibold text-gray-600"
              >
                <span className="font-bold">1,000+</span> teams already using
                Taskflow
              </motion.p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.2,
              ease: 'easeIn',
            }}
            viewport={{ once: true }}
            className="my-16 w-full rounded-lg shadow-2xl lg:w-10/12"
          >
            <div className="relative w-full rounded-lg bg-gradient-to-br from-indigo-50 to-teal-50 p-4 md:p-6 lg:p-8">
              <div className="rounded-lg bg-white p-4 shadow-lg md:p-6">
                <div className="mb-4 flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-full bg-red-400 shadow-md shadow-slate-500"></div>
                  <div className="mr-2 h-3 w-3 rounded-full bg-yellow-400 shadow-md shadow-slate-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400 shadow-md shadow-slate-500"></div>
                  <div className="ml-4 text-sm font-semibold tracking-wide text-teal-500">
                    Taskflow - Project Dashboard
                  </div>
                </div>
                <motion.div
                  initial={{ filter: 'blur(10px)' }}
                  whileInView={{ filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.6 }}
                  className="relative flex w-full justify-center"
                >
                  <span className="absolute -bottom-2 animate-pulse">
                    <MousePointer2 className="size-3 text-indigo-600 md:size-5" />
                  </span>
                  <Image
                    src={'/hero-showcase.png'}
                    alt="showcase"
                    width={800}
                    height={600}
                    unoptimized
                    quality={100}
                    className="h-auto w-full max-w-none rounded-md object-contain"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
