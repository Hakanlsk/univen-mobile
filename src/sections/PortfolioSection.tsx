"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Container } from "@/components";

interface AppScreenshot {
  src: string;
  alt: string;
}

interface PortfolioItem {
  title: string;
  description: string;
  screenshots: AppScreenshot[];
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export const PortfolioSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const portfolioItems: PortfolioItem[] = [
    {
      title: "AI Video Generator",
      description:
        "A comprehensive AI video generation app with advanced features",
      screenshots: [
        {
          src: "./appAssests/clipsai/clips1.jpg",
          alt: "AI Video Generator Screenshot 1",
        },
        {
          src: "./appAssests/clipsai/clips2.jpg",
          alt: "AI Video Generator Screenshot 2",
        },
        {
          src: "./appAssests/clipsai/clips3.jpg",
          alt: "AI Video Generator Screenshot 3",
        },
        {
          src: "./appAssests/clipsai/clips4.jpg",
          alt: "AI Video Generator Screenshot 4",
        },
        {
          src: "./appAssests/clipsai/clips5.jpg",
          alt: "AI Video Generator Screenshot 5",
        },
        {
          src: "./appAssests/clipsai/clips6.jpg",
          alt: "AI Video Generator Screenshot 6",
        },
      ],
      appStoreUrl:
        "https://apps.apple.com/tr/app/ai-video-generator-coen-ai/id6497716649?l=en",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.univenn.videogen&hl=en",
    },
    {
      title: "Flux AI",
      description: "Create stunning AI-generated avatars and headshots",
      screenshots: [
        {
          src: "./appAssests/flux/flux1.jpg",
          alt: "Flux AI Screenshot 1",
        },
        {
          src: "./appAssests/flux/flux2.jpg",
          alt: "Flux AI Screenshot 2",
        },
        {
          src: "./appAssests/flux/flux3.jpg",
          alt: "Flux AI Screenshot 3",
        },
        {
          src: "./appAssests/flux/flux4.jpg",
          alt: "Flux AI Screenshot 4",
        },
        {
          src: "./appAssests/flux/flux5.jpg",
          alt: "Flux AI Screenshot 5",
        },
        {
          src: "./appAssests/flux/flux6.jpg",
          alt: "Flux AI Screenshot 6",
        },
      ],
      appStoreUrl:
        "https://apps.apple.com/tr/app/flux-ai-avatar-headshots/id6446228933?l=en",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=ai.photo.app&hl=en",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-900" ref={ref} id="portfolio">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Portfolio
          </h2>
          <p className="text-lg text-white/80">
            Check out some of my recent mobile app projects
          </p>
        </motion.div>

        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-20 last:mb-0"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-white/80 mb-4">{item.description}</p>
              <div className="flex gap-4 justify-center">
                {item.appStoreUrl && (
                  <a
                    href={item.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-500 hover:text-indigo-700 font-medium"
                  >
                    App Store →
                  </a>
                )}
                {item.playStoreUrl && (
                  <a
                    href={item.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-500 hover:text-indigo-700 font-medium"
                  >
                    Play Store →
                  </a>
                )}
              </div>
            </div>

            <div className="overflow-x-auto pb-6">
              <motion.div
                className="flex gap-6 min-w-min px-4"
                initial={{ x: -20, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
              >
                {item.screenshots.map((screenshot, screenshotIndex) => (
                  <motion.div
                    key={screenshot.alt}
                    className="relative w-[280px] h-[600px] flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={
                      inView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.95 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: screenshotIndex * 0.1 + index * 0.2,
                    }}
                  >
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-contain rounded-xl shadow-lg"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </Container>
    </section>
  );
};
