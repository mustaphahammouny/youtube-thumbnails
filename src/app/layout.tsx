import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Youtube Thumbnail Downloader",
  description: "Download high-quality thumbnails from YouTube videos",
  applicationName: "Youtube Thumbnail Downloader",
  keywords: ['youtube', 'thumbnail', 'thumbnails', 'grabber', 'downloader', 'image', 'download'],
  alternates: {
    canonical: "https://your-website-url.com",
  },
  openGraph: {
    url: "https://your-website-url.com",
    title: "Youtube Thumbnail Downloader",
    description: "Download high-quality thumbnails from YouTube videos.",
    siteName: "Youtube Thumbnail Downloader",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900`}>{children}</body>
    </html>
  );
}
