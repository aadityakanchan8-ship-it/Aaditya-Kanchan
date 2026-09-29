export interface Metric {
  value: string;
  label: string;
  subtext: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  tools: string[];
  outcomes: string;
}

export interface WorkProject {
  id: string;
  title: string;
  category: 'PERFORMANCE' | 'SOCIAL' | 'CONTENT' | 'VIDEO' | 'DESIGN' | 'JOURNALISM' | 'PR';
  client: string;
  timeframe: string;
  tagline: string;
  summary: string;
  image: string;
  featured?: boolean;
  highlightMetric?: {
    label: string;
    value: string;
  };
  challenge: string;
  role: string;
  work: string[];
  execution: string[];
  outcome: string[];
  tags: string[];
  links?: { label: string; url: string }[];
  externalUrl?: string;
  videoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  tools?: string[];
  logoKey: string;
}

export interface EarlierExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  logoKey?: string;
}

export interface MediaItem {
  id: string;
  title: string;
  type: 'Video Resume' | 'Interview' | 'Podcast' | 'Sports Journalism' | 'Reels / Shorts' | 'Brand Explainer';
  duration?: string;
  thumbnail: string;
  description: string;
  videoUrl: string;
  embedId?: string;
  isMainVideoResume?: boolean;
  externalLink?: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  publication: string;
  date: string;
  category: string;
  excerpt: string;
  url?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  highlights: string;
  logoKey: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  badge: string;
  date?: string;
}

