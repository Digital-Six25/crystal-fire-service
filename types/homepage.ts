// types/homepage.ts

export interface HomepageData {
  hero: HeroSection;
  service: ServiceSection;
  maintain: MaintainSection;
  certifications: CertificationSection;
}

export interface HeroSection {
  pill: string;
  title: string;
  subtitle: string;
  buttons: {
    button: {
      label: string;
      url: string;
    };
  }[];
  image: string | null; // resolved URL
  certifications: CertificationImage[];
}

export interface CertificationImage {
  id: number;
  url: string | null;
}

export interface ServiceSection {
  pill: string;
  title: string;
  subtitle: string;
  cards: ServiceCard[];
  cta: {
    title: string;
    subtitle: string;
    buttons: {
      button: {
        label: string;
        url: string;
      };
    }[];
  };
}

export interface ServiceCard {
  icon: string | null; // resolved URL
  title: string;
  subtitle: string;
  types: { type: string }[];
  button: {
    label: string;
    url: string;
  };
}

export interface MaintainSection {
  pill: string;
  title: string;
  cards: MaintainCard[];
}

export interface MaintainCard {
  icon: string | null; // resolved URL
  title: string;
  subtitle: string;
  types: { type: string }[];
}

export interface CertificationSection {
  pill: string;
  title: string;
  subtitle: string;
  cards: CertificationCard[];
}

export interface CertificationCard {
  title: string;
  subtitle: string;
  image: string | null; // resolved URL
}
