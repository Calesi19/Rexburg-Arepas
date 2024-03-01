import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Rexburg Arepas",
  description:
    "I'm a college student who loves to cook and share my culture with others. I make arepas and sell them out of my dorm room. I'm located in Rexburg, Idaho. I'm open tuesdays and thursdays from 12pm to 6pm. I hope to see you soon!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" data-theme="cupcake">
      <body className="">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
