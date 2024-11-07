import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const hvAnalogueRegular = localFont({
  src: './fonts/hv-analogue-regular.woff2',
  variable: '--font-hv-analogue-regular',
  // weight: "100 900",
})

const melosoLight = localFont({
  src: './fonts/meloso-light.woff2',
  variable: '--font-meloso-light',
  // weight: "100 900",
})

export const metadata: Metadata = {
  title: 'Warm Winter Studio',
  description: 'by Robin MacPherson',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          sizes="any"
          href="data:image/svg+xml, <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌲</text></svg>"
        />
      </head>
      <body className={`${hvAnalogueRegular.variable} ${melosoLight.variable}`}>
        {children}
      </body>
    </html>
  )
}
