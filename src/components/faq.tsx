import SingleFaq from "./single-faq";

const Faq = () => {
  return (
    <div id="accordion-faq">
      <SingleFaq
        index={1}
        question="Get High-Quality YouTube Thumbnail Images for Free"
      >
        <p className="text-lg leading-8 text-gray-900">
          This website allows you to easily download thumbnail images from
          YouTube videos in high resolution. It supports Full HD (1080p), HD
          (720p), SD (480p), and small sizes.
        </p>
      </SingleFaq>
      <SingleFaq
        index={2}
        question="Benefits of Downloading YouTube Thumbnails"
      >
        <p className="text-lg leading-8 text-gray-900">
          People use this tool to get thumbnails from YouTube videos for
          presentations, animation projects, and other uses. The high-quality
          images can enhance your work.
        </p>
      </SingleFaq>
      <SingleFaq
        index={3}
        question="How to Use the YouTube Thumbnail Downloader"
      >
        <p className="text-lg leading-8 text-gray-900">
          It&apos;s simple to download YouTube thumbnails:
        </p>
        <p className="text-lg leading-8 text-gray-900">
          1) Copy the link to the YouTube video with the thumbnail you want.
        </p>
        <p className="text-lg leading-8 text-gray-900">
          2) Paste the link in the input box. Then click &apos;Download
          Thumbnails&apos; to generate different sized thumbnails.
        </p>
        <p className="text-lg leading-8 text-gray-900">
          3) Click the &apos;Download Image&apos; button. The images will be
          downloaded to your device.
        </p>
        <p className="text-lg leading-8 text-gray-900">
          On Android, you need to save the images. On iPhone, you&apos;ll need a
          jailbroken device to save them. It works on all devices and desktop
          browsers except un-jailbroken iPhones.
        </p>
      </SingleFaq>
      <SingleFaq index={4} question="Copyright and Reuse Considerations">
        <p className="text-lg leading-8 text-gray-900">
          The thumbnails are copyrighted by the video owners. To reuse them, you
          need permission, especially for YouTube videos. For other uses like
          websites and logos, reusing thumbnails likely won't lead to DMCA
          complaints.
        </p>
      </SingleFaq>
      <SingleFaq index={5} question="Optimizing Reused Thumbnails for SEO">
        <p className="text-lg leading-8 text-gray-900">
          Simply reusing YouTube thumbnails is not optimal for SEO since Google
          indexes the originals. To make reused thumbnails SEO-friendly, modify
          them with Photoshop or other software. This makes them unique again
          for search engines.
        </p>
      </SingleFaq>
      <SingleFaq index={6} question="Key Takeaways">
        <p className="text-lg leading-8 text-gray-900">
          - Easily download high-quality YouTube thumbnails for free.
        </p>
        <p className="text-lg leading-8 text-gray-900">
          - Useful for presentations, projects, and more.
        </p>
        <p className="text-lg leading-8 text-gray-900">
          - Simple process to paste a link and download images.
        </p>
        <p className="text-lg leading-8 text-gray-900">
          - Requires permission for reuse on YouTube.
        </p>
        <p className="text-lg leading-8 text-gray-900">
          - Modify thumbnails to make them SEO-friendly.
        </p>
      </SingleFaq>
    </div>
  );
};

export default Faq;
