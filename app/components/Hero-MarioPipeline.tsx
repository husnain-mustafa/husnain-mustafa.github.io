"use client";
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, ChevronRight, ChevronDown, Database, GitBranch, ArrowUpRight, Sparkles } from 'lucide-react';

const pipelineStages = [
  { id: 'extract', label: 'EXTRACT', icon: Database, color: 'from-emerald-500 to-teal-400', desc: 'Source systems, APIs, logs', tech: 'Airbyte, Fivetran, Custom' },
  { id: 'transform', label: 'TRANSFORM', icon: GitBranch, color: 'from-amber-500 to-orange-400', desc: 'dbt models, SQL, Python', tech: 'dbt Core, SQLMesh, DuckDB' },
  { id: 'load', label: 'LOAD', icon: ArrowUpRight, color: 'from-indigo-500 to-blue-400', desc: 'Warehouse, Lakehouse, Real-time', tech: 'Snowflake, BigQuery, ClickHouse' },
  { id: 'serve', label: 'SERVE', icon: Sparkles, color: 'from-rose-500 to-pink-400', desc: 'BI, APIs, ML features, Alerts', tech: 'Looker, Evidence, GraphQL' },
];

export function HeroMarioPipeline() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Atmospheric background - Mario pipe green gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      </div>

      {/* Floating pipe decorations */}
      <div className="absolute top-20 left-10 w-16 h-40 bg-gradient-to-b from-green-700 to-green-900 rounded-t-2xl border-2 border-green-600/50 opacity-30 animate-bob" />
      <div className="absolute bottom-20 right-10 w-16 h-40 bg-gradient-to-t from-green-700 to-green-900 rounded-b-2xl border-2 border-green-600/50 opacity-30 animate-bob delay-500" />
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-green-800 border-2 border-green-500/50 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-1/2 right-5 w-8 h-8 bg-emerald-700 border-2 border-emerald-500/50 rounded-full opacity-15 animate-pulse delay-300" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-green-600/30 text-zinc-300 text-xs md:text-sm font-medium mb-6 shadow-xl backdrop-blur"
        >
          <Sparkles className="w-4 h-4 text-emerald-400 animate-spin-slow" />
          <span>BI Analyst → Analytics Engineer</span>
          <span className="text-zinc-600">|</span>
          <span className="flex items-center gap-1.5 text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Warsaw, Poland (EU Work Auth)
          </span>
        </motion.div>

        {/* Main Headline - Mario-style */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-6 relative"
        >
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-teal-300">data pipeline bundles</span>{' '}
          <span className="font-mono text-emerald-400 text-3xl md:text-4xl lg:text-5xl block mt-2">{'|> PIPELINE ENGINEERING'}</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto mb-10"
        >
          From BI dashboards to production-grade analytics engineering. Orchestrating modular, version-controlled pipeline bundles across EMEA — extract, transform, load, serve.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-zinc-950 font-semibold text-base hover:from-green-500 hover:to-emerald-500 transition-all shadow-xl shadow-green-500/20 group"
          >
            Explore Pipeline Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-zinc-900 border border-green-600/30 text-emerald-300 font-semibold text-base hover:bg-zinc-800 hover:text-green-200 hover:border-green-500 transition-all"
          >
            Let's Connect
          </a>
        </motion.div>

        {/* Mario-style Pipeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          {/* Pipeline Tubes */}
          <div className="relative overflow-hidden">
            {/* Background tube track */}
            <div className="absolute top-1/2 left-0 right-0 h-4 -translate-y-1/2 bg-gradient-to-r from-green-900/50 via-green-800/30 to-green-900/50 rounded-full border border-green-700/30" />
            
            {/* Animated flow particles */}
            <div className="absolute top-1/2 left-0 right-0 h-4 -translate-y-1/2 overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/40 to-transparent animate-flow" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent animate-flow delay-1000" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-300/30 to-transparent animate-flow delay-2000" />
            </div>

            {/* Pipeline Stages as Mario Pipes */}
            <div className="relative flex items-end justify-between px-4 md:px-8 py-20">
              {pipelineStages.map((stage, i) => (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 60, rotate: -5 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.15, type: "spring", stiffness: 100 }}
                  className="relative flex flex-col items-center group"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Connecting tube between pipes */}
                  {i < pipelineStages.length - 1 && (
                    <div className="absolute top-1/2 left-full right-[50%] h-2 -translate-y-1/2 bg-gradient-to-r from-green-700/50 to-green-600/50 rounded-full border border-green-600/30 -ml-2 -mr-2 z-0" />
                  )}

                  {/* Mario Pipe Body */}
                  <div className="relative z-10 w-full max-w-40">
                    {/* Pipe Top Rim */}
                    <div className={`relative h-4 bg-gradient-to-r ${stage.color} rounded-t-2xl border-2 border-l-transparent border-r-transparent border-t-green-400/50 border-b-transparent shadow-[0_-4px_20px_-4px] shadow-green-500/20`}>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-3 bg-gradient-to-b from-transparent to-green-900 rounded-b-full" />
                    </div>
                    
                    {/* Pipe Body */}
                    <div className={`bg-gradient-to-b from-green-800 to-green-950 border-l-2 border-r-2 border-green-700/50 p-6 min-h-[200px] flex flex-col items-center text-center`}>
                      {/* Stage Icon */}
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br ${stage.color} shadow-xl shadow-black/30`}>
                        <stage.icon className="w-7 h-7 text-zinc-950" />
                      </div>
                      
                      {/* Stage Label */}
                      <div className="mb-2">
                        <span className="font-mono text-xs text-green-400/70 tracking-widest uppercase">{stage.label}</span>
                        <div className={`w-16 h-0.5 bg-gradient-to-r ${stage.color} mx-auto mt-2 rounded-full`} />
                      </div>
                      
                      {/* Description */}
                      <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{stage.desc}</p>
                      
                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap items-center justify-center gap-1.5 mt-auto">
                        {stage.tech.split(', ').map((t, idx) => (
                          <motion.span
                            key={t}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 + i * 0.15 + idx * 0.05 }}
                            className="px-2.5 py-1 text-xs font-mono bg-green-900/50 border border-green-600/30 text-green-300 rounded-full hover:bg-green-800/50 hover:border-green-500/50 hover:text-green-100 transition-all cursor-default"
                          >
                            {t}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Pipe Bottom */}
                    <div className={`relative h-4 bg-gradient-to-r ${stage.color} rounded-b-2xl border-2 border-l-transparent border-r-transparent border-b-green-400/50 border-t-transparent`}>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-3 bg-gradient-to-t from-transparent to-green-900 rounded-t-full" />
                    </div>
                  </div>

                  {/* Flow indicator arrow */}
                  <motion.div
                    className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-green-400/50"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Legend / Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-zinc-800/50"
          >
            <PipelineMetric label="PIPELINES IN PROD" value="12+" icon="🟢" color="text-green-400" />
            <PipelineMetric label="DBT MODELS" value="200+" icon="🟡" color="text-amber-400" />
            <PipelineMetric label="DAILY RUNS" value="500+" icon="🔵" color="text-blue-400" />
            <PipelineMetric label="LATENCY SLA" value="<15min" icon="🟣" color="text-purple-400" />
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-bob { animation: bob 3s ease-in-out infinite; }
        .animate-flow { animation: flow 2s linear infinite; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-2000 { animation-delay: 2s; }
        .animate-spin-slow { animation: spin 3s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}

function PipelineMetric({ label, value, icon, color }: { label: string; value: string; icon: string; color: string }) {
  return (
    <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur text-left group hover:border-green-600/30 transition-all">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-2xl">{icon}</span>
        <span className={`text-xs uppercase tracking-wider font-semibold ${color}`}>{label}</span>
      </div>
      <p className="text-sm font-bold text-zinc-100 font-mono">{value}</p>
    </div>
  );
}