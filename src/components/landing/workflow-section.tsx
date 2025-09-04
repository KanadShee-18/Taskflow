"use client";

import { Check, PackageCheck } from "lucide-react";
import { motion, Variants } from "motion/react";
import { DottedSeperator } from "@/components/dotted-seperator";

const steps = [
  {
    title: "Create Workspace",
    description:
      "Set up a dedicated space for your team and organize all your projects in one place.",
  },
  {
    title: "Create Project",
    description:
      "Define project parameters, set goals, and establish your team structure.",
  },
  {
    title: "Build Ideas",
    description:
      "Brainstorm with your team, collect feedback, and capture all your ideas in one place.",
  },
  {
    title: "Make Plan",
    description:
      "Break down projects into manageable tasks and set clear timelines.",
  },
  {
    title: "Invite Collaborators",
    description:
      "Bring in team members, assign roles, and start collaborating in real time.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export function WorkflowSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute w-1/2 h-[400px] bg-teal-400 rounded-full blur-[140px] opacity-40 right-0 -top-40" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 mb-4 font-serif relative">
            How{" "}
            <span className="bg-gradient-to-tl from-indigo-500 to-teal-500 text-transparent bg-clip-text">
              {" "}
              TaskFlow
            </span>{" "}
            Works
          </h2>
          <p className="text-lg font-sans-source text-gray-500 mb-8 max-w-lg font-semibold mx-auto">
            Get started with Taskflow in just a few simple steps and transform
            how your team manages projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                filter: "blur(10px)",
                y: 30,
                scale: 0.98,
              }}
              whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative grid md:place-items-center place-items-start"
            >
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-10 h-10 aspect-square rounded-full flex items-center justify-center z-10 ${
                      index === steps.length - 1
                        ? "bg-teal-100 text-indigo-600 shadow-xs shadow-slate-900"
                        : "bg-indigo-100 text-teal-500 shadow-xs shadow-slate-900"
                    }`}
                  >
                    {index === steps.length - 1 ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <PackageCheck className="w-5 h-5" />
                    )}
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full py-3">
                      <DottedSeperator direction="vertical" />
                    </div>
                  )}
                </div>
                <div className="pb-12">
                  <h3 className="text-xl font-semibold mb-2 text-indigo-500 font-sans-mona">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 mb-6 font-delius font-semibold">
                    {step.description}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-100 p-4 rounded-lg"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 md:w-[200px] rounded shadow-sm">
                        {index === 0 && (
                          <div className="space-y-2">
                            <div className="w-1/2 h-5 bg-indigo-100 rounded"></div>
                            <div className="w-2/3 h-3 bg-gray-100 rounded"></div>
                            <div className="w-3/4 h-3 bg-gray-100 rounded"></div>
                          </div>
                        )}
                        {index === 1 && (
                          <div className="space-y-2">
                            <div className="w-1/2 h-5 bg-teal-100 rounded"></div>
                            <div className="grid grid-cols-2 gap-2 mt-3">
                              <div className="h-8 bg-gray-100 rounded"></div>
                              <div className="h-8 bg-gray-100 rounded"></div>
                            </div>
                          </div>
                        )}
                        {index === 2 && (
                          <div className="space-y-3">
                            {[1, 2, 3].map((i) => (
                              <div
                                key={i}
                                className="flex items-center space-x-2"
                              >
                                <div className="w-3 h-3 rounded-full bg-indigo-200"></div>
                                <div className="w-full h-3 bg-gray-100 rounded"></div>
                              </div>
                            ))}
                          </div>
                        )}
                        {index === 3 && (
                          <div>
                            <div className="mb-3 h-4 w-1/3 bg-gray-200 rounded"></div>
                            <div className="flex space-x-2">
                              <div className="w-1/3 h-14 bg-indigo-100 rounded p-1">
                                <div className="w-full h-2 bg-gray-200 rounded mb-1"></div>
                                <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                              </div>
                              <div className="w-1/3 h-14 bg-teal-100 rounded p-1">
                                <div className="w-full h-2 bg-gray-200 rounded mb-1"></div>
                                <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                              </div>
                              <div className="w-1/3 h-14 bg-gray-100 rounded p-1">
                                <div className="w-full h-2 bg-gray-200 rounded mb-1"></div>
                                <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                              </div>
                            </div>
                          </div>
                        )}
                        {index === 4 && (
                          <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 rounded-full bg-indigo-100"></div>
                              <div className="flex-1">
                                <div className="w-1/3 h-3 bg-gray-100 rounded mb-1"></div>
                                <div className="w-1/2 h-2 bg-gray-100 rounded"></div>
                              </div>
                              <div className="w-16 h-6 bg-teal-100 rounded"></div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 rounded-full bg-teal-100"></div>
                              <div className="flex-1">
                                <div className="w-1/3 h-3 bg-gray-100 rounded mb-1"></div>
                                <div className="w-1/2 h-2 bg-gray-100 rounded"></div>
                              </div>
                              <div className="w-16 h-6 bg-indigo-100 rounded"></div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="hidden md:block">
                        <div className="h-full w-full bg-gradient-to-br from-indigo-50 to-teal-50 rounded flex items-center justify-center md:w-[300px]">
                          <div
                            className={`w-16 h-16 ${
                              index % 2 === 0
                                ? "text-indigo-500"
                                : "text-teal-500"
                            }`}
                          >
                            {index === 0 && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <rect
                                  x="3"
                                  y="3"
                                  width="18"
                                  height="18"
                                  rx="2"
                                  ry="2"
                                ></rect>
                                <path d="M3 9h18"></path>
                              </svg>
                            )}
                            {index === 1 && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                                <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                              </svg>
                            )}
                            {index === 2 && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                              </svg>
                            )}
                            {index === 3 && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <line x1="8" y1="6" x2="21" y2="6"></line>
                                <line x1="8" y1="12" x2="21" y2="12"></line>
                                <line x1="8" y1="18" x2="21" y2="18"></line>
                                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                <line x1="3" y1="18" x2="3.01" y2="18"></line>
                              </svg>
                            )}
                            {index === 4 && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
