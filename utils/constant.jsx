import { Mail, Phone, MapPin } from "lucide-react";
export const HeaderNav = [
  {
    id: 1,
    name: "Home",
    path: "",
  },
  {
    id: 2,
    name: "About",
    path: "about",
  },
  {
    id: 3,
    name: "FactCheck Link",
    path: "https://blog.thelinkguard.com",
  },
  {
    id: 4,
    name: "",
    path: "",
  },
];

export const pageLinks = [
  {
    id: 1,
    text: "Home",
    path: "",
  },
  {
    id: 2,
    text: "About Us",
    path: "about",
  },
  {
    id: 3,
    text: "Blog",
    path: "blog",
  },
  {
    id: 4,
    text: "Contact Us",
    path: "contact",
  },

  {
    id: 6,
    text: "FAQs",
    path: "faqs",
  },
];
export const materials = [
  {
    id: 1,
    text: "Privacy Policy",
    path: "privacypolicy",
  },
  {
    id: 2,
    text: "Terms of Service",
    path: "termsofservice",
  },
  {
    id: 3,
    text: "Cookie Policy",
    path: "cookiepolicy",
  },
  {
    id: 4,
    text: "",
    path: "",
  },
];

export const informations = [
  {
    id: 1,
    text: "linkguard1@gmail.com",
    path: "linkguard1@gmail.com",
    icon: <Mail size={16} className="mr-2" />,
  },
  {
    id: 2,
    text: "+234 8130333018",
    path: "+234 8130333018",
    icon: <Phone size={16} className="mr-2" />,
  },
  {
    id: 3,
    text: "12, Station Road, G.R.A, Ilorin.",
    path: "address",
    icon: <MapPin size={16} className="mr-2" />,
  },
  {
    id: 4,
    text: "",
    path: "",
    icon: null,
  },
];
