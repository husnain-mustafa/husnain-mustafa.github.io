"use client";
import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

const education = [
  {
    degree: "MA Data Science & Business Analytics",
    institution: "University of Warsaw",
    year: "2024",
    location: "Warsaw, Poland",
    description: "Master's thesis focused on applying an advanced NLP pipeline to two decades of International Monetary Fund (IMF) communiques using topic modelling, sentiment analysis, and thematic trend detection.",
    highlight: "Master's Thesis: NLP on IMF Communiques"
  },
  {
    degree: "BS Electrical Engineering",
    institution: "Lahore University of Management Sciences (LUMS)",
    year: "2021",
    location: "Lahore, Pakistan",
    description: "Rigorous engineering curriculum with quantitative feasibility modeling for hybrid renewable energy systems and comparative machine learning studies for speaker/gender recognition from audio data.",
    highlight: "Quantitative Feasibility Index & ML Research"
  }
];

export function Education() {
  return (
    <section id="education" className="py-28 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" /> Academic Foundation
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Education &amp; Credentials
          </h2>
          <p className="text-zinc-400 text-base">
            Rigorous quantitative training combining electrical engineering principles with advanced data science and machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-800 text-zinc-300">
                    {edu.year}
                  </span>
                </div>

                <span className="text-xs font-semibold text-indigo-400 block mb-1">{edu.institution} • {edu.location}</span>
                <h3 className="text-xl font-bold text-white tracking-tight mb-4">{edu.degree}</h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {edu.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-medium text-emerald-400">
                <Award className="w-4 h-4" />
                <span>{edu.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
