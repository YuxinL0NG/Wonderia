export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface Testimonial {
  title: string;
  body: string;
  author: string;
  avatar: string;
}

export interface Benefit {
  title: string;
  body: string;
  icon: string;
}

export type ButtonVariant = "primary" | "ghost" | "outline";
