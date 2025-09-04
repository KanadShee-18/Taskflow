'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, FoldHorizontal, Speech, Users } from 'lucide-react';
import { DottedSeperator } from '@/components/dotted-seperator';
import { motion } from 'motion/react';

const roles = [
  {
    title: 'Project Owner',
    color: 'bg-indigo-50 border-indigo-200',
    permissions: [
      'Create and manage workspaces',
      'Add, edit, and delete projects',
      'Invite team members',
      'Assign member roles',
      'Configure project settings',
      'Manage billing and subscriptions',
      'Access all views and reports',
      'Set permissions for contributors',
    ],
  },
  {
    title: 'Project Contributor',
    color: 'bg-teal-50 border-teal-200',
    permissions: [
      'View assigned projects',
      'Create and edit tasks',
      'Comment and collaborate',
      'Track task progress',
      'Use all view modes',
      'Create personal dashboards',
      'Generate reports (if allowed)',
      'Receive notifications',
    ],
  },
];

export function RolesSection() {
  return (
    <section id="userRoles" className="relative bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-serif mb-4 bg-gradient-to-b from-indigo-400 to-slate-700 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
            User Roles & Collaboration
          </h2>
          <p className="font-sans-source mx-auto mb-8 max-w-lg text-sm font-semibold text-gray-500 sm:text-base md:text-lg">
            Taskflow offers flexible permissions to support different team
            structures and workflows.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={
                index === 0 ? { x: -100, opacity: 0 } : { x: 100, opacity: 0 }
              }
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
            >
              <Card
                className={`${role.color} cursor-pointer border-2 transition-all duration-300 hover:scale-105`}
              >
                <CardHeader>
                  <Badge
                    variant={index === 0 ? 'default' : 'secondary'}
                    className={`mb-2 w-fit ${
                      index === 0 ? 'bg-indigo-600' : 'bg-teal-600 text-white'
                    }`}
                  >
                    {role.title}
                  </Badge>
                  <CardTitle className="font-sans-mona flex items-center gap-3 text-2xl text-slate-700">
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
                          className={`mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full ${
                            index === 0
                              ? 'bg-indigo-100 text-indigo-600'
                              : 'bg-teal-100 text-teal-600'
                          }`}
                        >
                          <Check className="h-3 w-3" />
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
            ease: 'easeOut',
          }}
          className="mx-auto mt-16 max-w-4xl rounded-lg bg-white p-8 shadow-md"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <FoldHorizontal className="shadow-xs size-10 rounded-full bg-indigo-100 p-2 text-indigo-600 shadow-slate-900" />
            <h3 className="font-serif bg-gradient-to-tl from-indigo-500 to-teal-500 bg-clip-text text-center text-2xl font-semibold text-transparent md:text-3xl">
              Seamless Collaboration
            </h3>
          </div>
          <div className="mb-4 px-4">
            <DottedSeperator />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="font-sans-source mb-4 text-gray-600">
                Taskflow brings your team together with real-time updates,
                comments, and notifications. Stay in sync across timezones and
                departments.
              </p>
              <ul className="font-sans-mona space-y-2 font-medium">
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
                  <span>Real-time task updates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-teal-400"></div>
                  <span>Comment threads on tasks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
                  <span>Mentions for quick attention</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-indigo-50 to-teal-50 p-4">
              <div className="mb-3 rounded-lg bg-white p-3 shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 rounded-full bg-indigo-100"></div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div className="mb-1 h-4 w-24 rounded bg-gray-200"></div>
                      <div className="h-3 w-16 rounded bg-gray-100"></div>
                    </div>
                    <div className="mt-2 h-12 w-full rounded bg-gray-100"></div>
                  </div>
                </div>
              </div>
              <div className="ml-8 rounded-lg bg-white p-3 shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 rounded-full bg-teal-100"></div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div className="mb-1 h-4 w-24 rounded bg-gray-200"></div>
                      <div className="h-3 w-16 rounded bg-gray-100"></div>
                    </div>
                    <div className="mt-2 h-8 w-full rounded bg-gray-100"></div>
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
