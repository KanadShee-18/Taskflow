"use client";

import { Button } from "@/components/ui/button";
import { CheckCheck, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-500 to-teal-500 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Workflow?
              </h2>
              <p className="text-indigo-100 mb-8 font-delius font-semibold tracking-wider">
                Join thousands of teams that use Taskflow to streamline their
                projects and boost productivity.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
                <Button
                  variant={"secondary"}
                  className="text-slate-700 font-semibold group"
                >
                  <Link href={"/sign-up"}>Get Started Free</Link>
                  <ChevronRight className="group-hover:translate-x-2 duration-300 transition-all" />
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="h-full flex items-center justify-center p-8">
                <div className="bg-white/90 rounded-lg shadow-lg p-7 backdrop-blur-sm max-w-md hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 mr-4">
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
                  <ul className="space-y-3 mb-6 text-sm">
                    <li className="flex items-center gap-2 text-teal-600">
                      <CheckCheck className="size-6 bg-slate-100 p-1 rounded-full shadow-xs shadow-slate-600" />
                      <span>Unlimited personal projects</span>
                    </li>
                    <li className="flex items-center gap-2 text-teal-600">
                      <CheckCheck className="size-6 bg-slate-100 p-1 rounded-full shadow-xs shadow-slate-600" />
                      <span>All core features included</span>
                    </li>
                    <li className="flex items-center gap-2 text-teal-600">
                      <CheckCheck className="size-6 bg-slate-100 p-1 rounded-full shadow-xs shadow-slate-600" />
                      <span>Unlimited team members</span>
                    </li>
                    <li className="flex items-center gap-2 text-teal-600">
                      <CheckCheck className="size-6 bg-slate-100 p-1 rounded-full shadow-xs shadow-slate-600" />
                      <span>Community support</span>
                    </li>
                  </ul>
                  <Button className=" font-semibold group w-full ">
                    <Link href={"/sign-up"}>Sign Up Now</Link>
                    <ChevronRight className="group-hover:translate-x-2 duration-300 transition-all" />
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
