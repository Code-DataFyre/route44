/**
 * Constants File
 * Centralized place for all app-wide constants
 * Improves maintainability and consistency
 */

// Navigation Links
export const NAV_LINKS = [
  { label: "Services", to: "/services" },
  { label: "Media Hub", to: "/media" },
  { label: "Tracking", to: "/tracking" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

// Colors (aligned with tailwind config)
export const COLORS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
  ERROR: "error",
};

// Reusable CSS Classes
export const STYLES = {
  // Container
  CONTAINER: "max-w-container-max mx-auto px-6 md:px-margin-desktop",

  // Typography
  DISPLAY_LARGE: "font-display-lg text-display-lg",
  HEADLINE_LARGE: "font-headline-lg text-headline-lg",
  BODY_LARGE: "font-body-lg text-body-lg",

  // Padding
  PADDING_SECTION: "py-24 px-6 md:px-margin-desktop",
  PADDING_HERO: "pb-24 px-6 md:px-margin-desktop",

  // Buttons
  BUTTON_PRIMARY:
    "px-8 py-4 bg-secondary text-on-secondary font-label-md inline-flex items-center coral-glow hover:brightness-110 transition-all",
  BUTTON_SECONDARY:
    "border border-white/30 text-white px-8 py-4 font-label-md font-bold hover:bg-white/10 backdrop-blur-sm transition-all",

  // Cards
  CARD_GLASS: "glass-panel p-8",

  // Grid
  GRID_3_COLS: "grid grid-cols-1 md:grid-cols-3 gap-gutter",
  GRID_2_COLS: "grid grid-cols-1 md:grid-cols-2 gap-gutter",
};

// Form Options
export const FORM_OPTIONS = {
  FREIGHT_TYPES: [
    { value: "dry-van", label: "Dry Van" },
    { value: "refrigerated", label: "Refrigerated" },
    { value: "flatbed", label: "Flatbed" },
    { value: "tanker", label: "Tanker" },
  ],
  URGENCY_LEVELS: [
    { value: "standard", label: "Standard (5-7 days)" },
    { value: "express", label: "Express (2-3 days)" },
    { value: "urgent", label: "Urgent (Next day)" },
  ],
};

// Service Categories
export const SERVICES = [
  {
    icon: "local_shipping",
    title: "Contract Haulage",
    desc: "High-volume, scheduled distribution networks utilising Euro 6 compliant tractor units.",
    color: "primary",
    href: "#haulage",
  },
  {
    icon: "warning",
    title: "ADR & Hazardous",
    desc: "Certified transport for regulated and dangerous chemicals.",
    color: "secondary",
    href: "#specialist",
  },
  {
    icon: "ac_unit",
    title: "Chilled Logistics",
    desc: "Multi-temp controlled transit for perishables.",
    color: "primary",
    href: "#specialist",
  },
  {
    icon: "inventory_2",
    title: "Warehousing",
    desc: "Strategic storage solutions at Northampton hub.",
    color: "primary",
    href: "#warehousing",
  },
];

// Trust Bar Items
export const TRUST_ITEMS = [
  { label: "RHA 2024", icon: "verified" },
  { label: "ISO Quality Certified", icon: "workspace_premium" },
  { label: "Qargo System Tracked", icon: "monitoring" },
];

// Media Filters
export const MEDIA_FILTERS = [
  "All Intelligence",
  "Supply Chain Trends",
  "Fleet Dispatch",
  "Whitepapers",
];

// Social Media Links
export const SOCIAL_MEDIA = [
  {
    name: "LinkedIn",
    icon: "share",
    url: "https://linkedin.com",
    label: "Follow us on LinkedIn",
  },
  {
    name: "Twitter",
    icon: "groups",
    url: "https://twitter.com",
    label: "Follow us on Twitter",
  },
  {
    name: "Facebook",
    icon: "hub",
    url: "https://facebook.com",
    label: "Follow us on Facebook",
  },
  {
    name: "Instagram",
    icon: "image",
    url: "https://instagram.com",
    label: "Follow us on Instagram",
  },
];

// Footer Links
export const FOOTER_LINKS = {
  HAULAGE: [
    "Contract Haulage",
    "Specialist Logistics",
    "European Distribution",
    "Ad-hoc Freight",
  ],
  COMPLIANCE: [
    "RHA Conditions",
    "ISO Certifications",
    "DVSA Excellence",
    "ESG Commitments",
  ],
  LEGAL: [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Settings",
    "Carrier Liability",
  ],
};
