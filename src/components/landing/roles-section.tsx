"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, FoldHorizontal, Speech, Users } from "lucide-react";
import { DottedSeperator } from "@/components/dotted-seperator";
import { motion } from "motion/react";

const roles = [
  {
    title: "Project Owner",
    color: "bg-indigo-50 border-indigo-200",
    permissions: [
      "Create and manage workspaces",
      "Add, edit, and delete projects",
      "Invite team members",
      "Assign member roles",
      "Configure project settings",
      "Manage billing and subscriptions",
      "Access all views and reports",
      "Set permissions for contributors",
    ],
  },
  {
    title: "Project Contributor",
    color: "bg-teal-50 border-teal-200",
    permissions: [
      "View assigned projects",
      "Create and edit tasks",
      "Comment and collaborate",
      "Track task progress",
      "Use all view modes",
      "Create personal dashboards",
      "Generate reports (if allowed)",
      "Receive notifications",
    ],
  },
];

export function RolesSection() {
  return (
    <section id="userRoles" className="py-16 md:py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-serif text-transparent bg-gradient-to-b from-indigo-400 to-slate-700 bg-clip-text">
            User Roles & Collaboration
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-sans-source text-gray-500 mb-8 max-w-lg font-semibold mx-auto">
            Taskflow offers flexible permissions to support different team
            structures and workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={
                index === 0 ? { x: -100, opacity: 0 } : { x: 100, opacity: 0 }
              }
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <Card
                className={`${role.color} border-2 transition-all hover:scale-105 duration-300 cursor-pointer`}
              >
                <CardHeader>
                  <Badge
                    variant={index === 0 ? "default" : "secondary"}
                    className={`mb-2 w-fit ${
                      index === 0 ? "bg-indigo-600" : "bg-teal-600 text-white"
                    }`}
                  >
                    {role.title}
                  </Badge>
                  <CardTitle className="text-2xl flex items-center gap-3 font-sans-mona text-slate-700">
                    {index === 0 ? (
                      <>
                        <Speech />
                      </>
                    ) : (
                      <>
                        <Users />
                      </>
                    )}
                    {role.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {role.permissions.map((permission, idx) => (
                      <li key={idx} className="flex items-start">
                        <div
                          className={`mt-1 mr-3 w-5 h-5 rounded-full flex items-center justify-center ${
                            index === 0
                              ? "bg-indigo-100 text-indigo-600"
                              : "bg-teal-100 text-teal-600"
                          }`}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="font-delius font-medium">
                          {permission}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="mt-16 max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <FoldHorizontal className="bg-indigo-100 p-2 size-10 rounded-full text-indigo-600 shadow-xs shadow-slate-900" />
            <h3 className="text-2xl md:text-3xl font-semibold text-center font-serif bg-gradient-to-tl from-indigo-500 to-teal-500 text-transparent bg-clip-text">
              Seamless Collaboration
            </h3>
          </div>
          <div className="px-4 mb-4">
            <DottedSeperator />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4 font-sans-source">
                Taskflow brings your team together with real-time updates,
                comments, and notifications. Stay in sync across timezones and
                departments.
              </p>
              <ul className="space-y-2 font-sans-mona font-medium">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                  <span>Real-time task updates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                  <span>Comment threads on tasks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                  <span>Mentions for quick attention</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-teal-50 rounded-lg p-4">
              <div className="bg-white rounded-lg p-3 shadow-sm mb-3">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100"></div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div className="w-24 h-4 bg-gray-200 rounded mb-1"></div>
                      <div className="w-16 h-3 bg-gray-100 rounded"></div>
                    </div>
                    <div className="w-full h-12 bg-gray-100 rounded mt-2"></div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm ml-8">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-teal-100"></div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div className="w-24 h-4 bg-gray-200 rounded mb-1"></div>
                      <div className="w-16 h-3 bg-gray-100 rounded"></div>
                    </div>
                    <div className="w-full h-8 bg-gray-100 rounded mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
