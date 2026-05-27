export type Experience = {
  company: string
  role: string
  start: string
  end: string
  blurb: string
  highlights?: string[]
  metrics?: { label: string; value: string }[]
}

export const experience: Experience[] = [
  {
    company: 'Workday',
    role: 'Sr Product Designer — Talent Management & Benefits',
    start: '2019',
    end: 'Present',
    blurb:
      'Designing talent management and benefits experiences at enterprise scale. Currently focused on integrating AI into core HR workflows.',
  },
  {
    company: 'Twine (John Hancock)',
    role: 'Lead Product Designer — Core App Experience',
    start: 'Jan 2019',
    end: 'Oct 2019',
    blurb:
      'Led design for everything post-onboarding in the Twine savings + investing app on iOS and web.',
    metrics: [
      { label: 'Apple App of the Day', value: '3×' },
      { label: 'App Store rating', value: '4.6' },
      { label: 'AUM', value: '$20M' },
      { label: 'Engaged users', value: '30K' },
    ],
    highlights: [
      'Drove design from inception through hi-fi delivery on the core app surface',
      'Partnered with Research, Marketing, Legal, Product, Engineering, Data, Support',
      'Helped lead design sprints and design-corner critique sessions',
      'Extended an existing design system and introduced new patterns for mobile + web',
    ],
  },
  {
    company: 'Walmart Labs — Sam’s Club',
    role: 'Lead Product Designer — Sam’s Club Mobile App',
    start: 'Aug 2017',
    end: 'Sept 2018',
    blurb:
      'Owned mobile design for the Sam’s Club shopping experience across iPhone, iPad, and Android, doing ~$1M/day in transactions.',
    metrics: [
      { label: 'Annualized GMV from FOI', value: '$37M' },
      { label: 'App GMV lift', value: '3%' },
    ],
    highlights: [
      'Took projects from inception to delivery on all four platforms',
      'Presented to CEO and VP of Product before engineering handoff',
      'Led brainstorm and review sessions to foster cross-team collaboration',
    ],
  },
  {
    company: 'Verifone',
    role: 'UX Design Manager — Commerce Platform',
    start: 'Jan 2016',
    end: 'June 2017',
    blurb:
      'Led design for a B2B2C payments ecosystem — Android terminal app, App Store app, web admin tools — for big banks and small merchants. Won the 2017 Design Award.',
    highlights: [
      'Designed an entire payments ecosystem from inception through implementation',
      'Built an Atomic Design system and got engineering buy-in to ship it',
      'Managed a small internal team plus a 5-person external design agency',
      'Presented the UX vision to the CEO and board and got approval to move forward',
    ],
  },
  {
    company: 'Clip',
    role: 'Head of Design (Employee #2)',
    start: 'June 2013',
    end: 'Jan 2016',
    blurb:
      'Founding designer for a Mexican payments startup. Spent the first 18 months as Head of Design and sole IC, then built and led the design team after Series B.',
    metrics: [
      { label: 'Pesos processed', value: '$1B+' },
      { label: 'Transactions', value: '7.7M+' },
      { label: 'Merchants', value: '30K+' },
    ],
    highlights: [
      'Set UX strategy and vision; designed the process',
      'Took Clip from concept through implementation on iOS, Android, and Windows Phone',
      'Managed internal team plus external design, IxD, branding, and packaging agencies',
    ],
  },
  {
    company: 'VISA',
    role: 'Sr UX Lead — VISA Checkout',
    start: 'March 2011',
    end: 'May 2013',
    blurb:
      'Led UX design for VISA Checkout, built on the UltimatePay 2.0 platform VISA acquired with PlaySpan. Contributed to a pre-Apple Pay contactless solution that informed VISA’s partnership with Apple.',
    highlights: [
      'Built a small internal team plus a 5-designer agency (LabZero)',
      'Worked on a pre-Apple Pay contactless solution used in the Apple Pay partnership',
      'Focused on a diverse team and a healthy design culture',
    ],
  },
  {
    company: 'PlaySpan',
    role: 'Sr UX Designer — UltimatePay',
    start: 'May 2010',
    end: 'March 2011',
    blurb:
      'Redesigned UltimatePay from the ground up. Facebook and Disney were first clients. VISA acquired PlaySpan for $190M to use the platform for VISA Checkout.',
  },
  {
    company: 'FanSnap',
    role: 'UX Designer',
    start: 'Feb 2009',
    end: 'May 2010',
    blurb:
      'Led UX for ticket search and the interactive seat maps that still power SeatGeek today.',
  },
  {
    company: 'Doostang',
    role: 'Sr UX/UI Designer & Front End Developer',
    start: 'Nov 2007',
    end: 'Jan 2009',
    blurb:
      'Redesigned a social network for finance professionals. Grew from <100K to >500K active users while I was there.',
  },
  {
    company: 'Teqlo',
    role: 'UX/UI Designer',
    start: 'July 2006',
    end: 'Nov 2007',
    blurb:
      'Designed an early SaaS application platform. Logo and brand work in addition to UX.',
  },
  {
    company: 'E-Book Systems',
    role: 'Web Designer & Front End Developer',
    start: 'Nov 2003',
    end: 'July 2006',
    blurb:
      'Designed and shipped the e-book store and support site; converted print magazines to a digital flip-book format.',
  },
]

export type Skill = { title: string; details: string }

export const skills: Skill[] = [
  {
    title: 'Product design',
    details:
      'Strategy, IA, interaction design, visual design, and prototyping across mobile and web. Comfortable from zero-to-one through scaled platform work.',
  },
  {
    title: 'Systems thinking',
    details:
      'Design systems, component libraries, and process design. Built atomic systems at Verifone, Sam’s, and Twine and contribute to Workday’s.',
  },
  {
    title: 'Research & validation',
    details:
      'Stakeholder interviews, on-site observation, in-club and in-merchant testing, comparative usability against the market.',
  },
  {
    title: 'Business framing',
    details:
      'Tying design decisions to GMV, conversion, AUM, NPS, and retention. Comfortable presenting to CEO, board, and cross-functional leadership.',
  },
  {
    title: 'AI in design',
    details:
      'Currently integrating AI into talent management workflows at Workday. Building this site with AI-assisted tooling end-to-end.',
  },
  {
    title: 'Leadership',
    details:
      'Built and managed teams at Clip, Verifone, and VISA; managed external agencies (LabZero, Momentum); IC at heart.',
  },
]

export type Tool = string
export const tools: Tool[] = [
  'Figma',
  'FigJam',
  'Principle',
  'Framer',
  'Sketch',
  'InVision',
  'Pencil & sketchbook',
  'React + TypeScript',
  'AI-assisted prototyping',
]

export type Education = { school: string; degree: string; note?: string }
export const education: Education[] = [
  {
    school: 'San Jose State University',
    degree: 'BA, Graphic Design',
  },
  {
    school: 'San Jose State University',
    degree: 'Minor, Photography',
  },
  {
    school: 'Academy of Art University',
    degree: 'MFA, Graphic Design',
    note: 'Coursework, 2004–2007',
  },
]
