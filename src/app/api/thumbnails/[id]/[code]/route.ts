import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string; code: string } }
) {
  return await fetch(
    `${process.env.NEXT_PUBLIC_YOUTUBE_URL}/${params.id}/${params.code}`
  );

  // return new NextResponse(imageBlob.stream(), {
  //   status: 200,
  //   headers: {
  //     "content-type": response.headers.get("content-length") || "image/*",
  //     //   "content-length": response.headers.get("content-length") || chunks.length.toString(),
  //     "Content-Disposition": 'attachment; filename=""',
  //   },
  // });
}
