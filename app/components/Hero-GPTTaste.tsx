"use client";
import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, Sparkles, Zap, GitBranch, Database, ArrowUpRight, BarChart3, Terminal } from 'lucide-react';

const pipelineStages = [
  { id: 'extract', label: 'EXTRACT', short: 'EXT', icon: Database, desc: 'Source systems, APIs, CDC, event streams', tools: 'Airbyte • Fivetran • Custom Connectors', metric: '5m', color: 'from-emerald-500 to-teal-400', glow: 'emerald' },
  { id: 'transform', label: 'TRANSFORM', short: 'XFM', icon: GitBranch, desc: 'Modular dbt models, SQLMesh, incremental', tools: 'dbt Core • SQLMesh • DuckDB • Jinja', metric: '10m', color: 'from-amber-500 to-orange-400', glow: 'amber' },
  { id: 'load', label: 'LOAD', short: 'LOD', icon: ArrowUpRight, desc: 'Warehouse, lakehouse, real-time sinks', tools: 'Snowflake • BigQuery • ClickHouse • Kafka', metric: '2m', color: 'from-indigo-500 to-blue-400', glow: 'indigo' },
  { id: 'serve', label: 'SERVE', short: 'SRV', icon: BarChart3, desc: 'BI dashboards, APIs, ML features, alerts', tools: 'Looker • Evidence • GraphQL • Feast', metric: '1m', color: 'from-rose-500 to-pink-400', glow: 'rose' },
];

