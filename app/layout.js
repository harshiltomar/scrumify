import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from 'next/font/google';
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"]})

export const metadata = {
  title: "Scrumify",
  description:
    "Next JS, Shadcn UI, Tailwind, Clerk, NeonDB based Jira sort of Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <Header/>
          <main className="min-h-screen">{children}</main>
          <footer className="container mx-auto px-4 text-center text-gray-600">
            <p>Made with 💗 by Harshil</p>
          </footer>          
        </ThemeProvider>
      </body>
    </html>
  );
}
