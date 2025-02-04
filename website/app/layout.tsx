import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "React Live Chat Loader"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={``}>
        {children}
      </body>
    </html>
  );
}
