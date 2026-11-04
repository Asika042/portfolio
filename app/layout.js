import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const ovo = Ovo({
  subsets: ["latin"], 
  weight: ["400"],
  variable: "--font-ovo" // 👈 Add this variable name
});

const outfit = Outfit({
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit" // 👈 Add this variable name
});

export const metadata = {
  title: "Portfolio - Chukwuma",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      /* 👇 Changed .className to .variable here */
      className={`${outfit.variable} ${ovo.variable} antialiased 
      leading-8 overflow-x-hidden scroll-smooth`}
    >
      <body className="min-h-full flex flex-col dark:bg-dark-theme dark:text-white">{children}</body>
    </html>
  );
}
