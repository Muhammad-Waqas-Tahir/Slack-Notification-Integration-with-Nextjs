import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
});

const sheets = google.sheets({ version: "v4", auth });

export async function getGoogleSheetData(
  range: string
): Promise<string[][] | null> {
  try {
    const sheetId = process.env.NEXT_PUBLIC_SPREADSHEET_ID as string;

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range,
    });
    console.log("response", response);

    return response.data.values ?? null;
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error);
    return null;
  }
}
