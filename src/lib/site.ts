import siteData from '@data/site.json';

// 型定義
export interface NavItem {
  label: string;
  href: string;
}

// Recruit Magazine 用の型定義
export interface CompanyFact {
  number: number;
  unit: string;
  label: string;
  size: 'large' | 'medium' | 'small';
}

export interface HistoryItem {
  year: number;
  event: string;
}

export interface Job {
  id: string;
  title: string;
  catchcopy: string;
  photo: string;
  description: string;
  duties: string[];
  appeal: string;
}

export interface DayScheduleItem {
  time: string;
  label: string;
  description?: string;
  thumbnail?: string;
}

export interface DaySchedule {
  jobId: string;
  title: string;
  items: DayScheduleItem[];
}

export interface CareerPathStep {
  stage: string;
  title: string;
  description: string;
}

export interface EmployeeProfile {
  label: string;
  value: string;
}

export interface EmployeeInterview {
  question: string;
  answer: string;
}

export interface Employee {
  id: string;
  name: string;
  nameKana: string;
  position: string;
  joinYear: number;
  joinType: 'new' | 'mid';
  photo: {
    main: string;
    sub?: string[];
  };
  profile: EmployeeProfile[];
  catchcopy: string;
  interview: EmployeeInterview[];
  quote: string;
  relatedJobId: string;
}

export interface CrosstalkMessage {
  speaker: string;
  text: string;
}

export interface Crosstalk {
  title: string;
  description: string;
  participants: string[];
  conversation: CrosstalkMessage[];
}

export interface BenefitTestimonial {
  quote: string;
  author: string;
  position: string;
  photo: string;
}

export interface BenefitHighlight {
  title: string;
  description: string;
  testimonial: BenefitTestimonial;
}

export interface BenefitCategory {
  name: string;
  items: string[];
}

export interface Benefits {
  highlights: BenefitHighlight[];
  categories: BenefitCategory[];
}

export interface Training {
  period: string;
  title: string;
  duration?: string;
  description: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  size: 'large' | 'medium' | 'small';
}

export interface Position {
  id: string;
  jobTitle: string;
  badge?: string;
  employmentType: string;
  description: string;
  requirements: string;
  preferredQualifications?: string;
  location: string;
  workHours: string;
  salary: string;
  bonus: string;
  raise?: string;
  holidays: string;
  benefits: string;
  selectionProcess: string;
}

export interface SelectionFlowStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export interface RecruitCTA {
  primary: { text: string; href: string };
  secondary: { text: string; href: string };
  messages: {
    top: string;
    people: string;
    culture: string;
    default: string;
  };
}

export interface RecruitContact {
  email: string;
  phone: string;
  department: string;
  hours: string;
}

export interface RecruitData {
  concept: {
    mainCopy: string;
    subCopy: string;
    description: string;
  };
  ceo: {
    name: string;
    photo: string;
    message: string;
    signature?: string;
  };
  philosophy: {
    title: string;
    statement: string;
    description: string;
  };
  companyFacts: CompanyFact[];
  history: HistoryItem[];
  jobs: Job[];
  daySchedule: DaySchedule;
  careerPath: CareerPathStep[];
  employees: Employee[];
  crosstalk?: Crosstalk;
  benefits: Benefits;
  training: Training[];
  gallery: GalleryItem[];
  positions: Position[];
  selectionFlow: SelectionFlowStep[];
  faq: FAQCategory[];
  cta: RecruitCTA;
  contact: RecruitContact;
}

export interface SiteData {
  site: {
    name: string;
    description: string;
    url: string;
    logo: string;
    ogImage: string;
  };
  navigation: {
    main: NavItem[];
    footer: NavItem[];
    cta: NavItem;
  };
  company: {
    name: string;
    nameShort: string;
    nameEn: string;
    id: string;
    ceo: string;
    established: string;
    capital: string;
    revenue: string;
    employees: string;
    business: string;
    license: string;
    catchphrase: string;
    mission: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    phoneTel: string;
    fax: string;
    email: string;
    hours: string;
    recruitContact: string;
  };
  locations: {
    headquarters: {
      name: string;
      zipCode: string;
      address: string;
      access: string;
      mapUrl: string;
    };
    branches: Array<{
      name: string;
      zipCode: string;
      address: string;
      access: string;
    }>;
  };
  social: {
    instagram: string;
  };
  images: {
    logo: string;
    logoSquare: string;
    logoOnly: string;
  };
  seo: {
    titleSuffix: string;
    defaultTitle: string;
    defaultDescription: string;
  };
  brand: {
    primaryColor: string;
    primaryColorLight: string;
    accentColor: string;
  };
  recruit: RecruitData;
  // 互換性のためのオプショナルフィールド
  stats?: unknown;
  history?: unknown;
  services?: unknown;
  works?: unknown;
  news?: unknown;
  ceo?: unknown;
}

// サイトデータをエクスポート
export const site: SiteData = siteData as SiteData;

// よく使うデータへのショートカット
export const navigation = site.navigation;
export const company = site.company;
export const contact = site.contact;
export const locations = site.locations;
export const seo = site.seo;
export const images = site.images;
export const recruit = site.recruit;

// ヘルパー関数
export function getEmployeeById(id: string): Employee | undefined {
  return recruit.employees.find(emp => emp.id === id);
}

export function getJobById(id: string): Job | undefined {
  return recruit.jobs.find(job => job.id === id);
}

export function getPositionById(id: string): Position | undefined {
  return recruit.positions.find(pos => pos.id === id);
}
