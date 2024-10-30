import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Scrumify",
  description:
    "Next JS, Shadcn UI, Tailwind, Clerk, NeonDB based Jira sort of Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme:shadesOfPurple,
        variables: {
          colorPrimary: '#3b82f6',
          colorBackground: '#1a202c',
          colorInputBackground: '#2D3748',
          colorInputText: '#F3F4F6',
        },
        elements: {
          formButtonPrimary:'bg-blue-600 hover:bg-blue-700 text-white',
          card: 'bg-gray-800'
        }
      }}
    >
      <html lang="en">
        <body className={`${inter.className}`}>
          <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with 💗 by Harshil</p>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
