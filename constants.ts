
import { ServicePackage } from './types';

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'standard',
    name: 'Standard',
    price: 5000,
    duration: '6 months',
    description: 'Focused on social media growth and tier 3 brand deals.',
    tier: 3,
    features: [
      'Social Media Management',
      'Content Strategy',
      'Tier 3 Brand Partnerships',
      'Monthly Performance Reports',
      'Basic PR Support'
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 10000,
    duration: '6 months',
    description: 'Advanced partnership acceleration and tier 2 brand deals.',
    tier: 2,
    features: [
      'All Standard Features',
      'Advanced Partnership Scouting',
      'Tier 2 Brand Partnerships',
      'Personal Branding Workshop',
      'Dedicated Account Manager'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 15000,
    duration: '6 months',
    description: 'Elite global management with tier 1 brand deals and 24/7 support.',
    tier: 1,
    features: [
      'All Growth Features',
      'Global Management',
      'Tier 1 Brand Partnerships',
      '24/7 Concierge Support',
      'Crisis Management & PR',
      'International Tax & Legal Referral'
    ]
  },
  {
    id: 'elite-enterprise',
    name: 'Elite Enterprise',
    price: 100000,
    duration: 'One-time fee',
    description: 'Elite global management with branding (Standard, Growth, and Premium) and everything in Premium.',
    tier: 'elite',
    features: [
      'All Premium Features',
      'Full Brand Identity Design',
      'Custom Website & App Development',
      'Private Jet & Luxury Travel Management',
      'Venture Capital & Investment Advisory',
      'Legacy Building Strategy'
    ]
  }
];
