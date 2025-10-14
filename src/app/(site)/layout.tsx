import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAFloat from "@/components/CTAFloat";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <CTAFloat />
    </>
  );
}



