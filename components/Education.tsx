"use client"

import { certifications, education } from "@/data/Education"
import { motion } from "framer-motion"


export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="grid grid-cols-1  gap-8">
          {education.map((educationItem, index) => (
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Formal Education</h3>
              <p className="text-xl mb-2">{educationItem.university}</p>
              <p className="text-lg text-gray-400 mb-2">{educationItem.degree}</p>
              <p className="text-gray-500">{educationItem.year}</p>
            </motion.div>
          ))
          }
          <div>
            <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
            <div className="grid grid-cols-2 gap-2">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="bg-gray-800 p-4 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="text-lg font-semibold mb-2">{cert.name}</h4>
                  <p className="text-gray-400">{cert.issuer}</p>
                  <p className="text-gray-500">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

