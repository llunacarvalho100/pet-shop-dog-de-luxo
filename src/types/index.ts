/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BusinessInfo {
  name: string;
  slogan: string;
  phone: string;
  phoneFormatted: string;
  phoneCallUrl: string;
  whatsappNumber: string;
  whatsappUrl: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  plusCode: string;
  googleRating: number;
  reviewCount: number;
  openingHoursDescription: string;
  googleMapsUrl: string;
}

export type ServiceCategory = 'hygiene' | 'puppy' | 'transport' | 'boutique' | 'spa';

export interface PetService {
  id: string;
  title: string;
  subtitle: string;
  category: ServiceCategory;
  durationMinutes: number;
  tag: string;
  description: string;
  highlights: string[];
  priceFrom: number;
  featured?: boolean;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  relativeTime: string;
  text: string;
  serviceCategory: ServiceCategory;
  avatarInitials: string;
  highlightPhrase: string;
}

export interface NeighborhoodRate {
  id: string;
  name: string;
  estimatedMinutes: string;
  feeAmount: number;
  coverageArea: string;
  isHeadquarterZone: boolean;
}

export type PetSize = 'pequeno' | 'medio' | 'grande' | 'gigante';
export type PreferredShift = 'manha' | 'tarde' | 'qualquer';

export interface BookingRequest {
  tutorName: string;
  tutorPhone: string;
  petName: string;
  petBreed: string;
  petSize: PetSize;
  serviceId: string;
  preferredDay: string;
  preferredShift: PreferredShift;
  needsTaxiDog: boolean;
  neighborhoodId: string;
  notes: string;
}

export interface BookingValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface BusinessStatus {
  isOpen: boolean;
  statusLabel: string;
  detailLabel: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
