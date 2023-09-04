import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const picRes = await fetch("https://img.youtube.com/vi/2tY31qo5P_g/maxresdefault.jpg");

  console.log("content-type:", picRes.headers.get("content-type"));

  // maybe you can use this too see if the image's too large
  // to send downstream
  console.log("content-length:", picRes.headers.get("content-length"));
  const imageBlob = await picRes.blob();

  const reader = imageBlob.stream().getReader();
  const chunks: any[] = [];
  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break; // Exit the loop when done reading
    }

    chunks.push(value);
  }

  res.setHeader(
    "content-type",
    picRes.headers.get("content-type") || "image/*"
  );

  res.setHeader(
    "content-length",
    picRes.headers.get("content-length") || chunks.length
  );

  res.setHeader("Content-Disposition", 'attachment; filename="tomato.jpeg"');

  res.write(Uint8Array.from(chunks));

  return res.status(200).end();
}
