import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LoanProvider } from "@/context/LoanContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "বিকাশ লোন",
  description: "বিকাশ অ্যাপের মাধ্যমে সিটি ব্যাংক থেকে তাৎক্ষণিক লোন নিন",
  icons: {
    icon: "/img/Bkash.png",
    shortcut: "/img/Bkash.png",
    apple: "/img/Bkash.png",
  },
  openGraph: {
    title: "বিকাশ লোন",
    description: "বিকাশ অ্যাপের মাধ্যমে সিটি ব্যাংক থেকে তাৎক্ষণিক লোন নিন",
    url: "/",
    siteName: "বিকাশ লোন",
    images: [
      {
        url: "/img/Bkash.png",
        width: 512,
        height: 512,
        alt: "বিকাশ লোন",
      },
    ],
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "বিকাশ লোন",
    description: "বিকাশ অ্যাপের মাধ্যমে সিটি ব্যাংক থেকে তাৎক্ষণিক লোন নিন",
    images: ["/img/Bkash.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LoanProvider>
          {children}
        </LoanProvider>
      </body>
    </html>
  );
}

