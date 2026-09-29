import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export function BennettLogo({ className = 'h-8', size }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Bennett Crest: shield with elephant heads and red/blue division */}
      <svg
        viewBox="0 0 120 120"
        className="h-full w-auto aspect-square shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={size ? { height: size, width: size } : undefined}
      >
        <path
          d="M60 4C30 4 12 16 12 36C12 76 60 114 60 114C60 114 108 76 108 36C108 16 90 4 60 4Z"
          fill="#004A99"
        />
        <path
          d="M60 8C35 8 18 19 18 36C18 64 45 92 60 106C75 92 102 64 102 36C102 19 85 8 60 8Z"
          fill="#D31826"
        />
        {/* Stylized white elephant trunks / curves */}
        <path
          d="M60 22C52 22 40 28 36 38C32 48 36 60 42 66C44 68 46 64 46 60C46 54 44 48 48 42C51 37 55 36 60 36C65 36 69 37 72 42C76 48 74 54 74 60C74 64 76 68 78 66C84 60 88 48 84 38C80 28 68 22 60 22Z"
          fill="white"
        />
      </svg>
      <div className="flex flex-col justify-center leading-tight">
        <span className="font-serif tracking-wider font-bold text-[#4c84c4] text-xs uppercase sm:text-sm">
          Bennett University
        </span>
        <span className="font-serif text-[10px] tracking-widest text-[#d9383a] uppercase font-semibold">
          The Times Group
        </span>
      </div>
    </div>
  );
}

export function AAFTLogo({ className = 'h-8' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* AAFT iconic red triangles + FT */}
      <svg viewBox="0 0 160 50" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* First A: two red triangles */}
        <polygon points="12,45 28,5 34,5 18,45" fill="#E51921" />
        <polygon points="26,45 42,5 48,5 32,45" fill="#E51921" />
        {/* Second A: two red triangles */}
        <polygon points="56,45 72,5 78,5 62,45" fill="#E51921" />
        <polygon points="70,45 86,5 92,5 76,45" fill="#E51921" />
        {/* F */}
        <rect x="100" y="5" width="22" height="7" fill="#E51921" />
        <rect x="100" y="5" width="8" height="40" fill="#E51921" />
        <rect x="100" y="20" width="18" height="6" fill="#E51921" />
        {/* T */}
        <rect x="126" y="5" width="26" height="7" fill="#E51921" />
        <rect x="135" y="5" width="8" height="40" fill="#E51921" />
      </svg>
    </div>
  );
}

export function NBTLogo({ className = 'h-8' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* NBT Red Box */}
      <div className="bg-[#b31412] text-white px-2 py-0.5 font-bold rounded-sm text-sm tracking-widest">
        NBT
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-xs tracking-tight text-white/90">
          नवभारत टाइम्स
        </span>
        <span className="text-[9px] text-white/50 tracking-wider">
          Times Group
        </span>
      </div>
    </div>
  );
}

export function YKALogo({ className = 'h-8' }: LogoProps) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="bg-black text-white px-1.5 py-0.5 rounded text-xs font-serif font-black border-l-2 border-red-600">
        YKA
      </div>
      <div className="bg-[#b81d24] text-white px-2 py-0.5 text-[11px] font-bold tracking-wider uppercase rounded-sm">
        Youth Ki Awaaz
      </div>
    </div>
  );
}

export function BimaplanLogo({ className = 'h-8' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Green sprout tulip 'b' */}
      <svg viewBox="0 0 40 40" className="h-full w-auto aspect-square shrink-0" fill="none">
        <path
          d="M10 8C10 8 8 20 18 20C18 20 18 10 20 8C22 10 22 20 22 20C32 20 30 8 30 8C30 8 32 28 20 32C8 28 10 8 10 8Z"
          fill="#34C759"
        />
        <circle cx="20" cy="22" r="4" fill="white" />
      </svg>
      <span className="font-bold text-sm tracking-tight text-[#4c35b3]">
        bimaplan
      </span>
    </div>
  );
}

export function CricfanaticLogo({ className = 'h-8' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-auto aspect-square" fill="none">
        <path
          d="M75 25C65 15 48 12 32 20C14 29 8 50 15 68C22 84 40 92 58 88C70 85 80 76 85 65C83 67 76 75 60 76C44 77 30 70 24 55C18 41 24 28 36 22C46 17 58 19 66 26"
          stroke="#00E59B"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <circle cx="55" cy="40" r="10" fill="#00E59B" />
        <path d="M49 35C53 38 57 42 61 45" stroke="#080b10" strokeWidth="2" />
      </svg>
      <span className="font-semibold text-xs text-[#00e59b] tracking-wider uppercase">
        Cricfanatic
      </span>
    </div>
  );
}

