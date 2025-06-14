import { Footer } from "@/app/(public)/footer";
import { Header } from "@/app/(public)/header";
import { Navigation } from "./navigation";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto max-w-2xl flex-col px-4">
      <div className="flex min-h-screen flex-col pt-8">
        <Header />
        <Navigation />
        <main className="grow">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
