import { motion } from 'framer-motion';
import { ArrowUpRight, Circle, Layers, Ruler, Sparkles, SunMedium } from 'lucide-react';
import { useLighting } from '@/components/lighting/LightingContext';

const pillars = [
  { label: 'Architectural Lighting', icon: Ruler },
  { label: 'Timeless Design', icon: Layers },
  { label: 'Premium Quality', icon: Sparkles },
  { label: 'Tailored Solutions', icon: Circle },
];

export function HeroSection() {
  const { isNightMode, lightIntensity, setLightIntensity } = useLighting();
  const intensityLabel = lightIntensity < 0.4 ? 'Dim' : lightIntensity < 0.8 ? 'Ambient' : 'Radiant';
  const cycleIntensity = () => setLightIntensity(lightIntensity < 0.4 ? 0.72 : lightIntensity < 0.8 ? 1 : 0.24);

  return (
    <section className="relative min-h-[780px] overflow-hidden bg-[var(--lighting-bg)] pt-[82px] text-[var(--lighting-text)] transition-colors duration-700 lg:min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_45%,rgba(255,179,90,0.13),transparent_34%),linear-gradient(120deg,transparent_40%,rgba(255,179,90,0.025))]" />
      <div className="relative mx-auto grid min-h-[698px] max-w-[1440px] items-center gap-14 px-6 py-20 lg:grid-cols-[0.84fr_1.16fr] lg:gap-8 lg:px-12 lg:py-24">
        <div className="relative z-10 max-w-xl">
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="label-uppercase mb-7 text-[var(--lighting-glow)]">Lighting, reimagined.</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.9 }} className="max-w-[680px] font-serif text-5xl font-normal leading-[0.98] tracking-[-0.03em] sm:text-7xl lg:text-[6.7rem]">Where light becomes an <em className="font-normal text-[var(--lighting-glow)]">experience.</em></motion.h1>
          <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} href="#collections" className="group mt-10 inline-flex items-center gap-5 label-uppercase text-[var(--lighting-text)]">Explore collections <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" /></motion.a>
          <div className="mt-20 grid max-w-lg grid-cols-2 gap-x-6 gap-y-7 border-t border-[var(--lighting-border)] pt-6 sm:grid-cols-4 lg:mt-28">{pillars.map(({ label, icon: Icon }, index) => <motion.div key={label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + index * 0.1 }} className="flex flex-col gap-3"><Icon size={17} strokeWidth={1} className="text-[var(--lighting-glow)]" /><span className="text-[10px] uppercase leading-[1.5] tracking-[0.14em] text-[var(--lighting-muted)]">{label}</span></motion.div>)}</div>
        </div>
        <div className="relative h-[430px] sm:h-[550px] lg:h-[650px]" aria-label="Interactive architectural lighting scene">
          <div className="absolute inset-x-[5%] bottom-[7%] top-[5%] overflow-hidden border border-[var(--lighting-border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.025),transparent_40%)]">
            <div className="absolute left-[10%] top-[10%] h-px w-[58%] bg-[var(--lighting-border)]" />
            <div className="absolute bottom-[12%] left-[8%] right-[8%] h-[48%]">{[0, 1, 2, 3, 4].map((step) => <motion.div key={step} animate={{ boxShadow: isNightMode ? `0 -8px ${18 + lightIntensity * 18}px rgba(255,179,90,${0.12 + lightIntensity * 0.3})` : '0 -2px 5px rgba(80,60,40,0.08)' }} transition={{ duration: 0.7 }} className="absolute right-0 h-[15%] w-[78%] border-t border-[var(--lighting-border)] bg-[linear-gradient(90deg,rgba(255,179,90,0.02),rgba(255,179,90,0.12),rgba(255,179,90,0.02))]" style={{ bottom: `${step * 15}%`, transform: `translateX(${step * -9}%)` }} />)}</div>
            <button type="button" onClick={cycleIntensity} aria-label={`Pendant light: ${intensityLabel}. Click to change intensity`} className="absolute left-[58%] top-[10%] h-[65%] w-20 -translate-x-1/2 cursor-pointer outline-none">
              <motion.div animate={{ opacity: isNightMode ? 0.2 + lightIntensity * 0.8 : 0.14 }} transition={{ duration: 0.65 }} className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[var(--lighting-glow)] shadow-[0_0_12px_2px_#FFB35A]" />
              <motion.div animate={{ opacity: isNightMode ? 0.12 + lightIntensity * 0.28 : 0.04, scale: 0.85 + lightIntensity * 0.2 }} transition={{ duration: 0.65 }} className="absolute -bottom-[12%] left-1/2 h-[38%] w-[340px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,179,90,0.4),transparent_66%)] blur-xl" />
              <motion.div animate={{ boxShadow: isNightMode ? `0 0 ${18 + lightIntensity * 26}px rgba(255,179,90,${0.4 + lightIntensity * 0.4})` : '0 0 5px rgba(70,60,45,0.15)' }} className="absolute left-1/2 top-[65%] h-12 w-8 -translate-x-1/2 rounded-b-[50%] rounded-t-sm border border-[var(--lighting-glow)]/60 bg-[linear-gradient(110deg,#5b4430,#ffcf91_45%,#4b3321)]" />
            </button>
            <div className="absolute bottom-5 left-5 flex items-center gap-3 label-uppercase text-[var(--lighting-muted)]"><SunMedium size={14} className="text-[var(--lighting-glow)]" /> {intensityLabel} / Pendant</div>
          </div>
          <div className="absolute right-0 top-0 hidden max-w-[150px] text-right text-[10px] uppercase leading-relaxed tracking-[0.18em] text-[var(--lighting-muted)] sm:block">An atmosphere is built from the quietest details.</div>
        </div>
      </div>
      <div className="absolute bottom-6 left-6 flex items-center gap-4 label-uppercase text-[var(--lighting-muted)] lg:left-12"><span className="h-px w-10 bg-[var(--lighting-border)]" /> 01 / 04</div>
    </section>
  );
}