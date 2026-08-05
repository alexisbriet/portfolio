import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth.actions";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-full flex flex-col">
      {children}
    </div>
  );
}