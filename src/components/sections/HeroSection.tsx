import { motion } from 'framer-motion';
import { ArrowUpRight, Circle, Layers, Ruler, Sparkles, SunMedium } from 'lucide-react';
import { useLighting } from '@/components/lighting/LightingContext';

const pillars = [
  { label: 'Architectural Lighting', icon: Ruler },
  { label: 'Timeless Design', icon: Layers },
  { label: 'Premium Quality', icon: Sparkles },
  { label: 'Tailored Solutions', icon: Circle },
];

const sceneImages = [
  { key: 'Dim', src: '/images/lighting/dim.jpeg' },
  { key: 'Ambient', src: '/images/lighting/ambient.jpeg' },
  { key: 'Radiant', src: '/images/lighting/radiant.jpeg' },
] as const;

export function HeroSection() {
  const { lightIntensity, setLightIntensity } = useLighting();
  const intensityLabel = lightIntensity < 0.5 ? 'Dim' : lightIntensity < 0.85 ? 'Ambient' : 'Radiant';
  const intensityPercent = Math.round(lightIntensity * 100);
  const cycleIntensity = () => setLightIntensity(lightIntensity < 0.5 ? 0.7 : lightIntensity < 0.85 ? 1 : 0.3);

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
          <button type="button" onClick={cycleIntensity} aria-label={`Lighting scene: ${intensityLabel} ${intensityPercent} percent. Click to cycle`} className="absolute inset-x-[5%] bottom-[7%] top-[5%] block w-[90%] cursor-pointer overflow-hidden border border-[var(--lighting-border)] text-left outline-none">
            <span className="sr-only">Tap the scene to change lighting intensity</span>
            {sceneImages.map(({ key, src }) => (
              <motion.img
                key={key}
                src={src}
                alt={`Staircase lighting scene in ${key} mode`}
                animate={{ opacity: intensityLabel === key ? 1 : 0 }}
                transition={{ duration: 1.4, ease: [0.45, 0, 0.2, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ willChange: 'opacity' }}
              />
            ))}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_55%,rgba(0,0,0,0.55)_100%)]" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3 label-uppercase text-white/90"><SunMedium size={14} className="text-[var(--lighting-glow)]" /> {intensityLabel} ({intensityPercent}%) / Room</div>
          </button>
          <div className="absolute right-0 top-0 hidden max-w-[180px] text-right text-[10px] uppercase leading-relaxed tracking-[0.18em] text-[var(--lighting-muted)] sm:block">An atmosphere is built from the quietest details.<br /><span className="mt-3 block text-[var(--lighting-glow)]">Tap the scene to illuminate</span></div>
        </div>
      </div>
      <div className="absolute bottom-6 left-6 flex items-center gap-4 label-uppercase text-[var(--lighting-muted)] lg:left-12"><span className="h-px w-10 bg-[var(--lighting-border)]" /> 01 / 04</div>
    </section>
  );
}