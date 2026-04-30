export const SITE_CONFIG = {
  name: "Wonderia Piano",
  slogan: "A magical piano adventure",
  email: "support@wonderia.com",
  company: "MangoFuture Ltd.",
};

export const NAV_ITEMS = [
  { label: "About Us", href: "#about", icon: "Info" },
  { label: "Features", href: "#benefits", icon: "Star" },
  { label: "Contact", href: "/contact", icon: "Mail" },
] as const;

export const SOCIAL_LINKS = {
  youtube: "#",     // TODO: replace with real URL
  reddit: "#",      // TODO: replace with real URL
  appStore: "#",    // TODO: replace with real App Store URL
  googlePlay: "#",  // TODO: replace with real Google Play URL
};

export const HASHTAG = "#mywonderiapiano";

export const TESTIMONIALS = [
  {
    title: "Finally playing the songs I love",
    body: "I've wanted to learn piano for 20 years but always felt intimidated. Wonderia makes it so approachable and joyful. Proud :)))",
    author: "Mark, US",
    avatar: "/images/avatars/mark.jpg",
  },
  {
    title: "My daily 'me-time'",
    body: "After a long day at the office, sitting down with Wonderia is how I decompress. The game-like flow helps me switch off my brain and just focus on the rhythm. It's genuinely addictive.",
    author: "Julian, UK",
    avatar: "/images/avatars/julian.jpg",
  },
  {
    title: "Like having a study buddy 24/7",
    body: "Having that constant encouragement and instant correction is what kept me from giving up in the first month. Now, I'm playing Bach!",
    author: "Lily, UK",
    avatar: "/images/avatars/lily.jpg",
  },
] as const;

export const BENEFITS = [
  {
    title: "Game-based Learning",
    body: "Transform tedious drills into magical adventures. Wonderia turns music into a game keeping you excited to level up.",
    icon: "Gamepad2",
  },
  {
    title: "Real-time Feedback",
    body: "No more guessing if it's right. Wonderia listens as they play, providing instant guidance and gentle corrections.",
    icon: "Mic",
  },
  {
    title: "Never Practice Alone",
    body: "Meet Momo, your musical buddy. Momo ensures every session feels like a team effort.",
    icon: "Users",
  },
] as const;
