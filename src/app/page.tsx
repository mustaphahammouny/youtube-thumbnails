"use client";

import Thumbnail from "@/types/Thumbnail";
import axios from "axios";
import FileSaver from "file-saver";
import Image from "next/image";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const [url, setUrl] = useState("");
  const [thumbnails, setThumbnails] = useState<Thumbnail[]>([]);

  const getYouTubeThumbnail = (url: string) => {
    let extension = "jpg";
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const id = match[1];

      const options = [
        {
          resolution: "HD (1280x720)",
          code: "maxresdefault",
          name: `${id}_HD.${extension}`,
        },
        {
          resolution: "SD (640x480)",
          code: "sddefault",
          name: `${id}_SD.${extension}`,
        },
        {
          resolution: "Normal (480x360)",
          code: "hqdefault",
          name: `${id}_Normal.${extension}`,
        },
        {
          resolution: "Medium (320x180)",
          code: "mqdefault",
          name: `${id}_Medium.${extension}`,
        },
        {
          resolution: "Low (120x90)",
          code: "default",
          name: `${id}_Low.${extension}`,
        },
      ];

      const thumbnails: Thumbnail[] = options.map((option) => ({
        ...option,
        id: id,
        code: `${option.code}.${extension}`,
        url: `${process.env.NEXT_PUBLIC_YOUTUBE_URL}/${id}/${option.code}.${extension}`,
      }));

      setThumbnails(thumbnails);
      setUrl("");
    } else {
      setThumbnails([]);
      toast.error("Invalid URL");
    }
  };

  const download = async (thumbnail: Thumbnail) => {
    const response = await axios.get(
      `/api/thumbnails/${thumbnail.id}/${thumbnail.code}`,
      {
        responseType: "blob",
      }
    );

    FileSaver.saveAs(response.data, thumbnail.name);

    toast.success("Downloaded successfully!");
  };

  return (
    <>
      <div className="flex h-screen">
        <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none m-auto text-center">
          <div className="max-w-4xl m-5">
            <h2 className="text-3xl font-bold text-white">
              Youtube Thumbnail Downloader
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Take your YouTube channel to the next level by easily downloading
              high-quality thumbnails in various resolutions. Our user-friendly
              application lets you gain inspiration from other creators&apos;
              thumbnails, perfect for spicing up your own videos. Just paste the
              video URL, click &apos;Download Thumbnails&apos; and elevate your
              content with eye-catching visuals tailored to your needs.
            </p>
            <div className="mt-6 flex m-auto">
              <input
                type="text"
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter YouTube URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="mt-6 flex flex-col items-center">
              <button
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={() => getYouTubeThumbnail(url)}
              >
                Get Thumbnails
              </button>
            </div>
            {thumbnails.length > 0 && (
              <div className="flex flex-col items-center mt-6">
                <h2 className="text-3xl font-bold text-white">Thumbnails</h2>
                <div className="mt-6">
                  {thumbnails.map((thumbnail, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center mt-6"
                    >
                      <Image
                        src={thumbnail.url}
                        alt={`Thumbnail ${thumbnail.resolution}`}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                      />

                      <div className="inline-flex" role="group">
                        <p className="my-4 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm">
                          {thumbnail.resolution}
                        </p>
                        <CopyToClipboard
                          text={thumbnail.url}
                          onCopy={() => toast.success("Copied successfully!")}
                        >
                          <button className="rounded-l-md bg-white my-4 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                            Copy Image URL
                          </button>
                        </CopyToClipboard>
                        <button
                          onClick={() => download(thumbnail)}
                          className="rounded-r-md bg-indigo-500 my-4 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                          Download Image
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6">
              <h2 className="mt-4 text-3xl font-bold text-white">
                Get High-Quality YouTube Thumbnail Images for Free
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                This website allows you to easily download thumbnail images from
                YouTube videos in high resolution. It supports Full HD (1080p),
                HD (720p), SD (480p), and small sizes.
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white">
                Benefits of Downloading YouTube Thumbnails
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                People use this tool to get thumbnails from YouTube videos for
                presentations, animation projects, and other uses. The
                high-quality images can enhance your work.
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white">
                How to Use the YouTube Thumbnail Downloader
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                It&apos;s simple to download YouTube thumbnails:
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                1) Copy the link to the YouTube video with the thumbnail you
                want.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                2) Paste the link in the input box. Then click &apos;Download
                Thumbnails&apos; to generate different sized thumbnails.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                3) Click the &apos;Download Image&apos; button. The images will be
                downloaded to your device.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                On Android, you need to save the images. On iPhone, you&apos;ll
                need a jailbroken device to save them. It works on all devices
                and desktop browsers except un-jailbroken iPhones.
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white">
                Copyright and Reuse Considerations
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                The thumbnails are copyrighted by the video owners. To reuse
                them, you need permission, especially for YouTube videos. For
                other uses like websites and logos, reusing thumbnails likely
                won&apos;t lead to DMCA complaints.
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white">
                Optimizing Reused Thumbnails for SEO
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Simply reusing YouTube thumbnails is not optimal for SEO since
                Google indexes the originals. To make reused thumbnails
                SEO-friendly, modify them with Photoshop or other software. This
                makes them unique again for search engines.
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white">
                Key Takeaways
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                - Easily download high-quality YouTube thumbnails for free.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                - Useful for presentations, projects, and more.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                - Simple process to paste a link and download images.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                - Requires permission for reuse on YouTube.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                - Modify thumbnails to make them SEO-friendly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer theme="colored" />
    </>
  );
}
