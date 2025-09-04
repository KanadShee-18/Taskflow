'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar, Kanban, Menu as MenuIcon } from 'lucide-react';
import { motion, Variants } from 'motion/react';

const features = [
  {
    title: 'Table View',
    description:
      'Organize all your projects and tasks in a structured, hierarchical view for easy navigation.',
    icon: MenuIcon,
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    title: 'Kanban Board',
    description:
      'Visualize your workflow with customizable columns to track progress from start to completion.',
    icon: Kanban,
    color: 'bg-teal-100 text-teal-600',
  },
  {
    title: 'Calendar View',
    description:
      'Schedule and view your tasks on a dynamic calendar to manage deadlines and timeframes.',
    icon: Calendar,
    color: 'bg-slate-100 text-slate-600',
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
      ease: 'easeOut',
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
      className="relative bg-gradient-to-b from-white to-slate-50 py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif mb-4 bg-gradient-to-b from-indigo-400 to-slate-700 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
            Multiple Views, One Workflow
          </h2>
          <p className="font-sans-source mx-auto max-w-2xl text-sm font-semibold text-gray-500 sm:text-base md:text-lg">
            Taskflow adapts to your team&apos;s preferences with three powerful
            views to manage your projects efficiently.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-5 md:gap-4 lg:grid-cols-3 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              // viewport={{ once: true }}
              className="shadow-xs z-50 mx-auto max-w-[450px] rounded-lg bg-gradient-to-br from-indigo-50 to-teal-50 p-4 lg:w-full"
            >
              <Card className="border border-gray-200 transition-shadow duration-300 hover:shadow-lg">
                <CardHeader>
                  <div
                    className={`mb-4 flex w-full flex-row items-start gap-3 rounded-lg`}
                  >
                    <div
                      className={`size-12 ${feature.color} flex aspect-square items-center justify-center rounded-full`}
                    >
                      <feature.icon className={'size-6'} />
                    </div>
                    <div className="flex flex-col gap-3">
                      <CardTitle className="text-teal-500">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="font-sans-mona font-medium tracking-wide text-indigo-400">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 overflow-hidden rounded-lg bg-gray-100">
                    {feature.title === 'Table View' && (
                      <div className="absolute inset-0 p-4">
                        <div className="space-y-3">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2"
                            >
                              <div className="h-4 w-4 rounded-sm bg-indigo-200"></div>
                              <div className="h-6 w-full rounded bg-white"></div>
                            </div>
                          ))}
                          <div className="ml-6 mt-4 space-y-3">
                            {[1, 2].map((i) => (
                              <div
                                key={i}
                                className="flex items-center space-x-2"
                              >
                                <div className="h-3 w-3 rounded-sm bg-teal-200"></div>
                                <div className="h-5 w-full rounded bg-white"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {feature.title === 'Kanban Board' && (
                      <div className="absolute inset-0 p-4">
                        <div className="flex h-full space-x-3">
                          {['To Do', 'In Progress', 'Done'].map(
                            (column, colIndex) => (
                              <div
                                key={column}
                                className="flex-1 rounded bg-white p-2 shadow-sm"
                              >
                                <div className="mb-3 h-4 w-full rounded bg-gray-200"></div>
                                {[1, 2].map((i) => (
                                  <div
                                    key={i}
                                    className="mb-2 h-8 w-full rounded bg-gray-100"
                                  ></div>
                                ))}
                                {colIndex === 0 && (
                                  <motion.div
                                    initial="initial"
                                    animate="animate"
                                    variants={handVariants}
                                    className="absolute left-6 top-14 text-2xl"
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

                    {feature.title === 'Calendar View' && (
                      <div className="absolute inset-0 p-4">
                        <div className="grid h-full grid-cols-7 gap-1">
                          {Array.from({ length: 28 }).map((_, i) => (
                            <div
                              key={i}
                              className="relative rounded bg-white p-1"
                            >
                              <div className="absolute left-1 top-1 text-[10px] text-gray-400">
                                {i + 1}
                              </div>
                              {i % 7 === 3 && (
                                <div className="absolute bottom-1 left-1 right-1 h-3 rounded-sm bg-teal-200"></div>
                              )}
                              {i % 9 === 2 && (
                                <div className="absolute bottom-5 left-1 right-1 h-3 rounded-sm bg-indigo-200"></div>
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