export function NewsGramLogo({ className = 'h-8' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 50 50" className="h-full w-auto aspect-square shrink-0" fill="none">
        <path
          d="M10 25C10 14 18 8 28 8C36 8 42 14 42 22C42 32 32 40 22 42C16 42 10 35 10 25Z"
          fill="#C4161C"
        />
        <path
          d="M18 20C19 16 23 14 28 14C33 14 36 17 36 21C36 26 31 30 25 31"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-serif font-bold text-sm tracking-tight text-[#d32f2f]">
        NewsGram
      </span>
    </div>
  );
}

export function WoolfLogo({ className = 'h-8' }: LogoProps) {
  return (
    <div className={`flex items-center gap-1.5 text-white/90 font-mono font-bold tracking-widest text-xs uppercase ${className}`}>
      <span className="text-teal-400">\</span>
      <span>WOOLF UNIVERSITY</span>
      <span className="text-teal-400">/</span>
    </div>
  );
}

export function ManipalLogo({ className = 'h-8' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Orange crest flame + laurel */}
      <svg viewBox="0 0 60 60" className="h-full w-auto aspect-square shrink-0" fill="none">
        <circle cx="30" cy="18" r="5" fill="#E65100" />
        <path d="M22 28C22 24 38 24 38 28C38 33 22 33 22 28Z" fill="#E65100" />
        <rect x="24" y="32" width="3" height="12" rx="1.5" fill="#E65100" />
        <rect x="33" y="32" width="3" height="12" rx="1.5" fill="#E65100" />
        {/* Laurel arcs */}
        <path
          d="M12 40C10 30 16 20 22 16M48 40C50 30 44 20 38 16"
          stroke="#E65100"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <div className="flex flex-col">
        <span className="text-[9px] uppercase tracking-widest text-amber-500 font-semibold">
          Inspired by Life
        </span>
        <span className="font-bold text-xs text-white/90">
          Manipal University Jaipur
        </span>
      </div>
    </div>
  );
}

export function MICALogo({ className = 'h-8' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Red triangle MICA with origami crease */}
      <svg viewBox="0 0 60 55" className="h-full w-auto aspect-square shrink-0" fill="none">
        <polygon points="30,4 58,50 2,50" fill="#BE1E2D" />
        <polygon points="30,4 58,50 35,50" fill="#981824" />
        <path d="M30 4L42 35L22 42" stroke="white" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      <div className="flex flex-col">
        <span className="font-black text-sm tracking-wider text-white">
          MICA
        </span>
        <span className="text-[8px] uppercase tracking-widest text-white/60 font-medium">
          The School of Ideas
        </span>
      </div>
    </div>
  );
}

export function ApeejayLogo({ className = 'h-8' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-amber-600 to-red-600 flex items-center justify-center font-serif text-white font-bold text-xs shadow-sm">
        A
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-xs text-white/90 tracking-tight">
          Apeejay Education
        </span>
        <span className="text-[9px] text-teal-400/80 tracking-wider uppercase">
          Society &amp; Schools
        </span>
      </div>
    </div>
  );
}

export function UnnatiAgriLogo({ className = 'h-8' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="h-7 w-7 rounded-lg bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs">
        🌱
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-xs text-emerald-300 tracking-tight">
          Unnati Agri
        </span>
        <span className="text-[9px] text-white/50 tracking-wider">
          Akshmala Solutions
        </span>
      </div>
    </div>
  );
}

export function BrandLogoByKey({ logoKey, className }: { logoKey: string; className?: string }) {
  switch (logoKey) {
    case 'bennett':
      return <BennettLogo className={className} />;
    case 'aaft':
      return <AAFTLogo className={className} />;
    case 'apeejay':
      return <ApeejayLogo className={className} />;
    case 'unnati':
      return <UnnatiAgriLogo className={className} />;
    case 'mica':
      return <MICALogo className={className} />;
    case 'manipal':
      return <ManipalLogo className={className} />;
    case 'woolf':
      return <WoolfLogo className={className} />;
    case 'nbt':
      return <NBTLogo className={className} />;
    case 'cricfanatic':
      return <CricfanaticLogo className={className} />;
    case 'bimaplan':
      return <BimaplanLogo className={className} />;
    case 'newsgram':
      return <NewsGramLogo className={className} />;
    case 'yka':
      return <YKALogo className={className} />;
    default:
      return null;
  }
}
