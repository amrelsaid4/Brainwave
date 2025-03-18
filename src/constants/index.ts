import { benefitIcon1, benefitIcon2, benefitIcon3, benefitIcon4, benefitImage2, chromecast, disc02, discord, discordBlack, facebook, figma, file02, framer, homeSmile, instagram, notification2, notification3, notification4, notion, photoshop, plusSquare, protopie, raindrop, recording01, recording03, roadmap1, roadmap2, roadmap3, roadmap4, searchMd, slack, sliders04, telegram, twitter, yourlogo } from "../assets/indext";



interface NavigationItem {
  id: string;
  title: string;
  url: string;
  onlyMobile?: boolean;
}

export const navigation: NavigationItem[] = [
  { id: "0", title: "Features", url: "#features" },
  { id: "1", title: "Pricing", url: "#pricing" },
  { id: "2", title: "How to use", url: "#how-to-use" },
  { id: "3", title: "Roadmap", url: "#roadmap" },
  { id: "4", title: "New account", url: "#signup", onlyMobile: true },
  { id: "5", title: "Sign in", url: "#login", onlyMobile: true },
];

export const heroIcons: string[] = [homeSmile, file02, searchMd, plusSquare];
export const notificationImages: string[] = [notification4, notification3, notification2];
export const companyLogos: string[] = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
export const brainwaveServices: string[] = ["Photo generating", "Photo enhance", "Seamless Integration"];
export const brainwaveServicesIcons: string[] = [recording03, recording01, disc02, chromecast, sliders04];

// تعريف نوع الـ Roadmap
interface RoadmapItem {
  id: string;
  title: string;
  text: string;
  date: string;
  status: "done" | "progress";
  imageUrl: string;
  colorful?: boolean;
}

export const roadmap: RoadmapItem[] = [
  { id: "0", title: "Voice recognition", text: "Enable the chatbot to understand and respond to voice commands...", date: "May 2023", status: "done", imageUrl: roadmap1, colorful: true },
  { id: "1", title: "Gamification", text: "Add game-like elements, such as badges or leaderboards...", date: "May 2023", status: "progress", imageUrl: roadmap2 },
  { id: "2", title: "Chatbot customization", text: "Allow users to customize the chatbot's appearance and behavior...", date: "May 2023", status: "done", imageUrl: roadmap3 },
  { id: "3", title: "Integration with APIs", text: "Allow the chatbot to access external data sources...", date: "May 2023", status: "progress", imageUrl: roadmap4 },
];

export const collabText: string = "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

interface CollabContentItem {
  id: string;
  title: string;
  text?: string;
}

export const collabContent: CollabContentItem[] = [
  { id: "0", title: "Seamless Integration", text: collabText },
  { id: "1", title: "Smart Automation" },
  { id: "2", title: "Top-notch Security" },
];

interface CollabApp {
  id: string;
  title: string;
  icon: string;
  width: number;
  height: number;
}

export const collabApps: CollabApp[] = [
  { id: "0", title: "Figma", icon: figma, width: 26, height: 36 },
  { id: "1", title: "Notion", icon: notion, width: 34, height: 36 },
  { id: "2", title: "Discord", icon: discord, width: 36, height: 28 },
  { id: "3", title: "Slack", icon: slack, width: 34, height: 35 },
  { id: "4", title: "Photoshop", icon: photoshop, width: 34, height: 34 },
  { id: "5", title: "Protopie", icon: protopie, width: 34, height: 34 },
  { id: "6", title: "Framer", icon: framer, width: 26, height: 34 },
  { id: "7", title: "Raindrop", icon: raindrop, width: 38, height: 32 },
];

interface PricingPlan {
  id: string;
  title: string;
  description: string;
  price: string | null;
  features: string[];
}

export const pricing: PricingPlan[] = [
  { id: "0", title: "Basic", description: "AI chatbot, personalized recommendations", price: "0", features: ["An AI chatbot that can understand your queries", "Personalized recommendations based on your preferences", "Ability to explore the app and its features without any cost"] },
  { id: "1", title: "Premium", description: "Advanced AI chatbot, priority support, analytics dashboard", price: "9.99", features: ["An advanced AI chatbot that can understand complex queries", "An analytics dashboard to track your conversations", "Priority support to solve issues quickly"] },
  { id: "2", title: "Enterprise", description: "Custom AI chatbot, advanced analytics, dedicated account", price: null, features: ["An AI chatbot that can understand your queries", "Personalized recommendations based on your preferences", "Ability to explore the app and its features without any cost"] },
];

interface Benefit {
  id: string;
  title: string;
  text: string;
  backgroundUrl: string;
  iconUrl: string;
  imageUrl: string;
  light?: boolean;
}

export const benefits: Benefit[] = [
  { id: "0", title: "Ask anything", text: "Lets users quickly find answers...", backgroundUrl: "./src/assets/benefits/card-1.svg", iconUrl: benefitIcon1, imageUrl: benefitImage2 },
  { id: "1", title: "Improve everyday", text: "The app uses natural language processing...", backgroundUrl: "./src/assets/benefits/card-2.svg", iconUrl: benefitIcon2, imageUrl: benefitImage2, light: true },
  { id: "2", title: "Connect everywhere", text: "Connect with the AI chatbot from anywhere...", backgroundUrl: "./src/assets/benefits/card-3.svg", iconUrl: benefitIcon3, imageUrl: benefitImage2 },
  { id: "3", title: "Fast responding", text: "Lets users quickly find answers...", backgroundUrl: "./src/assets/benefits/card-4.svg", iconUrl: benefitIcon4, imageUrl: benefitImage2, light: true },
  { id: "4", title: "Ask anything", text: "Lets users quickly find answers...", backgroundUrl: "./src/assets/benefits/card-5.svg", iconUrl: benefitIcon1, imageUrl: benefitImage2 },
  { id: "5", title: "Improve everyday", text: "The app uses natural language processing...", backgroundUrl: "./src/assets/benefits/card-6.svg", iconUrl: benefitIcon2, imageUrl: benefitImage2 },
];

interface Social {
  id: string;
  title: string;
  iconUrl: string;
  url: string;
}

export const socials: Social[] = [
  { id: "0", title: "Discord", iconUrl: discordBlack, url: "#" },
  { id: "1", title: "Twitter", iconUrl: twitter, url: "#" },
  { id: "2", title: "Instagram", iconUrl: instagram, url: "#" },
  { id: "3", title: "Telegram", iconUrl: telegram, url: "#" },
  { id: "4", title: "Facebook", iconUrl: facebook, url: "#" },
];
