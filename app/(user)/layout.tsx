import { Suspense } from "react";
import "@/app/globals.css";
import NavbarComponent from "@/components/navBar/NavbarComponent";
import Loading from "./loading";
import { inter, suwannaphum, localCustomFont } from "./font";

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
