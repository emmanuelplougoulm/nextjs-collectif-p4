import Head from "next/head";

type PageHeadProps = {
  title: string;
  description: string;
};

// The Pages Router ignores `export const metadata`, so titles and
// descriptions are set through next/head instead.
const PageHead: React.FC<PageHeadProps> = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Head>
);

export default PageHead;
