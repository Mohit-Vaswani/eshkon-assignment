import "./globals.scss";
import { Inter } from "next/font/google";
import { EXAMPLE_PATH, CMS_NAME } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "./theme-provider";
import { ThemeSwitcher } from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

export const metadata = {
  title: `Eskhon Blogs`,
  description: `This is a blog built for Eshkon`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          <Navbar />
          <section className="h-full">
            <main>{children}</main>
          </section>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
