import { Metadata } from "next";
import text from "@/locales/fr/all.json";
import NewsClient from "./news.client";

const { news } = text;

export const metadata: Metadata = {
  title: news.metadata.title,
  description: news.metadata.description,
};

const NewsServer: React.FC = () => {
  return <NewsClient />;
};

export default NewsServer;
