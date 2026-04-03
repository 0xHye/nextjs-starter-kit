import { Sidebar } from "@/components/layout/sidebar";
import type { WithChildren } from "@/types";

export default function DashboardLayout({ children }: WithChildren) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto p-8">{children}</main>
    </div>
  );
}
