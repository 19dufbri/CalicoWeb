import { ContactPage } from ".";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact" },
    { name: "description", content: "Contact" },
  ];
}

export default function Contact() {
  return <ContactPage />;
}
