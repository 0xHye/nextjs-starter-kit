import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import type { WithChildren } from "@/types";

export default function MarketingLayout({ children }: WithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
