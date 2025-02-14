// "use client";

// import React, { useEffect } from "react";

// const Page = () => {
//   const openSpreadsheet = () => {
//     const spreadsheetId = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
//     if (!spreadsheetId) {
//       alert("Google Sheet ID is missing in .env!");
//       return;
//     }
//     window.open(
//       `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`,
//       "_blank"
//     );
//   };

//   const syncDataAutomatically = async () => {
//     try {
//       const response = await fetch("/api/spreadSheet", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//       });

//       if (!response.ok)
//         throw new Error(`Failed to sync data: ${response.status}`);
//       console.log("Data synced successfully!");
//     } catch (error) {
//       console.error("Sync error:", error);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(syncDataAutomatically, 30000); // Sync every 30 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return <button onClick={openSpreadsheet}>Open Spreadsheet</button>;
// };

// export default Page;
