import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getGoogleSheetData } from "@/util/googleSheets";

const prisma = new PrismaClient();

export async function POST() {
  try {
    console.log("Fetching data from Google Sheets...");
    const range = "Sheet1!A2:C";
    const data = await getGoogleSheetData(range);

    if (!data || data.length === 0) {
      console.error("Google Sheets returned empty data");
      return NextResponse.json(
        { error: "No data found in Google Sheets" },
        { status: 500 }
      );
    }

    console.log("Google Sheets data received:", data);

    const formattedData = data.map((row) => ({
      name: row[0] || "Unknown",
      email: row[1] || "No Email",
      age: row[2] ? parseInt(row[2] as string, 10) : null,
    }));

    console.log("Inserting into database:", formattedData);

    await prisma.sheetData.createMany({
      data: formattedData,
      skipDuplicates: true,
    });

    return NextResponse.json(
      { message: "Data synced successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error syncing data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
