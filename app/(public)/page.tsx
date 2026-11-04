import DeveloperDataProvider from "@/components/public/layout/developer-data-context";
import HomePageClient from "@/components/public/portfolio/HomePageClient";
import { getPortfolioData } from "@/lib/portfolio-data";

export default async function HomePage() {
  const initialData = await getPortfolioData();

  return (
    <DeveloperDataProvider initialData={initialData}>
      <HomePageClient />
    </DeveloperDataProvider>
  );
}
