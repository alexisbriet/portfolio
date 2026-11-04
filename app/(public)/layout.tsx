import LayoutProvider from "@/components/public/layout/LayoutProvider";
import { getPublicDeveloper } from "@/lib/portfolio-data";

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const developer = await getPublicDeveloper();
  return (
    <LayoutProvider developer={developer}>
      {children}
    </LayoutProvider>
  );
}
