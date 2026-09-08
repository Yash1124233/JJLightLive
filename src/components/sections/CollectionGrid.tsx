import { motion } from 'framer-motion';

const collections = [
  { name: 'Pendants', detail: 'Suspended silhouettes' },
  { name: 'Wall Lights', detail: 'Light, held close' },
  { name: 'Architectural', detail: 'The hidden source' },
  { name: 'Outdoor', detail: 'After dark, outside' },
];

export function CollectionGrid() {
  return (
    <section id="collections" className="bg-[var(--lighting-bg)] px-6 py-24 text-[var(--lighting-text)] transition-colors duration-700 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex items-end justify-between border-b border-[var(--lighting-border)] pb-6"><div><p className="label-uppercase mb-4 text-[var(--lighting-glow)]">The collection</p><h2 className="font-serif text-4xl sm:text-5xl">Objects with <em>presence.</em></h2></div><span className="hidden label-uppercase text-[var(--lighting-muted)] sm:block">04 / Collections</span></div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{collections.map((collection, index) => <motion.a key={collection.name} href="#contact" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: index * 0.08 }} className="collection-card group relative h-[390px] overflow-hidden border border-[var(--lighting-border)]"><div className="collection-scene absolute inset-0" /><div className="collection-fixture absolute left-1/2 top-[38%] h-16 w-8 -translate-x-1/2" /><div className="absolute inset-x-6 bottom-6 flex items-end justify-between"><div><span className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[var(--lighting-muted)]">0{index + 1}</span><h3 className="font-serif text-2xl">{collection.name}</h3><p className="mt-1 text-xs text-[var(--lighting-muted)]">{collection.detail}</p></div><span className="flex h-9 w-9 items-center justify-center border border-[var(--lighting-border)] text-[var(--lighting-muted)] transition-colors group-hover:border-[var(--lighting-glow)] group-hover:text-[var(--lighting-glow)]">↗</span></div></motion.a>)}</div>
      </div>
    </section>
  );
}