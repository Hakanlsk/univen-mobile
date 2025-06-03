"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container } from "@/components";
import {
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    { icon: CodeBracketIcon, name: "React Native" },
    { icon: CommandLineIcon, name: "TypeScript" },
    { icon: CpuChipIcon, name: "Native APIs" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50" ref={ref} id="about">
      <Container>
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
            About Me
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Hi, I&apos;m John Doe, a mobile app developer specializing in
            creating fast, responsive, and intuitive applications. With
            expertise in React Native and native development, I focus on
            delivering exceptional user experiences through clean code and
            optimized performance.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-12">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <tech.icon className="h-8 w-8 text-gray-700 mb-3" />
                <span className="text-sm font-medium text-gray-900">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
