import PageHead from "@/components/shared/page-head/page-head";
import text from "@/locales/fr/all.json";
import NewsClient from "@/components/views/actualites/news-view";

const { news } = text;

const NewsServer: React.FC = () => {
  return (
    <>
      <PageHead {...news.metadata} />
      <NewsClient />
    </>
  );
};

export default NewsServer;
