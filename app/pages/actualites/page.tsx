import { Metadata } from "next";
import text from "@/locales/fr/all.json";
import NewsClient from "./news.client";

const { news } = text;

export const metadata: Metadata = {
  title: news.metadata.title,
  description: news.metadata.description,
};

export default function newsServer() {
  return <NewsClient />;
}
