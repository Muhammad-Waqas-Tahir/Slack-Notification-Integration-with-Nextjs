import { prisma } from "@/util/connect";
import { NextResponse } from "next/server";
//Fetch All Users

export const GET = async () => {
  try {
    const users = await prisma.post.findMany();
    console.log(users);

    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    // console.log("error", error);

    return new NextResponse(
      JSON.stringify({ message: "Somethings went wrong" }),
      { status: 500 }
    );
  }
};
