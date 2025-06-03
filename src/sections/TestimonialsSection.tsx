"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container } from "@/components";

export const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      text: "Working with John was an absolute pleasure. His attention to detail and technical expertise resulted in an app that exceeded our expectations.",
      author: "Sarah Wilson",
      role: "CEO, TechStart Inc.",
    },
    {
      text: "The app's performance and user experience are outstanding. John's ability to translate our vision into reality was impressive.",
      author: "Michael Chen",
      role: "Product Manager, InnovateCo",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50" ref={ref} id="testimonials">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4 tracking-tight">
            Testimonials
          </h2>
          <p className="text-lg text-indigo-500">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <p className="text-indigo-500 italic mb-4">{testimonial.text}</p>
              <div>
                <p className="font-medium text-indigo-700">
                  {testimonial.author}
                </p>
                <p className="text-sm text-indigo-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
