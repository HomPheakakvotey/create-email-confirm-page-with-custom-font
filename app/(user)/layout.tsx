import { Suspense } from "react";
import "@/app/globals.css";
import NavbarComponent from "@/components/navBar/NavbarComponent";
import Loading from "./loading";
import { inter, suwannaphum, localCustomFont } from "./font";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECommerce Web",
  description: "Ecommerce website that sell everything",
  openGraph:{
    title: "ECommerce",
    description: "Ecommerce website that sell everything",
    images:"https://avatars.githubusercontent.com/u/66029645?v=4"
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-screen flex flex-col ${inter.variable} ${suwannaphum.variable} ${localCustomFont.variable}`}
      >
        <header>
          <NavbarComponent />
        </header>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
