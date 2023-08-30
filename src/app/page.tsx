"use client";

import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState<
    { resolution: string; url: string }[]
  >([]);

  const getYouTubeThumbnail = (url: string) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
      toast.error('Invalid URL');
    }
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
                value={videoURL}
                onChange={(e) => setVideoURL(e.target.value)}
              />
            </div>
            <div className="mt-6 flex flex-col items-center">
              <button
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={() => getYouTubeThumbnail(videoURL)}
              >
                Download Thumbnails
              </button>
            </div>
            {thumbnailOptions.length > 0 && (
              <div className="flex flex-col items-center mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-white">
                  Thumbnail Options
                </h2>
                <div className="mt-6">
                  {thumbnailOptions.map((option, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center mt-6"
                    >
                      <img src={option.url} alt={`Thumbnail ${index + 1}`} />

                      <CopyToClipboard
                        text={option.url}
                        onCopy={() => toast.success("Copied!")}
                      >
                        <button className="flex-none rounded-md bg-indigo-500 my-4 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                          {option.resolution} Copy Image URL
                        </button>
                      </CopyToClipboard>
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
