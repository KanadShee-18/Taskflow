"use client";

import { ShinnyButton } from "@/components/common/shinny-cta-button";
import { MousePointer, MousePointer2, TextCursorIcon } from "lucide-react";
import { motion, Variants } from "motion/react";
import Image from "next/image";

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
      ease: "easeOut",
    },
  },
};

export function HeroSection() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="pt-24 sm:pt-32 md:pt-44 lg:pt-44 flex items-center justify-center relative"
    >
      <div className="mx-auto px-4 md:px-10">
        <div className="flex flex-col items-center gap-y-12 justify-center">
          <div className="w-full lg:w-10/12 mb-10 lg:mb-0 relative flex flex-col items-center gap-y-3">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.4,
                duration: 1.5,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="absolute w-1/2 h-[400px] bg-gradient-to-br from-indigo-400/40 to-teal-400/40 rounded-full blur-[170px] opacity-20 right-0 -top-40"
            />

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-800 mb-4 font-serif relative text-center tracking-tighter"
            >
              Build, Plan, and Manage Your
              <span className="bg-gradient-to-tl from-indigo-500 to-teal-500 text-transparent bg-clip-text">
                {" "}
                Projects
              </span>{" "}
              with Ease
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl font-sans-source text-gray-500 mb-8 md:w-4/5 w-11/12 sm:w-10/12 font-semibold pl-3 relative text-center"
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
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pl-3 relative"
            >
              <ShinnyButton
                href="/sign-up"
                className="h-12 text-base shadow-lg font-semibold transition-shadow duration-300 hover:shadow-xl bg-gradient-to-r from-indigo-600 to-teal-500"
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
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-200 to-indigo-200 border-2 border-white flex items-center justify-center text-xs font-medium transition-all duration-300 hover:from-gray-400 hover:to-teal-400 hover:cursor-pointer hover:text-white"
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
                  ease: "easeIn",
                }}
                viewport={{ once: true }}
                className="text-sm text-gray-600 font-semibold"
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
              ease: "easeIn",
            }}
            viewport={{ once: true }}
            className="w-full lg:w-10/12 rounded-lg shadow-2xl my-16"
          >
            <div className="relative w-full bg-gradient-to-br from-indigo-50 to-teal-50 rounded-lg p-4 md:p-6 lg:p-8">
              <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400 mr-2 shadow-md shadow-slate-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2 shadow-md shadow-slate-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 shadow-md shadow-slate-500"></div>
                  <div className="ml-4 text-sm text-teal-500 font-semibold tracking-wide">
                    Taskflow - Project Dashboard
                  </div>
                </div>
                <motion.div
                  initial={{ filter: "blur(10px)" }}
                  whileInView={{ filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.6 }}
                  className="w-full flex justify-center relative"
                >
                  <span className="absolute -bottom-2 animate-pulse">
                    <MousePointer2 className="text-indigo-600 size-3 md:size-5" />
                  </span>
                  <Image
                    src={"/hero-showcase.png"}
                    alt="showcase"
                    width={800}
                    height={600}
                    unoptimized
                    quality={100}
                    className="w-full max-w-none h-auto object-contain rounded-md"
                    style={{ maxWidth: "100%", height: "auto" }}
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
