import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { EdgeStoreProvider } from "@/lib/eddgestore";
import Footer from "@/components/shared/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Raksha",
  description: "Women Empowerment & Job Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className + " scroll-smooth"}>
        <EdgeStoreProvider>
          <Navbar />
          {children}
          <Footer />
        </EdgeStoreProvider>
      </body>
    </html>
  );
}