export interface VerifiedLinkGroup {
  category: string;
  title: string;
  description: string;
  links: {
    title: string;
    url: string;
    type: 'video' | 'canva' | 'drive' | 'article' | 'social';
    note?: string;
  }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Aaditya Kanchan',
    primaryTitle: 'Digital & Social Media Strategist',
    secondaryTitle: 'Performance Marketing • Content Strategy • Marketing Automation • ORM • Video Production • AI Content Creation',
    positioningStatement: 'I build digital experiences, campaigns and content that turn attention into engagement.',
    // Black & White themed profile picture matching new close-up
    headshotImage: '/src/assets/images/aaditya_profile_bw_closeup_1790679941054.jpg',
    headshotImageColor: '/src/assets/images/aaditya_profile_closeup_1790679918290.jpg',
    videoResumeUrl: 'https://youtu.be/Ue55YQUBWK4',
    videoResumeEmbed: 'https://www.youtube-nocookie.com/embed/Ue55YQUBWK4',
    secondaryVideoCv: 'https://youtu.be/zPpvvCgXy4k',
    email: 'aadityakanchan8@gmail.com',
    phone: '+91 8130220219',
    location: 'Noida / Delhi NCR, India',
    linkedin: 'https://www.linkedin.com/in/aaditya-kanchan',
    instagram: '@adikanshots',
    instagramUrl: 'https://instagram.com/adikanshots?igshid=qokw548d1xum',
    facebookPhotography: 'https://www.facebook.com/Adikanshots',
    youtubeChannel: 'https://www.youtube.com/channel/UC4i-0KaTBFwEgWQesGJ3OSw',
    personalBlog: 'https://aadityakanchanji.blogspot.com',
    aaftProfile: 'https://aaft.com/blog/author/aaditya-kanchan/',
    ykaProfile: 'https://www.youthkiawaaz.com/author/aaditya-kanchan/',
    floatingLabels: [
      'PERFORMANCE MARKETING',
      'CONTENT',
      'SOCIAL MEDIA',
      'VIDEO',
      'AI',
    ],
  },

  stats: [
    {
      value: '5.5+',
      label: 'Years of Experience',
      subtext: 'Across digital strategy, performance & media',
    },
    {
      value: '40+',
      label: 'Published Pieces',
      subtext: 'National newsrooms & digital publications',
    },
    {
      value: '575K+',
      label: 'YouTube Views',
      subtext: 'Documented views generated across video assets',
    },
    {
      value: '40+',
      label: 'Social Accounts Managed',
      subtext: 'Simultaneous university & institutional channels',
    },
  ] as Metric[],

  about: {
    headline: 'More Than Content.',
    storyP1: 'In an era overwhelmed by algorithmic noise, standard social posting no longer drives sustainable business impact. Aaditya Kanchan operates at the intersection of high-fidelity narrative storytelling and rigorous data-backed digital acquisition.',
    storyP2: 'Beginning in investigative newsrooms and sports journalism, Aaditya built an instinctive mastery of audience retention and narrative urgency. He transitioned that editorial discipline into high-growth digital marketing, multi-channel university brand ecosystems, lifecycle automation, and high-ROI paid acquisition campaigns.',
    progression: [
      { step: '01', title: 'Journalism & Storytelling', desc: 'Investigative reporting, live sports coverage, and published newsroom commentary.' },
      { step: '02', title: 'Content & Editorial Strategy', desc: 'Brand positioning, thought leadership, bilingual English/Hindi copywriting, and SEO.' },
      { step: '03', title: 'Digital & Social Management', desc: 'Managing 40+ concurrent university channels, campus events, and multi-channel publishing.' },
      { step: '04', title: 'Performance & Growth', desc: 'Data-driven Meta Ads acquisition, lead funnels, and precision cost-per-acquisition optimization.' },
      { step: '05', title: 'Automation & ORM', desc: 'Lifecycle retention via WebEngage & Infobip, alongside proactive brand reputation management.' },
      { step: '06', title: 'Integrated Digital Strategy', desc: 'Harmonizing creative production, paid acquisition, and AI workflows for compounding ROI.' },
    ],
  },

  services: [
    {
      id: 'performance-marketing',
      number: '01',
      title: 'Performance Marketing',
      tagline: 'Paid acquisition, lead generation & funnel scaling',
      description: 'Architecting and scaling Meta and Google ad campaigns with obsessive attention to creative testing, audience segmenting, and cost-efficiency.',
      bullets: [
        'Meta Ads & Google Ads end-to-end campaign architecture',
        'Demonstrated acquisition efficiency down to ₹14.42 cost per app install on uStore (1.59M reach, ₹78K spend)',
        'Full-funnel attribution tracking, pixel configuration & ROAS optimization',
        'Custom audience segmentation, lookalikes & behavioral retargeting',
        'A/B creative testing matrix (hook, visual asset, copy, CTA)',
      ],
      tools: ['Meta Ads Manager', 'Google Ads', 'Meta Business Suite', 'Google Analytics 4', 'Excel / Sheets'],
      outcomes: 'Predictable, lower cost-per-acquisition and higher conversion quality across B2B, B2C, and education sectors.',
    },
    {
      id: 'social-media-strategy',
      number: '02',
      title: 'Social Media Strategy',
      tagline: 'Multi-platform ecosystem growth & viral community engagement',
      description: 'Orchestrating social architectures across Instagram, YouTube, LinkedIn, and X with synchronized content calendars and engagement loops.',
      bullets: [
        'Management and optimization of 40+ concurrent university accounts (SCSET, Biotech, ECE, Design, Media, Law, Physics)',
        'Structured editorial calendars aligned with organizational quarterly goals',
        'Organic reach maximization through micro-content, shorts, and reels',
        'Social listening, community interaction, and Online Reputation Management (ORM)',
        'Data-led monthly audience growth and sentiment reporting',
      ],
      tools: ['Meta Business Suite', 'YouTube Studio', 'Canva Pro', 'Sprout / Hootsuite', 'LinkedIn Analytics'],
      outcomes: 'Over 575,000+ documented YouTube views and 40+ accounts synchronized into unified brand acquisition channels.',
    },
    {
      id: 'content-editorial',
      number: '03',
      title: 'Content & Editorial',
      tagline: 'High-authority copywriting, thought leadership & bilingual PR',
      description: 'Transforming complex corporate and academic narratives into captivating long-form articles, landing page copy, and bilingual campaigns.',
      bullets: [
        'High-authority long-form articles, SEO blogs, and whitepapers',
        'Bilingual campaign creation across English and Hindi for nationwide resonance',
        'Landing page copywriting engineered for high-intent conversion',
        'Executive ghostwriting, press releases, and editorial speeches',
        'Rigorous proofreading and adherence to journalistic fact-checking standards',
      ],
      tools: ['WordPress', 'Medium', 'Notion', 'Google Docs', 'Grammarly Pro'],
      outcomes: '40+ published media pieces in leading publications including Indian Express, Navbharat Times, and Economic Times.',
    },
    {
      id: 'marketing-automation',
      number: '04',
      title: 'Marketing Automation',
      tagline: 'Lifecycle retention, behavioral triggers & drip workflows',
      description: 'Building automated omnichannel customer journeys that nurture leads from initial sign-up to repeat engagement and institutional loyalty.',
      bullets: [
        'Lifecycle journey mapping in WebEngage and Infobip',
        'Omnichannel retention workflows spanning WhatsApp, SMS, Push, and Email',
        'Behavior-triggered drop-off recovery and activation sequences',
        'Cohort segmentation and dynamic personalized customer touchpoints',
        'B2B and B2C retention optimization with iterative A/B test variations',
      ],
      tools: ['WebEngage', 'Infobip', 'WhatsApp Business API', 'CRM Integrations', 'Segment'],
      outcomes: 'Minimized drop-off rates across user on-boarding journeys and sustained long-term customer lifetime value.',
    },
    {
      id: 'video-storytelling',
      number: '05',
      title: 'Video & Storytelling',
      tagline: 'Cinematic video production, podcasts & sports journalism',
      description: 'Directing, shooting, and editing high-retention video content, executive interviews, studio podcasts, and on-ground sports spectacles.',
      bullets: [
        'End-to-end video production from storyboarding and shooting to final cut',
        'Exclusive interviews with Union Minister Arjun Ram Meghwal, Zee Business anchor Sandeep Jain, Goonj founder Anshu Gupta',
        'On-the-ground sports media coverage including MotoGP Bharat, Cricket World Cups, and viral cricket breakdown reels',
        'Short-form vertical video optimization for Instagram Reels and YouTube Shorts',
        'Direction of student documentary stories, campus tours, and brand films',
      ],
      tools: ['Adobe Creative Cloud', 'Premiere Pro', 'DaVinci Resolve', 'Sony Alpha / Canon Systems', 'Shure Audio'],
      outcomes: 'Compelling cinematic content that elevates brand perception and delivers organic virality.',
    },
    {
      id: 'ai-content-creation',
      number: '06',
      title: 'AI Content Creation',
      tagline: 'Generative AI workflows, automated ideation & scaled creative pipelines',
      description: 'Deploying leading AI models to supercharge research, draft high-volume creative angles, and accelerate production workflows responsibly.',
      bullets: [
        'Systematic prompting across ChatGPT, Claude 3.5 Sonnet, and Gemini',
        'Workflow automation using Google Flow and connected API pipelines',
        'Rapid creative ideation for ad hooks, script outlines, and multi-format variants',
        'Editorial oversight ensuring zero hallucination, human warmth, and authentic voice',
        'Custom GPT and AI agent creation for brand-specific knowledge bases',
      ],
      tools: ['ChatGPT', 'Claude', 'Gemini', 'Google Flow', 'Midjourney', 'Descript'],
      outcomes: '5x faster creative turnarounds without sacrificing editorial rigor or emotional resonance.',
    },
  ] as Service[],

  experience: [
    {
      id: 'apeejay',
      role: 'Social Media & Content Manager',
      company: 'Apeejay Education Society',
      period: 'Jul 2026 – Present',
      location: 'Noida / Delhi, India',
      summary: 'Driving unified social media strategy, student storytelling, and multi-channel creative direction for one of India’s premier education foundations.',
      highlights: [
        'Directed and captured high-impact student testimonial videos from concept to final cut, highlighting student journeys and campus life to drive authentic brand trust.',
        'Conceptualized and designed specialized, on-brand graphics and visual assets tailored for the international school ecosystem across Instagram, Facebook, and LinkedIn.',
        'Handled the end-to-end publishing pipeline, managing content calendars and multi-channel scheduling for Apeejay International Noida and Panchsheel Park.',
        'Conducted audience and competitor research, tracked sentiment via ORM practices, and monitored key metrics to optimize weekly creative formats.',
      ],
      tools: ['Meta Business Suite', 'YouTube Studio', 'Adobe CC', 'Canva Pro', 'ORM Tools'],
      logoKey: 'apeejay',
    },
    {
      id: 'bennett',
      role: 'Content Specialist',
      company: 'Bennett University | The Times Group',
      period: 'Feb 2025 – Jul 2026',
      location: 'Greater Noida, India',
      summary: 'Led social acquisition funnels, digital content architecture, and single-handedly managed an ecosystem of 40+ university social media accounts and YouTube channels.',
      highlights: [
        'Single-handedly managed and scaled an ecosystem of 40+ social media accounts and YouTube channels covering every individual school and institutional handle.',
        'Successfully resolved high-stakes social media PR crises—including single-handedly mitigating fallout and sentiment control around a major viral video incident while maintaining top-tier GMB ratings.',
        'Spearheaded end-to-end digital content coverage for mega campus events, including Uphoria 2025 (Salim-Sulaiman, Akhil Sachdeva), Sportikon 2025, and Converge 3.0 alumni meet.',
        'Led agency coordination, designed YouTube byte strategies for channel monetization, and created high-converting Instagram and WhatsApp marketing content.',
        'Conceptualized brochures, magazine advertisements, and promotional collateral for academic programs optimizing social media funnels for student lead generation.',
      ],
      tools: ['YouTube Studio', 'Meta Ads', 'WordPress', 'Adobe Premiere Pro', 'Canva Pro'],
      logoKey: 'bennett',
    },
    {
      id: 'aaft',
      role: 'Content Writer Lead',
      company: 'AAFT | Marwah Studios',
      period: 'Sep 2023 – Feb 2025',
      location: 'Noida Film City, India',
      summary: 'Headed content strategy, landing page copy, programmatic webinar campaigns, and national accreditation (NAAC) brand communications.',
      highlights: [
        'Spearheaded and executed the complete operational and creative workflow for the AAFT 2024 Orientation—managing end-to-end vendor relations, contract negotiations, and technical oversight.',
        'Authored high-converting landing page copy, engaging website blogs, PR articles, executive quotes, and specialized NAAC compliance creatives for AAFT University.',
        'Supervised and published content across multiple official social media platforms to ensure brand consistency, drove organic engagement, and actively resolved student inquiries via Google My Business (GMB).',
        'Managed brand sentiment through proactive Online Reputation Management (ORM) while directly supervising freelance content writers.',
      ],
      tools: ['GMB', 'WordPress', 'Google Analytics', 'Canva Pro', 'Social Studio'],
      logoKey: 'aaft',
    },
    {
      id: 'unnati',
      role: 'Retention Marketer',
      company: 'Unnati Agri | Akshmala Solutions Pvt. Ltd.',
      period: 'Aug 2022 – Jul 2023',
      location: 'Noida, India',
      summary: 'Executed B2B/B2C automated retention campaigns, bilingual farmer communication, and on-ground field storytelling.',
      highlights: [
        'Developed engaging content frameworks for both the B2C farmer application and Agri-B2B clients, driving user adoption, product awareness, and digital engagement.',
        'Authored high-impact marketing communications, app copy, and promotional campaigns in both Hindi and English.',
        'Conducted agricultural field visits to capture authentic farmer testimonials, case studies, and grassroots success stories directly from the ground.',
        'Built and managed automated multi-channel communication workflows across WebEngage and Infobip—crafting targeted push notifications, SMS campaigns, and WhatsApp marketing messages.',
      ],
      tools: ['WebEngage', 'Infobip', 'WhatsApp API', 'Bilingual Copywriting', 'Field Video'],
      logoKey: 'unnati',
    },
  ] as ExperienceItem[],

  earlierExperience: [
    {
      id: 'cricfanatic',
      role: 'Video Editing & Digital Sports Intern',
      company: 'Urbansports (Cricfanatic App)',
      period: 'May 2023 – Jul 2023',
      description: 'Produced 7–10 weekly cricket news videos and designed high-CTR YouTube thumbnails; created viral cricket analysis and match breakdowns.',
      logoKey: 'cricfanatic',
    },
    {
      id: 'bimaplan',
      role: 'Content Writer x Social Media Intern',
      company: 'Bimaplan (Y-Combinator backed)',
      period: 'Jun 2021 – Nov 2021',
      description: 'Wrote campaign copy, blogs, and explainer scripts; scripted and voiced educational insurance videos in Hindi; managed official LinkedIn & Facebook channels.',
      logoKey: 'bimaplan',
    },
    {
      id: 'careerguide',
      role: 'Content Writing Intern',
      company: 'CareerGuide.com',
      period: 'Jun 2021 – Aug 2021',
      description: 'Published daily 800-word SEO-focused career guidance articles in Hindi covering library science, student motivation, and interview preparation.',
    },
    {
      id: 'nbt',
      role: 'Journalist Intern',
      company: 'Sunday Navbharat Times (Times of India Group)',
      period: 'Jun 2021 – Jul 2021',
      description: 'Authored feature articles in Hindi, created social media memes/video edits, and contributed published photojournalism assets.',
      logoKey: 'nbt',
    },
    {
      id: 'wearethewriters',
      role: 'Freelance Content Writer',
      company: 'We Are The Writers',
      period: 'Apr 2021 – May 2021',
      description: 'Wrote long-form bilingual blogs (1,000–2,500 words) across tech, SaaS, lifestyle, and business niches.',
    },
    {
      id: 'newsgram',
      role: 'Editorial Intern',
      company: 'NewsGram',
      period: 'Nov 2020 – May 2021',
      description: 'Wrote Hindi news reports, drafted video bulletins, and managed digital social distribution.',
      logoKey: 'newsgram',
    },
    {
      id: 'yka',
      role: 'News Breaker Intern',
      company: 'Youth Ki Awaaz',
      period: 'Mar 2020 – Jul 2021',
      description: 'Reported on social and civic issues; awarded platform "User of the Week"; wrote impactful articles on Beirut explosions, weather anomalies, and digital culture.',
      logoKey: 'yka',
    },
  ] as EarlierExperienceItem[],

  projects: [
    {
      id: 'meta-ads-acquisition',
      title: 'Performance Marketing: uStore App Acquisition',
      category: 'PERFORMANCE',
      client: 'Unnati Agri / uStore App',
      timeframe: 'Documented Meta Ads Campaign',
      tagline: 'Achieved verified ₹14.42 Cost Per App Install across 1.59M Reach',
      summary: 'Data-driven paid social acquisition campaign utilizing granular audience targeting, rapid creative iteration, and funnel optimization.',
      image: '/src/assets/images/meta_ads_case_study_1790678782494.jpg',
      featured: true,
      highlightMetric: {
        label: 'Cost Per App Download',
        value: '₹14.42 CPA',
      },
      challenge: 'High cost per install (CPI) in crowded mobile utility and commerce sectors, audience ad fatigue, and high early-stage drop-off in regional tier-2/tier-3 markets.',
      role: 'Performance Marketer & Campaign Architect: Directed ad set structuring, budget pacing, creative variations, and attribution measurement in Meta Ads Manager.',
      work: [
        'Audited past campaign performance to isolate high-converting demographic and geographic cohorts.',
        'Structured modular Meta Ads campaigns dividing prospecting (broad & lookalikes) and retargeting.',
        'Designed high-contrast, benefit-led mobile visual creatives emphasizing instantaneous utility (Paytm Cashback, Star Member, Trucide Bumper Sale).',
        'Generated ₹14.42 CPI with 1,593,843 reach, 4,179,917 impressions, and ₹78,312 total spend in documented Meta Ads Manager console.',
      ],
      execution: [
        'Conducted systematic creative A/B testing on hooks, CTA button copy, and localized video snippets.',
        'Optimized ad delivery algorithmically towards qualified post-install in-app actions.',
        'Managed daily spend reallocation towards the highest ROAS ad variations.',
      ],
      outcome: [
        'Verified ₹14.42 cost per app install in official Meta Ads Manager reports.',
        '1,593,843 users reached with over 4,179,917 impressions delivered.',
        'Earned 12 official Meta Blueprint Awards and certification badges (Conversions API, Ads Manager, Advantage+, Ad Creative).',
      ],
      tags: ['Meta Ads', 'Paid Acquisition', 'Funnel Optimization', '₹14.42 CPI', 'App Growth'],
      links: [
        { label: 'Canva Ad Creatives Deck', url: 'https://www.canva.com/design/DAFcckdzOb0/HhXCs9s58KjFyylQtLxegA/view' },
      ],
    },
    {
      id: 'bennett-ecosystem',
      title: 'Bennett University — Digital & Social Ecosystem',
      category: 'SOCIAL',
      client: 'Bennett University | The Times Group',
      timeframe: 'Feb 2025 – Jul 2026',
      tagline: 'Single-handedly managed 40+ institutional channels & YouTube',
      summary: 'A unified digital and social media architecture encompassing 40+ official accounts, YouTube channels, campus events, and admissions lead generation.',
      image: '/src/assets/images/bennett_media_hub_1790678801390.jpg',
      featured: true,
      highlightMetric: {
        label: 'Institutional Channels Managed',
        value: '40+ Accounts',
      },
      challenge: 'Managing fragmented departmental accounts, lack of standardized visual identity, inconsistent publishing schedules, and under-utilized video assets across YouTube and social platforms.',
      role: 'Content Specialist & Social Media Lead: Led daily editorial governance, video production, agency synchronization, and PR/ORM.',
      work: [
        'Single-handedly managed 40+ social accounts: SCSET, Biotech, ECE, School of Design, Times School of Media, Physics, Management, Law.',
        'Produced exclusive high-profile video interviews: Union Minister Arjun Ram Meghwal, Foreign University Professor, Zee Business anchor Sandeep Jain, Goonj founder Anshu Gupta.',
        'Collaborated with scientific faculties on high-engagement infographic creatives: Lab-Grown IVG Life, Type A to Type O Blood Conversion, and Global Pathways Program (Iowa State, Essex, Kent State).',
        'Coordinated with creative agencies to produce high-impact student recruitment brochures and ad creatives.',
      ],
      execution: [
        'Set up automated publishing pipelines and rigorous quality-control checks before release.',
        'Handled high-stakes crisis management and sentiment control around viral incidents, maintaining top-tier GMB ratings.',
        'Executed real-time live social coverage for Uphoria 2025 (Salim-Sulaiman, Akhil Sachdeva), Sportikon 2025, and Converge 3.0.',
      ],
      outcome: [
        'Maintained active, high-engagement posting across 40+ university channels without brand dilution.',
        'Generated substantial inbound student lead flow during peak admission cycles.',
        'Published Bennett Times Volume 1 Issue 4 featuring exclusive interview with Goonj founder Anshu Gupta.',
      ],
      tags: ['Social Strategy', 'Higher Education', 'YouTube Monetization', 'ORM', 'Event Coverage'],
      links: [
        { label: 'Canva Content Creation Hub', url: 'https://canva.link/5ski7a4sjc7pij8' },
        { label: 'Interview with Union Minister', url: 'https://youtu.be/YZ2rMa-K8Ww' },
        { label: 'BU Campus Interview 2', url: 'https://youtu.be/83vRf7ABzuc' },
        { label: 'BU Campus Interview 3', url: 'https://youtu.be/140SUREFZN8' },
        { label: 'Bennett Times Issue 4 (PDF)', url: 'https://www.bennett.edu.in/wp-content/uploads/2020/01/Bennett_Times_Vol1_Issue_4.pdf' },
      ],
    },
    {
      id: 'aaft-campaigns',
      title: 'AAFT — Creative, Webinar & NAAC Campaigns',
      category: 'CONTENT',
      client: 'AAFT | Marwah Studios',
      timeframe: 'Sep 2023 – Feb 2025',
      tagline: 'High-converting webinar ads, course launches & NAAC brand narratives',
      summary: 'Multi-channel content campaigns, programmatic webinar ads, and accreditation communications for premier film and media programmes.',
      image: '/src/assets/images/bennett_media_hub_1790678801390.jpg',
      featured: false,
      highlightMetric: {
        label: 'Accreditation & Leads',
        value: 'NAAC + GMB',
      },
      challenge: 'Attracting passionate media and arts aspirants in a highly competitive private university market, while managing campus reputation across platforms.',
      role: 'Content Writer Lead: Headed copy strategy, webinar acquisition assets, SEO landing pages, and institutional accreditation collateral.',
      work: [
        'Authored high-converting webinar advertisements, such as "The Future of Cinematography" featuring 2x Emmy Winner Alan Teitel.',
        'Designed high-impact admissions ad creatives for B.Des. Interior Design, Diploma in Fashion Design, and B.Sc. Nutrition & Dietetics.',
        'Authored authoritative editorial articles for official AAFT publications platform.',
        'Produced comprehensive documentation for national NAAC accreditation inspections.',
      ],
      execution: [
        'Streamlined Google My Business (GMB) profiles across branches with localized SEO keywords.',
        'Coordinated between creative design and paid marketing to deploy rapid ad iterations.',
        'Managed community responses and resolved user queries to safeguard institution ratings.',
      ],
      outcome: [
        'Consistently high webinar attendance and direct downstream student application conversions.',
        'Maintained exemplary 4.5+ star review reputation across major public discovery platforms.',
        'Successfully completed documentation supporting institutional NAAC milestones.',
      ],
      tags: ['Creative Copy', 'Webinar Campaigns', 'GMB SEO', 'Brand Communications'],
      links: [
        { label: 'AAFT Blog Author Archive', url: 'https://aaft.com/blog/author/aaditya-kanchan/' },
        { label: 'Canva Blog & Ad Copy Deck 1', url: 'https://www.canva.com/design/DAFhmzu4T28/oW-bFlsfSb9YvsooxJCoFA/view' },
        { label: 'Canva Blog & Ad Copy Deck 2', url: 'https://www.canva.com/design/DAFhmhx_hwM/kNrLfaajwmUeJeFrF8kKHw/view' },
      ],
    },
    {
      id: 'unnati-retention',
      title: 'Unnati Agri — Growth & Lifecycle Retention',
      category: 'PERFORMANCE',
      client: 'Unnati Agri | Akshmala Solutions',
      timeframe: 'Aug 2022 – Jul 2023',
      tagline: 'Automating agricultural lifecycle workflows with bilingual storytelling',
      summary: 'Omnichannel retention automation in WebEngage and Infobip tailored for agricultural stakeholders across India.',
      image: '/src/assets/images/meta_ads_case_study_1790678782494.jpg',
      featured: false,
      highlightMetric: {
        label: 'Retention Platform',
        value: 'WebEngage + Infobip',
      },
      challenge: 'Low digital literacy among rural farmer stakeholders and high drop-off rates on agritech mobile platforms.',
      role: 'Retention Marketer: Architected lifecycle communication, authored bilingual messaging, and conducted field storytelling.',
      work: [
        'Constructed multi-stage event-triggered automated customer journeys in WebEngage and Infobip.',
        'Crafted simple, actionable Hindi and English WhatsApp messages, SMS advisories, and push notifications.',
        'Designed seasonal campaign creatives: Diwali Dhoom Dhamaka, Trucide Bumper Sale, and Monsoon Tools Offer.',
        'Authored analytical blogs on modern agritech: "Impacts of New Technologies in Agriculture" and "Problems Faced by Farmers in India".',
      ],
      execution: [
        'Segmented users by crop type, regional geography, and transactional frequency.',
        'Tested WhatsApp templates vs. SMS notifications to determine the most cost-effective channel.',
        'Published thought leadership posts on LinkedIn regarding Union Budget 2023 for the agricultural sector and Farmers Day.',
      ],
      outcome: [
        'Measurable uplift in repeat transacting farmers and significant reduction in 30-day drop-off.',
        'Established WhatsApp as a premier, high-engagement customer support and repeat order channel.',
        'Created a rich repository of genuine farmer video testimonials utilized in B2B partner pitches.',
      ],
      tags: ['Marketing Automation', 'WebEngage', 'Infobip', 'Bilingual Strategy', 'B2B/B2C'],
      links: [
        { label: 'Unnati Blog: Technologies in Agriculture', url: 'https://unnatiagri.com/impacts-of-new-technologies-in-agriculture' },
        { label: 'Unnati Blog: Problems Faced by Farmers', url: 'https://unnatiagri.com/problems-faced-by-farmers-in-india' },
      ],
    },
    {
      id: 'video-podcasting',
      title: 'Video Production & Podcasting',
      category: 'VIDEO',
      client: 'Independent & Institutional Production',
      timeframe: '575K+ Views Channel',
      tagline: 'High-fidelity interviews, podcasts, sports reels & video CV production',
      summary: 'End-to-end conceptualization, lighting, shooting, audio engineering, and editing for video podcasts and digital broadcast journalism.',
      image: '/src/assets/images/podcast_media_studio_1790678821635.jpg',
      featured: true,
      highlightMetric: {
        label: 'Cumulative Reach',
        value: '575K+ Views',
      },
      challenge: 'Audiences disengage within the first 5 seconds unless video content combines immediate hook clarity with professional production value.',
      role: 'Director, Host & Editor: Handled pre-interview research, multi-mic studio recording, lighting setups, and final color/audio mastering.',
      work: [
        'Created official high-impact video resumes showcasing dynamic on-camera presentation and strategic clarity.',
        'Produced the "Car Podcast on Virat Kohli" and analytical breakdown video on Shreyas Iyer.',
        'Directed and edited Apeejay latest Reels series on YouTube Shorts.',
        'Scripted and voiced Hindi financial explainer videos for Y-Combinator backed Bimaplan ("What is insurance and why is insurance needed?").',
      ],
      execution: [
        'Implemented rigorous editing cadence: cut out dead air, inserted dynamic b-roll, and overlaid kinetic typography.',
        'Crafted click-worthy yet authentic thumbnail concepts and keyword-optimized titles.',
      ],
      outcome: [
        'Over 575,000+ views achieved across video assets with superior watch-time retention percentages.',
        'Demonstrated versatile capability to produce broadcast-quality media independently.',
      ],
      tags: ['Video Production', 'Podcasting', 'Premiere Pro', 'On-Camera Hosting', 'YouTube'],
      videoUrl: 'https://youtu.be/Ue55YQUBWK4',
      links: [
        { label: 'Official Video Resume', url: 'https://youtu.be/Ue55YQUBWK4' },
        { label: 'Secondary Video CV', url: 'https://youtu.be/zPpvvCgXy4k' },
        { label: 'Car Podcast on Virat Kohli', url: 'https://youtu.be/RrmgV5cNxqc' },
        { label: 'Shreyas Iyer Analysis Video', url: 'https://youtu.be/eYxFwPdI2x0' },
        { label: 'Bimaplan Insurance Explainer Video', url: 'https://youtu.be/C2J941JZrMo' },
      ],
    },
    {
      id: 'journalism-publications',
      title: 'Journalism & Published Newsroom Work',
      category: 'JOURNALISM',
      client: 'Indian Express, Navbharat Times, Economic Times & More',
      timeframe: '40+ Documented Pieces',
      tagline: 'Published investigations, cultural columns & sports reportage',
      summary: 'A portfolio of 40+ published articles, news analyses, and investigative features across India’s leading national newsrooms.',
      image: '/src/assets/images/bennett_media_hub_1790678801390.jpg',
      featured: false,
      highlightMetric: {
        label: 'Published Articles',
        value: '40+ Pieces',
      },
      challenge: 'Meeting demanding newsroom deadlines, upholding rigorous journalistic ethics, and writing across English and Hindi editorial standards.',
      role: 'Journalist & Editorial Columnist: Pitched stories, conducted original interviews, fact-checked primary sources, and filed publication-ready manuscripts.',
      work: [
        'Authored 4 special analytical pieces for The Economic Times (ET) available via Google Drive archive.',
        'Published 4 sports and career guidance columns for Times of India (TOI) Blogs (IPL 2023, white-ball captaincy, career counselling).',
        'Contributed feature articles and photojournalism to Sunday Navbharat Times (NBT).',
        'Authored high-impact investigative reports on Youth Ki Awaaz (Delhi Coldest December 1901, Beirut blasts, COVID prevention).',
        'Published sports web stories on Howdy Sports (Roger Federer, FIFA World Cup 2022, Ghanim Al-Muftah).',
      ],
      execution: [
        'Developed reliable source networks across sports organizers, academic leaders, and civic bodies.',
        'Crafted resonant headlines that captured the essence of the story without sensationalism.',
      ],
      outcome: [
        'Cemented a reputation as a credible storyteller capable of operating in fast-paced newsrooms.',
        'Translates directly into today’s digital strategy through sharper hooks, zero fluff, and authentic narrative authority.',
      ],
      tags: ['Investigative Journalism', 'National Press', 'Editorial Columns', 'Bilingual Reporting'],
      links: [
        { label: 'Economic Times Publication 1 (Drive)', url: 'https://drive.google.com/file/d/1X0rKI6hYc7i6eajyur_I1kHzT7wOET9S/view?usp=sharing' },
        { label: 'Economic Times Publication 2 (Drive)', url: 'https://drive.google.com/file/d/1X-IwFCmIBu9cXenWo1HaHEjS5InVwquG/view?usp=sharing' },
        { label: 'Economic Times Publication 3 (Drive)', url: 'https://drive.google.com/file/d/1Wzc4fsIymSDRzNgJQDvRksiIA2sbCxkt/view?usp=sharing' },
        { label: 'Economic Times Publication 4 (Drive)', url: 'https://drive.google.com/file/d/1WvqYahv_kxW5ze4J9KBYSnpaTE9T_ANn/view?usp=sharing' },
      ],
    },
  ] as WorkProject[],

  verifiedWorkLinks: [
    {
      category: 'Reels & Video Productions',
      title: 'Apeejay Reels & YouTube Shorts',
      description: 'Recent student storytelling and high-retention vertical reels produced for Apeejay Education.',
      links: [
        { title: 'Apeejay Latest Reel 1', url: 'https://youtube.com/shorts/63kuO8KUFiE', type: 'video', note: 'YouTube Shorts' },
        { title: 'Apeejay Latest Reel 2', url: 'https://youtube.com/shorts/43FEughQ0rI?feature=share', type: 'video', note: 'YouTube Shorts' },
        { title: 'Apeejay Latest Reel 3', url: 'https://youtube.com/shorts/MZjOOPp-TUk?feature=share', type: 'video', note: 'YouTube Shorts' },
        { title: 'Lucknow Leopards Interview Reel', url: 'https://www.instagram.com/reel/DJJFPGayJav/?igsh=MTd2bHUyZW5wZWF5OA==', type: 'video', note: 'Instagram Reel' },
        { title: 'Lucknow Leopards Full Interview', url: 'https://www.youtube.com/watch?v=ru4jIePw2yU', type: 'video', note: 'YouTube' },
      ],
    },
    {
      category: 'Exclusive Interviews',
      title: 'Bennett University Leadership & Guest Conclaves',
      description: 'Interviews conducted with union ministers, foreign faculty, and national television anchors.',
      links: [
        { title: 'Interview with Union Minister of State Arjun Ram Meghwal', url: 'https://youtu.be/YZ2rMa-K8Ww', type: 'video', note: 'Exclusive BU Video' },
        { title: 'Campus Academic Conclave Interview', url: 'https://youtu.be/83vRf7ABzuc', type: 'video', note: 'BU Guest Speaker' },
        { title: 'Executive Media Conclave Interview', url: 'https://youtu.be/140SUREFZN8', type: 'video', note: 'BU Studio Interview' },
        { title: 'Goonj Founder Anshu Gupta Special Interview', url: 'https://www.bennett.edu.in/wp-content/uploads/2020/01/Bennett_Times_Vol1_Issue_4.pdf', type: 'article', note: 'Bennett Times PDF' },
      ],
    },
    {
      category: 'Canva Design & Presentations',
      title: 'Brochures, Creative Collateral & Pitch Decks',
      description: 'Official Canva links for academic brochures, campaign decks, and brand presentations.',
      links: [
        { title: 'Apeejay Latest Brochure Creation Work', url: 'https://canva.link/jf2royckcy94pzd', type: 'canva', note: 'Official Canva Brochure' },
        { title: 'Bennett Content Creation Master Deck', url: 'https://canva.link/5ski7a4sjc7pij8', type: 'canva', note: 'Creative Campaign Assets' },
        { title: 'uStore Ads & Results Presentation', url: 'https://www.canva.com/design/DAFcckdzOb0/HhXCs9s58KjFyylQtLxegA/view', type: 'canva', note: 'Performance Presentation' },
        { title: 'AAFT Blog & Ad Copy Presentation 1', url: 'https://www.canva.com/design/DAFhmzu4T28/oW-bFlsfSb9YvsooxJCoFA/view', type: 'canva', note: 'AAFT Campaign Deck' },
        { title: 'AAFT Email Marketing & Copy Deck 2', url: 'https://www.canva.com/design/DAFhmhx_hwM/kNrLfaajwmUeJeFrF8kKHw/view', type: 'canva', note: 'Email & Ad Copy' },
        { title: 'Institutional Presentation Deck 1', url: 'https://www.canva.com/design/DAFY2c7RhCo/_1ydtOCBFNs8vUW8GWx6tA/view', type: 'canva', note: 'Strategic Presentation' },
        { title: 'Institutional Presentation Deck 2', url: 'https://www.canva.com/design/DAFesuRN7v8/gViz1pUw24f6eweyfeankA/view', type: 'canva', note: 'Pitch Deck' },
        { title: 'Institutional Presentation Deck 3', url: 'https://www.canva.com/design/DAFil8nB7Ec/rUmh8CoXYEdummAgFBPhDg/view', type: 'canva', note: 'Design Deck' },
        { title: 'Institutional Presentation Deck 4', url: 'https://www.canva.com/design/DAFccgwuFqI/R--dHD2hPuOuWGLqWDS_bw/view', type: 'canva', note: 'Campaign Deck' },
        { title: 'Institutional Presentation Deck 5', url: 'https://www.canva.com/design/DAFf6eoOCBw/RqPOUv4iYzUjw_Uz1dqoTQ/view', type: 'canva', note: 'Marketing Deck' },
        { title: 'Institutional Presentation Deck 6', url: 'https://www.canva.com/design/DAFccbxq5BI/GeKxLImfUKclE9_ohoVYjg/view', type: 'canva', note: 'Creative Deck' },
      ],
    },
    {
      category: 'National Press & Media Archives',
      title: 'Economic Times, Times of India & Navbharat Times',
      description: 'Documented publications, editorials, and archived newspaper stories.',
      links: [
        { title: 'Economic Times Publication File 1', url: 'https://drive.google.com/file/d/1X0rKI6hYc7i6eajyur_I1kHzT7wOET9S/view?usp=sharing', type: 'drive', note: 'Google Drive PDF' },
        { title: 'Economic Times Publication File 2', url: 'https://drive.google.com/file/d/1X-IwFCmIBu9cXenWo1HaHEjS5InVwquG/view?usp=sharing', type: 'drive', note: 'Google Drive PDF' },
        { title: 'Economic Times Publication File 3', url: 'https://drive.google.com/file/d/1Wzc4fsIymSDRzNgJQDvRksiIA2sbCxkt/view?usp=sharing', type: 'drive', note: 'Google Drive PDF' },
        { title: 'Economic Times Publication File 4', url: 'https://drive.google.com/file/d/1WvqYahv_kxW5ze4J9KBYSnpaTE9T_ANn/view?usp=sharing', type: 'drive', note: 'Google Drive PDF' },
        { title: 'Sunday Navbharat Times (NBT) Editorial Post 1', url: 'https://www.facebook.com/SundayNBT/posts/4887638551261024', type: 'social', note: 'NBT Times Group' },
        { title: 'Sunday Navbharat Times (NBT) Editorial Post 2', url: 'https://www.facebook.com/SundayNBT/posts/4569159436442272', type: 'social', note: 'NBT Times Group' },
        { title: 'Sunday NBT Featured Photojournalism 1', url: 'https://www.facebook.com/SundayNBT/posts/4556014871090062', type: 'social', note: 'NBT Photo Story' },
        { title: 'Sunday NBT Featured Photojournalism 2', url: 'https://www.facebook.com/SundayNBT/posts/4399642033394014', type: 'social', note: 'NBT Photo Story' },
      ],
    },
    {
      category: 'Sports Journalism & Web Stories',
      title: 'Cricket Analysis & Global Sports Web Stories',
      description: 'Published sports breakdown essays, player profiles, and tournament coverage.',
      links: [
        { title: 'TOI Blog: Top 3 England players to watch out in IPL 2023', url: 'https://timesofindia.indiatimes.com/blogs/', type: 'article', note: 'Indiatimes Blogs' },
        { title: 'TOI Blog: Our new white ball captain', url: 'https://timesofindia.indiatimes.com/blogs/', type: 'article', note: 'Indiatimes Blogs' },
        { title: 'TOI Blog: The importance of career counselling in today’s time', url: 'https://timesofindia.indiatimes.com/blogs/', type: 'article', note: 'Indiatimes Blogs' },
        { title: 'TOI Blog: IPL 2020 Far from home', url: 'https://timesofindia.indiatimes.com/blogs/', type: 'article', note: 'Indiatimes Blogs' },
        { title: 'Howdy Sports: Life Post-Tennis Roger Federer', url: 'https://howdysports.com/web-stories/life-post-tennis-federer/', type: 'article', note: 'Web Story' },
        { title: 'Howdy Sports: FIFA World Cup 2022 Opening Ceremony', url: 'https://howdysports.com/web-stories/in-pictures-fifa-world-cup-2022-opening-ceremony/', type: 'article', note: 'Web Story' },
        { title: 'Howdy Sports: Who is Ghanim Al-Muftah?', url: 'https://howdysports.com/web-stories/who-is-ghanim-al-muftah/', type: 'article', note: 'Web Story' },
        { title: 'Howdy Sports: 5 Players Who Can Win Golden Boot', url: 'https://howdysports.com/web-stories/5-players-who-can-win-golden-boot-award-at-fifa-world-cup-2022/', type: 'article', note: 'Web Story' },
      ],
    },
  ] as VerifiedLinkGroup[],

  mediaShowcase: [
    {
      id: 'media-video-resume-primary',
      title: 'Official Video Resume — Aaditya Kanchan',
      type: 'Video Resume',
      duration: '3:15',
      thumbnail: '/src/assets/images/podcast_media_studio_1790678821635.jpg',
      description: 'An executive presentation introducing Aaditya’s integrated skill set across digital strategy, performance marketing, video storytelling, and marketing automation.',
      videoUrl: 'https://youtu.be/Ue55YQUBWK4',
      embedId: 'Ue55YQUBWK4',
      isMainVideoResume: true,
    },
    {
      id: 'media-video-cv-secondary',
      title: 'Executive Video CV (Alternative Edition)',
      type: 'Video Resume',
      duration: '2:45',
      thumbnail: '/src/assets/images/bennett_media_hub_1790678801390.jpg',
      description: 'A comprehensive video walkthrough of Aaditya’s campaign highlights, newsroom heritage, and client growth results.',
      videoUrl: 'https://youtu.be/zPpvvCgXy4k',
      embedId: 'zPpvvCgXy4k',
    },
    {
      id: 'media-interview-minister',
      title: 'Interview with Union Minister Arjun Ram Meghwal',
      type: 'Interview',
      duration: '14:20',
      thumbnail: '/src/assets/images/bennett_media_hub_1790678801390.jpg',
      description: 'Exclusive on-camera interview with the Union Minister of State (I/C) for Law & Justice and Parliamentary Affairs, Government of India.',
      videoUrl: 'https://youtu.be/YZ2rMa-K8Ww',
      embedId: 'YZ2rMa-K8Ww',
    },
    {
      id: 'media-podcast-kohli',
      title: 'Car Podcast: The Virat Kohli Phenomenon',
      type: 'Podcast',
      duration: '18:15',
      thumbnail: '/src/assets/images/podcast_media_studio_1790678821635.jpg',
      description: 'High-energy audio-visual car podcast analyzing modern batting masterclasses, mental endurance, and sports media branding.',
      videoUrl: 'https://youtu.be/RrmgV5cNxqc',
      embedId: 'RrmgV5cNxqc',
    },
    {
      id: 'media-video-shreyas',
      title: 'Sports Breakdown: The Rise of Shreyas Iyer',
      type: 'Sports Journalism',
      duration: '9:30',
      thumbnail: '/src/assets/images/meta_ads_case_study_1790678782494.jpg',
      description: 'Detailed tactical breakdown of middle-order stability, spin-hitting mechanics, and white-ball leadership.',
      videoUrl: 'https://youtu.be/eYxFwPdI2x0',
      embedId: 'eYxFwPdI2x0',
    },
    {
      id: 'media-bimaplan-explainer',
      title: 'Bimaplan: What is Insurance & Why is it Needed? (Hindi)',
      type: 'Brand Explainer',
      duration: '3:50',
      thumbnail: '/src/assets/images/meta_ads_case_study_1790678782494.jpg',
      description: 'Scripted and voiced by Aaditya Kanchan for Y-Combinator backed fintech startup Bimaplan to simplify micro-insurance in Hindi.',
      videoUrl: 'https://youtu.be/C2J941JZrMo',
      embedId: 'C2J941JZrMo',
    },
    {
      id: 'media-bu-guest-interview',
      title: 'Bennett University Guest Conclave Special',
      type: 'Interview',
      duration: '11:05',
      thumbnail: '/src/assets/images/bennett_media_hub_1790678801390.jpg',
      description: 'In-depth conversation with visiting university dignitaries and academic thought leaders on media ethics.',
      videoUrl: 'https://youtu.be/83vRf7ABzuc',
      embedId: '83vRf7ABzuc',
    },
    {
      id: 'media-bu-conclave-2',
      title: 'Bennett University Executive Dialogue',
      type: 'Interview',
      duration: '12:40',
      thumbnail: '/src/assets/images/bennett_media_hub_1790678801390.jpg',
      description: 'High-retention video dialogue capturing future opportunities in digital media and global communications.',
      videoUrl: 'https://youtu.be/140SUREFZN8',
      embedId: '140SUREFZN8',
    },
  ] as MediaItem[],

  publications: [
    {
      id: 'pub-et-series',
      title: 'The Economic Times (ET) Special Reportage Series',
      publication: 'The Economic Times (Times Group)',
      date: 'National Business Press',
      category: 'Business & Tech Journalism',
      excerpt: 'Four in-depth special investigative pieces published in The Economic Times examining corporate education partnerships, startup incubation, and technology shifts.',
      url: 'https://drive.google.com/file/d/1X0rKI6hYc7i6eajyur_I1kHzT7wOET9S/view?usp=sharing',
    },
    {
      id: 'pub-nbt',
      title: 'Sunday Special Cultural & Socio-Economic Columns',
      publication: 'Navbharat Times (Sunday NBT)',
      date: 'National Print & Digital',
      category: 'Editorial Column',
      excerpt: 'Comprehensive feature examining urban cultural transitions, youth employment trends, and digital adoption in Tier-1 and Tier-2 Indian cities.',
      url: 'https://www.facebook.com/SundayNBT/posts/4887638551261024',
    },
    {
      id: 'pub-toi-blogs',
      title: 'Times of India (TOI) Blogs: Sports & Education Columns',
      publication: 'The Times of India (TOI)',
      date: 'Indiatimes Editorial Network',
      category: 'Sports & Society',
      excerpt: 'Featured author of syndicated essays including "Top 3 England players to watch out in IPL 2023", "Our new white ball captain", and "The importance of career counselling in today’s time".',
    },
    {
      id: 'pub-aaft',
      title: 'Author Archive: Cinema, Creative Arts & Digital Storytelling',
      publication: 'AAFT Official Publications',
      date: 'Editorial Lead',
      category: 'Brand Publications',
      excerpt: 'Author of analytical guides on cinematic lighting, digital screenwriting, and social audience psychology for media aspirants.',
      url: 'https://aaft.com/blog/author/aaditya-kanchan/',
    },
    {
      id: 'pub-yka',
      title: 'Beirut Blasts & The Coldest December Since 1901',
      publication: 'Youth Ki Awaaz',
      date: 'News Breaker Award',
      category: 'Investigative & Breaking News',
      excerpt: 'Award-winning reportage on "Delhi Records Second-Coldest December Since 1901!", "Destroyed in seconds: Beirut blasts", and COVID prevention protocols.',
      url: 'https://www.youthkiawaaz.com/author/aaditya-kanchan/',
    },
    {
      id: 'pub-unnati-blogs',
      title: 'Agritech Innovation: Technologies in Agriculture & Farmer Realities',
      publication: 'Unnati Agri Publications',
      date: 'Agricultural Technology',
      category: 'Industry Research',
      excerpt: 'Authored in-depth policy analyses: "Impacts of New Technologies in Agriculture" and "Problems Faced by Farmers in India".',
      url: 'https://unnatiagri.com/impacts-of-new-technologies-in-agriculture',
    },
    {
      id: 'pub-careerguide',
      title: 'Hindi Career Guidance Blogs Series',
      publication: 'CareerGuide.com',
      date: 'Higher Education',
      category: 'Student Mentorship',
      excerpt: 'Extensive educational series covering Library Science pathways, student motivation during crisis, and cracking content writing interviews in Hindi.',
      url: 'https://www.careerguide.com/career/hindi-blogs/library-science',
    },
    {
      id: 'pub-bennett-times',
      title: 'Special Interview with Goonj Founder Anshu Gupta',
      publication: 'Bennett Times (Vol 1, Issue 4)',
      date: 'Campus Editorial',
      category: 'Social Impact Journalism',
      excerpt: 'In-depth interview exploring grassroots development, disaster relief, and circular clothing economy with Ramon Magsaysay Award winner Anshu Gupta.',
      url: 'https://www.bennett.edu.in/wp-content/uploads/2020/01/Bennett_Times_Vol1_Issue_4.pdf',
    },
  ] as PublicationItem[],

  education: [
    {
      id: 'mba-mica',
      degree: 'MBA (Master of Business Administration)',
      institution: 'MICA x Woolf University',
      period: 'Jul 2025 – Sep 2026',
      highlights: 'Advanced strategic brand management, digital marketing economics, customer centricity, and European ECTS accredited business leadership.',
      logoKey: 'mica',
    },
    {
      id: 'ma-manipal',
      degree: 'Masters in Journalism & Mass Communication',
      institution: 'Manipal University Jaipur',
      period: 'Sep 2022 – Nov 2024',
      highlights: 'End-to-End Media Production, Brand Storytelling & PR Management. NAAC A+ Accredited programme.',
      logoKey: 'manipal',
    },
    {
      id: 'pgc-upgrad',
      degree: 'PG Certification in Digital Marketing & Communications',
      institution: 'MICA & upGrad',
      period: 'Jun 2022 – Aug 2023',
      highlights: 'Specialization in Social Media & Content Marketing | Organic & Paid Growth, Viral Distribution & Campaign Optimization.',
      logoKey: 'mica',
    },
    {
      id: 'bjmc-bennett',
      degree: 'Bachelor in Journalism & Mass Communication (Hons)',
      institution: 'Bennett University, Times School of Media',
      period: 'Jun 2019 – Jul 2022',
      highlights: 'Specialized in Digital Media, Multimedia Journalism, Video Production & Digital Content Strategy. Graduated with Honors.',
      logoKey: 'bennett',
    },
  ] as EducationItem[],

  certifications: [
    {
      name: 'Meta Blueprint Awards (12 Courses Completed)',
      issuer: 'Meta / Facebook Ads',
      badge: 'Certified',
      date: 'Sep 2026',
    },
    {
      name: 'Fundamentals of Digital Marketing',
      issuer: 'Google',
      badge: 'Certified',
      date: 'Nov 2021',
    },
    {
      name: 'Introduction to Digital Journalism',
      issuer: 'Reuters',
      badge: 'Certified',
      date: 'Jun 2021',
    },
    {
      name: 'Claude AI Courses & Prompt Engineering',
      issuer: 'Anthropic',
      badge: 'Certified',
      date: 'Apr – Sep 2026',
    },
    {
      name: 'Fundamentals of Retention Marketing',
      issuer: 'WebEngage Gurugram',
      badge: 'Certified',
      date: 'Retention Certified',
    },
  ] as CertificationItem[],

  tools: [
    { name: 'Meta Ads', category: 'Performance' },
    { name: 'Google Ads', category: 'Performance' },
    { name: 'Meta Business Suite', category: 'Social Media' },
    { name: 'YouTube Studio', category: 'Video / Social' },
    { name: 'WebEngage', category: 'Automation' },
    { name: 'Infobip', category: 'Automation' },
    { name: 'Canva Pro', category: 'Design' },
    { name: 'WordPress', category: 'CMS' },
    { name: 'Adobe Creative Cloud', category: 'Creative' },
    { name: 'ChatGPT Pro', category: 'AI Tools' },
    { name: 'Claude Pro', category: 'AI Tools' },
    { name: 'Google Gemini Pro', category: 'AI Tools' },
    { name: 'Google Flow', category: 'Automation' },
    { name: 'Omni', category: 'Workflow' },
  ],

  beyondTheDesk: {
    passions: [
      'Traveling',
      'Photography',
      'Sports Journalism',
      'Watching Formula 1',
      'Playing Cricket',
      'Badminton',
      'Table Tennis',
      'Reading Newspaper',
    ],
    highlights: [
      {
        event: 'MotoGP Bharat (2023)',
        description: "Attended India's maiden Grand Prix at Buddh International Circuit; captured trackside frames and high-speed paddock journalism.",
      },
      {
        event: "ICC Men's Cricket World Cup 2023",
        description: 'Attended tournament fixture (IND vs AFG); matchday analysis and stadium crowd engagement coverage.',
      },
      {
        event: "ICC Men's T20 World Cup 2026",
        description: 'Attended international tournament fixture (SA vs ZIM); digital sports analysis and tournament highlights.',
      },
    ],
    creatorHandle: '@adikanshots',
    creatorBio: 'Visual storytelling, travel photography, sports moments, and street portraiture.',
  },
};
