import { Metadata } from "next";
import text from "@/locales/fr/all.json";
import MembresClient from "./membres.client";

const { membres } = text;

export const metadata: Metadata = {
  title: membres.metadata.title,
  description: membres.metadata.description,
};

export default function Membres() {
  return <MembresClient />;
}
