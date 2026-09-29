import { PORTFOLIO_DATA } from '../data/portfolioData';

export function StatsBanner() {
  const { stats } = PORTFOLIO_DATA;

  return (
    <section id="stats" className="border-y border-white/10 bg-[#0a0e16]/80 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-center px-4 ${
                idx > 1 ? 'pt-6 lg:pt-0' : ''
              }`}
            >
              <div className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white tabular-nums flex items-baseline gap-1">
                <span>{stat.value}</span>
                <span className="text-teal-400 text-2xl font-light"></span>
              </div>
              <div className="mt-1 text-sm sm:text-base font-semibold text-slate-200">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5 font-normal">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
