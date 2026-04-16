export interface SubItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: SubItem[];
}

export const mainNavigation: NavItem[] = [
  { label: 'About Us', href: '/about' },
  { 
    label: 'Services', 
    href: '/services', 
    hasDropdown: true,
    dropdownItems: [
      { label: 'General & Primary Care', href: '/services/general-primary-care' },
      { label: 'Maternal & Child Health', href: '/services/maternal-child' },
      { label: 'Specialist Clinics', href: '/services/specialist-clinics' },
      { label: 'Diagnostic Services', href: '/services/diagnostics' },
      { label: 'Surgical Services', href: '/services/surgical' },
      { label: 'Therapy & Rehabilitation', href: '/services/therapy-rehabilitation' },
      { label: 'Pharmacy Services', href: '/services/pharmacy' },
    ]
  },
  { label: 'Outreach', href: '/outreach', hasDropdown: true },
  { label: 'Customer Support', href: '/support', hasDropdown: true },
];