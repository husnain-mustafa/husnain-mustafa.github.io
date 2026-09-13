"use client";
import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, Sparkles } from 'lucide-react';

export function HeroMinimalistEditorial() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden bg-stone-50">
      {/* Warm paper texture (subtle dot grain via radial gradient) */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '8px 8px',
        }}
      />
      
      {/* Subtle warm gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-transparent to-rose-50/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow - minimal */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100/80 border border-stone-200 text-stone-600 text-xs font-medium mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Analytics Engineer — Pipeline Bundles</span>
            <span className="text-stone-300">•</span>
            <span className="flex items-center gap-1 text-stone-500">
              <MapPin className="w-3 h-3 text-amber-600" /> Warsaw, PL
            </span>
          </motion.div>

          {/* Main Headline - Editorial typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-stone-950 leading-[1.02] mb-8"
          >
            Building <span className="font-medium">data pipeline bundles</span><br />
            <span className="font-normal text-stone-600 text-3xl md:text-4xl lg:text-5xl block mt-4">for analytics engineering</span>
          </motion.h1>

          {/* Subtext - generous measure, warm tone */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 font-normal leading-[1.7] max-w-2xl mx-auto mb-14 tracking-wide"
          >
            Former BI Analyst turned Analytics Engineer. I design modular, version-controlled pipeline systems — extract, transform, load, serve — deployed across EMEA.
          </motion.p>

          {/* CTAs - understated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-stone-950 text-stone-50 text-sm font-medium tracking-wide hover:bg-stone-800 transition-colors"
            >
              View Selected Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-transparent border border-stone-300 text-stone-700 text-sm font-medium tracking-wide hover:bg-stone-100 hover:border-stone-400 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Pipeline Visualization - Flat Bento Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { 
                label: 'Extract', 
                desc: 'Source systems, APIs, CDC', 
                tools: ['Airbyte', 'Fivetran', 'Custom'],
                color: 'bg-emerald-50 border-emerald-200',
                accent: 'text-emerald-700',
                iconColor: 'bg-emerald-100 text-emerald-700'
              },
              { 
                label: 'Transform', 
                desc: 'Modular dbt / SQLMesh models', 
                tools: ['dbt Core', 'SQLMesh', 'DuckDB'],
                color: 'bg-amber-50 border-amber-200',
                accent: 'text-amber-700',
                iconColor: 'bg-amber-100 text-amber-700'
              },
              { 
                label: 'Load', 
                desc: 'Warehouse & lakehouse targets', 
                tools: ['Snowflake', 'BigQuery', 'ClickHouse'],
                color: 'bg-blue-50 border-blue-200',
                accent: 'text-blue-700',
                iconColor: 'bg-blue-100 text-blue-700'
              },
              { 
                label: 'Serve', 
                desc: 'BI, APIs, ML features', 
                tools: ['Looker', 'Evidence', 'GraphQL'],
                color: 'bg-rose-50 border-rose-200',
                accent: 'text-rose-700',
                iconColor: 'bg-rose-100 text-rose-700'
              },
            ].map((stage, i) => (
              <motion.article
                key={stage.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                className={`${stage.color} border rounded-2xl p-6 text-left hover:border-current/50 hover:shadow-lg transition-all duration-300 group`}
                whileHover={{ y: -4 }}
              >
                {/* Stage header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className={`${stage.iconColor} rounded-xl p-3 flex-shrink-0 group-hover:scale-105 transition-transform`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-stone-950 text-sm tracking-wide uppercase">{stage.label}</h3>
                    <div className="w-10 h-0.5 bg-current opacity-30 mt-1.5 rounded-full group-hover:w-16 transition-all" />
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-stone-600 text-sm leading-relaxed mb-4">{stage.desc}</p>
                
                {/* Tools */}
                <div className="flex flex-wrap gap-1.5">
                  {stage.tools.map((tool, idx) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.08 + idx * 0.04 }}
                      className="px-2.5 py-1 text-xs font-medium bg-stone-100/80 border border-stone-200 text-stone-700 rounded-full hover:bg-stone-200 hover:border-stone-300 transition-colors"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Metrics row - subtle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-16 pt-10 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <MinimalMetric label="Pipelines in Production" value="12" />
            <MinimalMetric label="dbt Models" value="200+" />
            <MinimalMetric label="Daily Executions" value="500+" />
            <MinimalMetric label="End-to-End SLA" value="< 15 min" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MinimalMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-left">
      <div className="text-3xl md:text-4xl font-light text-stone-950 tracking-tight tabular-nums">{value}</div>
      <div className="text-sm text-stone-500 mt-1 tracking-wide uppercase">{label}</div>
    </div>
  );
}