"use client";
import  BentoGrid  from "./_components/FeatureBentoGrid";
import { motion } from "motion/react";
import Link from "next/link";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export default function HeroSectionOne() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative flex flex-col items-center justify-center">
        <Navbar />
        <div className="absolute inset-y-0 left-0 h-full w-px bg-slate-700/50">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
        </div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-slate-700/50">
          <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-slate-700/50">
          <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </div>
        <div className="px-4 py-10 md:py-20">
          <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl">
            {"Transform Healthcare with AI Medical Voice Agents"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </h1>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.8,
            }}
            className="relative z-10 py-4 text-center text-lg font-normal text-gray-300"
          >
            Deliver instant, accurate medical assistance through natural voice
            conversations. Automate appointment scheduling, symptom triage, and
            follow-up care - 24/7
          </motion.p>
          <Link href={'/sign-in'}>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <button className="w-60 transform rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
              Get Started
            </button>
          
          </motion.div>
          </Link>
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 1.2,
            }}
            className="relative z-10 mt-20 rounded-3xl border border-slate-600 bg-slate-800/50 p-4 shadow-lg backdrop-blur-sm"
          >
            {/*<div className="w-full overflow-hidden rounded-xl border border-slate-600">
              <img
                src="https://assets.aceternity.com/pro/aceternity-landing.webp"
                alt="Landing page preview"
                className="aspect-[16/9] h-auto w-full object-cover"
                height={1000}
                width={1000}
              />
            </div>*/}
          </motion.div>
        </div>
        <BentoGrid />
      </div>
      <Footer />
    </div>
  );
}


