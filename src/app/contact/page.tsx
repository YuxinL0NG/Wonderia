import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — Wonderia Piano",
  description: "Piano is hard, but talking to us isn't. Get in touch with the Wonderia team.",
};

export default function ContactPage() {
  return <ContactClient />;
}
