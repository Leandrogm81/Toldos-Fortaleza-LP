export type PolycarbonateType = 'compacto' | 'alveolar';

export interface PolycarbonateSpec {
  id: PolycarbonateType;
  title: string;
  description: string;
  features: string[];
  visualProperty: string;
  transparencyRating: number;
  resistanceRating: number;
  thermalRating: number;
  priceFactor: number;
}

export type DriveType = 'manual' | 'motorizado';

export type FrameColor = 'preto' | 'bronze' | 'branco';

export interface SimulatorState {
  width: number; // in meters (from 1.5 to 10.0)
  length: number; // in meters (from 1.5 to 8.0)
  polyType: PolycarbonateType;
  driveType: DriveType;
  frameColor: FrameColor;
  sheetColor: 'transparente' | 'fume' | 'bronze' | 'leitoso';
}

export interface Review {
  id: number;
  name: string;
  location: string;
  comment: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: 'gourmet' | 'garagem' | 'piscina' | 'corredor';
  imageUrl: string;
  description: string;
}
