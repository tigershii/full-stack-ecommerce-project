import Header from "@/components/(header)/Header";
import Footer from "@/components/Footer";

export default function HeaderFooterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex">
        {children}
      </main>
      <Footer />
    </div>
  );
}
