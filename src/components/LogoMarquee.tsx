import {
  BennettLogo,
  AAFTLogo,
  ApeejayLogo,
  UnnatiAgriLogo,
  MICALogo,
  ManipalLogo,
  WoolfLogo,
  NBTLogo,
  YKALogo,
  BimaplanLogo,
  CricfanaticLogo,
  NewsGramLogo,
} from './BrandLogos';

export function LogoMarquee() {
  const logos = [
    { name: 'Bennett University', comp: <BennettLogo className="h-7" /> },
    { name: 'Apeejay Education', comp: <ApeejayLogo className="h-7" /> },
    { name: 'AAFT Marwah Studios', comp: <AAFTLogo className="h-7" /> },
    { name: 'Unnati Agri', comp: <UnnatiAgriLogo className="h-7" /> },
    { name: 'Navbharat Times', comp: <NBTLogo className="h-7" /> },
    { name: 'MICA Ahmedabad', comp: <MICALogo className="h-7" /> },
    { name: 'Manipal University', comp: <ManipalLogo className="h-7" /> },
    { name: 'Youth Ki Awaaz', comp: <YKALogo className="h-7" /> },
    { name: 'Bimaplan', comp: <BimaplanLogo className="h-7" /> },
    { name: 'Cricfanatic', comp: <CricfanaticLogo className="h-7" /> },
    { name: 'Woolf University', comp: <WoolfLogo className="h-7" /> },
    { name: 'NewsGram', comp: <NewsGramLogo className="h-7" /> },
  ];

  return (
    <section className="py-12 border-b border-white/5 bg-[#070a0f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold font-mono">
          Organizations, Media Houses &amp; Academic Alma Maters
        </span>
        <span className="text-xs text-slate-500">
          From National Newsrooms to Enterprise Education &amp; Agritech
        </span>
      </div>

      {/* Responsive Logo Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {logos.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center p-3.5 rounded-xl bg-slate-900/40 border border-white/5 hover:border-teal-500/30 hover:bg-slate-900/80 transition-all duration-200 group"
              title={item.name}
            >
              <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                {item.comp}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
