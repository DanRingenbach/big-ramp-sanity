// app/layout.tsx
'use client'

import "../globals.css";
import { Inter } from "next/font/google";
import { usePathname } from 'next/navigation'
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";

const inter = Inter({ subsets: ["latin"] });



// export const metadata: Metadata = {
//   title: "Big Ramp Gallery",
//   description: "A gallery in Kensington Philadelphia",
// };

export function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isSanityStudio = pathname.startsWith('/studio');
  return (
    <html lang="en">
      <body className={`${inter.className} text-black`}>
        {!isSanityStudio && <Navbar />}        
        {children}
        {!isSanityStudio && <Footer />}
      </body>
    </html>
  );
}