// File: app/_components/bento-features.tsx

"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const SkeletonOne = () => {
  const variants = { initial: { x: 0 }, animate: { x: 10, rotate: 5, transition: { duration: 0.2 } } };
  const variantsSecond = { initial: { x: 0 }, animate: { x: -10, rotate: -5, transition: { duration: 0.2 } } };
  return (
    <motion.div initial="initial" whileHover="animate" className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2" style={{ willChange: "transform" }}>
      <motion.div variants={variants} className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black">
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div variants={variantsSecond} className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black">
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const widths = useMemo(() => Array.from({ length: 5 }, () => Math.random() * (90 - 50) + 50), []);
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2">
      {widths.map((width, i) => (
        <div key={`skel-two-${i}`} style={{ width: `${width}%` }} className="bg-gray-200 dark:bg-neutral-800 h-4 rounded-full" />
      ))}
    </div>
  );
};

const SkeletonThree = () => (
    <div className="animated-gradient flex flex-1 w-full h-full min-h-[6rem] rounded-lg" />
);

const SkeletonFour = () => {
  const first = { initial: { x: 20, rotate: -5 }, hover: { x: 0, rotate: 0 } };
  const second = { initial: { x: -20, rotate: 5 }, hover: { x: 0, rotate: 0 } };
  return (
    <motion.div initial="initial" whileHover="hover" className="flex flex-1 w-full h-full min-h-[6rem] flex-row space-x-2" style={{ willChange: "transform" }}>
      <motion.div variants={first} className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image src="https://cdn-icons-png.flaticon.com/512/4151/4151320.png" alt="elderly-avatar" height="40" width="40" className="rounded-full" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">Guided Care</p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image src="https://cdn-icons-png.flaticon.com/512/4825/4825059.png" alt="professional-avatar" height="40" width="40" className="rounded-full" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">Time-Saving</p>
      </motion.div>
      <motion.div variants={second} className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png" alt="parent-avatar" height="40" width="40" className="rounded-full" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">24/7 Help</p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
    const variants = { initial: { x: 0 }, animate: { x: 10, rotate: 5, transition: { duration: 0.2 } } };
    const variantsSecond = { initial: { x: 0 }, animate: { x: -10, rotate: -5, transition: { duration: 0.2 } } };
    return (
        <motion.div initial="initial" whileHover="animate" className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2" style={{ willChange: "transform" }}>
            <motion.div variants={variants} className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start space-x-2 bg-white dark:bg-black">
                <Image src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png" alt="ai-doctor" height="40" width="40" className="rounded-full" />
                <p className="text-xs text-neutral-500">I’m your AI Medical Assistant. Please describe your symptoms...</p>
            </motion.div>
            <motion.div variants={variantsSecond} className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black">
                <p className="text-xs text-neutral-500">I’ve had a sore throat...</p>
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-green-500 shrink-0" />
            </motion.div>
        </motion.div>
    );
};

// This "export const" is the critical part that makes it a named export.
export const features = [
  {
    title: "Voice-Based Medical Consultation",
    description: "Talk to an AI Medical Voice Agent for instant health advice, 24/7.",
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Real-Time Symptom Tracking",
    description: "AI analyzes your spoken symptoms in real-time to provide accurate insights.",
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Smart Diagnosis Summary",
    description: "Automatically generated reports summarizing your conversation and condition.",
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI-Powered Treatment Suggestions",
    description: "Get personalized recommendations, medications, and next steps instantly.",
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Secure Medical Recordkeeping",
    description: "Every session is securely saved, making follow-ups and future care seamless.",
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];