'use client';

import { Button } from '@/components/ui/button';
import { CheckCheck, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'next-view-transitions';

export function CtaSection() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-teal-500 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-12">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Ready to Transform Your Workflow?
              </h2>
              <p className="mb-8 font-delius font-semibold tracking-wider text-indigo-100">
                Join thousands of teams that use Taskflow to streamline their
                projects and boost productivity.
              </p>
              <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                <Button
                  variant={'secondary'}
                  className="group font-semibold text-slate-700"
                >
                  <Link href={'/sign-up'}>Get Started Free</Link>
                  <ChevronRight className="transition-all duration-300 group-hover:translate-x-2" />
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="flex h-full items-center justify-center p-8">
                <div className="max-w-md cursor-pointer rounded-lg bg-white/90 p-7 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105">
                  <div className="mb-6 flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        No Credit Card Required
                      </h3>
                      <p className="text-sm text-gray-600">
                        Free plan available to get started
                      </p>
                    </div>
                  </div>
                  <ul className="mb-6 space-y-3 text-sm">
                    <li className="flex items-center gap-2 text-teal-600">
                      <CheckCheck className="shadow-xs size-6 rounded-full bg-slate-100 p-1 shadow-slate-600" />
                      <span>Unlimited personal projects</span>
                    </li>
                    <li className="flex items-center gap-2 text-teal-600">
                      <CheckCheck className="shadow-xs size-6 rounded-full bg-slate-100 p-1 shadow-slate-600" />
                      <span>All core features included</span>
                    </li>
                    <li className="flex items-center gap-2 text-teal-600">
                      <CheckCheck className="shadow-xs size-6 rounded-full bg-slate-100 p-1 shadow-slate-600" />
                      <span>Unlimited team members</span>
                    </li>
                    <li className="flex items-center gap-2 text-teal-600">
                      <CheckCheck className="shadow-xs size-6 rounded-full bg-slate-100 p-1 shadow-slate-600" />
                      <span>Community support</span>
                    </li>
                  </ul>
                  <Button className="group w-full font-semibold">
                    <Link href={'/sign-up'}>Sign Up Now</Link>
                    <ChevronRight className="transition-all duration-300 group-hover:translate-x-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
