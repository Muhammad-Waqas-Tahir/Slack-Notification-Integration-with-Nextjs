import { prisma } from "@/util/connect";
import { NextResponse } from "next/server";

// Fetch All Posts (GET)
export async function GET() {
  try {
    const posts = await prisma.post.findMany();
    console.log(posts);
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

// Create a New Post (POST)
export async function POST(req: Request) {
  try {
    const body = await req.json(); // Read the JSON body
    const post = await prisma.post.create({
      data: body,
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
