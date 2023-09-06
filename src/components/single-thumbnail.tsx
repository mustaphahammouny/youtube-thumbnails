import Thumbnail from "@/models/Thumbnail";
import Image from "next/image";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const SingleThumbnail = (props: {thumbnail: Thumbnail, download: Function}) => {
  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <Image
        src={props.thumbnail.url}
        alt={`Thumbnail ${props.thumbnail.resolution}`}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "auto" }}
      />

      <div className="inline-flex" role="group">
        <p className="my-4 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm">
          {props.thumbnail.resolution}
        </p>
        <CopyToClipboard
          text={props.thumbnail.url}
          onCopy={() => toast.success("Copied successfully!")}
        >
          <button className="rounded-l-md bg-white my-4 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Copy Thumbnail URL
          </button>
        </CopyToClipboard>
        <button
          onClick={() => props.download(props.thumbnail)}
          className="rounded-r-md bg-indigo-500 my-4 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Download Thumbnail
        </button>
      </div>
    </div>
  );
};

export default SingleThumbnail;
