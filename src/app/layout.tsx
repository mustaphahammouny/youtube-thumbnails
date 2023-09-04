import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Youtube Thumbnail Downloader",
  description:
    "Are you tired of hunting for captivating thumbnail images for your YouTube and Vimeo videos? Look no further! Our free thumbnail image downloader tool is here to simplify your content creation journey. Say goodbye to the hassle of searching for the perfect thumbnail – just paste your video's URL, click, and watch the magic happen. We've made it incredibly easy for you to access high-quality thumbnails in various resolutions, and the best part? It won't cost you a thing! Whether you're a content creator, marketer, or simply looking to enhance your online presence, our tool is your ticket to grabbing your audience's attention effortlessly",
  applicationName: "Youtube Thumbnail Downloader",
  keywords: [
    "Thumbnail",
    "Downloader",
    "YouTube",
    "Vimeo",
    "Free",
    "High quality",
    "Generator",
    "Content",
    "SEO",
    "Visuals",
    "Marketing",
    "Image",
    "Online tool",
    "Grabber",
    "Resolution",
    "Creator",
    "Video",
    "Access",
    "Download",
    "Optimization",
  ],
  alternates: {
    canonical: "https://your-website-url.com",
  },
  openGraph: {
    url: "https://your-website-url.com",
    title: "Youtube Thumbnail Downloader",
    description:
      "Are you tired of hunting for captivating thumbnail images for your YouTube and Vimeo videos? Look no further! Our free thumbnail image downloader tool is here to simplify your content creation journey. Say goodbye to the hassle of searching for the perfect thumbnail – just paste your video's URL, click, and watch the magic happen. We've made it incredibly easy for you to access high-quality thumbnails in various resolutions, and the best part? It won't cost you a thing! Whether you're a content creator, marketer, or simply looking to enhance your online presence, our tool is your ticket to grabbing your audience's attention effortlessly",
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