export function HeroGPTTaste() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Array<{x: number, y: number, vx: number, vy: number, size: number, color: string, stage: number}>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx?.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize particles
    particlesRef.current = Array.from({ length: 80 }, (_, i) => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      color: ['#10b981', '#34d399', '#f59e0b', '#fbbf24', '#6366f1', '#818cf8', '#f43f5e', '#fb7185'][Math.floor(Math.random() * 8)],
      stage: Math.floor(Math.random() * 4),
    }));

    let frame = 0;
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        // Wrap around
        if (p.x < 0) p.x = canvas.offsetWidth;
        if (p.x > canvas.offsetWidth) p.x = 0;
        if (p.y < 0) p.y = canvas.offsetHeight;
        if (p.y > canvas.offsetHeight) p.y = 0;
        
        // Subtle pulse
        const pulse = Math.sin(frame * 0.02 + p.x * 0.01) * 0.3 + 0.7;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * pulse, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(pulse * 100).toString(16).padStart(2, '0');
        ctx.fill();
      });
      
      frame++;
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Canvas for ambient particles */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none opacity-40" 
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* Massive gradient orbs - randomized positions */}
      <div className="absolute top-[5%] left-[8%] w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/15 to-teal-500/5 rounded-full blur-[200px] animate-float-slow" />
      <div className="absolute top-[15%] right-[5%] w-[400px] h-[400px] bg-gradient-to-r from-amber-500/15 to-orange-500/5 rounded-full blur-[180px] animate-float-slow delay-1000" />
      <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-gradient-to-r from-indigo-500/15 to-blue-500/5 rounded-full blur-[160px] animate-float-slow delay-2000" />
      <div className="absolute bottom-[20%] right-[15%] w-[300px] h-[300px] bg-gradient-to-r from-rose-500/15 to-pink-500/5 rounded-full blur-[140px] animate-float-slow delay-3000" />

      {/* Wide editorial typography background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-9xl lg:text-[14rem] font-black tracking-tighter text-white/5 select-none">
          PIPELINE BUNDLES PIPELINE BUNDLES PIPELINE BUNDLES
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow - animated */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-xs md:text-sm font-medium mb-8 shadow-2xl backdrop-blur"
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="text-emerald-400"
            >
              <Zap className="w-4 h-4" />
            </motion.span>
            <span className="font-mono tracking-wider">ANALYTICS ENGINEER</span>
            <span className="text-zinc-600">//</span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Warsaw, PL (EU Auth)
            </span>
          </motion.div>

          {/* Main Headline - Wide Editorial */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-bold tracking-tightest text-white leading-[0.98] mb-6"
          >
            <span className="block">Building</span>
            <span className="block relative">
              <span className="relative z-10 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                pipeline bundles
              </span>
              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500/50 to-teal-500/50 origin-left rounded-full"
              />
            </span>
            <span className="block font-mono text-emerald-400 text-2xl md:text-3xl lg:text-4xl font-normal mt-2 tracking-widest">
              EXTRACT → TRANSFORM → LOAD → SERVE
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-zinc-400 font-normal leading-relaxed max-w-2xl mb-12 tracking-wide"
          >
            BI Analyst → Analytics Engineer. Orchestrating modular, version-controlled data pipelines across EMEA. dbt + SQLMesh + DuckDB. Production-grade.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto relative inline-flex items-center justify-center gap-2 px-8 py-4.5 rounded-2xl bg-white text-zinc-950 font-semibold text-base overflow-hidden group"
            >
              <span className="relative z-10">Explore Featured Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 origin-left"
              />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-200 font-semibold text-base hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all"
            >
              Let's Connect
            </a>
          </motion.div>

          {/* Interactive Bento Pipeline Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Flow connector line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-zinc-700 to-transparent -translate-y-1/2 pointer-events-none" />
            
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {pipelineStages.map((stage, i) => (
                <motion.article
                  key={stage.id}
                  initial={{ opacity: 0, y: 60, rotate: -3 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.5 + i * 0.1, 
                    type: "spring", 
                    stiffness: 120, 
                    damping: 15 
                  }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="relative group"
                >
                  {/* Pipeline connector tube between cards */}
                  {i < pipelineStages.length - 1 && (
                    <motion.div
                      className="absolute top-1/2 right-[-50%] w-full h-1 -translate-y-1/2 pointer-events-none"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <div className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-zinc-600 to-transparent rounded-full" />
                      {/* Flow particles */}
                      <motion.div
                        className="absolute top-1/2 left-0 h-1 w-4 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                        animate={{ x: ['0%', '100%', '0%'] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                      />
                    </motion.div>
                  )}

                  {/* Bento Card */}
                  <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/60 border border-zinc-800/60 rounded-3xl p-6 md:p-8 backdrop-blur-xl overflow-hidden">
                    {/* Glow accent top border */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stage.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Stage header */}
                    <div className="flex items-start gap-4 mb-6 relative z-10">
                      <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${stage.color} shadow-[0_8px_32px_-8px] shadow-black/40 group-hover:scale-110 transition-transform duration-300`}>
                        <stage.icon className="w-7 h-7 text-zinc-950" />
                        {/* Pulse ring */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl border-2 border-white/20"
                          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
                          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">{stage.short}</span>
                          <span className="w-px h-4 bg-zinc-700" />
                          <h3 className="font-bold text-white text-lg">{stage.label}</h3>
                        </div>
                        <div className={`w-16 h-0.5 bg-gradient-to-r ${stage.color} rounded-full`} />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 relative z-10">{stage.desc}</p>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                      {stage.tools.split(' • ').map((tool, idx) => (
                        <motion.span
                          key={tool}
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ delay: 0.7 + i * 0.1 + idx * 0.05 }}
                          className="px-3 py-1.5 text-xs font-medium font-mono bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 rounded-full hover:bg-zinc-700/50 hover:border-zinc-600 hover:text-white transition-all cursor-default group-hover:scale-105"
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>

                    {/* Metric */}
                    <div className="relative z-10 flex items-center justify-between pt-4 border-t border-zinc-800/40">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-zinc-500" />
                        <span className="font-mono text-xs text-zinc-500">SLA</span>
                      </div>
                      <div className="font-mono text-xl font-bold text-white tabular-nums">{stage.metric}</div>
                    </div>
                  </div>

                  {/* Stage number indicator */}
                  <motion.div
                    className="absolute -top-3 -right-3 font-mono text-4xl font-black text-zinc-800/50 select-none"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    0{i + 1}
                  </motion.div>
                </motion.article>
              ))}
            </div>

            {/* Summary metrics row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { label: 'PRODUCTION PIPELINES', value: '12', icon: GitBranch, iconClass: 'text-emerald-400' },
                { label: 'DBT MODELS', value: '200+', icon: Database, iconClass: 'text-amber-400' },
                { label: 'DAILY EXECUTIONS', value: '500+', icon: Zap, iconClass: 'text-indigo-400' },
                { label: 'END-TO-END LATENCY', value: '< 15m', icon: BarChart3, iconClass: 'text-rose-400' },
              ].map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.05 }}
                  className="relative p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/50 backdrop-blur group-hover:border-zinc-700/50 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <m.icon className={`w-4 h-4 ${m.iconClass}`} />
                    <span className="font-mono text-xs tracking-wider text-zinc-500 uppercase">{m.label}</span>
                  </div>
                  <div className="font-bold text-2xl md:text-3xl text-white tabular-nums">{m.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, -20px) rotate(90deg); }
          50% { transform: translate(-20px, 30px) rotate(180deg); }
          75% { transform: translate(-30px, -30px) rotate(270deg); }
        }
        .animate-float-slow { animation: float-slow 20s ease-in-out infinite; }
        .delay-1000 { animation-delay: -5s; }
        .delay-2000 { animation-delay: -10s; }
        .delay-3000 { animation-delay: -15s; }
      `}</style>
    </section>
  );
}