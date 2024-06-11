import { Space_Grotesk } from '@next/font/google';
import "./globals.css";
import FooterMobile from "@/components/FooterMobile";
import { Footer } from "@/components/Footer";
import MobileMenu from '@/components/MobileMenu';
import { menu } from '@/components/Navbar';
const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <MobileMenu menu={menu}/>
        {children}</body>
      <div className="mt-64">
      <FooterMobile/>
      <Footer/>
      </div>
    </html>
  );
}
