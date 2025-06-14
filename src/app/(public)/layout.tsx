import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <main className="container mx-auto max-w-2xl px-4 pt-10">{children}</main>
      <Footer />
    </div>
  );
}
