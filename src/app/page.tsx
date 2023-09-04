"use client";

import Thumbnail from "@/types/Thumbnail";
import axios from "axios";
import FileSaver from "file-saver";
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

    toast.success('Downloaded successfully!');
  };

  return (
    <>
      <div className="flex h-screen">
        <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none m-auto text-center">
          <div className="max-w-4xl m-5">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Youtube Thumbnail Downloader
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Download high-quality thumbnails from YouTube videos.
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
                Download Thumbnails
              </button>
            </div>
            {thumbnails.length > 0 && (
              <div className="flex flex-col items-center mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-white">
                  Thumbnails
                </h2>
                <div className="mt-6">
                  {thumbnails.map((thumbnail, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center mt-6"
                    >
                      <img src={thumbnail.url} alt={`Thumbnail ${index + 1}`} />

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
          </div>
        </div>
      </div>

      <ToastContainer theme="colored" />
    </>
  );
}
