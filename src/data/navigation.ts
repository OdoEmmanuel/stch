export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export const mainNavigation: NavItem[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Outreach', href: '/outreach', hasDropdown: true },
  { label: 'Customer Support', href: '/support', hasDropdown: true },
];