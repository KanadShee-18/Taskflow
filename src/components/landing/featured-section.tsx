"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Kanban, Menu as MenuIcon } from "lucide-react";
import { motion, Variants } from "motion/react";

const features = [
  {
    title: "Table View",
    description:
      "Organize all your projects and tasks in a structured, hierarchical view for easy navigation.",
    icon: MenuIcon,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Kanban Board",
    description:
      "Visualize your workflow with customizable columns to track progress from start to completion.",
    icon: Kanban,
    color: "bg-teal-100 text-teal-600",
  },
  {
    title: "Calendar View",
    description:
      "Schedule and view your tasks on a dynamic calendar to manage deadlines and timeframes.",
    icon: Calendar,
    color: "bg-slate-100 text-slate-600",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const handVariants = {
  initial: { x: 0, y: 0, opacity: 1 },
  animate: {
    x: [0, 120, 120],
    y: [0, 0, 0],
    opacity: [1, 1, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-16 relative md:py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-serif text-transparent bg-gradient-to-b from-indigo-400 to-slate-700 bg-clip-text">
            Multiple Views, One Workflow
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-semibold font-sans-source">
            Taskflow adapts to your team&apos;s preferences with three powerful
            views to manage your projects efficiently.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 md:gap-4 gap-5"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              // viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-teal-50 p-4 rounded-lg lg:w-full max-w-[450px] mx-auto shadow-xs z-50"
            >
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div
                    className={`w-full rounded-lg flex flex-row gap-3 items-start mb-4`}
                  >
                    <div
                      className={`size-12 ${feature.color} flex items-center justify-center aspect-square rounded-full`}
                    >
                      <feature.icon className={"size-6"} />
                    </div>
                    <div className="flex flex-col gap-3">
                      <CardTitle className="text-teal-500">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-indigo-400 font-sans-mona tracking-wide font-medium">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-gray-100 rounded-lg overflow-hidden relative">
                    {feature.title === "Table View" && (
                      <div className="absolute inset-0 p-4">
                        <div className="space-y-3">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2"
                            >
                              <div className="w-4 h-4 rounded-sm bg-indigo-200"></div>
                              <div className="w-full h-6 bg-white rounded"></div>
                            </div>
                          ))}
                          <div className="ml-6 space-y-3 mt-4">
                            {[1, 2].map((i) => (
                              <div
                                key={i}
                                className="flex items-center space-x-2"
                              >
                                <div className="w-3 h-3 rounded-sm bg-teal-200"></div>
                                <div className="w-full h-5 bg-white rounded"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {feature.title === "Kanban Board" && (
                      <div className="absolute inset-0 p-4">
                        <div className="flex h-full space-x-3">
                          {["To Do", "In Progress", "Done"].map(
                            (column, colIndex) => (
                              <div
                                key={column}
                                className="flex-1 bg-white p-2 rounded shadow-sm"
                              >
                                <div className="w-full h-4 bg-gray-200 rounded mb-3"></div>
                                {[1, 2].map((i) => (
                                  <div
                                    key={i}
                                    className="w-full h-8 bg-gray-100 rounded mb-2"
                                  ></div>
                                ))}
                                {colIndex === 0 && (
                                  <motion.div
                                    initial="initial"
                                    animate="animate"
                                    variants={handVariants}
                                    className="absolute top-14 left-6 text-2xl"
                                  >
                                    👋
                                  </motion.div>
                                )}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                    {feature.title === "Calendar View" && (
                      <div className="absolute inset-0 p-4">
                        <div className="grid grid-cols-7 gap-1 h-full">
                          {Array.from({ length: 28 }).map((_, i) => (
                            <div
                              key={i}
                              className="bg-white rounded p-1 relative"
                            >
                              <div className="absolute top-1 left-1 text-[10px] text-gray-400">
                                {i + 1}
                              </div>
                              {i % 7 === 3 && (
                                <div className="absolute bottom-1 left-1 right-1 h-3 bg-teal-200 rounded-sm"></div>
                              )}
                              {i % 9 === 2 && (
                                <div className="absolute bottom-5 left-1 right-1 h-3 bg-indigo-200 rounded-sm"></div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
