import PageHead from "@/components/shared/page-head/page-head";
import SpectaclesClient from "@/components/views/spectacles/spectacles-view";

import text from "@/locales/fr/all.json";

const { spectacles } = text;

const SpectaclesServer: React.FC = () => {
  return (
    <>
      <PageHead {...spectacles.metadata} />
      <SpectaclesClient />
    </>
  );
};

export default SpectaclesServer;
