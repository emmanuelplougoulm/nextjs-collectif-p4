import PageHead from "@/components/shared/page-head/page-head";
import text from "@/locales/fr/all.json";
import MembresClient from "@/components/views/membres/membres-view";

const { membres } = text;

const Membres: React.FC = () => {
  return (
    <>
      <PageHead {...membres.metadata} />
      <MembresClient />
    </>
  );
};

export default Membres;
