import { Metadata } from "next";
import SpectaclesClient from "./spectacles.client";

import text from "@/locales/fr/all.json";

const { spectacles } = text;

export const metadata: Metadata = {
  title: spectacles.metadata.title,
  description: spectacles.metadata.description,
};

export default function spectaclesServer() {
  return <SpectaclesClient />;
}
