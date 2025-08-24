"use client";
import { certifications, education } from "@/data/Education";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Education & Credentials
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Academic background and professional certifications that shape my expertise
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {/* Formal Education Section */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Formal Education</h3>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {education.map((educationItem, index) => (
                <div
                  key={educationItem.university}
                  className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                >
                  {/* Decorative element */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                        {educationItem.university}
                      </h4>
                      <p className="text-xl text-gray-300 mb-3 font-medium">
                        {educationItem.degree}
                      </p>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{educationItem.year}</span>
                      </div>
                    </div>

                    {/* Graduation icon */}
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-blue-500/10 rounded-full border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors duration-300">
                        <GraduationCap className="w-8 h-8 text-blue-400" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Certifications Section */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Professional Certifications</h3>
              <div className="ml-auto">
                <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/20 text-nowrap flex items-center flex-nowrap">
                  {certifications.length} Certifications
                </span>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/5 rounded-full -translate-y-10 translate-x-10" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors duration-300">
                        <Award className="w-5 h-5 text-purple-400" />
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-200">
                      {cert.name}
                    </h4>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="font-medium">{cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span>{cert.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-600" />
            <span>Continuously learning and growing</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-600" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
