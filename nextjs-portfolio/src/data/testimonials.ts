export type Testimonial = {
  author: string;
  rating: number;
  projectTitle: string;
  quote: string;
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    author: "Austin L.",
    rating: 5,
    projectTitle: "n8n Automation Workflows Specialist",
    quote:
      "Best freelancer I've ever worked with, always available, knows his stuff and even suggested extra add-ons to help my project, couldn't have asked for more… Highly recommend.",
    featured: true,
  },
  {
    author: "Robert D.",
    rating: 4.8,
    projectTitle: "Email Automation for Travel Agency",
    quote:
      "Salmen was everything I was hoping for. He was knowledgeable in every area where I needed him to be… He was always professional, and always a pleasure to work with. I would hire him again without hesitation.",
  },
  {
    author: "Jørgen G.",
    rating: 5,
    projectTitle: "Ubuntu Server Troubleshooting",
    quote:
      "Helpful, easy going — goes directly to the goal of the project. Technical insight and supporting not only what you have requested. Great.",
  },
  {
    author: "Arban C.",
    rating: 5,
    projectTitle: "Vapi.ai Conversational Flow Developer",
    quote: "I would hire him again.",
  },
  {
    author: "Remco Willem T.",
    rating: 5,
    projectTitle: "n8n Google OAuth Setup",
    quote: "Great working with him, solved the issue professional and fast!",
  },
  {
    author: "Austin L.",
    rating: 5,
    projectTitle: "Bug fixes — 22nd project",
    quote: "Delivered early and perfect.",
  },
];
