import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAFloat from "@/components/CTAFloat";
import { StickyCTA } from "@/components/StickyCTA";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StickyCTA />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <CTAFloat />
    </>
  );
}



