import type { Metadata } from "next";
import "./globals.css";

import Wrapper from "./components/Wrapper";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Pedro Fernandes",
  description: "Pedro Fernandes' official portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Wrapper>
          <main className="h-screen grid grid-rows-[250px_auto_1fr] p-4">
            {children}
          </main>
          <Navigation />
        </Wrapper>
      </body>
    </html>
  );
}
