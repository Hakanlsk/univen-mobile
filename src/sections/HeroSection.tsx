"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Button, Container } from "@/components";

export const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-black py-16 sm:py-20"
      ref={ref}
    >
      <Container>
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Crafting Next-Gen Mobile Experiences
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8">
            Transforming ideas into beautiful, high-performance mobile
            applications that users love.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get in Touch
            </Button>
            <Button variant="secondary">View Portfolio</Button>
          </div>
        </motion.div>

        <motion.div
          className="relative mt-16 flex justify-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative w-[320px] h-[650px] transform -rotate-12 translate-x-16">
            <motion.div
              className="absolute inset-0 rounded-[40px] bg-black shadow-2xl overflow-hidden border-[14px] border-gray-950"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Image
                src="/appAssests/clipsai/clips1.jpg"
                alt="App Screenshot 1"
                fill
                className="object-cover rounded-2xl brightness-110"
                priority
              />
            </motion.div>
          </div>

          <div className="relative w-[320px] h-[650px] transform rotate-12 -translate-x-16">
            <motion.div
              className="absolute inset-0 rounded-[40px] bg-black shadow-2xl overflow-hidden border-[14px] border-gray-950"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Image
                src="/appAssests/flux/flux1.jpg"
                alt="App Screenshot 2"
                fill
                className="object-cover rounded-2xl brightness-110"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-black" />
    </section>
  );
};
